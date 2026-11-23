import React, { useState, useRef } from 'react';
import { Upload, X, File, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FileUpload = ({ 
    onUpload, 
    accept = "*", 
    multiple = false, 
    maxSize = 5242880, // 5MB
    label = "Upload Files",
    description = "Drag and drop or click to browse"
}) => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleFiles = (newFiles) => {
        const validFiles = Array.from(newFiles).filter(file => {
            if (file.size > maxSize) {
                alert(`${file.name} is too large. Max size is ${maxSize / 1024 / 1024}MB`);
                return false;
            }
            return true;
        });

        if (multiple) {
            setFiles(prev => [...prev, ...validFiles]);
        } else {
            setFiles(validFiles.slice(0, 1));
        }

        if (onUpload) onUpload(validFiles);
    };

    const removeFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const formatSize = (bytes) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    return (
        <div className="w-full space-y-4">
            <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}
                onClick={() => fileInputRef.current?.click()}
                className={`relative rounded-2xl border border-dashed p-10 text-center cursor-pointer transition-colors duration-200 group
                    ${isDragging 
                        ? 'border-accent bg-accent-soft' 
                        : 'border-line-strong hover:border-ink-soft hover:bg-surface-2/50'
                    }`}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    multiple={multiple}
                    accept={accept}
                    onChange={(e) => handleFiles(e.target.files)}
                />
                
                <div className="flex flex-col items-center">
                    <div className={`grid h-12 w-12 place-items-center rounded-full border transition-colors duration-200
                        ${isDragging ? 'border-accent bg-accent text-white' : 'border-line bg-surface-2 text-ink-soft'}`}
                    >
                        <Upload size={20} />
                    </div>
                    <h3 className="mt-4 text-[15px] font-semibold text-ink">{label}</h3>
                    <p className="mt-1 text-[13px] text-ink-soft">{description}</p>
                    <p className="mt-4 font-mono text-[10px] text-faint uppercase tracking-[0.14em]">Max size: {formatSize(maxSize)}</p>
                </div>
            </div>

            <AnimatePresence>
                {files.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="space-y-2"
                    >
                        {files.map((file, index) => (
                            <motion.div
                                key={`${file.name}-${index}`}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3.5 p-3.5 bg-surface border border-line rounded-xl"
                            >
                                <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent-ink">
                                    <File size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-[13px] text-ink truncate">{file.name}</p>
                                    <p className="text-xs text-faint">{formatSize(file.size)}</p>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                                    aria-label={`Remove ${file.name}`}
                                    className="grid h-8 w-8 place-items-center rounded-full text-faint hover:bg-surface-2 hover:text-ink transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FileUpload;
