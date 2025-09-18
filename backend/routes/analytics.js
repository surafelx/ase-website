const express = require('express');
const {
  getOverview,
  getProjectAnalytics,
  getFinancialAnalytics,
  getCustomerAnalytics,
  createReport,
  getReports
} = require('../controllers/analyticsController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

// Analytics routes
router.get('/overview', getOverview);
router.get('/projects', getProjectAnalytics);
router.get('/finance', getFinancialAnalytics);
router.get('/customers', getCustomerAnalytics);

// Report routes
router.get('/reports', getReports);
router.post('/reports', createReport);

module.exports = router;