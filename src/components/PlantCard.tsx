
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
      <Card className="herb-card h-full overflow-hidden border border-herb-100 dark:border-herb-800">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-herb-500/20 z-10"></div>
          <div className="h-full w-full bg-herb-200 flex items-center justify-center">
            <span className="text-herb-500 text-sm">Plant Image</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-herb-800 dark:text-herb-100 mb-1">{plant.commonName}</h3>
          <p className="text-sm italic text-herb-600 dark:text-herb-300 mb-3">{plant.botanicalName}</p>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
            {plant.description.substring(0, 120)}...
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {plant.ailmentsTreated.slice(0, 2).map((ailment, index) => (
              <Badge key={index} variant="outline" className="bg-herb-50 text-herb-700 border-herb-200 dark:bg-herb-900 dark:text-herb-300 dark:border-herb-700">
                {ailment.split(' ')[0]}
              </Badge>
            ))}
            {plant.ailmentsTreated.length > 2 && (
              <Badge variant="outline" className="bg-herb-50 text-herb-700 border-herb-200 dark:bg-herb-900 dark:text-herb-300 dark:border-herb-700">
                +{plant.ailmentsTreated.length - 2} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
