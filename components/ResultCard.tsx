
import React from 'react';
import { ProgramResult } from '../types';

interface ResultCardProps {
  result: ProgramResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-white pr-4">{result.name}</h3>
        <div className="flex flex-col items-center justify-center bg-blue-500 rounded-full w-16 h-16 flex-shrink-0 border-4 border-slate-700">
          <span className="text-white font-bold text-2xl">{result.score}</span>
          <span className="text-xs text-blue-100">Score</span>
        </div>
      </div>
      <p className="mt-4 text-slate-400">
        Commission: <span className="font-semibold text-slate-300">{result.commission_raw}</span>
      </p>
    </div>
  );
};

export default ResultCard;
