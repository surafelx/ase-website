const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes - require authentication
const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authorized to access this route' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Not authorized to access this route' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Grant access to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: `User role ${req.user.role} is not authorized to access this route`
      });
    }
    next();
  };
};

// Check if user owns resource or is admin
const resourceOwner = (model) => {
  return async (req, res, next) => {
    try {
      const resource = await model.findById(req.params.id);

      if (!resource) {
        return res.status(404).json({ error: 'Resource not found' });
      }

      // Allow if user is admin or resource owner
      if (req.user.role === 'admin' || resource.user.toString() === req.user._id.toString()) {
        req.resource = resource;
        next();
      } else {
        return res.status(403).json({ error: 'Not authorized to access this resource' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
};

module.exports = {
  protect,
  authorize,
  resourceOwner
};