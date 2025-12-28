import { useState, useEffect } from 'react';
import { MapPin, Users, TrendingUp, Calendar, Plus, Edit, Trash2, Image, X, BarChart3, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import ImageUpload from './components/ImageUpload';
import { supabase } from '@/lib/supabase';

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

  // Load projects from Supabase
  useEffect(() => {
    const loadProjects = async () => {
      try {
        let query = supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (statusFilter) {
          query = query.eq('status', statusFilter);
        }

        const { data: projectsData, error } = await query;

        if (error) throw error;

        setProjects(projectsData || []);
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
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const loadAllProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*');

        if (error) throw error;
        setAllProjects(data || []);
      } catch (error) {
        console.error('Error loading all projects:', error);
        setAllProjects([]);
      }
    };

    loadAllProjects();
  }, []);

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
      if (editingProject) {
        // Update existing project
        const { error } = await supabase
          .from('projects')
          .update(formData)
          .eq('id', editingProject.id);

        if (error) throw error;
      } else {
        // Create new project
        const { error } = await supabase
          .from('projects')
          .insert([formData]);

        if (error) throw error;
      }

      setShowForm(false);

      // Reload projects
      let query = supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (statusFilter) {
        query = query.eq('status', statusFilter);
      }

      const { data: updatedProjects, error: fetchError } = await query;
      if (fetchError) throw fetchError;

      setProjects(updatedProjects || []);
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);

      if (error) throw error;

      // Reload projects
      let query = supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (statusFilter) {
        query = query.eq('status', statusFilter);
      }

      const { data: updatedProjects, error: fetchError } = await query;
      if (fetchError) throw fetchError;

      setProjects(updatedProjects || []);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <p className="text-sm text-gray-600 mt-1">Manage and track your agricultural projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Projects</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{analyticsOverview.totalProjects}</p>
              <p className="text-xs text-gray-500 mt-1">{analyticsOverview.activeProjects} active</p>
            </div>
            <BarChart3 className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Beneficiaries</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{analyticsOverview.totalBeneficiaries.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">People served</p>
            </div>
            <Users className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Regions</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{analyticsOverview.regionsCovered}</p>
              <p className="text-xs text-gray-500 mt-1">Areas covered</p>
            </div>
            <MapPin className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Success Rate</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">
                {analyticsOverview.totalProjects > 0 ? Math.round((analyticsOverview.completedProjects / analyticsOverview.totalProjects) * 100) : 0}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Completion rate</p>
            </div>
            <TrendingUp className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">All Projects</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Filter:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">All Status</option>
                  <option value="Planning">Planning</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <Button onClick={handleCreateProject}>
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading projects...</p>
            </div>
          )}

          {!isLoading && (
            <>
              {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <div key={project._id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-gray-900 mb-2">{project.title}</h3>
                          <span className={`inline-flex px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditProject(project)}
                            className="p-1"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteProject(project._id)}
                            className="p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          {project.location}
                        </div>
                        {project.beneficiaries && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2 text-gray-400" />
                            {project.beneficiaries} beneficiaries
                          </div>
                        )}
                        {project.description && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                  <p className="text-gray-500 mb-6">
                    {statusFilter ? `No projects with status "${statusFilter}"` : "Get started by creating your first project"}
                  </p>
                  <Button onClick={handleCreateProject}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Project
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Project Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title *
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <Select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="Planning">Planning</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Beneficiaries
                    </label>
                    <Input
                      type="number"
                      value={formData.beneficiaries}
                      onChange={(e) => setFormData({ ...formData, beneficiaries: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Area
                    </label>
                    <Input
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="e.g., 25 hectares"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProject ? 'Update' : 'Create'}
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