
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
      <Card className="overflow-hidden border-white/20 bg-black/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full animate-fade-in">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-teal-900/70 to-blue-900/70 flex items-center justify-center">
            <div className="text-6xl font-serif text-amber-200 opacity-80">
              {plant.commonName.charAt(0)}
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="mb-4 text-left">
            <Badge 
              variant="outline" 
              className="bg-teal-800/60 text-amber-100 border-teal-700/60 uppercase tracking-wider text-xs font-medium px-2.5 py-0.5"
            >
              {plant.partsUsed[0] || "Herbal"}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 leading-tight font-poppins text-left">
            {plant.commonName}
          </h3>
          
          <p className="text-sm text-blue-100 italic mb-3 font-nunito text-left">
            {plant.botanicalName}
          </p>
          
          <p className="text-gray-100 text-sm leading-relaxed line-clamp-3 font-nunito text-left">
            {plant.description.substring(0, 120)}...
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
