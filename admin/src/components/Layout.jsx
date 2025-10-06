import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  LayoutDashboard,
  Package,
  FolderOpen,
  Users,
  DollarSign,
  BarChart3,
  UserCog,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Image
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Layout = () => {
  const { user, logout, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Temporarily bypass authentication to show UI
  // useEffect(() => {
  //   if (!loading && !isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [loading, isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Temporarily bypass loading check
  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
  //     </div>
  //   );
  // }

  // Temporarily bypass authentication check
  // if (!isAuthenticated) {
  //   return null;
  // }

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Inventory', href: '/inventory', icon: Package },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Gallery', href: '/gallery', icon: Image },
    { name: 'Customers', href: '/customers', icon: Users },
    { name: 'Finance', href: '/finance', icon: DollarSign },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Users', href: '/users', icon: UserCog },
  ];

  return (
    <div className="min-h-screen max-w-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-white shadow-xl border-r border-gray-200 transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>

        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
          {!sidebarCollapsed && (
            <h1 className="text-lg font-bold text-white truncate">Sun Farm Admin</h1>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 text-white hover:bg-white/10 rounded-md transition-colors hidden lg:block"
          >
            {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-6">
          <div className="px-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center ${sidebarCollapsed ? 'justify-center px-3' : 'px-4'} py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-700 transition-all duration-200 group`}
                  onClick={() => setSidebarOpen(false)}
                  title={sidebarCollapsed ? item.name : ''}
                >
                  <Icon className={`w-5 h-5 ${sidebarCollapsed ? '' : 'mr-3'} transition-colors`} />
                  {!sidebarCollapsed && (
                    <span className="font-medium truncate">{item.name}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`flex items-center w-full ${sidebarCollapsed ? 'justify-center px-3' : 'px-4'} py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200`}
            title={sidebarCollapsed ? 'Logout' : ''}
          >
            <LogOut className={`w-5 h-5 ${sidebarCollapsed ? '' : 'mr-3'}`} />
            {!sidebarCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 `}>
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            >
              {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 hidden sm:block">
              Welcome, {user?.name || 'Admin User'}
            </span>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">
                {(user?.name || 'A').charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;