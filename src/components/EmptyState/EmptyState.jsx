import React from 'react';
import { Button } from '../Button';

const EmptyState = ({ 
  icon, 
  title, 
  description, 
  actionLabel, 
  onAction,
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center rounded-3xl border-2 border-dashed border-gray-100 dark:border-gray-800 ${className}`}>
      {icon && (
        <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-full text-gray-400">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
        {description}
      </p>
      {actionLabel && (
        <Button onClick={onAction} variant="premium">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
