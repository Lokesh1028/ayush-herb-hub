
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

interface SearchBarProps {
  onSearch: (query: string, searchByAilment: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchByAilment, setSearchByAilment] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, searchByAilment);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder={searchByAilment ? "Search by ailment..." : "Search by plant name..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 py-3 bg-white/20 border-white/30 text-white placeholder:text-blue-100 backdrop-blur-md focus:border-teal-500 focus:ring-teal-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-100" />
        </div>
        <div className="flex gap-2">
          <Toggle
            pressed={searchByAilment}
            onPressedChange={setSearchByAilment}
            className="bg-white/20 border border-white/30 text-blue-100 data-[state=on]:bg-teal-700/80 data-[state=on]:text-white backdrop-blur-md"
          >
            Search by Ailment
          </Toggle>
          <Button type="submit" className="bg-teal-700/80 hover:bg-teal-600/80 text-white">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};
