import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DatePicker = ({ 
    selected, 
    onChange, 
    label, 
    placeholder = "Select date" 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(selected || new Date());

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const handleDateClick = (day) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        onChange(newDate);
        setIsOpen(false);
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const formatDate = (date) => {
        if (!date) return "";
        return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className="relative w-full">
            {label && <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{label}</label>}
            
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-500 transition-all text-left group"
            >
                <CalendarIcon size={18} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                <span className={selected ? "text-gray-900 dark:text-white font-medium" : "text-gray-400"}>
                    {selected ? formatDate(selected) : placeholder}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 mt-2 p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-2xl z-50 min-w-[320px]"
                        >
                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="font-black text-gray-900 dark:text-white">
                                    {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                </h4>
                                <div className="flex gap-1">
                                    <button onClick={prevMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Week Days */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                    <div key={day} className="text-center text-[10px] font-black uppercase tracking-widest text-gray-400 py-2">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Days */}
                            <div className="grid grid-cols-7 gap-1">
                                {Array(firstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth())).fill(null).map((_, i) => (
                                    <div key={`empty-${i}`} />
                                ))}
                                {[...Array(daysInMonth(currentMonth.getFullYear(), currentMonth.getMonth()))].map((_, i) => {
                                    const day = i + 1;
                                    const isSelected = selected && 
                                        selected.getDate() === day && 
                                        selected.getMonth() === currentMonth.getMonth() && 
                                        selected.getFullYear() === currentMonth.getFullYear();
                                    const isToday = new Date().getDate() === day && 
                                        new Date().getMonth() === currentMonth.getMonth() && 
                                        new Date().getFullYear() === currentMonth.getFullYear();

                                    return (
                                        <button
                                            key={day}
                                            onClick={() => handleDateClick(day)}
                                            className={`aspect-square flex items-center justify-center rounded-xl text-sm font-bold transition-all
                                                ${isSelected 
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                                                    : isToday
                                                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600'
                                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                }`}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DatePicker;
