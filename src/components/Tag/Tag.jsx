import React from 'react';
import { X } from 'lucide-react';

const Tag = ({ 
  children, 
  variant = 'blue', 
  size = 'md', 
  closable = false, 
  onClose,
  className = '' 
}) => {
  const variants = {
    blue: 'bg-accent-soft text-accent-ink border-accent-line',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50',
    red: 'bg-red-50 text-red-600 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900/50',
    purple: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/30 dark:text-violet-300 dark:border-violet-900/50',
    gray: 'bg-surface-2 text-ink-soft border-line',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[11px] font-medium',
    md: 'px-2.5 py-1 text-xs font-medium',
    lg: 'px-3 py-1.5 text-[13px] font-medium',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {closable && (
        <button 
          onClick={onClose}
          className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors"
        >
          <X size={size === 'sm' ? 12 : 14} />
        </button>
      )}
    </span>
  );
};

export default Tag;
