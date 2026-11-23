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
            {label && <label className="block text-[13px] font-medium text-ink-soft mb-2">{label}</label>}
            
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center gap-3 px-5 py-2.5 bg-surface border rounded-full transition-[border-color,box-shadow] text-left group
                    ${isOpen ? 'border-accent ring-4 ring-accent-soft' : 'border-line hover:border-line-strong'}`}
            >
                <CalendarIcon size={16} className="text-faint group-hover:text-accent-ink transition-colors" />
                <span className={selected ? "text-ink text-sm font-medium" : "text-faint text-sm"}>
                    {selected ? formatDate(selected) : placeholder}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 mt-2 p-5 bg-surface border border-line rounded-2xl shadow-[0_12px_40px_rgba(10,10,10,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] z-50 min-w-[300px]"
                        >
                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-[15px] font-semibold text-ink">
                                    {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                </h4>
                                <div className="flex gap-1">
                                    <button onClick={prevMonth} className="grid h-8 w-8 place-items-center rounded-full text-ink-soft hover:bg-surface-2 hover:text-ink transition-colors">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button onClick={nextMonth} className="grid h-8 w-8 place-items-center rounded-full text-ink-soft hover:bg-surface-2 hover:text-ink transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Week Days */}
                            <div className="grid grid-cols-7 gap-1 mb-1.5">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                    <div key={day} className="text-center font-mono text-[10px] uppercase tracking-[0.1em] text-faint py-1.5">
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
                                            className={`aspect-square flex items-center justify-center rounded-full text-[13px] font-medium transition-colors
                                                ${isSelected 
                                                    ? 'bg-accent text-white' 
                                                    : isToday
                                                        ? 'border border-accent-line text-accent-ink'
                                                        : 'hover:bg-surface-2 text-ink-soft'
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
