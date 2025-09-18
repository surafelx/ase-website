const express = require('express');
const {
  getProjects,
  getProject,
  getStats,
  getFeaturedProjects,
  getProjectsByRegion,
  searchProjects
} = require('../controllers/contentController');

const router = express.Router();

// Public routes for website content
router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.get('/stats', getStats);
router.get('/featured', getFeaturedProjects);
router.get('/regions/:region', getProjectsByRegion);
router.get('/search', searchProjects);

module.exports = router;