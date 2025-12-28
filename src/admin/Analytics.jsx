import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, MapPin, Calendar, Download, Filter, Activity } from 'lucide-react';

const Analytics = () => {
  // Mock analytics data
  const analyticsOverview = {
    totalProjects: 45,
    activeProjects: 28,
    completedProjects: 17,
    totalBeneficiaries: 12500,
    averageProjectValue: 850000,
    regionsCovered: 8,
    successRate: 87.5
  };

  const regionalData = [
    { region: 'Amhara', projects: 12, beneficiaries: 3200, completion: 85 },
    { region: 'Oromia', projects: 15, beneficiaries: 4100, completion: 92 },
    { region: 'Tigray', projects: 8, beneficiaries: 2800, completion: 88 },
    { region: 'Shewa', projects: 6, beneficiaries: 1800, completion: 83 },
    { region: 'Sidama', projects: 4, beneficiaries: 600, completion: 90 }
  ];

  const projectTypes = [
    { type: 'Solar Irrigation', count: 18, percentage: 40, color: 'bg-blue-500' },
    { type: 'Water Pumping', count: 12, percentage: 27, color: 'bg-green-500' },
    { type: 'Training Programs', count: 8, percentage: 18, color: 'bg-yellow-500' },
    { type: 'Equipment Supply', count: 7, percentage: 15, color: 'bg-purple-500' }
  ];

  const monthlyProgress = [
    { month: 'Jan', projects: 3, beneficiaries: 450 },
    { month: 'Feb', projects: 4, beneficiaries: 620 },
    { month: 'Mar', projects: 5, beneficiaries: 780 },
    { month: 'Apr', projects: 6, beneficiaries: 950 },
    { month: 'May', projects: 7, beneficiaries: 1100 },
    { month: 'Jun', projects: 8, beneficiaries: 1350 },
    { month: 'Jul', projects: 6, beneficiaries: 1200 },
    { month: 'Aug', projects: 4, beneficiaries: 900 },
    { month: 'Sep', projects: 2, beneficiaries: 400 }
  ];

  const topPerformers = [
    { name: 'Amhara Solar Initiative', region: 'Amhara', beneficiaries: 850, efficiency: 95 },
    { name: 'Oromia Water Project', region: 'Oromia', beneficiaries: 720, efficiency: 92 },
    { name: 'Tigray Farmer Training', region: 'Tigray', beneficiaries: 680, efficiency: 88 },
    { name: 'Shewa Equipment Distribution', region: 'Shewa', beneficiaries: 450, efficiency: 85 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-600 mt-1">Key insights and performance metrics</p>
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
              <p className="text-2xl font-semibold text-gray-900 mt-1">{(analyticsOverview.totalBeneficiaries / 1000).toFixed(1)}K</p>
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
              <p className="text-2xl font-semibold text-gray-900 mt-1">{analyticsOverview.successRate}%</p>
              <p className="text-xs text-gray-500 mt-1">Completion rate</p>
            </div>
            <TrendingUp className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium text-gray-900">Regional Distribution</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {regionalData.map((region, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{region.region}</span>
                  <span className="text-sm text-gray-600">{region.projects} projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-600 h-2 rounded-full"
                    style={{ width: `${(region.projects / Math.max(...regionalData.map(r => r.projects))) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{region.beneficiaries} beneficiaries</span>
                  <span>{region.completion}% complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium text-gray-900">Project Types</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {projectTypes.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{type.type}</span>
                  <span className="text-sm text-gray-600">{type.count} projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-600 h-2 rounded-full"
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;