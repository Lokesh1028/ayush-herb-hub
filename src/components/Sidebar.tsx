
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
        className="fixed top-4 left-4 z-50 md:hidden shadow-md hover:shadow-lg transition-all bg-black/20 backdrop-blur-md border-white/30 text-white" 
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5 animate-fade-in" /> : <Menu className="h-5 w-5 animate-fade-in" />}
      </Button>
      
      <aside 
        ref={sidebarRef}
        className={cn(
          "fixed inset-y-0 left-0 z-40 bg-black/40 backdrop-blur-md border-r border-white/20 transition-all duration-300 ease-in-out transform md:translate-x-0 shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          isHovered ? "md:w-64" : "md:w-16"
        )}
      >
        <div className="p-6">
          <div className={cn(
            "flex items-center space-x-2 mb-8",
            !isHovered && "md:justify-center"
          )}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex-shrink-0 shadow-md transition-transform duration-300 hover:scale-110"></div>
            <h2 className={cn(
              "text-xl font-bold text-white transition-all duration-300",
              !isHovered && "md:opacity-0 md:w-0"
            )}>AYUSH Herbs</h2>
          </div>
          
          <nav className="mt-8 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:translate-x-1",
                  !isHovered && "md:justify-center md:px-0",
                  location.pathname === item.path 
                    ? "bg-teal-700/40 text-white shadow-md" 
                    : "text-blue-100 hover:bg-teal-800/30"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-all duration-300", 
                  isHovered ? "mr-3" : "",
                  location.pathname === item.path ? "text-amber-200" : ""
                )} />
                <span className={cn(
                  "transition-all duration-300", 
                  !isHovered && "md:opacity-0 md:w-0 md:overflow-hidden"
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
