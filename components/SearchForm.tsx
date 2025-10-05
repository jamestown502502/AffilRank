import React, { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';

interface SearchFormProps {
  onSearch: (term: string) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoading) {
      onSearch(term);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <label htmlFor="niche-search" className="sr-only">
        Enter your niche to find affiliate programs
      </label>
      <div className="relative">
        <input
          type="text"
          id="niche-search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter your niche... (e.g., coffee, VPNs, pet supplies)"
          className="w-full pl-4 pr-32 py-4 text-lg bg-slate-800 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors duration-200"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:from-blue-600 hover:to-purple-700 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SearchIcon className="h-5 w-5 mr-2" />
          Rank Programs
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
