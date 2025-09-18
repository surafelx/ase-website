import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { MapPin, Users, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select } from '../components/ui/select';

const Projects = () => {
  const [statusFilter, setStatusFilter] = useState('');

  // Mock data for projects
  const mockProjectsData = [
    {
      _id: '1',
      title: 'Solar Irrigation System - Amhara Region',
      location: 'Bahir Dar, Amhara',
      status: 'In Progress',
      beneficiaries: 150,
      yieldIncrease: '40% increase',
      area: '25 hectares',
      description: 'Complete solar-powered irrigation system for smallholder farmers in the Amhara region. Includes solar panels, pumps, and drip irrigation setup.',
      createdAt: '2024-09-15'
    },
    {
      _id: '2',
      title: 'Water Pump Installation - Oromia',
      location: 'Adama, Oromia',
      status: 'Completed',
      beneficiaries: 200,
      yieldIncrease: '35% increase',
      area: '30 hectares',
      description: 'Installation of high-efficiency water pumps powered by solar energy for sustainable irrigation in Oromia region.',
      createdAt: '2024-09-10'
    },
    {
      _id: '3',
      title: 'Farmer Training Program - Tigray',
      location: 'Mekelle, Tigray',
      status: 'Planning',
      beneficiaries: 100,
      yieldIncrease: '50% increase',
      area: '20 hectares',
      description: 'Comprehensive training program for farmers on modern irrigation techniques and solar-powered farming equipment.',
      createdAt: '2024-09-08'
    },
    {
      _id: '4',
      title: 'Solar Panel Distribution - Shewa',
      location: 'Addis Ababa, Shewa',
      status: 'In Progress',
      beneficiaries: 80,
      yieldIncrease: '45% increase',
      area: '15 hectares',
      description: 'Distribution and installation of solar panels for off-grid farming communities in the Shewa region.',
      createdAt: '2024-09-05'
    },
    {
      _id: '5',
      title: 'Drip Irrigation Network - Sidama',
      location: 'Hawassa, Sidama',
      status: 'Completed',
      beneficiaries: 120,
      yieldIncrease: '55% increase',
      area: '18 hectares',
      description: 'Advanced drip irrigation network implementation with water conservation technologies for Sidama coffee farmers.',
      createdAt: '2024-09-01'
    },
    {
      _id: '6',
      title: 'Solar Battery Storage - Afar',
      location: 'Semera, Afar',
      status: 'Planning',
      beneficiaries: 90,
      yieldIncrease: '30% increase',
      area: '22 hectares',
      area: '22 hectares',
      description: 'Solar battery storage system installation for reliable power supply in remote Afar region farming communities.',
      createdAt: '2024-08-28'
    }
  ];

  // Filter projects based on status
  const filteredProjects = statusFilter
    ? mockProjectsData.filter(project => project.status === statusFilter)
    : mockProjectsData;

  const projects = filteredProjects;

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

  // Remove loading state since we're using mock data

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects Management</h1>
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {project.location}
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {project.beneficiaries} beneficiaries
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {project.yieldIncrease} increase
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.area}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found</p>
        </div>
      )}
    </div>
  );
};

export default Projects;