const Customer = require('../models/Customer');

// @desc    Get all customers
// @route   GET /api/crm/customers
// @access  Private
const getCustomers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = {};
    if (req.query.type) filter.type = req.query.type;
    if (req.query.status) filter['relationship.status'] = req.query.status;
    if (req.query.assignedTo) filter.assignedTo = req.query.assignedTo;
    if (req.query.search) {
      filter.$or = [
        { name: { $regex: req.query.search, $options: 'i' } },
        { 'organization.name': { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const customers = await Customer.find(filter)
      .populate('assignedTo', 'name email')
      .populate('projects.projectId', 'title location')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Customer.countDocuments(filter);

    res.json({
      success: true,
      data: customers,
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

// @desc    Get single customer
// @route   GET /api/crm/customers/:id
// @access  Private
const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('projects.projectId', 'title location status')
      .populate('interactions.conductedBy', 'name')
      .populate('notes.createdBy', 'name');

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({
      success: true,
      data: customer
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Create customer
// @route   POST /api/crm/customers
// @access  Private
const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create({
      ...req.body,
      createdBy: req.user._id
    });

    res.status(201).json({
      success: true,
      data: customer
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Update customer
// @route   PUT /api/crm/customers/:id
// @access  Private
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({
      success: true,
      data: customer
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Delete customer
// @route   DELETE /api/crm/customers/:id
// @access  Private/Admin
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    await customer.deleteOne();

    res.json({
      success: true,
      message: 'Customer deleted'
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Add interaction to customer
// @route   POST /api/crm/customers/:id/interactions
// @access  Private
const addInteraction = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    const interaction = {
      ...req.body,
      conductedBy: req.user._id,
      date: req.body.date || new Date()
    };

    customer.interactions.push(interaction);
    customer.relationship.lastContact = interaction.date;

    await customer.save();

    res.json({
      success: true,
      data: customer.interactions[customer.interactions.length - 1]
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Add note to customer
// @route   POST /api/crm/customers/:id/notes
// @access  Private
const addNote = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    const note = {
      content: req.body.content,
      createdBy: req.user._id
    };

    customer.notes.push(note);
    await customer.save();

    res.json({
      success: true,
      data: customer.notes[customer.notes.length - 1]
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get CRM statistics
// @route   GET /api/crm/stats
// @access  Private
const getCRMStats = async (req, res) => {
  try {
    const stats = await Customer.aggregate([
      {
        $group: {
          _id: null,
          totalCustomers: { $sum: 1 },
          activeCustomers: {
            $sum: {
              $cond: [
                { $eq: ['$relationship.status', 'active'] },
                1,
                0
              ]
            }
          },
          farmers: {
            $sum: {
              $cond: [
                { $eq: ['$type', 'farmer'] },
                1,
                0
              ]
            }
          },
          partners: {
            $sum: {
              $cond: [
                { $eq: ['$type', 'partner'] },
                1,
                0
              ]
            }
          }
        }
      }
    ]);

    const recentInteractions = await Customer.aggregate([
      { $unwind: '$interactions' },
      { $sort: { 'interactions.date': -1 } },
      { $limit: 10 },
      {
        $project: {
          customerName: '$name',
          type: '$interactions.type',
          date: '$interactions.date',
          subject: '$interactions.subject'
        }
      }
    ]);

    res.json({
      success: true,
      data: {
        overview: stats[0] || {
          totalCustomers: 0,
          activeCustomers: 0,
          farmers: 0,
          partners: 0
        },
        recentInteractions
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  addInteraction,
  addNote,
  getCRMStats
};