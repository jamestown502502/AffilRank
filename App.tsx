import React, { useState, useCallback } from 'react';
import { ProgramResult, AppState } from './types';
import { placeholderData } from './constants';
import SearchForm from './components/SearchForm';
import LoadingSpinner from './components/LoadingSpinner';
import ResultsDisplay from './components/ResultsDisplay';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('idle');
  const [searchTerm, setSearchTerm] = useState('');
  const [resultsData, setResultsData] = useState<ProgramResult[]>([]);

  const handleSearch = useCallback((term: string) => {
    if (!term.trim()) return;
    setSearchTerm(term);
    setAppState('loading');

    // Simulate API call to fetch and rank programs
    console.log(`Simulating search for: ${term}`);
    setTimeout(() => {
      // In a real app, this data would come from a backend API
      setResultsData(placeholderData);
      setAppState('results');
    }, 3000);
  }, []);
  
  const isIdle = appState === 'idle';

  const renderContent = () => {
    switch (appState) {
      case 'loading':
        return <LoadingSpinner searchTerm={searchTerm} />;
      case 'results':
        return <ResultsDisplay results={resultsData} searchTerm={searchTerm} />;
      case 'idle':
      default:
        return (
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              AffilRank
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-2 max-w-3xl mx-auto">
              Find the best affiliate programs for your niche. Instantly.
            </p>
             <p className="text-slate-500 mb-8 max-w-3xl mx-auto">
              Our AI-powered tool scrapes and analyzes program terms, payouts, and trust scores, so you don't have to. Enter a niche to get a free, ranked list of top programs.
            </p>
            <SearchForm onSearch={handleSearch} isLoading={false} />
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-200 flex flex-col p-4 ${isIdle ? 'items-center justify-center' : 'items-center justify-start pt-12 md:pt-20'}`}>
      <main className="w-full max-w-7xl mx-auto">
        {renderContent()}
      </main>
       <footer className="w-full text-center p-4 mt-auto">
        <p className="text-sm text-slate-600">
          Created by Bennett AI Solutions Inc.
        </p>
      </footer>
    </div>
  );
};

export default App;
