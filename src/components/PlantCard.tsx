
import React from 'react';
import { Link } from 'react-router-dom';
import { Plant } from '@/data/plants';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <Link to={`/plant/${plant.id}`}>
      <Card className="herb-card overflow-hidden border border-herb-100 dark:border-herb-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full bg-white/70 dark:bg-herb-900/70 backdrop-blur-sm">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-herb-500/0 to-herb-500/30 z-10"></div>
          <div className="h-full w-full bg-gradient-to-br from-herb-100 to-herb-200 dark:from-herb-800 dark:to-herb-900 flex items-center justify-center overflow-hidden">
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-herb-300/30 dark:bg-herb-700/30 rounded-full"></div>
              <div className="absolute inset-4 bg-herb-400/30 dark:bg-herb-600/30 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-herb-700 dark:text-herb-300 text-sm font-medium">{plant.commonName.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-5 relative">
          <h3 className="text-lg font-semibold text-herb-800 dark:text-herb-100 mb-1 group-hover:text-herb-600 transition-colors">{plant.commonName}</h3>
          <p className="text-sm italic text-herb-600 dark:text-herb-300 mb-3">{plant.botanicalName}</p>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
            {plant.description.substring(0, 120)}...
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {plant.ailmentsTreated.slice(0, 2).map((ailment, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-herb-50/80 text-herb-700 border-herb-200 dark:bg-herb-900/80 dark:text-herb-300 dark:border-herb-700 transition-all duration-200 hover:bg-herb-100 hover:scale-105"
              >
                {ailment.split(' ')[0]}
              </Badge>
            ))}
            {plant.ailmentsTreated.length > 2 && (
              <Badge 
                variant="outline" 
                className="bg-herb-50/80 text-herb-700 border-herb-200 dark:bg-herb-900/80 dark:text-herb-300 dark:border-herb-700 transition-all duration-200 hover:bg-herb-100 hover:scale-105"
              >
                +{plant.ailmentsTreated.length - 2} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
