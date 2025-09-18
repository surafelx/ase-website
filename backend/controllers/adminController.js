const User = require('../models/User');
const Project = require('../models/Project');
const Customer = require('../models/Customer');
const Inventory = require('../models/Inventory');
const { Transaction } = require('../models/Finance');

// @desc    Get admin dashboard overview
// @route   GET /api/admin/dashboard
// @access  Private/Admin
const getDashboard = async (req, res) => {
  try {
    // User statistics
    const userStats = await User.aggregate([
      {
        $group: {
          _id: '$role',
          count: { $sum: 1 }
        }
      }
    ]);

    // Recent activities (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const recentProjects = await Project.find({
      createdAt: { $gte: thirtyDaysAgo }
    })
      .select('title status createdAt')
      .sort({ createdAt: -1 })
      .limit(5);

    const recentCustomers = await Customer.find({
      createdAt: { $gte: thirtyDaysAgo }
    })
      .select('name type createdAt')
      .sort({ createdAt: -1 })
      .limit(5);

    const recentTransactions = await Transaction.find({
      date: { $gte: thirtyDaysAgo }
    })
      .select('type amount category date')
      .sort({ date: -1 })
      .limit(5);

    // System health metrics
    const systemStats = {
      totalUsers: await User.countDocuments(),
      totalProjects: await Project.countDocuments(),
      totalCustomers: await Customer.countDocuments(),
      totalInventoryItems: await Inventory.countDocuments(),
      lowStockItems: await Inventory.countDocuments({
        $expr: { $lte: ['$quantity', '$reorderPoint'] }
      })
    };

    res.json({
      success: true,
      data: {
        userStats,
        recentActivities: {
          projects: recentProjects,
          customers: recentCustomers,
          transactions: recentTransactions
        },
        systemStats
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments();

    res.json({
      success: true,
      data: users,
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

// @desc    Create user
// @route   POST /api/admin/users
// @access  Private/Admin
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'user'
    });

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Update user
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Prevent deleting the last admin
    if (user.role === 'admin') {
      const adminCount = await User.countDocuments({ role: 'admin' });
      if (adminCount <= 1) {
        return res.status(400).json({ error: 'Cannot delete the last admin user' });
      }
    }

    await user.deleteOne();

    res.json({
      success: true,
      message: 'User deleted'
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get system settings
// @route   GET /api/admin/settings
// @access  Private/Admin
const getSettings = async (req, res) => {
  try {
    // In a real application, you would have a Settings model
    // For now, we'll return mock settings
    const settings = {
      companyName: 'Sun Farm Prosper',
      companyEmail: 'info@sunfarmprosper.com',
      companyPhone: '+251-XXX-XXXX',
      currency: 'ETB',
      timezone: 'Africa/Addis_Ababa',
      maintenanceMode: false,
      emailNotifications: true,
      smsNotifications: false
    };

    res.json({
      success: true,
      data: settings
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Update system settings
// @route   PUT /api/admin/settings
// @access  Private/Admin
const updateSettings = async (req, res) => {
  try {
    // In a real application, you would update the Settings model
    // For now, we'll just return success
    res.json({
      success: true,
      message: 'Settings updated successfully',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get system logs
// @route   GET /api/admin/logs
// @access  Private/Admin
const getLogs = async (req, res) => {
  try {
    // In a real application, you would have a Logs model or service
    // For now, we'll return mock logs
    const logs = [
      {
        id: 1,
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
        level: 'info',
        message: 'User login successful',
        user: 'admin@sunfarmprosper.com'
      },
      {
        id: 2,
        timestamp: new Date(Date.now() - 1000 * 60 * 15),
        level: 'warning',
        message: 'Low stock alert for Solar Panels',
        user: 'system'
      },
      {
        id: 3,
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        level: 'info',
        message: 'New project created: Tigray Solar Initiative',
        user: 'manager@sunfarmprosper.com'
      }
    ];

    res.json({
      success: true,
      data: logs
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getDashboard,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getSettings,
  updateSettings,
  getLogs
};