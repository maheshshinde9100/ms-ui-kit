import React, { useState, createContext, useContext, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const addToast = useCallback((toast) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, ...toast }]);
        if (toast.duration !== 0) {
            setTimeout(() => {
                removeToast(id);
            }, toast.duration || 3000);
        }
    }, [removeToast]);

    const toast = {
        success: (message, options) => addToast({ type: 'success', message, ...options }),
        error: (message, options) => addToast({ type: 'error', message, ...options }),
        info: (message, options) => addToast({ type: 'info', message, ...options }),
        warning: (message, options) => addToast({ type: 'warning', message, ...options }),
    };

    return (
        <ToastContext.Provider value={toast}>
            {children}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((t) => (
                        <ToastItem key={t.id} {...t} onRemove={() => removeToast(t.id)} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};

const ToastItem = ({ type, message, onRemove }) => {
    const icons = {
        success: <CheckCircle2 className="text-emerald-600 dark:text-emerald-400" size={18} />,
        error: <AlertCircle className="text-red-500" size={18} />,
        info: <Info className="text-accent-ink" size={18} />,
        warning: <AlertTriangle className="text-amber-500" size={18} />,
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border border-line bg-surface shadow-[0_12px_40px_rgba(10,10,10,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] min-w-[280px] max-w-md"
        >
            <div className="flex-shrink-0">{icons[type]}</div>
            <p className="flex-1 text-[13px] font-medium text-ink leading-snug">
                {message}
            </p>
            <button
                onClick={onRemove}
                aria-label="Dismiss"
                className="flex-shrink-0 grid h-7 w-7 place-items-center rounded-full text-faint hover:bg-surface-2 hover:text-ink transition-colors"
            >
                <X size={14} />
            </button>
        </motion.div>
    );
};

export default ToastProvider;
