const Project = require('../models/Project');

// @desc    Get all projects for website
// @route   GET /api/content/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const filter = { status: 'Completed' }; // Only show completed projects on website
    if (req.query.region) filter.region = req.query.region;
    if (req.query.search) {
      filter.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } },
        { location: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const projects = await Project.find(filter)
      .select('id title location status beneficiaries area yieldIncrease image description region testimonial')
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

// @desc    Get single project for website
// @route   GET /api/content/projects/:id
// @access  Public
const getProject = async (req, res) => {
  try {
    const project = await Project.findOne({ id: req.params.id })
      .populate('createdBy', 'name');

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

// @desc    Get project statistics for website
// @route   GET /api/content/stats
// @access  Public
const getStats = async (req, res) => {
  try {
    const stats = await Project.aggregate([
      {
        $match: { status: 'Completed' }
      },
      {
        $group: {
          _id: null,
          totalProjects: { $sum: 1 },
          totalBeneficiaries: { $sum: '$beneficiaries' },
          totalArea: { $sum: { $toDouble: { $substr: ['$area', 0, -1] } } }, // Extract number from "300+ hectares"
          regions: { $addToSet: '$region' }
        }
      }
    ]);

    const projectStats = stats[0] || {
      totalProjects: 0,
      totalBeneficiaries: 0,
      totalArea: 0,
      regions: []
    };

    // Calculate average yield increase
    const yieldStats = await Project.aggregate([
      {
        $match: {
          status: 'Completed',
          yieldIncrease: { $exists: true, $ne: null }
        }
      },
      {
        $group: {
          _id: null,
          avgYieldIncrease: { $avg: { $toDouble: { $substr: ['$yieldIncrease', 0, -1] } } } // Extract number from "200%"
        }
      }
    ]);

    const avgYield = yieldStats[0]?.avgYieldIncrease || 0;

    res.json({
      success: true,
      data: {
        totalProjects: projectStats.totalProjects,
        totalBeneficiaries: projectStats.totalBeneficiaries,
        totalArea: projectStats.totalArea,
        regionsCount: projectStats.regions.length,
        averageYieldIncrease: Math.round(avgYield)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get featured projects
// @route   GET /api/content/featured
// @access  Public
const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ status: 'Completed' })
      .select('id title location image description beneficiaries')
      .sort({ beneficiaries: -1 }) // Sort by number of beneficiaries
      .limit(6);

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Get projects by region
// @route   GET /api/content/regions/:region
// @access  Public
const getProjectsByRegion = async (req, res) => {
  try {
    const projects = await Project.find({
      region: req.params.region,
      status: 'Completed'
    })
      .select('id title location image description beneficiaries')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Search projects
// @route   GET /api/content/search
// @access  Public
const searchProjects = async (req, res) => {
  try {
    const { q, region, status } = req.query;

    const filter = {};
    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { location: { $regex: q, $options: 'i' } }
      ];
    }
    if (region) filter.region = region;
    if (status) filter.status = status;

    const projects = await Project.find(filter)
      .select('id title location status image description region')
      .sort({ createdAt: -1 })
      .limit(20);

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getProjects,
  getProject,
  getStats,
  getFeaturedProjects,
  getProjectsByRegion,
  searchProjects
};