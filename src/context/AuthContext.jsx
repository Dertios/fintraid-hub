
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Mock user data
const mockUsers = [
  {
    id: 1,
    name: 'Amit Kumar',
    email: 'amit@example.com',
    password: 'password123',
    profilePic: null
  },
  {
    id: 2,
    name: 'Priya Singh',
    email: 'priya@example.com',
    password: 'password123',
    profilePic: null
  }
];

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('fintraidUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Find user in mock data
    const foundUser = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (foundUser) {
      // Remove password from stored user object
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('fintraidUser', JSON.stringify(userWithoutPassword));
      toast.success('Login successful!');
      return true;
    } else {
      toast.error('Invalid email or password');
      return false;
    }
  };

  const register = (name, email, password) => {
    // Check if user already exists
    const userExists = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (userExists) {
      toast.error('User with this email already exists');
      return false;
    }

    // Create new user
    const newUser = {
      id: mockUsers.length + 1,
      name,
      email,
      password,
      profilePic: null
    };

    // Add to mock users (in a real app, this would be a database operation)
    mockUsers.push(newUser);

    toast.success('Registration successful! Please login.');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fintraidUser');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
