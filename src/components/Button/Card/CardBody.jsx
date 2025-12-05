import React from 'react';

/**
 * CardBody Component
 * Main content area for cards
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Body content
 * @param {boolean} props.padding - Add padding
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} CardBody component
 */
const CardBody = ({
  children,
  padding = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        ${padding ? 'px-6 py-4' : 'p-0'}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardBody;