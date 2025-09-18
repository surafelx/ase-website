import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';
import { Plus, Search, Edit, Trash2, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const queryClient = useQueryClient();

  // Mock data for inventory
  const mockInventoryData = [
    {
      _id: '1',
      name: 'Solar Panel 300W',
      description: 'High-efficiency monocrystalline solar panel',
      category: 'solar_panels',
      sku: 'SP-300W-001',
      quantity: 45,
      unitPrice: 25000,
      unit: 'pieces',
      reorderPoint: 10
    },
    {
      _id: '2',
      name: 'Submersible Pump 5HP',
      description: 'Deep well submersible pump for irrigation',
      category: 'pumps',
      sku: 'PUMP-5HP-002',
      quantity: 8,
      unitPrice: 85000,
      unit: 'pieces',
      reorderPoint: 5
    },
    {
      _id: '3',
      name: 'Solar Battery 200Ah',
      description: 'Deep cycle battery for solar storage',
      category: 'batteries',
      sku: 'BAT-200AH-003',
      quantity: 12,
      unitPrice: 45000,
      unit: 'pieces',
      reorderPoint: 8
    },
    {
      _id: '4',
      name: 'MPPT Controller 60A',
      description: 'Maximum Power Point Tracking solar charge controller',
      category: 'controllers',
      sku: 'CTRL-60A-004',
      quantity: 3,
      unitPrice: 15000,
      unit: 'pieces',
      reorderPoint: 5
    },
    {
      _id: '5',
      name: 'PVC Pipe 2" x 6m',
      description: 'Durable PVC pipe for irrigation systems',
      category: 'pipes',
      sku: 'PIPE-2IN-005',
      quantity: 120,
      unitPrice: 1200,
      unit: 'pieces',
      reorderPoint: 50
    },
    {
      _id: '6',
      name: 'Drip Irrigation Kit',
      description: 'Complete drip irrigation system for small farms',
      category: 'irrigation_parts',
      sku: 'DRIP-KIT-006',
      quantity: 25,
      unitPrice: 8500,
      unit: 'sets',
      reorderPoint: 10
    },
    {
      _id: '7',
      name: 'Solar Pump Cable 10mm',
      description: 'Heavy-duty cable for solar pump installations',
      category: 'other',
      sku: 'CABLE-10MM-007',
      quantity: 200,
      unitPrice: 150,
      unit: 'meters',
      reorderPoint: 100
    },
    {
      _id: '8',
      name: 'Installation Toolkit',
      description: 'Complete toolkit for solar and irrigation installations',
      category: 'tools',
      sku: 'TOOL-KIT-008',
      quantity: 6,
      unitPrice: 12000,
      unit: 'sets',
      reorderPoint: 3
    }
  ];

  const mockStatsData = {
    overview: {
      totalItems: 8,
      totalValue: 1245000,
      lowStockItems: 2,
      outOfStockItems: 0
    }
  };

  // Filter data based on search and category
  const filteredData = mockInventoryData.filter(item => {
    const matchesSearch = !searchTerm ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const inventoryData = filteredData;
  const statsData = mockStatsData;

  const createMutation = useMutation({
    mutationFn: (data) => api.post('/inventory', data),
    onSuccess: () => {
      queryClient.invalidateQueries(['inventory']);
      setShowForm(false);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => api.put(`/inventory/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['inventory']);
      setEditingItem(null);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/inventory/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['inventory']);
    }
  });

  const categories = [
    'solar_panels', 'pumps', 'batteries', 'controllers',
    'pipes', 'irrigation_parts', 'tools', 'other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (editingItem) {
      updateMutation.mutate({ id: editingItem._id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  // Remove loading state since we're using mock data

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Inventory Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Item</span>
        </button>
      </div>

      {/* Stats Cards */}
      {statsData && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">Total Items</span>
            </div>
            <div className="text-2xl font-bold">{statsData.overview.totalItems}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Total Value</span>
            </div>
            <div className="text-2xl font-bold">ETB {statsData.overview.totalValue?.toLocaleString()}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium">Low Stock</span>
            </div>
            <div className="text-2xl font-bold">{statsData.overview.lowStockItems}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium">Out of Stock</span>
            </div>
            <div className="text-2xl font-bold">{statsData.overview.outOfStockItems}</div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.replace('_', ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inventoryData?.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.category.replace('_', ' ')}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.sku}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.quantity}</td>
                <td className="px-6 py-4 text-sm text-gray-900">ETB {item.unitPrice}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.quantity === 0 ? 'bg-red-100 text-red-800' :
                    item.quantity <= item.reorderPoint ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {item.quantity === 0 ? 'Out of Stock' :
                     item.quantity <= item.reorderPoint ? 'Low Stock' : 'In Stock'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this item?')) {
                        deleteMutation.mutate(item._id);
                      }
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Form Modal */}
      {(showForm || editingItem) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingItem ? 'Edit Item' : 'Add New Item'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingItem?.name}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  name="category"
                  defaultValue={editingItem?.category}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.replace('_', ' ').toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">SKU</label>
                <input
                  type="text"
                  name="sku"
                  defaultValue={editingItem?.sku}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={editingItem?.quantity}
                  required
                  min="0"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Unit Price</label>
                <input
                  type="number"
                  name="unitPrice"
                  defaultValue={editingItem?.unitPrice}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Unit</label>
                <select
                  name="unit"
                  defaultValue={editingItem?.unit}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="pieces">Pieces</option>
                  <option value="meters">Meters</option>
                  <option value="liters">Liters</option>
                  <option value="kg">Kilograms</option>
                  <option value="sets">Sets</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  defaultValue={editingItem?.description}
                  className="w-full px-3 py-2 border rounded-lg"
                  rows="3"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  {editingItem ? 'Update' : 'Add'} Item
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingItem(null);
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;