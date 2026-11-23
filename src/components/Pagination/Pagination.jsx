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
    <nav className={`flex items-center gap-1.5 ${className}`} aria-label="Pagination">
      <button
        onClick={() => current > 1 && onChange(current - 1)}
        disabled={current === 1}
        className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft disabled:opacity-40 disabled:cursor-not-allowed hover:border-line-strong hover:text-ink transition-colors"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-1.5 text-faint"><MoreHorizontal size={16} /></span>
          ) : (
            <button
              onClick={() => onChange(page)}
              className={`
                h-9 min-w-[36px] rounded-full text-[13px] font-medium transition-colors duration-200
                ${current === page 
                  ? 'bg-ink text-paper' 
                  : 'text-ink-soft hover:bg-surface-2 border border-line'}
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
        className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft disabled:opacity-40 disabled:cursor-not-allowed hover:border-line-strong hover:text-ink transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};

export default Pagination;
