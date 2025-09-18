const express = require('express');
const {
  getInventory,
  getInventoryItem,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
  getInventoryStats,
  updateQuantity
} = require('../controllers/inventoryController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

// Public routes for authenticated users
router.get('/', getInventory);
router.get('/stats', getInventoryStats);
router.get('/:id', getInventoryItem);

// Admin and manager only routes
router.post('/', authorize('admin', 'manager'), createInventoryItem);
router.put('/:id', authorize('admin', 'manager'), updateInventoryItem);
router.patch('/:id/quantity', authorize('admin', 'manager'), updateQuantity);
router.delete('/:id', authorize('admin'), deleteInventoryItem);

module.exports = router;