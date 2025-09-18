const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['phone', 'email', 'address', 'social_media'],
    required: true
  },
  value: {
    type: String,
    required: true
  },
  isPrimary: {
    type: Boolean,
    default: false
  }
});

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  region: {
    type: String,
    enum: ['Amhara', 'Oromia', 'Tigray', 'Sidama', 'SNNP', 'Diredewa', 'Harari', 'Shewa', 'Addis Ababa', 'Other']
  },
  woreda: String,
  kebele: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  }
});

const customerSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['farmer', 'partner', 'client', 'supplier', 'investor', 'government'],
    required: [true, 'Customer type is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  organization: {
    name: String,
    position: String,
    website: String
  },
  contacts: [contactSchema],
  addresses: [addressSchema],
  farmDetails: {
    size: Number, // in hectares
    crops: [String],
    livestock: [String],
    irrigationType: {
      type: String,
      enum: ['none', 'traditional', 'solar', 'diesel', 'electric']
    },
    waterSource: String,
    soilType: String
  },
  relationship: {
    status: {
      type: String,
      enum: ['prospect', 'active', 'inactive', 'former'],
      default: 'prospect'
    },
    source: {
      type: String,
      enum: ['referral', 'website', 'social_media', 'event', 'cold_call', 'partner', 'other']
    },
    firstContact: Date,
    lastContact: Date,
    nextFollowUp: Date
  },
  projects: [{
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    role: {
      type: String,
      enum: ['beneficiary', 'partner', 'supplier', 'investor']
    },
    startDate: Date,
    endDate: Date
  }],
  interactions: [{
    type: {
      type: String,
      enum: ['call', 'email', 'meeting', 'site_visit', 'training', 'support', 'complaint', 'feedback']
    },
    date: {
      type: Date,
      default: Date.now
    },
    subject: String,
    description: String,
    outcome: String,
    conductedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  tags: [String],
  notes: [{
    content: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Index for efficient queries
customerSchema.index({ type: 1, 'relationship.status': 1 });
customerSchema.index({ name: 'text', 'organization.name': 'text' });
customerSchema.index({ 'relationship.nextFollowUp': 1 });
customerSchema.index({ assignedTo: 1 });

// Virtual for primary contact
customerSchema.virtual('primaryContact').get(function() {
  return this.contacts.find(contact => contact.isPrimary) || this.contacts[0];
});

// Virtual for active projects count
customerSchema.virtual('activeProjectsCount').get(function() {
  return this.projects.filter(project =>
    !project.endDate || project.endDate > new Date()
  ).length;
});

// Ensure virtual fields are serialized
customerSchema.set('toJSON', { virtuals: true });
customerSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Customer', customerSchema);