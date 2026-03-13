import React from 'react';

const Skeleton = ({ 
  variant = 'text', 
  width, 
  height, 
  className = '', 
  animate = true 
}) => {
  const baseClasses = `
    bg-gray-200 dark:bg-gray-800 
    ${animate ? 'animate-pulse' : ''}
    ${className}
  `;

  const variantClasses = {
    text: 'rounded h-4 w-full mb-2',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style = {
    width: width || (variant === 'circular' ? '40px' : undefined),
    height: height || (variant === 'circular' ? '40px' : undefined),
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]}`} 
      style={style}
    />
  );
};

export default Skeleton;
