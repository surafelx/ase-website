const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['income', 'expense', 'transfer'],
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      // Income categories
      'project_revenue', 'equipment_sales', 'service_fees', 'grants', 'donations', 'investments',
      // Expense categories
      'equipment_purchase', 'salaries', 'transportation', 'maintenance', 'utilities', 'marketing',
      'office_supplies', 'training', 'insurance', 'taxes', 'other_expenses'
    ]
  },
  subcategory: String,
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'ETB',
    enum: ['ETB', 'USD', 'EUR']
  },
  description: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  reference: {
    type: String, // Invoice number, receipt number, etc.
    unique: true,
    sparse: true
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'bank_transfer', 'check', 'credit_card', 'mobile_money', 'other']
  },
  relatedEntity: {
    type: {
      type: String,
      enum: ['project', 'customer', 'supplier', 'inventory', 'user']
    },
    id: mongoose.Schema.Types.ObjectId
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled', 'refunded'],
    default: 'completed'
  },
  attachments: [{
    filename: String,
    url: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

const budgetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['project', 'department', 'annual', 'quarterly', 'monthly'],
    required: true
  },
  relatedEntity: {
    type: {
      type: String,
      enum: ['project', 'department']
    },
    id: mongoose.Schema.Types.ObjectId
  },
  period: {
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    }
  },
  categories: [{
    category: {
      type: String,
      required: true
    },
    budgetedAmount: {
      type: Number,
      required: true,
      min: 0
    },
    actualAmount: {
      type: Number,
      default: 0,
      min: 0
    },
    currency: {
      type: String,
      default: 'ETB'
    }
  }],
  totalBudget: {
    type: Number,
    required: true,
    min: 0
  },
  totalSpent: {
    type: Number,
    default: 0,
    min: 0
  },
  status: {
    type: String,
    enum: ['draft', 'approved', 'active', 'completed', 'cancelled'],
    default: 'draft'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Virtual for budget utilization
budgetSchema.virtual('utilizationPercentage').get(function() {
  if (this.totalBudget === 0) return 0;
  return (this.totalSpent / this.totalBudget) * 100;
});

// Virtual for budget variance
budgetSchema.virtual('budgetVariance').get(function() {
  return this.totalSpent - this.totalBudget;
});

// Ensure virtual fields are serialized
budgetSchema.set('toJSON', { virtuals: true });
budgetSchema.set('toObject', { virtuals: true });

// Index for efficient queries
transactionSchema.index({ type: 1, category: 1, date: -1 });
transactionSchema.index({ date: -1 });
transactionSchema.index({ reference: 1 });
budgetSchema.index({ type: 1, status: 1 });
budgetSchema.index({ 'period.startDate': 1, 'period.endDate': 1 });

module.exports = {
  Transaction: mongoose.model('Transaction', transactionSchema),
  Budget: mongoose.model('Budget', budgetSchema)
};