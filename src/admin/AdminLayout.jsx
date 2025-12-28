import { Link, useLocation, Outlet } from 'react-router-dom';
import { BarChart3, Package, Settings, Home, Users, TrendingUp, Menu, X } from 'lucide-react';
import { useState } from 'react';

const AdminLayout = () => {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: Home },
    { name: 'Projects', href: '/admin/projects', icon: Package },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Finance', href: '/admin/finance', icon: TrendingUp },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 relative">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">AgriSun</h1>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            )}
            {sidebarCollapsed && (
              <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="absolute -right-3 top-6 bg-white border border-gray-200 rounded-full p-1 hover:bg-gray-50 transition-colors"
            >
              {sidebarCollapsed ? (
                <Menu className="w-4 h-4 text-gray-600" />
              ) : (
                <X className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } ${sidebarCollapsed ? 'justify-center' : ''}`}
                  title={sidebarCollapsed ? item.name : ''}
                >
                  <item.icon className={`w-5 h-5 ${
                    isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                  } ${sidebarCollapsed ? '' : 'mr-3'}`} />
                  {!sidebarCollapsed && (
                    <span>{item.name}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors ${
                sidebarCollapsed ? 'justify-center' : ''
              }`}
              title={sidebarCollapsed ? 'Back to Website' : ''}
            >
              <Home className={`w-4 h-4 ${sidebarCollapsed ? '' : 'mr-3'}`} />
              {!sidebarCollapsed && 'Back to Website'}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'pl-16' : 'pl-64'
      }`}>
        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;