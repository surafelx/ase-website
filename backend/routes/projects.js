const express = require('express');
const multer = require('multer');
const { body } = require('express-validator');
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  uploadImages,
  deleteImage
} = require('../controllers/projectsController');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 10 // Maximum 10 files
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// All routes require authentication and admin role
router.use(protect);
router.use(authorize('admin'));

// Validation rules
const projectValidation = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('location').trim().notEmpty().withMessage('Location is required'),
  body('description').optional().trim(),
  body('status').optional().isIn(['Planning', 'In Progress', 'Completed', 'Cancelled']),
  body('region').optional().isIn(['Amhara', 'Oromia', 'Tigray', 'Sidama', 'SNNP', 'Diredewa', 'Harari', 'Shewa', 'Other']),
  body('beneficiaries').optional().isInt({ min: 0 }),
  body('area').optional().trim(),
  body('yieldIncrease').optional().trim()
];

// Routes
router.route('/')
  .get(getProjects)
  .post(projectValidation, createProject);

router.route('/:id')
  .get(getProject)
  .put(projectValidation, updateProject)
  .delete(deleteProject);

// Image upload routes
router.post('/:id/images', upload.array('images', 10), uploadImages);
router.delete('/:id/images/:imageIndex', deleteImage);

module.exports = router;