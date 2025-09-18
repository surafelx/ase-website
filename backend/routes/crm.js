const express = require('express');
const {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  addInteraction,
  addNote,
  getCRMStats
} = require('../controllers/crmController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

// Public routes for authenticated users
router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomer);
router.get('/stats', getCRMStats);

// Admin and manager only routes
router.post('/customers', authorize('admin', 'manager'), createCustomer);
router.put('/customers/:id', authorize('admin', 'manager'), updateCustomer);
router.delete('/customers/:id', authorize('admin'), deleteCustomer);

// Interaction and note routes
router.post('/customers/:id/interactions', addInteraction);
router.post('/customers/:id/notes', addNote);

module.exports = router;