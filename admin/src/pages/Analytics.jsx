import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
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
    <div className="min-h-screen space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Analytics & Reporting</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter Data
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Analytics Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{analyticsOverview.totalProjects}</div>
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
            <div className="text-2xl font-bold text-card-foreground">
              {(analyticsOverview.totalBeneficiaries / 1000).toFixed(1)}K
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
            <div className="text-2xl font-bold text-card-foreground">{analyticsOverview.regionsCovered}</div>
            <p className="text-xs text-muted-foreground">
              Ethiopian regions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{analyticsOverview.successRate}%</div>
            <p className="text-xs text-muted-foreground">
              Project completion rate
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{region.region}</span>
                      <span>{region.projects} projects</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(region.projects / Math.max(...regionalData.map(r => r.projects))) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{region.beneficiaries} beneficiaries</span>
                      <span>{region.completion}% complete</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Types */}
        <Card>
          <CardHeader>
            <CardTitle>Project Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectTypes.map((type, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{type.type}</span>
                    <span>{type.count} projects ({type.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${type.color}`}
                      style={{ width: `${type.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Monthly Progress Chart</p>
                <p className="text-sm text-gray-400">Interactive chart showing project and beneficiary growth</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((project, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{project.name}</h4>
                    <p className="text-xs text-muted-foreground">{project.region} • {project.beneficiaries} beneficiaries</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600">{project.efficiency}%</div>
                    <div className="text-xs text-muted-foreground">efficiency</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ETB {(analyticsOverview.averageProjectValue / 1000).toFixed(0)}K
              </div>
              <p className="text-sm text-muted-foreground">Average Project Value</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {Math.round(analyticsOverview.totalBeneficiaries / analyticsOverview.totalProjects)}
              </div>
              <p className="text-sm text-muted-foreground">Average Beneficiaries per Project</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {Math.round((analyticsOverview.completedProjects / analyticsOverview.totalProjects) * 100)}%
              </div>
              <p className="text-sm text-muted-foreground">Project Completion Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;