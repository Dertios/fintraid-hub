
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@/hooks/use-theme';
import MainLayout from './components/layout/MainLayout';
import AuthGuard from './components/AuthGuard';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Market from './pages/Market';
import Analytics from './pages/Analytics';
import Transactions from './pages/Transactions';
import Settings from './pages/Settings';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NotFound from "./pages/NotFound";
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AuthGuard>
              <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                
                {/* Use MainLayout for authenticated routes */}
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
                <Route path="/market" element={<MainLayout><Market /></MainLayout>} />
                <Route path="/analytics" element={<MainLayout><Analytics /></MainLayout>} />
                <Route path="/transactions" element={<MainLayout><Transactions /></MainLayout>} />
                <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
                
                {/* 404 route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthGuard>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
