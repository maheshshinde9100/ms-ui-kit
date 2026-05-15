import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFocusTrap } from '../../hooks/useFocusTrap';

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  size = 'md'
}) => {
  const drawerRef = useRef(null);
  useFocusTrap(drawerRef, isOpen, { onEscape: onClose });
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow || '';
    };
  }, [isOpen]);

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full'
  };

  const variants = {
    right: { x: '100%' },
    left: { x: '-100%' },
    top: { y: '-100%' },
    bottom: { y: '100%' }
  };

  const titleId = 'drawer-title';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
          />


          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={variants[position]}
            animate={position === 'right' || position === 'left' ? { x: 0 } : { y: 0 }}
            exit={variants[position]}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed
                            ${position === 'right' ? 'right-0' : 'left-0'}
                            ${position === 'top' ? 'top-0' : 'bottom-0'}
                            ${(position === 'left' || position === 'right')
                ? 'h-full ' + sizes[size]
                : 'w-full h-auto'}
                            bg-white dark:bg-gray-900 shadow-2xl z-[1000] flex flex-col overflow-hidden
                            border-gray-100 dark:border-gray-800 focus:outline-none
                            ${position === 'right' ? 'border-l' : ''}
                            ${position === 'left' ? 'border-r' : ''}
                            ${position === 'top' ? 'border-b' : ''}
                            ${position === 'bottom' ? 'border-t' : ''}
                        `}
          >

            <div className="px-6 py-4 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900 sticky top-0 z-10">
              <h3
                id={titleId}
                className="text-xl font-bold text-gray-900 dark:text-white leading-none"
              >
                {title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close drawer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-500"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>


            <div className="flex-1 overflow-y-auto p-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
