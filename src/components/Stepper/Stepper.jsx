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
        <div className="absolute top-[18px] left-0 w-full h-px bg-line -z-10"></div>
        
        {/* Active Progress Bar */}
        <div 
          className="absolute top-[18px] left-0 h-px bg-accent transition-all duration-500 -z-10"
          style={{ width: `${(current / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, index) => {
          const isCompleted = index < current;
          const isActive = index === current;

          return (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`
                  w-9 h-9 rounded-full flex items-center justify-center border text-[13px] font-medium transition-colors duration-300
                  ${isCompleted ? 'bg-accent border-accent text-white' : 
                    isActive ? 'bg-surface border-accent text-accent-ink ring-4 ring-accent-soft' : 
                    'bg-surface border-line text-faint'}
                `}
              >
                {isCompleted ? <Check size={16} /> : <span>{index + 1}</span>}
              </div>
              <div className="mt-2.5 text-center">
                <p className={`font-mono text-[10px] uppercase tracking-[0.14em] ${isActive ? 'text-ink' : 'text-ink-soft'}`}>{step.label}</p>
                {step.description && <p className="text-[11px] text-faint mt-0.5">{step.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
