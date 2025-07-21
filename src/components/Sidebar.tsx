import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Home, Book, Search, Info, Leaf } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
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
        className="fixed top-4 left-4 z-50 md:hidden shadow-md hover:shadow-lg transition-all" 
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5 animate-fade-in" /> : <Menu className="h-5 w-5 animate-fade-in" />}
      </Button>
      
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-herb-50/90 dark:bg-herb-900/90 backdrop-blur-sm border-r border-herb-200 dark:border-herb-800 transition-all duration-300 ease-in-out transform md:translate-x-0 shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            {imageError ? (
              <div className="h-8 w-8 flex-shrink-0 bg-herb-100 dark:bg-herb-800 rounded-md flex items-center justify-center shadow-md">
                <Leaf className="h-5 w-5 text-herb-600 dark:text-herb-300" />
              </div>
            ) : (
              <img 
                src="/lovable-uploads/b22e9d08-ba3c-4517-8e7c-1fda27423206.png" 
                alt="AYUSH Herbs Leaf Logo" 
                onError={() => setImageError(true)}
                className="h-8 w-8 flex-shrink-0 shadow-md transition-transform duration-300 hover:scale-110 bg-white dark:bg-herb-800 rounded-md object-contain p-1"
              />
            )}
            <h2 className="text-xl font-bold text-herb-800 dark:text-herb-100 transition-all duration-300">
              AYUSH Herbs
            </h2>
          </div>
          
          <nav className="mt-8 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:translate-x-1",
                  location.pathname === item.path 
                    ? "bg-herb-200/80 text-herb-800 dark:bg-herb-800/80 dark:text-herb-100 shadow-md" 
                    : "text-herb-700 hover:bg-herb-100/80 dark:text-herb-200 dark:hover:bg-herb-800/80"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 mr-3 transition-all duration-300", 
                  location.pathname === item.path ? "text-herb-600 dark:text-herb-300" : ""
                )} />
                <span className="transition-all duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
