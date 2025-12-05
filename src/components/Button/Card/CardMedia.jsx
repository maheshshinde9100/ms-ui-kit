import React from 'react';

/**
 * CardMedia Component
 * Media section for cards (images, videos, etc.)
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.height - Custom height (sm, md, lg, xl, full)
 * @param {boolean} props.rounded - Rounded corners
 * @param {React.ReactNode} props.overlay - Overlay content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} CardMedia component
 */
const CardMedia = ({
  src,
  alt = '',
  height = 'md',
  rounded = true,
  overlay,
  className = '',
  children,
  ...props
}) => {
  const heightClasses = {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64',
    xl: 'h-80',
    full: 'h-full',
  };

  return (
    <div
      className={`
        relative w-full
        ${heightClasses[height]}
        ${rounded ? 'rounded-t-xl' : ''}
        overflow-hidden
        ${className}
      `}
      {...props}
    >
      {/* Image */}
      {src && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      )}
      
      {/* Custom children (for video, icons, etc.) */}
      {!src && children && (
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div className="text-white">{overlay}</div>
        </div>
      )}
    </div>
  );
};

export default CardMedia;