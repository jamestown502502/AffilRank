import React from 'react';

interface LoadingSpinnerProps {
  searchTerm: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ searchTerm }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <svg className="animate-spin h-16 w-16 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <h2 className="mt-6 text-2xl font-bold text-white">
        Analyzing programs for '{searchTerm}'
      </h2>
      <p className="mt-2 text-slate-400 max-w-xl">
        We're analyzing dozens of data points: commission rates, cookie duration, payout models, and program reputation to calculate a simple, comparable score.
      </p>
      <p className="text-sm text-slate-500 mt-2">Please wait, this may take a moment.</p>
    </div>
  );
};

export default LoadingSpinner;
