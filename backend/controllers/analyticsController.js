const { Metric, Dashboard, Report } = require('../models/Analytics');
const Project = require('../models/Project');
const Customer = require('../models/Customer');
const { Transaction } = require('../models/Finance');
const Inventory = require('../models/Inventory');

// @desc    Get dashboard overview metrics
// @route   GET /api/analytics/overview
// @access  Private
const getOverview = async (req, res) => {
  try {
    // Project metrics
    const projectStats = await Project.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalBeneficiaries: { $sum: '$beneficiaries' }
        }
      }
    ]);

    // Customer metrics
    const customerStats = await Customer.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      }
    ]);

    // Financial metrics (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const financialStats = await Transaction.aggregate([
      {
        $match: {
          date: { $gte: thirtyDaysAgo },
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

    // Inventory metrics
    const inventoryStats = await Inventory.aggregate([
      {
        $group: {
          _id: null,
          totalItems: { $sum: 1 },
          totalValue: { $sum: { $multiply: ['$quantity', '$unitPrice'] } },
          lowStockItems: {
            $sum: {
              $cond: [
                { $lte: ['$quantity', '$reorderPoint'] },
                1,
                0
              ]
            }
          }
        }
      }
    ]);

    res.json({
      success: true,
      data: {
        projects: projectStats,
        customers: customerStats,
        finance: financialStats,
        inventory: inventoryStats[0] || {
          totalItems: 0,
          totalValue: 0,
          lowStockItems: 0
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get project analytics
// @route   GET /api/analytics/projects
// @access  Private
const getProjectAnalytics = async (req, res) => {
  try {
    const { period = 'monthly', region } = req.query;

    let matchFilter = {};
    if (region) matchFilter.region = region;

    // Projects by status
    const statusStats = await Project.aggregate([
      { $match: matchFilter },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalBeneficiaries: { $sum: '$beneficiaries' }
        }
      }
    ]);

    // Projects by region
    const regionStats = await Project.aggregate([
      {
        $group: {
          _id: '$region',
          count: { $sum: 1 },
          totalBeneficiaries: { $sum: '$beneficiaries' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Monthly project completion trend
    const completionTrend = await Project.aggregate([
      {
        $match: {
          status: 'Completed',
          createdAt: { $exists: true }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);

    res.json({
      success: true,
      data: {
        statusStats,
        regionStats,
        completionTrend
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get financial analytics
// @route   GET /api/analytics/finance
// @access  Private
const getFinancialAnalytics = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const start = startDate ? new Date(startDate) : new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    const end = endDate ? new Date(endDate) : new Date();

    // Revenue vs Expenses
    const revenueExpenseStats = await Transaction.aggregate([
      {
        $match: {
          date: { $gte: start, $lte: end },
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

    // Monthly financial trend
    const monthlyTrend = await Transaction.aggregate([
      {
        $match: {
          date: { $gte: start, $lte: end },
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

    // Category breakdown
    const categoryStats = await Transaction.aggregate([
      {
        $match: {
          date: { $gte: start, $lte: end },
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

    res.json({
      success: true,
      data: {
        revenueExpenseStats,
        monthlyTrend,
        categoryStats
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get customer analytics
// @route   GET /api/analytics/customers
// @access  Private
const getCustomerAnalytics = async (req, res) => {
  try {
    // Customer distribution by type
    const typeStats = await Customer.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      }
    ]);

    // Customer status distribution
    const statusStats = await Customer.aggregate([
      {
        $group: {
          _id: '$relationship.status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Recent interactions
    const recentInteractions = await Customer.aggregate([
      { $unwind: '$interactions' },
      { $sort: { 'interactions.date': -1 } },
      { $limit: 20 },
      {
        $project: {
          customerName: '$name',
          customerType: '$type',
          interactionType: '$interactions.type',
          date: '$interactions.date',
          outcome: '$interactions.outcome'
        }
      }
    ]);

    res.json({
      success: true,
      data: {
        typeStats,
        statusStats,
        recentInteractions
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Create custom report
// @route   POST /api/analytics/reports
// @access  Private
const createReport = async (req, res) => {
  try {
    const report = await Report.create({
      ...req.body,
      generatedBy: req.user._id,
      status: 'generating'
    });

    // Trigger report generation (this would be async in production)
    // For now, we'll simulate immediate completion
    report.status = 'completed';
    report.generatedAt = new Date();
    await report.save();

    res.status(201).json({
      success: true,
      data: report
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get reports
// @route   GET /api/analytics/reports
// @access  Private
const getReports = async (req, res) => {
  try {
    const reports = await Report.find()
      .populate('generatedBy', 'name')
      .sort({ generatedAt: -1 });

    res.json({
      success: true,
      data: reports
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getOverview,
  getProjectAnalytics,
  getFinancialAnalytics,
  getCustomerAnalytics,
  createReport,
  getReports
};