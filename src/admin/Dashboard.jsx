import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Package, TrendingUp, DollarSign, Activity, AlertTriangle, BarChart3, MapPin, Calendar, Plus, Download } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
    totalBeneficiaries: 0,
    regionsCovered: 0,
    recentProjects: []
  });

  useEffect(() => {
    // Load data from Supabase
    const loadDashboardData = async () => {
      try {
        const { data: projects, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        const totalProjects = projects.length;
        const activeProjects = projects.filter(p => p.status === 'In Progress').length;
        const completedProjects = projects.filter(p => p.status === 'Completed').length;
        const totalBeneficiaries = projects.reduce((sum, p) => sum + (parseInt(p.beneficiaries) || 0), 0);
        const regionsCovered = [...new Set(projects.map(p => p.region).filter(Boolean))].length;

        // Get recent projects (last 5)
        const recentProjects = projects.slice(0, 5);

        setStats({
          totalProjects,
          activeProjects,
          completedProjects,
          totalBeneficiaries,
          regionsCovered,
          recentProjects
        });
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setStats({
          totalProjects: 0,
          activeProjects: 0,
          completedProjects: 0,
          totalBeneficiaries: 0,
          regionsCovered: 0,
          recentProjects: []
        });
      }
    };

    loadDashboardData();
  }, []);

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
    // Navigate to projects page or open create modal
    window.location.href = '/admin/projects';
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">Overview of your agricultural projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Projects</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{stats.totalProjects}</p>
              <p className="text-xs text-gray-500 mt-1">{stats.activeProjects} active</p>
            </div>
            <Package className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Beneficiaries</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{stats.totalBeneficiaries.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">People served</p>
            </div>
            <Users className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Regions</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{stats.regionsCovered}</p>
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
                {stats.totalProjects > 0 ? Math.round((stats.completedProjects / stats.totalProjects) * 100) : 0}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Completion rate</p>
            </div>
            <TrendingUp className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border border-gray-200 rounded-lg">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Recent Projects</h2>
                <Link to="/admin/projects">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </div>
            <div>
              {stats.recentProjects.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {stats.recentProjects.slice(0, 5).map((project) => (
                    <div key={project.id} className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="text-base font-medium text-gray-900">{project.title}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                            {project.beneficiaries && (
                              <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{project.beneficiaries} beneficiaries</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-12 text-center">
                  <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                  <p className="text-gray-600 mb-6">Get started by creating your first project.</p>
                  <Link to="/admin/projects">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Project
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="border border-gray-200 rounded-lg">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-3">
              <Link to="/admin/projects" className="block">
                <Button className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </Link>
              <Link to="/admin/analytics" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;