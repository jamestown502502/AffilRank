
import React from 'react';
import { ProgramResult } from '../types';

interface ResultsTableProps {
  results: ProgramResult[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-2xl">
      {/* Desktop Table Header */}
      <div className="hidden md:grid md:grid-cols-12 gap-4 p-4 font-bold text-slate-400 border-b border-slate-700 bg-slate-800/50">
        <div className="md:col-span-1">Rank</div>
        <div className="md:col-span-4">Program Name</div>
        <div className="md:col-span-4">Commission</div>
        <div className="md:col-span-2">Cookie</div>
        <div className="md:col-span-1 text-right">Score</div>
      </div>
      
      {/* Table Body / Mobile Cards */}
      <div className="divide-y divide-slate-700">
        {results.map((item, index) => (
          <div key={item.rank} className={`p-4 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'} 
            grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-12 md:gap-4 items-center`}>
            
            {/* Mobile labels */}
            <div className="font-bold text-slate-400 md:hidden">Rank</div>
            <div className="text-right md:text-left md:col-span-1 font-bold text-xl">{item.rank}</div>
            
            <div className="font-bold text-slate-400 md:hidden">Program Name</div>
            <div className="col-span-2 md:col-span-4 font-semibold text-white">
              <a href={item.program_url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                {item.name}
              </a>
            </div>

            <div className="font-bold text-slate-400 md:hidden">Commission</div>
            <div className="text-right md:text-left md:col-span-4 text-slate-300">{item.commission_raw}</div>

            <div className="font-bold text-slate-400 md:hidden">Cookie</div>
            <div className="text-right md:text-left md:col-span-2 text-slate-300">{item.cookie_duration} days</div>

            <div className="font-bold text-slate-400 md:hidden">Score</div>
            <div className="text-right md:col-span-1 font-bold text-blue-400 text-xl">{item.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsTable;
