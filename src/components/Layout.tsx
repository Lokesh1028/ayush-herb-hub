
import React from 'react';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className={cn("flex-1 transition-all duration-300 p-6 md:p-8 lg:p-10 md:ml-16", className)}>
        {children}
      </main>
    </div>
  );
};
