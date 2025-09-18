const { Transaction, Budget } = require('../models/Finance');

// @desc    Get all transactions
// @route   GET /api/finance/transactions
// @access  Private
const getTransactions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = {};
    if (req.query.type) filter.type = req.query.type;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.startDate && req.query.endDate) {
      filter.date = {
        $gte: new Date(req.query.startDate),
        $lte: new Date(req.query.endDate)
      };
    }

    const transactions = await Transaction.find(filter)
      .populate('createdBy', 'name')
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Transaction.countDocuments(filter);

    res.json({
      success: true,
      data: transactions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Create transaction
// @route   POST /api/finance/transactions
// @access  Private
const createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      ...req.body,
      createdBy: req.user._id
    });

    res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get financial summary
// @route   GET /api/finance/summary
// @access  Private
const getFinancialSummary = async (req, res) => {
  try {
    const { period = 'monthly' } = req.query;
    const now = new Date();
    let startDate;

    switch (period) {
      case 'weekly':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'monthly':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'quarterly':
        startDate = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1);
        break;
      case 'yearly':
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    // Revenue and expenses summary
    const summary = await Transaction.aggregate([
      {
        $match: {
          date: { $gte: startDate },
          status: 'completed'
        }
      },
      {
        $group: {
          _id: '$type',
          total: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      }
    ]);

    // Category breakdown
    const categoryBreakdown = await Transaction.aggregate([
      {
        $match: {
          date: { $gte: startDate },
          status: 'completed'
        }
      },
      {
        $group: {
          _id: { type: '$type', category: '$category' },
          total: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { total: -1 }
      }
    ]);

    // Monthly trend
    const monthlyTrend = await Transaction.aggregate([
      {
        $match: {
          date: { $gte: new Date(now.getFullYear() - 1, now.getMonth(), 1) },
          status: 'completed'
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' },
            type: '$type'
          },
          total: { $sum: '$amount' }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);

    const revenue = summary.find(item => item._id === 'income')?.total || 0;
    const expenses = summary.find(item => item._id === 'expense')?.total || 0;
    const profit = revenue - expenses;

    res.json({
      success: true,
      data: {
        period,
        summary: {
          revenue,
          expenses,
          profit,
          netProfit: profit
        },
        categoryBreakdown,
        monthlyTrend
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get budgets
// @route   GET /api/finance/budgets
// @access  Private
const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find()
      .populate('createdBy', 'name')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: budgets
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Create budget
// @route   POST /api/finance/budgets
// @access  Private/Admin
const createBudget = async (req, res) => {
  try {
    const budget = await Budget.create({
      ...req.body,
      createdBy: req.user._id
    });

    res.status(201).json({
      success: true,
      data: budget
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Update budget
// @route   PUT /api/finance/budgets/:id
// @access  Private/Admin
const updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!budget) {
      return res.status(404).json({ error: 'Budget not found' });
    }

    res.json({
      success: true,
      data: budget
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get budget vs actual comparison
// @route   GET /api/finance/budget-comparison
// @access  Private
const getBudgetComparison = async (req, res) => {
  try {
    const budgets = await Budget.find({ status: 'active' });

    const comparison = await Promise.all(
      budgets.map(async (budget) => {
        const actualExpenses = await Transaction.aggregate([
          {
            $match: {
              type: 'expense',
              category: { $in: budget.categories.map(cat => cat.category) },
              date: {
                $gte: budget.period.startDate,
                $lte: budget.period.endDate
              },
              status: 'completed'
            }
          },
          {
            $group: {
              _id: '$category',
              actual: { $sum: '$amount' }
            }
          }
        ]);

        const categoryComparison = budget.categories.map(cat => {
          const actual = actualExpenses.find(exp => exp._id === cat.category)?.actual || 0;
          return {
            category: cat.category,
            budgeted: cat.budgetedAmount,
            actual,
            variance: actual - cat.budgetedAmount,
            variancePercentage: cat.budgetedAmount > 0 ? ((actual - cat.budgetedAmount) / cat.budgetedAmount) * 100 : 0
          };
        });

        const totalBudgeted = budget.categories.reduce((sum, cat) => sum + cat.budgetedAmount, 0);
        const totalActual = categoryComparison.reduce((sum, cat) => sum + cat.actual, 0);

        return {
          budgetId: budget._id,
          name: budget.name,
          totalBudgeted,
          totalActual,
          totalVariance: totalActual - totalBudgeted,
          categories: categoryComparison
        };
      })
    );

    res.json({
      success: true,
      data: comparison
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getTransactions,
  createTransaction,
  getFinancialSummary,
  getBudgets,
  createBudget,
  updateBudget,
  getBudgetComparison
};