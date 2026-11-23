import React from 'react';

const Progress = ({ 
  value = 0, 
  max = 100, 
  variant = 'primary', 
  size = 'md', 
  showValue = false,
  animated = true,
  className = '' 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const containerSizes = {
    sm: 'h-1',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6'
  };

  const variantClasses = {
    primary: 'bg-accent',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-red-500',
    premium: 'bg-accent',
  };

  return (
    <div className={`w-full ${className}`}>
      {showValue && (
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-ink-soft">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className={`w-full bg-surface-2 rounded-full overflow-hidden ${containerSizes[size]}`}>
        <div 
          className={`h-full rounded-full transition-all duration-500 ease-out ${variantClasses[variant]} ${animated ? 'relative overflow-hidden' : ''}`}
          style={{ width: `${percentage}%` }}
        >
          {animated && (
            <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Progress;
