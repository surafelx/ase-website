import { useState, useEffect } from 'react';
import { MapPin, Users, TrendingUp, Calendar, Plus, Edit, Trash2, Image, X, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select } from '../components/ui/select';
import ImageUpload from './components/ImageUpload';

const Projects = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    status: 'Planning',
    region: '',
    beneficiaries: '',
    area: '',
    yieldIncrease: ''
  });

  // Load projects from localStorage
  useEffect(() => {
    const loadProjects = () => {
      try {
        const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
        let filteredProjects = storedProjects;

        if (statusFilter) {
          filteredProjects = storedProjects.filter(project => project.status === statusFilter);
        }

        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [statusFilter]);

  // Analytics data - use all projects for totals, not filtered
  const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
  const analyticsOverview = {
    totalProjects: allProjects.length,
    activeProjects: allProjects.filter(p => p.status === 'In Progress').length,
    completedProjects: allProjects.filter(p => p.status === 'Completed').length,
    totalBeneficiaries: allProjects.reduce((sum, p) => sum + (parseInt(p.beneficiaries) || 0), 0),
    regionsCovered: [...new Set(allProjects.map(p => p.region).filter(Boolean))].length,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateProject = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      location: '',
      description: '',
      status: 'Planning',
      region: '',
      beneficiaries: '',
      area: '',
      yieldIncrease: ''
    });
    setShowForm(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || '',
      location: project.location || '',
      description: project.description || '',
      status: project.status || 'Planning',
      region: project.region || '',
      beneficiaries: project.beneficiaries || '',
      area: project.area || '',
      yieldIncrease: project.yieldIncrease || ''
    });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');

      if (editingProject) {
        // Update existing project
        const projectIndex = storedProjects.findIndex(p => p._id === editingProject._id);
        if (projectIndex !== -1) {
          storedProjects[projectIndex] = { ...storedProjects[projectIndex], ...formData };
        }
      } else {
        // Create new project
        const newProject = {
          ...formData,
          _id: Date.now().toString(), // Simple ID generation
          images: [],
          createdAt: new Date().toISOString()
        };
        storedProjects.push(newProject);
      }

      localStorage.setItem('projects', JSON.stringify(storedProjects));
      setShowForm(false);

      // Reload projects
      const filteredProjects = statusFilter
        ? storedProjects.filter(project => project.status === statusFilter)
        : storedProjects;
      setProjects(filteredProjects);
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      const updatedProjects = storedProjects.filter(p => p._id !== projectId);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      // Reload projects
      const filteredProjects = statusFilter
        ? updatedProjects.filter(project => project.status === statusFilter)
        : updatedProjects;
      setProjects(filteredProjects);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects Management</h1>
        <Button onClick={handleCreateProject}>
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsOverview.totalProjects}</div>
            <p className="text-xs text-muted-foreground">
              {analyticsOverview.activeProjects} active, {analyticsOverview.completedProjects} completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Beneficiaries</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsOverview.totalBeneficiaries.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Farmers and communities served
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Regions Covered</CardTitle>
            <MapPin className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsOverview.regionsCovered}</div>
            <p className="text-xs text-muted-foreground">
              Ethiopian regions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsOverview.totalProjects > 0 ? Math.round((analyticsOverview.completedProjects / analyticsOverview.totalProjects) * 100) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              Project completion rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex space-x-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Status</option>
            <option value="Planning">Planning</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-500">Loading projects...</p>
        </div>
      )}

      {/* Projects Grid */}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project._id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditProject(project)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteProject(project._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full w-fit ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>

                  {project.beneficiaries && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {project.beneficiaries} beneficiaries
                    </div>
                  )}

                  {project.yieldIncrease && (
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {project.yieldIncrease}
                    </div>
                  )}

                  {project.area && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.area}
                    </div>
                  )}
                </div>

                {project.description && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                )}

                {project.images && project.images.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Image className="w-4 h-4 mr-2" />
                      {project.images.length} image{project.images.length > 1 ? 's' : ''}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {projects.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found</p>
        </div>
      )}

      {/* Project Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <Select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="Planning">Planning</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Region
                    </label>
                    <Select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    >
                      <option value="">Select Region</option>
                      <option value="Amhara">Amhara</option>
                      <option value="Oromia">Oromia</option>
                      <option value="Tigray">Tigray</option>
                      <option value="Sidama">Sidama</option>
                      <option value="SNNP">SNNP</option>
                      <option value="Diredewa">Dire Dawa</option>
                      <option value="Harari">Harari</option>
                      <option value="Shewa">Shewa</option>
                      <option value="Other">Other</option>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Beneficiaries
                    </label>
                    <Input
                      type="number"
                      value={formData.beneficiaries}
                      onChange={(e) => setFormData({ ...formData, beneficiaries: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area
                    </label>
                    <Input
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="e.g., 25 hectares"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yield Increase
                    </label>
                    <Input
                      value={formData.yieldIncrease}
                      onChange={(e) => setFormData({ ...formData, yieldIncrease: e.target.value })}
                      placeholder="e.g., 40% increase"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                </div>

                {/* Image Upload Section */}
                {editingProject && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Images
                    </label>
                    <ImageUpload
                      projectId={editingProject._id}
                      existingImages={editingProject.images || []}
                      onUploadSuccess={() => {
                        // Reload projects after image upload
                        const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
                        const filteredProjects = statusFilter
                          ? storedProjects.filter(project => project.status === statusFilter)
                          : storedProjects;
                        setProjects(filteredProjects);
                      }}
                    />
                  </div>
                )}

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProject ? 'Update Project' : 'Create Project'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;