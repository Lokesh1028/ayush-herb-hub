
import React from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';
import { PlantCard } from '@/components/PlantCard';
import { plants } from '@/data/plants';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  const featuredPlants = plants.slice(0, 3);
  
  const handleSearch = (query: string, searchByAilment: boolean) => {
    navigate(`/search?q=${query}&type=${searchByAilment ? 'ailment' : 'name'}`);
  };
  
  return (
    <Layout className="leaf-pattern">
      <section className="mb-12 search-container py-12 -mx-10 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-herb-800 dark:text-herb-100 mb-4 animate-fade-in">
            Virtual Herbal Garden
          </h1>
          <p className="text-xl text-herb-700 dark:text-herb-200 mb-8 animate-slide-up">
            Explore medicinal plants used in AYUSH systems
          </p>
          <div className="animate-slide-up">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="mt-6 flex justify-center gap-4 animate-slide-up">
            <Button asChild variant="outline" className="border-herb-300 dark:border-herb-700">
              <Link to="/browse">Browse All Herbs</Link>
            </Button>
            <Button asChild className="bg-herb-600 hover:bg-herb-700">
              <Link to="/about">About AYUSH</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-herb-800 dark:text-herb-100">
            Featured Herbs
          </h2>
          <Button asChild variant="link" className="text-herb-600 dark:text-herb-400">
            <Link to="/browse">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
      
      <section className="bg-herb-50 dark:bg-herb-900/50 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-herb-800 dark:text-herb-100 mb-4">About the Project</h2>
        <p className="text-herb-700 dark:text-herb-300 mb-4">
          The Virtual Herbal Garden is an educational resource designed to help students learn about 
          medicinal plants used in AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy) systems 
          of medicine.
        </p>
        <p className="text-herb-700 dark:text-herb-300">
          Explore the various herbs, their medicinal properties, uses, and identification characteristics 
          in this interactive digital resource.
        </p>
      </section>
    </Layout>
  );
};

export default Index;
