const mongoose = require('mongoose');

const farmerDataSchema = new mongoose.Schema({
  code: Number,
  name: String,
  sex: {
    type: String,
    enum: ['M', 'F']
  },
  farmArea: Number,
  phone: String,
  waterSource: String,
  wellDepth: Number,
  waterDepth: Number,
  serialNumber: String,
  familySize: Number,
  coordinates: [Number] // [longitude, latitude]
});

const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  text: String
});

const specificationSchema = new mongoose.Schema({
  label: String,
  value: String
});

const projectSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  status: {
    type: String,
    enum: ['Completed', 'In Progress', 'Planning', 'Cancelled'],
    default: 'Planning'
  },
  beneficiaries: {
    type: Number,
    min: 0
  },
  area: String, // e.g., "300+ hectares"
  yieldIncrease: String, // e.g., "200%"
  image: String,
  description: {
    type: String,
    trim: true
  },
  fullDescription: String,
  challenges: [String],
  solutions: [String],
  results: [String],
  technologies: [String],
  specifications: [specificationSchema],
  testimonial: testimonialSchema,
  farmerData: [farmerDataSchema],
  images: [String],
  region: {
    type: String,
    enum: ['Amhara', 'Oromia', 'Tigray', 'Sidama', 'SNNP', 'Diredewa', 'Harari', 'Shewa', 'Other']
  },
  woreda: String,
  kebele: String,
  partner: String,
  budget: {
    estimated: Number,
    actual: Number,
    currency: {
      type: String,
      default: 'ETB'
    }
  },
  timeline: {
    startDate: Date,
    endDate: Date,
    plannedCompletion: Date
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Index for efficient queries
projectSchema.index({ status: 1, region: 1 });
projectSchema.index({ location: 'text', title: 'text', description: 'text' });
projectSchema.index({ createdAt: -1 });

// Virtual for project duration
projectSchema.virtual('duration').get(function() {
  if (this.timeline.startDate && this.timeline.endDate) {
    return Math.ceil((this.timeline.endDate - this.timeline.startDate) / (1000 * 60 * 60 * 24));
  }
  return null;
});

// Virtual for budget variance
projectSchema.virtual('budgetVariance').get(function() {
  if (this.budget.actual && this.budget.estimated) {
    return ((this.budget.actual - this.budget.estimated) / this.budget.estimated) * 100;
  }
  return null;
});

// Ensure virtual fields are serialized
projectSchema.set('toJSON', { virtuals: true });
projectSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Project', projectSchema);