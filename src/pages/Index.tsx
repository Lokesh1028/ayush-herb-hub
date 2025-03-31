
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
    <Layout>
      <section className="mb-12 search-container py-12 px-6 sm:px-10 rounded-xl border border-white/20 bg-black/30 backdrop-blur-md">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in text-shadow">
            Virtual Herbal Garden
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-slide-up">
            Explore medicinal plants used in AYUSH systems
          </p>
          <div className="animate-slide-up">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="mt-6 flex justify-center gap-4 animate-slide-up">
            <Button asChild variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
              <Link to="/browse">Browse All Herbs</Link>
            </Button>
            <Button asChild className="bg-teal-700/80 hover:bg-teal-600/80 text-white">
              <Link to="/about">About AYUSH</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white text-shadow">
            Featured Herbs
          </h2>
          <Button asChild variant="link" className="text-amber-200 hover:text-amber-100">
            <Link to="/browse">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
      
      <section className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-amber-100 mb-4">About the Project</h2>
        <p className="text-white mb-4">
          The Virtual Herbal Garden is an educational resource designed to help students learn about 
          medicinal plants used in AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy) systems 
          of medicine.
        </p>
        <p className="text-white">
          Explore the various herbs, their medicinal properties, uses, and identification characteristics 
          in this interactive digital resource.
        </p>
      </section>
    </Layout>
  );
};

export default Index;
