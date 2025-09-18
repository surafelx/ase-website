import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Users, Package, TrendingUp, DollarSign, Activity, AlertTriangle } from 'lucide-react';
import { api } from '../services/api';

const Dashboard = () => {
  const { data: dashboardData, isLoading, error } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => api.get('/admin/dashboard').then(res => res.data.data),
    retry: false
  });

  // Mock data for when API is not available
  const mockData = {
    systemStats: {
      totalUsers: 25,
      totalProjects: 12,
      totalCustomers: 8,
      lowStockItems: 3
    },
    userStats: [
      { _id: 'admin', count: 2 },
      { _id: 'manager', count: 5 }
    ],
    recentActivities: {
      projects: [
        { title: 'Solar Irrigation System - Amhara', status: 'In Progress', createdAt: '2024-09-15' },
        { title: 'Water Pump Installation - Oromia', status: 'Completed', createdAt: '2024-09-10' },
        { title: 'Farmer Training Program - Tigray', status: 'Planning', createdAt: '2024-09-08' }
      ],
      customers: [
        { name: 'Ethiopian Agricultural Agency', type: 'Government', createdAt: '2024-09-12' },
        { name: 'Green Valley Farms', type: 'Private', createdAt: '2024-09-05' }
      ]
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  // Use mock data if API fails
  const data = error ? mockData : dashboardData || mockData;
  const stats = data.systemStats || {};
  const userStats = data.userStats || [];
  const activities = data.recentActivities || {};

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Welcome to Sun Farm Prosper Admin
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stats.totalUsers || 0}</div>
            <p className="text-xs text-muted-foreground">
              {userStats.find(u => u._id === 'admin')?.count || 0} admins, {userStats.find(u => u._id === 'manager')?.count || 0} managers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stats.totalProjects || 0}</div>
            <p className="text-xs text-muted-foreground">
              Agricultural initiatives
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stats.totalCustomers || 0}</div>
            <p className="text-xs text-muted-foreground">
              Farmers and partners
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stats.lowStockItems || 0}</div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.projects?.slice(0, 5).map((project, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">{project.title}</p>
                    <p className="text-xs text-muted-foreground">{project.status}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </div>
                </div>
              )) || <p className="text-sm text-gray-500">No recent projects</p>}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.customers?.slice(0, 5).map((customer, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">{customer.name}</p>
                    <p className="text-xs text-muted-foreground">{customer.type}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </div>
                </div>
              )) || <p className="text-sm text-gray-500">No recent customers</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;