
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SearchBar } from '@/components/SearchBar';
import { PlantCard } from '@/components/PlantCard';
import { searchPlantsByName, searchPlantsByAilment, Plant } from '@/data/plants';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Plant[]>([]);
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [searchType, setSearchType] = useState(searchParams.get('type') || 'name');
  
  useEffect(() => {
    const searchQuery = searchParams.get('q');
    const type = searchParams.get('type');
    
    if (searchQuery) {
      setQuery(searchQuery);
      setSearchType(type || 'name');
      performSearch(searchQuery, type === 'ailment');
    }
  }, [searchParams]);
  
  const performSearch = (searchQuery: string, searchByAilment: boolean) => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = searchByAilment 
      ? searchPlantsByAilment(searchQuery) 
      : searchPlantsByName(searchQuery);
    
    setSearchResults(results);
  };
  
  const handleSearch = (searchQuery: string, searchByAilment: boolean) => {
    setSearchParams({
      q: searchQuery,
      type: searchByAilment ? 'ailment' : 'name'
    });
    performSearch(searchQuery, searchByAilment);
  };
  
  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-herb-800 dark:text-herb-100 mb-6">Search Medicinal Plants</h1>
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {query && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-herb-700 dark:text-herb-300 mb-2">
              Search Results for "{query}"
              {searchType === 'ailment' ? ' (Ailment)' : ' (Plant Name)'}
            </h2>
            {searchResults.length === 0 && (
              <p className="text-muted-foreground">No plants found matching your search criteria.</p>
            )}
          </div>
        )}
        
        {searchResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        )}
        
        {!query && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Enter a search term above to find medicinal plants.
              <br />
              You can search by plant name or by ailment.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
