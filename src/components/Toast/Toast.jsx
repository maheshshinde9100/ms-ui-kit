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

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};

const ToastItem = ({ type, message, onRemove }) => {
    const icons = {
        success: <CheckCircle2 className="text-emerald-500" size={20} />,
        error: <AlertCircle className="text-rose-500" size={20} />,
        info: <Info className="text-blue-500" size={20} />,
        warning: <AlertTriangle className="text-amber-500" size={20} />,
    };

    const bgColors = {
        success: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50',
        error: 'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900/50',
        info: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50',
        warning: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/50',
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className={`pointer-events-auto flex items-center gap-4 px-4 py-3 rounded-2xl border shadow-xl min-w-[300px] max-w-md ${bgColors[type]}`}
        >
            <div className="flex-shrink-0">{icons[type]}</div>
            <p className="flex-1 text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                {message}
            </p>
            <button
                onClick={onRemove}
                className="flex-shrink-0 p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
                <X size={16} className="text-gray-400" />
            </button>
        </motion.div>
    );
};

export default ToastProvider;
