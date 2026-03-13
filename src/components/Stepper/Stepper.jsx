import React from 'react';
import { Check } from 'lucide-react';

const Stepper = ({ 
  steps = [], 
  current = 0, 
  className = '' 
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative flex justify-between">
        {/* Progress Bar Background */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>
        
        {/* Active Progress Bar */}
        <div 
          className="absolute top-5 left-0 h-0.5 bg-blue-600 transition-all duration-500 -z-10"
          style={{ width: `${(current / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, index) => {
          const isCompleted = index < current;
          const isActive = index === current;

          return (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isCompleted ? 'bg-blue-600 border-blue-600 text-white' : 
                    isActive ? 'bg-white dark:bg-gray-900 border-blue-600 text-blue-600 shadow-lg shadow-blue-500/20' : 
                    'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-400'}
                `}
              >
                {isCompleted ? <Check size={20} /> : <span className="font-bold">{index + 1}</span>}
              </div>
              <div className="mt-2 text-center">
                <p className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>{step.label}</p>
                {step.description && <p className="text-[10px] text-gray-400 mt-0.5">{step.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
