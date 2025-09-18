import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { Users, Mail, Phone, MapPin, Calendar, TrendingUp, UserPlus, Search } from 'lucide-react';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // Mock data for customers
  const mockCustomers = [
    {
      _id: '1',
      name: 'Ethiopian Agricultural Agency',
      type: 'Government',
      email: 'contact@eaa.gov.et',
      phone: '+251-11-123-4567',
      location: 'Addis Ababa',
      projectsCount: 5,
      totalValue: 2500000,
      lastContact: '2024-09-15',
      status: 'Active'
    },
    {
      _id: '2',
      name: 'Green Valley Farms',
      type: 'Private',
      email: 'info@greenvalley.et',
      phone: '+251-11-234-5678',
      location: 'Bahir Dar, Amhara',
      projectsCount: 3,
      totalValue: 1200000,
      lastContact: '2024-09-12',
      status: 'Active'
    },
    {
      _id: '3',
      name: 'Sidama Coffee Cooperative',
      type: 'Cooperative',
      email: 'admin@sidamacoffee.et',
      phone: '+251-46-345-6789',
      location: 'Hawassa, Sidama',
      projectsCount: 2,
      totalValue: 850000,
      lastContact: '2024-09-10',
      status: 'Active'
    },
    {
      _id: '4',
      name: 'Oromia Farmers Union',
      type: 'NGO',
      email: 'contact@oromiafarmers.et',
      phone: '+251-22-456-7890',
      location: 'Adama, Oromia',
      projectsCount: 4,
      totalValue: 1800000,
      lastContact: '2024-09-08',
      status: 'Active'
    },
    {
      _id: '5',
      name: 'Tigray Agricultural Bureau',
      type: 'Government',
      email: 'bureau@tigray.gov.et',
      phone: '+251-34-567-8901',
      location: 'Mekelle, Tigray',
      projectsCount: 6,
      totalValue: 3200000,
      lastContact: '2024-09-05',
      status: 'Active'
    },
    {
      _id: '6',
      name: 'Afar Pastoralist Association',
      type: 'Community',
      email: 'info@afarpastoral.et',
      phone: '+251-33-678-9012',
      location: 'Semera, Afar',
      projectsCount: 1,
      totalValue: 450000,
      lastContact: '2024-09-03',
      status: 'Pending'
    }
  ];

  // Filter customers based on search and type
  const filteredCustomers = mockCustomers.filter(customer => {
    const matchesSearch = !searchTerm ||
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !typeFilter || customer.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Government':
        return 'bg-blue-100 text-blue-800';
      case 'Private':
        return 'bg-purple-100 text-purple-800';
      case 'Cooperative':
        return 'bg-green-100 text-green-800';
      case 'NGO':
        return 'bg-orange-100 text-orange-800';
      case 'Community':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Customer Relationship Management</h1>
        <Button className="bg-green-600 hover:bg-green-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{mockCustomers.length}</div>
            <p className="text-xs text-muted-foreground">
              Active relationships
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              {mockCustomers.reduce((sum, customer) => sum + customer.projectsCount, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all customers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              ETB {(mockCustomers.reduce((sum, customer) => sum + customer.totalValue, 0) / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">
              Contract value
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Partners</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">
              {mockCustomers.filter(c => c.status === 'Active').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently active
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <option value="">All Types</option>
              <option value="Government">Government</option>
              <option value="Private">Private</option>
              <option value="Cooperative">Cooperative</option>
              <option value="NGO">NGO</option>
              <option value="Community">Community</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <Card key={customer._id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{customer.name}</CardTitle>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(customer.status)}`}>
                  {customer.status}
                </span>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full w-fit ${getTypeColor(customer.type)}`}>
                {customer.type}
              </span>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  {customer.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {customer.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {customer.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last contact: {new Date(customer.lastContact).toLocaleDateString()}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Projects</p>
                    <p className="text-lg font-semibold">{customer.projectsCount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Value</p>
                    <p className="text-lg font-semibold">ETB {(customer.totalValue / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No customers found matching your criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Customers;