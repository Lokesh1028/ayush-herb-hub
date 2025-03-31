
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Search, Book, Info, Home } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar on route change (for mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Browse Herbs', path: '/browse', icon: Book },
    { name: 'Search', path: '/search', icon: Search },
    { name: 'About AYUSH', path: '/about', icon: Info },
  ];

  return (
    <>
      <Button 
        variant="outline" 
        size="icon" 
        className="fixed top-4 left-4 z-50 md:hidden" 
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-herb-50 dark:bg-herb-900 border-r border-herb-200 dark:border-herb-800 transition-transform duration-300 ease-in-out transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-8 w-8 rounded-full bg-herb-500"></div>
            <h2 className="text-xl font-bold text-herb-800 dark:text-herb-100">AYUSH Herbs</h2>
          </div>
          
          <nav className="mt-8 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.path 
                    ? "bg-herb-200 text-herb-800 dark:bg-herb-800 dark:text-herb-100" 
                    : "text-herb-700 hover:bg-herb-100 dark:text-herb-200 dark:hover:bg-herb-800"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
