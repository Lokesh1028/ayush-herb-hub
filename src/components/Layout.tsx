
import React from 'react';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="flex min-h-screen bg-herb-50/50 dark:bg-herb-900/50 relative font-nunito">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
           style={{ backgroundImage: 'url("/lovable-uploads/773d3d8f-f2b4-4c1f-9252-352c5bad6143.png")' }}>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      </div>
      
      <Sidebar />
      <main className={cn("flex-1 transition-all duration-300 p-6 md:p-8 lg:p-10 md:ml-16 relative z-10", className)}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
