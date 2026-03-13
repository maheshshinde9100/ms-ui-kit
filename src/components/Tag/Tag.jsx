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
    blue: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
    green: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800',
    red: 'bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800',
    purple: 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800',
    gray: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs font-bold',
    md: 'px-2.5 py-1 text-sm font-bold',
    lg: 'px-3 py-1.5 text-base font-bold',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}>
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
