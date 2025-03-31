
import React from 'react';
import { Link } from 'react-router-dom';
import { Plant } from '@/data/plants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <Link to={`/plant/${plant.id}`}>
      <Card className="overflow-hidden border-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-white dark:bg-herb-900 animate-fade-in">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-herb-100 to-herb-200 dark:from-herb-800 dark:to-herb-900 flex items-center justify-center">
            <div className="text-6xl font-serif text-herb-600 dark:text-herb-300 opacity-50">
              {plant.commonName.charAt(0)}
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="mb-4 text-left">
            <Badge 
              variant="outline" 
              className="bg-herb-50 text-herb-600 border-herb-200 dark:bg-herb-900 dark:text-herb-400 dark:border-herb-700 uppercase tracking-wider text-xs font-medium px-2.5 py-0.5"
            >
              {plant.partsUsed[0] || "Herbal"}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-herb-800 dark:text-herb-100 mb-2 leading-tight font-poppins text-left">
            {plant.commonName}
          </h3>
          
          <p className="text-sm text-herb-600 dark:text-herb-400 italic mb-3 font-nunito text-left">
            {plant.botanicalName}
          </p>
          
          <p className="text-herb-700 dark:text-herb-300 text-sm leading-relaxed line-clamp-3 font-nunito text-left">
            {plant.description.substring(0, 120)}...
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
