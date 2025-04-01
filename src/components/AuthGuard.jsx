
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const AuthGuard = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user && !location.pathname.startsWith('/auth/')) {
      navigate('/auth/login', { replace: true });
    }
  }, [user, loading, navigate, location]);

  // If loading, show a loading state
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If not authenticated and trying to access a protected route, redirect happens in the useEffect
  // If authenticated or on an auth route, render children
  return children;
};

export default AuthGuard;
