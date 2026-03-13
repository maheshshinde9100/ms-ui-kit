import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Rating = ({ 
  value = 0, 
  count = 5, 
  onChange, 
  readonly = false,
  size = 20,
  activeColor = 'text-yellow-400',
  inactiveColor = 'text-gray-300 dark:text-gray-700',
  className = '' 
}) => {
  const [hover, setHover] = useState(null);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[...Array(count)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            type="button"
            className={`transition-transform duration-150 ${readonly ? 'cursor-default' : 'hover:scale-125'}`}
            onClick={() => !readonly && onChange && onChange(ratingValue)}
            onMouseEnter={() => !readonly && setHover(ratingValue)}
            onMouseLeave={() => !readonly && setHover(null)}
          >
            <Star
              size={size}
              className={`${(hover || value) >= ratingValue ? activeColor : inactiveColor}`}
              fill={(hover || value) >= ratingValue ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth={2}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
