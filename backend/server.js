const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cloudinary = require('cloudinary').v2;
const connectDB = require('./config/database');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();

// Connect to MongoDB
connectDB();

// Create default admin user if none exists
const createDefaultAdmin = async () => {
  try {
    const User = require('./models/User');
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      const adminUser = new User({
        name: 'Admin User',
        email: 'admin@sunfarmprosper.com',
        password: 'admin123',
        role: 'admin'
      });
      await adminUser.save();
      console.log('Default admin user created: admin@sunfarmprosper.com / admin123');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

createDefaultAdmin();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/content', require('./routes/content'));
app.use('/api/crm', require('./routes/crm'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/finance', require('./routes/finance'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Sun Farm Prosper Backend is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;