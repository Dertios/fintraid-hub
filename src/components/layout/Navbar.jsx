
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Menu, X, Sun, Moon, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/context/AuthContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <span className="text-primary font-bold text-xl">FinTraid</span>
              <span className="text-accent font-bold ml-1">Hub</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-4">
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
              <NavLink to="/market" onClick={closeMenu}>Market</NavLink>
              <NavLink to="/analytics" onClick={closeMenu}>Analytics</NavLink>
              <NavLink to="/transactions" onClick={closeMenu}>Transactions</NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    {firstLetter}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <MobileNavLink to="/" onClick={closeMenu}>Home</MobileNavLink>
            <MobileNavLink to="/dashboard" onClick={closeMenu}>Dashboard</MobileNavLink>
            <MobileNavLink to="/market" onClick={closeMenu}>Market</MobileNavLink>
            <MobileNavLink to="/analytics" onClick={closeMenu}>Analytics</MobileNavLink>
            <MobileNavLink to="/transactions" onClick={closeMenu}>Transactions</MobileNavLink>
            <MobileNavLink to="/settings" onClick={closeMenu}>Settings</MobileNavLink>
            <div className="py-2">
              <button 
                className="w-full flex items-center px-3 py-2 text-base font-medium rounded-md text-destructive"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" /> Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
