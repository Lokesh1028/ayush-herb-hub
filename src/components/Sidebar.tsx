
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Home, Book, Search, Info } from 'lucide-react';
import { useHover } from '@/hooks/use-hover';

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarRef, isHovered] = useHover<HTMLDivElement>();
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
        ref={sidebarRef}
        className={cn(
          "fixed inset-y-0 left-0 z-40 bg-herb-50 dark:bg-herb-900 border-r border-herb-200 dark:border-herb-800 transition-all duration-300 ease-in-out transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          isHovered ? "md:w-64" : "md:w-16"
        )}
      >
        <div className="p-6">
          <div className={cn(
            "flex items-center space-x-2 mb-8",
            !isHovered && "md:justify-center"
          )}>
            <div className="h-8 w-8 rounded-full bg-herb-500 flex-shrink-0"></div>
            <h2 className={cn(
              "text-xl font-bold text-herb-800 dark:text-herb-100 transition-opacity duration-300",
              !isHovered && "md:hidden"
            )}>AYUSH Herbs</h2>
          </div>
          
          <nav className="mt-8 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  !isHovered && "md:justify-center md:px-0",
                  location.pathname === item.path 
                    ? "bg-herb-200 text-herb-800 dark:bg-herb-800 dark:text-herb-100" 
                    : "text-herb-700 hover:bg-herb-100 dark:text-herb-200 dark:hover:bg-herb-800"
                )}
              >
                <item.icon className={cn("h-5 w-5", isHovered ? "mr-3" : "")} />
                <span className={cn(
                  "transition-opacity duration-300", 
                  !isHovered && "md:hidden"
                )}>
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
