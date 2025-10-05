
import React from 'react';

interface PaywallProps {
  onUnlock: () => void;
}

const Paywall: React.FC<PaywallProps> = ({ onUnlock }) => {
  return (
    <div className="mt-12 text-center p-8 bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-lg">
      <h3 className="text-2xl font-bold text-white">Unlock the Full Report</h3>
      <p className="text-slate-400 mt-2 mb-6">Get access to the complete list of {`>10`} ranked programs, full data, and CSV export.</p>
      <button
        onClick={onUnlock}
        className="px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-lg hover:from-green-600 hover:to-teal-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Pay $10 to Unlock Full List & Export
      </button>
    </div>
  );
};

export default Paywall;
