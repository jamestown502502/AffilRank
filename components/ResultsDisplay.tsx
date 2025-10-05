import React from 'react';
import { ProgramResult } from '../types';
import ResultsTable from './ResultsTable';
import { exportToCSV } from '../services/csvExporter';
import { CsvIcon } from './icons/CsvIcon';

interface ResultsDisplayProps {
  results: ProgramResult[];
  searchTerm: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, searchTerm }) => {

  const handleExport = () => {
    exportToCSV(results, `affilrank_${searchTerm.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}`);
  };

  return (
    <div className="w-full animate-fade-in">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          Top Affiliate Programs for <span className="text-blue-400">'{searchTerm}'</span>
        </h1>
        <p className="text-slate-400 mt-2">Here is your complete, ranked list. Use the export button to save your data.</p>
      </header>
      
      <div className="flex justify-end mb-4">
        <button
          onClick={handleExport}
          className="flex items-center justify-center px-4 py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 active:scale-95 transition-all duration-200"
          aria-label="Export results to a CSV file"
        >
          <CsvIcon className="h-5 w-5 mr-2" />
          Export to CSV
        </button>
      </div>

      <ResultsTable results={results} />
    </div>
  );
};

export default ResultsDisplay;
