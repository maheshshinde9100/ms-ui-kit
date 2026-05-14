import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Drawer = ({ 
    isOpen, 
    onClose, 
    title, 
    children, 
    position = 'right',
    size = 'md'
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
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

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
                    />
                    
                    {/* Drawer */}
                    <motion.div
                        initial={variants[position]}
                        animate={position === 'right' || position === 'left' ? { x: 0 } : { y: 0 }}
                        exit={variants[position]}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={`fixed ${position === 'right' ? 'right-0' : 'left-0'} ${position === 'top' ? 'top-0' : 'bottom-0'} 
                            ${(position === 'left' || position === 'right') ? 'h-full ' + sizes[size] : 'w-full h-auto'}
                            bg-white dark:bg-gray-900 shadow-2xl z-[1000] flex flex-col overflow-hidden border-gray-100 dark:border-gray-800
                            ${position === 'right' ? 'border-l' : ''}
                            ${position === 'left' ? 'border-r' : ''}
                            ${position === 'top' ? 'border-b' : ''}
                            ${position === 'bottom' ? 'border-t' : ''}
                        `}
                    >
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900 sticky top-0 z-10">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-none">{title}</h3>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-500"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
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
