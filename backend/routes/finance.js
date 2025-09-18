const express = require('express');
const {
  getTransactions,
  createTransaction,
  getFinancialSummary,
  getBudgets,
  createBudget,
  updateBudget,
  getBudgetComparison
} = require('../controllers/financeController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

// Transaction routes
router.get('/transactions', getTransactions);
router.post('/transactions', authorize('admin', 'manager'), createTransaction);

// Budget routes
router.get('/budgets', getBudgets);
router.post('/budgets', authorize('admin'), createBudget);
router.put('/budgets/:id', authorize('admin'), updateBudget);

// Analytics routes
router.get('/summary', getFinancialSummary);
router.get('/budget-comparison', getBudgetComparison);

module.exports = router;