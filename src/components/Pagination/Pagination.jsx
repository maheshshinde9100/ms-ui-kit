import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const Pagination = ({ 
  current = 1, 
  total = 10, 
  onChange,
  className = ''
}) => {
  const pages = [];
  
  // Logic to show pages with ellipsis
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 4) {
      pages.push(1, 2, 3, 4, 5, '...', total);
    } else if (current >= total - 3) {
      pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total);
    } else {
      pages.push(1, '...', current - 1, current, current + 1, '...', total);
    }
  }

  return (
    <nav className={`flex items-center gap-1 ${className}`} aria-label="Pagination">
      <button
        onClick={() => current > 1 && onChange(current - 1)}
        disabled={current === 1}
        className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-2 text-gray-400"><MoreHorizontal size={18} /></span>
          ) : (
            <button
              onClick={() => onChange(page)}
              className={`
                min-w-[40px] h-10 rounded-lg font-bold transition-all duration-200
                ${current === page 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'}
              `}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        onClick={() => current < total && onChange(current + 1)}
        disabled={current === total}
        className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
};

export default Pagination;
