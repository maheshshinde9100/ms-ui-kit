import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * ms-ui-kit Modal Component
 * A premium dialog component with glassmorphism and animations
 */
const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md', // sm, md, lg, xl, full
    closeOnBackdrop = true,
    className = '',
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
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-[95vw] h-[95vh]',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#0a0a0a]/50 backdrop-blur-sm"
                        onClick={closeOnBackdrop ? onClose : undefined}
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 12 }}
                        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                        className={`
                            relative w-full bg-surface text-ink 
                            rounded-2xl border border-line
                            shadow-[0_24px_80px_rgba(10,10,10,0.25)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.6)]
                            flex flex-col overflow-hidden
                            ${sizes[size]}
                            ${className}
                        `}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-line">
                            <h3 className="text-[15px] font-semibold text-ink">
                                {title}
                            </h3>
                            <button
                                onClick={onClose}
                                aria-label="Close dialog"
                                className="grid h-8 w-8 place-items-center rounded-full text-ink-soft hover:bg-surface-2 hover:text-ink transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 px-6 py-4 overflow-y-auto">
                            {children}
                        </div>

                        {/* Footer */}
                        {footer && (
                            <div className="px-6 py-4 border-t border-line bg-surface-2/60">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
