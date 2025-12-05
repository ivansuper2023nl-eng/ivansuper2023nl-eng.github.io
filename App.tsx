import React from 'react';
import { GREETING_MESSAGE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl transform transition-all hover:scale-105 duration-300">
        <div className="md:flex">
          <div className="md:shrink-0 bg-indigo-500 h-32 md:h-auto md:w-48 flex items-center justify-center">
             <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              System Notification
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              {GREETING_MESSAGE}
            </h1>
            <p className="mt-2 text-slate-500">
              This is a production-ready React component structure using Tailwind CSS for styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;