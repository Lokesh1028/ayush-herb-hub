
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { PlantCard } from '@/components/PlantCard';
import { plants } from '@/data/plants';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const BrowsePlants = () => {
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredPlants(plants);
    } else {
      const filtered = plants.filter(plant => 
        plant.commonName.toLowerCase().includes(query.toLowerCase()) ||
        plant.botanicalName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPlants(filtered);
    }
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-herb-800 dark:text-herb-100 mb-6">Browse Medicinal Plants</h1>
        <div className="relative max-w-md mb-8">
          <Input
            type="text"
            placeholder="Filter plants..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 pr-4 py-3 bg-white dark:bg-herb-900 border-herb-200 dark:border-herb-700 focus:border-herb-500 focus:ring-herb-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No plants found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BrowsePlants;
