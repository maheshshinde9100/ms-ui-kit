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
    <div className={`flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-line-strong ${className}`}>
      {icon && (
        <div className="mb-5 grid h-14 w-14 place-items-center rounded-full border border-line bg-surface-2 text-ink-soft">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-ink mb-1.5">{title}</h3>
      <p className="text-[13px] text-ink-soft max-w-sm mb-7 leading-relaxed">
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
