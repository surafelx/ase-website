const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['projects', 'inventory', 'finance', 'customers', 'operations', 'impact']
  },
  value: {
    type: mongoose.Schema.Types.Mixed, // Can be number, string, or object
    required: true
  },
  unit: String, // e.g., 'ETB', 'hectares', 'percentage', 'count'
  date: {
    type: Date,
    default: Date.now
  },
  period: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'quarterly', 'yearly'],
    default: 'monthly'
  },
  metadata: {
    region: String,
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
    additionalData: mongoose.Schema.Types.Mixed
  }
}, {
  timestamps: true
});

const dashboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  type: {
    type: String,
    enum: ['executive', 'operational', 'financial', 'project', 'custom'],
    default: 'custom'
  },
  widgets: [{
    title: String,
    type: {
      type: String,
      enum: ['chart', 'metric', 'table', 'map', 'progress']
    },
    chartType: {
      type: String,
      enum: ['line', 'bar', 'pie', 'area', 'scatter', 'gauge']
    },
    dataSource: {
      collection: String, // e.g., 'projects', 'transactions'
      metrics: [String], // e.g., ['totalProjects', 'totalRevenue']
      filters: mongoose.Schema.Types.Mixed
    },
    position: {
      x: Number,
      y: Number,
      width: Number,
      height: Number
    },
    config: mongoose.Schema.Types.Mixed // Chart configuration, colors, etc.
  }],
  isPublic: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sharedWith: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    permissions: {
      type: String,
      enum: ['view', 'edit'],
      default: 'view'
    }
  }]
}, {
  timestamps: true
});

const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['project_summary', 'financial_report', 'impact_assessment', 'inventory_status', 'customer_analysis', 'custom'],
    required: true
  },
  description: String,
  parameters: {
    dateRange: {
      startDate: Date,
      endDate: Date
    },
    filters: mongoose.Schema.Types.Mixed,
    groupBy: [String]
  },
  data: mongoose.Schema.Types.Mixed, // Report data
  generatedAt: {
    type: Date,
    default: Date.now
  },
  generatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  format: {
    type: String,
    enum: ['json', 'pdf', 'excel', 'csv'],
    default: 'json'
  },
  status: {
    type: String,
    enum: ['generating', 'completed', 'failed'],
    default: 'generating'
  },
  fileUrl: String, // For downloadable reports
  schedule: {
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'quarterly']
    },
    nextRun: Date,
    isActive: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true
});

// Index for efficient queries
metricSchema.index({ category: 1, date: -1 });
metricSchema.index({ name: 1, period: 1, date: -1 });
dashboardSchema.index({ type: 1, isPublic: 1 });
reportSchema.index({ type: 1, generatedAt: -1 });
reportSchema.index({ 'schedule.nextRun': 1, 'schedule.isActive': 1 });

module.exports = {
  Metric: mongoose.model('Metric', metricSchema),
  Dashboard: mongoose.model('Dashboard', dashboardSchema),
  Report: mongoose.model('Report', reportSchema)
};