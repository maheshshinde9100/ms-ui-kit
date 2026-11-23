import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DataTable = ({ 
    columns = [], 
    data = [], 
    searchable = true,
    paginated = true,
    pageSize = 5
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);

    // Sorting logic
    const sortedData = useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    // Filtering logic
    const filteredData = useMemo(() => {
        return sortedData.filter(item => 
            Object.values(item).some(val => 
                String(val).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [sortedData, searchTerm]);

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return filteredData.slice(start, start + pageSize);
    }, [filteredData, currentPage, pageSize]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const tableVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={tableVariants}
            className="w-full bg-surface text-ink rounded-2xl border border-line overflow-hidden"
        >
            {/* Header / Search */}
            {searchable && (
                <div className="p-4 border-b border-line flex items-center gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={16} />
                        <input
                            type="text"
                            placeholder="Search records..."
                            className="w-full pl-10 pr-4 py-2 bg-surface-2 border border-line rounded-full text-sm text-ink placeholder:text-faint outline-none transition-[border-color,box-shadow] focus:border-accent focus:ring-4 focus:ring-accent-soft"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-surface-2">
                            {columns.map((col) => (
                                <th 
                                    key={col.key}
                                    onClick={() => col.sortable !== false && requestSort(col.key)}
                                    className={`px-6 py-3.5 font-mono text-[10px] font-medium text-ink-soft uppercase tracking-[0.14em] cursor-pointer hover:text-ink transition-colors ${col.sortable !== false ? 'group' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        {col.label}
                                        {col.sortable !== false && (
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                {sortConfig.key === col.key ? (
                                                    sortConfig.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                                                ) : <ChevronDown size={14} className="text-faint" />}
                                            </div>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                        <AnimatePresence mode="popLayout">
                            {paginatedData.map((row, idx) => (
                                <motion.tr 
                                    key={row.id || idx}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="hover:bg-surface-2/60 transition-colors"
                                >
                                    {columns.map((col) => (
                                        <td key={col.key} className="px-6 py-4 text-[13px] text-ink-soft">
                                            {col.render ? col.render(row[col.key], row) : row[col.key]}
                                        </td>
                                    ))}
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
                
                {filteredData.length === 0 && (
                    <div className="py-12 text-center text-sm text-ink-soft">
                        No results found for "{searchTerm}"
                    </div>
                )}
            </div>

            {/* Pagination */}
            {paginated && filteredData.length > pageSize && (
                <div className="p-4 border-t border-line flex items-center justify-between">
                    <p className="text-xs text-ink-soft">
                        Showing {((currentPage - 1) * pageSize) + 1}–{Math.min(currentPage * pageSize, filteredData.length)} of {filteredData.length}
                    </p>
                    <div className="flex gap-1.5">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-soft hover:border-line-strong hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft size={15} />
                        </button>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-soft hover:border-line-strong hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight size={15} />
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default DataTable;
