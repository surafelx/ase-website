import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Projects from './pages/Projects';
import Customers from './pages/Customers';
import Finance from './pages/Finance';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Gallery from './pages/Gallery';
import Layout from './components/Layout';
import Login from './pages/Login';
import { AuthProvider } from './hooks/useAuth';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="projects" element={<Projects />} />
              <Route path="customers" element={<Customers />} />
              <Route path="finance" element={<Finance />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="users" element={<Users />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
            {/* Redirect root to dashboard for now */}
            <Route path="*" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;