const Inventory = require('../models/Inventory');

// @desc    Get all inventory items
// @route   GET /api/inventory
// @access  Private
const getInventory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.status) filter.status = req.query.status;
    if (req.query.search) {
      filter.$text = { $search: req.query.search };
    }

    const inventory = await Inventory.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Inventory.countDocuments(filter);

    res.json({
      success: true,
      data: inventory,
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

// @desc    Get single inventory item
// @route   GET /api/inventory/:id
// @access  Private
const getInventoryItem = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Create inventory item
// @route   POST /api/inventory
// @access  Private
const createInventoryItem = async (req, res) => {
  try {
    const item = await Inventory.create({
      ...req.body,
      createdBy: req.user._id
    });

    res.status(201).json({
      success: true,
      data: item
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'SKU already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Update inventory item
// @route   PUT /api/inventory/:id
// @access  Private
const updateInventoryItem = async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!item) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'SKU already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Delete inventory item
// @route   DELETE /api/inventory/:id
// @access  Private/Admin
const deleteInventoryItem = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }

    await item.deleteOne();

    res.json({
      success: true,
      message: 'Inventory item deleted'
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get inventory statistics
// @route   GET /api/inventory/stats
// @access  Private
const getInventoryStats = async (req, res) => {
  try {
    const stats = await Inventory.aggregate([
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
          },
          outOfStockItems: {
            $sum: {
              $cond: [
                { $lte: ['$quantity', 0] },
                1,
                0
              ]
            }
          }
        }
      }
    ]);

    const categoryStats = await Inventory.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          totalValue: { $sum: { $multiply: ['$quantity', '$unitPrice'] } }
        }
      },
      {
        $sort: { totalValue: -1 }
      }
    ]);

    res.json({
      success: true,
      data: {
        overview: stats[0] || {
          totalItems: 0,
          totalValue: 0,
          lowStockItems: 0,
          outOfStockItems: 0
        },
        byCategory: categoryStats
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Update inventory quantity
// @route   PATCH /api/inventory/:id/quantity
// @access  Private
const updateQuantity = async (req, res) => {
  try {
    const { quantity, operation } = req.body; // operation: 'set', 'add', 'subtract'

    const item = await Inventory.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }

    let newQuantity;
    switch (operation) {
      case 'add':
        newQuantity = item.quantity + quantity;
        break;
      case 'subtract':
        newQuantity = Math.max(0, item.quantity - quantity);
        break;
      case 'set':
      default:
        newQuantity = quantity;
        break;
    }

    item.quantity = newQuantity;
    item.lastRestocked = operation === 'add' ? new Date() : item.lastRestocked;

    await item.save();

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getInventory,
  getInventoryItem,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
  getInventoryStats,
  updateQuantity
};