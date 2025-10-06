const Project = require('../models/Project');
const cloudinary = require('cloudinary').v2;
const { validationResult } = require('express-validator');

// Helper function to generate SEO-friendly filename
const generateSEOFilename = (originalName, projectTitle, index = 0) => {
  const cleanTitle = projectTitle.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();

  const extension = originalName.split('.').pop();
  const suffix = index > 0 ? `-${index}` : '';
  return `${cleanTitle}-image${suffix}.${extension}`;
};

// Helper function to generate alt text
const generateAltText = (projectTitle, location, index = 0) => {
  const suffix = index > 0 ? ` ${index + 1}` : '';
  return `${projectTitle} - ${location}${suffix}`;
};

// @desc    Get all projects for admin
// @route   GET /api/projects
// @access  Private/Admin
const getProjects = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.region) filter.region = req.query.region;
    if (req.query.search) {
      filter.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } },
        { location: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const projects = await Project.find(filter)
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Project.countDocuments(filter);

    res.json({
      success: true,
      data: projects,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Private/Admin
const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('createdBy', 'name email')
      .populate('updatedBy', 'name email');

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Create new project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const projectData = {
      ...req.body,
      createdBy: req.user._id,
      updatedBy: req.user._id
    };

    const project = await Project.create(projectData);

    res.status(201).json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedBy: req.user._id
      },
      { new: true, runValidators: true }
    ).populate('createdBy', 'name email');

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Delete images from Cloudinary
    if (project.images && project.images.length > 0) {
      const publicIds = project.images
        .map(img => img.publicId)
        .filter(id => id);

      if (publicIds.length > 0) {
        await cloudinary.api.delete_resources(publicIds);
      }
    }

    await project.deleteOne();

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Upload project images
// @route   POST /api/projects/:id/images
// @access  Private/Admin
const uploadImages = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadedImages = [];

    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];

      // Generate SEO-friendly filename
      const seoFilename = generateSEOFilename(
        file.originalname,
        project.title,
        project.images.length + i
      );

      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'sun-farm-prosper/projects',
        public_id: `${project.id}/${seoFilename.replace(/\.[^/.]+$/, '')}`, // Remove extension for public_id
        resource_type: 'image',
        transformation: [
          { width: 1200, height: 800, crop: 'limit' },
          { quality: 'auto' }
        ]
      });

      // Generate alt text
      const altText = generateAltText(
        project.title,
        project.location,
        project.images.length + i
      );

      uploadedImages.push({
        url: result.secure_url,
        alt: altText,
        filename: seoFilename,
        publicId: result.public_id
      });
    }

    // Update project with new images
    project.images.push(...uploadedImages);
    project.updatedBy = req.user._id;
    await project.save();

    res.json({
      success: true,
      data: uploadedImages,
      message: `${uploadedImages.length} image(s) uploaded successfully`
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Delete project image
// @route   DELETE /api/projects/:id/images/:imageIndex
// @access  Private/Admin
const deleteImage = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const imageIndex = parseInt(req.params.imageIndex);

    if (imageIndex < 0 || imageIndex >= project.images.length) {
      return res.status(400).json({ error: 'Invalid image index' });
    }

    const imageToDelete = project.images[imageIndex];

    // Delete from Cloudinary
    if (imageToDelete.publicId) {
      await cloudinary.uploader.destroy(imageToDelete.publicId);
    }

    // Remove from project
    project.images.splice(imageIndex, 1);
    project.updatedBy = req.user._id;
    await project.save();

    res.json({
      success: true,
      message: 'Image deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  uploadImages,
  deleteImage
};