
import React from 'react';
import { Link } from 'react-router-dom';
import { Plant } from '@/data/plants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Pill, Sprout } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <Link to={`/plant/${plant.id}`}>
      <Card className="overflow-hidden border-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-white/80 dark:bg-herb-900/80 backdrop-blur-sm animate-fade-in">
        <div className="aspect-[4/3] w-full overflow-hidden">
          {plant.imageUrl ? (
            <img 
              src={plant.imageUrl} 
              alt={plant.commonName} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-herb-100/90 to-herb-200/90 dark:from-herb-800/90 dark:to-herb-900/90 flex items-center justify-center">
              <div className="text-6xl font-serif text-herb-600 dark:text-herb-300 opacity-50">
                {plant.commonName.charAt(0)}
              </div>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold text-herb-800 dark:text-herb-100 mb-1 leading-tight font-poppins text-left">
            {plant.commonName}
          </h3>
          
          <p className="text-md text-herb-600 dark:text-herb-400 italic mb-4 font-nunito text-left">
            {plant.botanicalName}
          </p>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-left">
              <Leaf className="h-5 w-5 text-herb-500 dark:text-herb-400 flex-shrink-0" />
              <span className="text-herb-700 dark:text-herb-300 text-sm">
                Family: {plant.familyName || 'Unspecified'}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-left">
              <Sprout className="h-5 w-5 text-herb-500 dark:text-herb-400 flex-shrink-0" />
              <span className="text-herb-700 dark:text-herb-300 text-sm">
                Parts used: {plant.partsUsed.join(', ')}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-left">
              <Pill className="h-5 w-5 text-herb-500 dark:text-herb-400 flex-shrink-0" />
              <span className="text-herb-700 dark:text-herb-300 text-sm">
                Treats: {plant.ailmentsTreated.slice(0, 2).join(', ')}
                {plant.ailmentsTreated.length > 2 ? '...' : ''}
              </span>
            </div>
          </div>
          
          <p className="text-herb-700 dark:text-herb-300 text-sm leading-relaxed line-clamp-3 font-nunito text-left mb-4">
            {plant.description.substring(0, 120)}...
          </p>
          
          <p className="text-herb-500 hover:text-herb-600 dark:text-herb-400 dark:hover:text-herb-300 font-medium text-left transition-colors">
            Click to learn more
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
