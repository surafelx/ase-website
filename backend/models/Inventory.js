const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['solar_panels', 'pumps', 'batteries', 'controllers', 'pipes', 'irrigation_parts', 'tools', 'other']
  },
  description: {
    type: String,
    trim: true
  },
  sku: {
    type: String,
    unique: true,
    required: [true, 'SKU is required']
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: 0,
    default: 0
  },
  unit: {
    type: String,
    required: [true, 'Unit is required'],
    enum: ['pieces', 'meters', 'liters', 'kg', 'sets']
  },
  unitPrice: {
    type: Number,
    required: [true, 'Unit price is required'],
    min: 0
  },
  supplier: {
    name: String,
    contact: String,
    email: String
  },
  location: {
    warehouse: String,
    shelf: String,
    bin: String
  },
  minimumStock: {
    type: Number,
    default: 0,
    min: 0
  },
  maximumStock: {
    type: Number,
    min: 0
  },
  reorderPoint: {
    type: Number,
    min: 0
  },
  specifications: {
    power: String,
    voltage: String,
    capacity: String,
    dimensions: String,
    weight: String,
    warranty: String
  },
  images: [{
    url: String,
    alt: String
  }],
  status: {
    type: String,
    enum: ['active', 'inactive', 'discontinued'],
    default: 'active'
  },
  tags: [String],
  lastRestocked: Date,
  expiryDate: Date
}, {
  timestamps: true
});

// Index for efficient queries
inventorySchema.index({ category: 1, status: 1 });
inventorySchema.index({ sku: 1 });
inventorySchema.index({ name: 'text', description: 'text' });

// Virtual for stock status
inventorySchema.virtual('stockStatus').get(function() {
  if (this.quantity <= 0) return 'out_of_stock';
  if (this.quantity <= this.reorderPoint) return 'low_stock';
  if (this.quantity >= this.maximumStock) return 'overstock';
  return 'in_stock';
});

// Virtual for total value
inventorySchema.virtual('totalValue').get(function() {
  return this.quantity * this.unitPrice;
});

// Ensure virtual fields are serialized
inventorySchema.set('toJSON', { virtuals: true });
inventorySchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Inventory', inventorySchema);