import React, { useState } from 'react';
import {
    Button,
    Card,
    Input,
    Alert,
    Badge,
    Avatar,
    Modal,
    Switch,
    Spinner,
    Accordion,
    Navbar,
    Skeleton,
    Progress,
    Tabs,
    Tooltip,
    Breadcrumb,
    Pagination,
    Tag,
    Timeline,
    Rating,
    Stepper,
    EmptyState,
    Checkbox,
    Textarea,
    Dropdown
} from '../components';
import { 
    Copy, 
    Check, 
    Code, 
    Eye, 
    Layers, 
    Layout, 
    MessageSquare, 
    MousePointer2, 
    Zap,
    Home,
    User,
    Settings,
    ChevronRight,
    Star,
    Info,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    PackageSearch,
    Clock,
    Trophy,
    Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ComponentShowcase = ({ title, children, code, description }) => {
    const [copied, setCopied] = useState(false);
    const [showCode, setShowCode] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Card variant="default" className="overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-6 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                    {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setShowCode(!showCode)}
                        className={`p-2 rounded-lg transition-colors ${showCode ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500'}`}
                        title="Toggle Code"
                    >
                        <Code size={18} />
                    </button>
                    <button 
                        onClick={handleCopy}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors"
                        title="Copy Code"
                    >
                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                </div>
            </div>
            
            <div className="p-8 bg-gray-50/30 dark:bg-gray-900/10 min-h-[150px] flex items-center justify-center">
                {children}
            </div>

            <AnimatePresence>
                {showCode && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-950"
                    >
                        <pre className="p-6 text-sm text-blue-300 font-mono overflow-x-auto">
                            <code>{code}</code>
                        </pre>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
};

const TestingUI = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [switchState, setSwitchState] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const navLinks = [
        { label: 'Components', href: '/' },
        { label: 'Developer', href: '/developer' },
        { label: 'GitHub', href: 'https://github.com/maheshshinde9100/ms-ui-kit' },
    ];

    const user = {
        name: 'Mahesh Shinde',
        role: 'Full Stack Developer',
        avatar: 'https://maheshshinde-dev.vercel.app/profile.jpg'
    };

    const accordionItems = [
        {
            title: "What is ms-ui-kit?",
            content: "ms-ui-kit is a premium React component library built with Tailwind CSS, focusing on modern aesthetics like glassmorphism and smooth animations."
        },
        {
            title: "How to use it?",
            content: "Simply import the components you need and use them in your React application. Every component is designed to be highly customizable via props."
        }
    ];

    const tabItems = [
        { id: 'design', label: 'Design', icon: <Eye size={16} />, content: <p className="p-4 text-gray-500">Visual aesthetics focused on modern glassmorphism and premium feel.</p> },
        { id: 'code', label: 'Code', icon: <Code size={16} />, content: <p className="p-4 text-gray-500">Clean, modular, and type-safe components built for developers.</p> },
        { id: 'perf', label: 'Performance', icon: <Zap size={16} />, content: <p className="p-4 text-gray-500">Lightweight and optimized for fast loading and smooth interactions.</p> },
    ];

    const breadcrumbItems = [
        { label: 'Home', icon: <Home size={14} />, href: '#' },
        { label: 'Components', icon: <Layers size={14} />, href: '#' },
        { label: 'Buttons', icon: <MousePointer2 size={14} /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans transition-colors duration-500 mb-20">
            <Navbar logo="MS UI" links={navLinks} user={user} />

            <div className="max-w-7xl mx-auto px-6 pt-32 space-y-24">
                {/* Hero Section */}
                <header className="text-center relative py-12">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="premium" className="mb-6 px-4 py-1.5 text-sm uppercase tracking-widest font-bold">
                            Elevate Your UI Experience
                        </Badge>
                        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">
                            ms-ui-kit
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                            A showcase of premium, copy-paste ready components crafted for modern web experiences. 
                            Built with Tailwind CSS, Lucide Icons, and Framer Motion.
                        </p>
                    </motion.div>
                </header>

                {/* Main Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Buttons */}
                    <ComponentShowcase 
                        title="Premium Buttons" 
                        description="Interactive states with gradients and shadows"
                        code={`<Button variant="premium">Premium Action</Button>\n<Button variant="outline" startIcon={<Zap />}>Quick Start</Button>`}
                    >
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button variant="primary">Primary</Button>
                            <Button variant="premium">Premium</Button>
                            <Button variant="outline" startIcon={<Zap size={18} />}>Outlined</Button>
                            <Button variant="danger" loading>Loading</Button>
                        </div>
                    </ComponentShowcase>

                    {/* Progress Bars */}
                    <ComponentShowcase 
                        title="Progress Indicators" 
                        description="Smooth animated progress bars for values"
                        code={`<Progress value={65} variant="premium" showValue animated />`}
                    >
                        <div className="w-full space-y-6 px-4">
                            <Progress value={75} variant="premium" showValue animated />
                            <Progress value={45} variant="success" size="sm" animated />
                        </div>
                    </ComponentShowcase>

                    {/* Tabs */}
                    <ComponentShowcase 
                        title="Animated Tabs" 
                        description="Spring-based transitions between panels"
                        code={`<Tabs tabs={items} activeColor="blue" variant="pill" />`}
                    >
                        <div className="w-full">
                            <Tabs tabs={tabItems} activeColor="blue" />
                        </div>
                    </ComponentShowcase>

                    {/* Inputs */}
                    <ComponentShowcase 
                        title="Form Controls" 
                        description="Beautifully styled inputs, textareas, and selects"
                        code={`<Input label="Email" placeholder="hi@ms.com" variant="glass" />\n<Textarea label="Message" />\n<Dropdown options={opts} />`}
                    >
                        <div className="w-full max-w-sm space-y-4">
                            <Input 
                                label="Search" 
                                placeholder="Looking for something?" 
                                startIcon={<Info size={18} />} 
                                variant="outline"
                            />
                            <Dropdown 
                                label="Categories" 
                                options={[
                                    { label: 'Components', value: 'comp' },
                                    { label: 'Templates', value: 'temp' },
                                    { label: 'Icons', value: 'icon' }
                                ]} 
                            />
                            <Textarea 
                                label="Feedback" 
                                placeholder="Tell us what you think..." 
                                rows={2} 
                            />
                            <div className="flex flex-col gap-2 mt-2">
                                <Checkbox 
                                    label="I agree to the terms" 
                                    description="You must agree to continue." 
                                />
                                <div className="flex gap-4 mt-2">
                                    <Switch checked={switchState} onChange={setSwitchState} label="Night Mode" />
                                </div>
                            </div>
                        </div>
                    </ComponentShowcase>

                    {/* Skeleton */}
                    <ComponentShowcase 
                        title="Skeleton Loading" 
                        description="Placeholder elements for async data loading"
                        code={`<Skeleton variant="circular" width={60} height={60} />\n<Skeleton variant="text" />`}
                    >
                        <div className="flex items-center gap-4 w-full px-8">
                            <Skeleton variant="circular" width={64} height={64} />
                            <div className="flex-1 space-y-2">
                                <Skeleton variant="text" width="60%" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" width="80%" />
                            </div>
                        </div>
                    </ComponentShowcase>

                    {/* Tooltips & Badges */}
                    <ComponentShowcase 
                        title="Overlays & Indicators" 
                        description="Contextual info and status badges"
                        code={`<Tooltip content="Nice link!" position="top">\n  <Button variant="ghost">Hover Me</Button>\n</Tooltip>`}
                    >
                        <div className="flex items-center gap-8">
                            <Tooltip content="Click to copy settings" position="top">
                                <Button variant="secondary" startIcon={<Settings size={18} />}>Settings</Button>
                            </Tooltip>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="success">Online</Badge>
                                <Badge variant="danger" isDot />
                                <Badge variant="warning" size="lg">Large</Badge>
                            </div>
                        </div>
                    </ComponentShowcase>

                    {/* Breadcrumb & Pagination */}
                    <ComponentShowcase 
                        title="Navigation Helpers" 
                        description="Wayfinding components for large apps"
                        code={`<Breadcrumb items={items} />\n<Pagination current={1} total={10} />`}
                    >
                        <div className="w-full space-y-12">
                            <Breadcrumb items={breadcrumbItems} />
                            <div className="flex justify-center">
                                <Pagination current={currentPage} total={12} onChange={setCurrentPage} />
                            </div>
                        </div>
                    </ComponentShowcase>

                    {/* Feedback */}
                    <ComponentShowcase 
                        title="System Feedback" 
                        description="Alerts and status indicators"
                        code={`<Alert variant="info" title="Update Available" />`}
                    >
                        <div className="w-full space-y-4">
                            <Alert 
                                variant="info" 
                                title="Platform Update" 
                                icon={<Info size={20} />}
                            >
                                Version 2.0 is arriving next week with new features.
                            </Alert>
                            <div className="flex justify-center gap-4">
                                <Spinner size="xl" variant="premium" />
                                <Spinner size="xl" variant="success" />
                                <Spinner size="xl" variant="danger" />
                            </div>
                        </div>
                    </ComponentShowcase>

                    {/* Tags & Rating */}
                    <ComponentShowcase 
                        title="Meta Data & feedback" 
                        description="Categorization and user sentiment"
                        code={`<Tag variant="purple">Feature</Tag>\n<Rating value={4} />`}
                    >
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex flex-wrap gap-2 justify-center">
                                <Tag variant="blue" closable>React</Tag>
                                <Tag variant="green">Vite</Tag>
                                <Tag variant="purple">Tailwind</Tag>
                                <Tag variant="red">Premium</Tag>
                            </div>
                            <Rating value={4} size={28} />
                        </div>
                    </ComponentShowcase>

                    {/* Stepper */}
                    <ComponentShowcase 
                        title="Process Flow" 
                        description="Guided multi-step workflows"
                        code={`<Stepper steps={items} current={1} />`}
                    >
                        <div className="w-full px-4">
                            <Stepper 
                                current={1} 
                                steps={[
                                    { label: 'Plan' },
                                    { label: 'Build' },
                                    { label: 'Ship' }
                                ]} 
                            />
                        </div>
                    </ComponentShowcase>

                    {/* Empty State */}
                    <ComponentShowcase 
                        title="Empty Contexts" 
                        description="Professional placeholders for missing data"
                        code={`<EmptyState title="No Projects" actionLabel="New Project" />`}
                    >
                        <div className="w-full transform scale-75 origin-center">
                            <EmptyState 
                                icon={<PackageSearch size={40} />}
                                title="No components found"
                                description="Try searching for something else or browse our full library."
                                actionLabel="Browse All"
                            />
                        </div>
                    </ComponentShowcase>

                    {/* Timeline */}
                    <div className="md:col-span-2">
                        <ComponentShowcase 
                            title="Interactive Timeline" 
                            description="Historical logs or step-by-step histories"
                            code={`<Timeline items={events} />`}
                        >
                            <div className="w-full max-w-2xl text-left bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                                <Timeline items={[
                                    { title: 'Project Initialized', date: 'March 2026', description: 'Core architecture and design tokens established.', active: true },
                                    { title: 'v1.0 Release', date: 'Today', description: 'Major update with 20+ premium components.', active: true },
                                    { title: 'Global Deployment', date: 'Next Month', description: 'Integration with CDN and global registry.', dot: <Target size={10} /> }
                                ]} />
                            </div>
                        </ComponentShowcase>
                    </div>
                </div>

                {/* Advanced Elements Section */}
                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Complex UI Elements</h2>
                        <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <Card className="lg:col-span-2 p-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Layout className="text-blue-600" /> Interactive Dialogs
                            </h3>
                            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-12 flex flex-col items-center justify-center text-center space-y-6">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600">
                                    <MessageSquare size={48} />
                                </div>
                                <h4 className="text-2xl font-bold">Ready for deep integration</h4>
                                <p className="text-gray-500 max-w-md">Our modals support full glassmorphism effect, custom footers, and smooth Framer Motion entry/exit animations.</p>
                                <Button size="lg" variant="premium" onClick={() => setIsModalOpen(true)}>
                                    Launch Example Modal
                                </Button>
                            </div>
                        </Card>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Accordion Groups</h3>
                                <Accordion items={accordionItems} />
                            </div>
                            <Card className="p-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                                <div className="flex items-center gap-2 mb-4">
                                    <Star fill="currentColor" />
                                    <h3 className="font-bold uppercase tracking-widest text-sm">Pro Tip</h3>
                                </div>
                                <p className="text-lg font-medium">Use the <code className="bg-white/20 px-1.5 rounded">glass</code> variant on Cards to create stunning modern layouts.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Footer Link to Developer */}
                <section className="py-20 text-center border-t border-gray-100 dark:border-gray-800">
                    <h3 className="text-2xl font-bold mb-6">Built for Developers, by a Developer</h3>
                    <div className="flex justify-center items-center gap-6">
                        <Avatar src={user.avatar} size="lg" bordered status="online" />
                        <div className="text-left">
                            <p className="font-bold text-xl">{user.name}</p>
                            <p className="text-gray-500">{user.role}</p>
                            <a href="/developer" className="inline-flex items-center gap-2 text-blue-600 font-bold mt-2 hover:underline">
                                View Developer Details <ChevronRight size={18} />
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Modal Demo */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Premium Component System"
                footer={
                    <div className="flex justify-end gap-3">
                        <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Close</Button>
                        <Button variant="premium" onClick={() => setIsModalOpen(false)}>Awesome!</Button>
                    </div>
                }
            >
                <div className="space-y-6 text-center py-4">
                    <div className="flex justify-center">
                        <div className="p-6 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 rounded-3xl">
                            <CheckCircle2 size={64} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Seamless Integration</h4>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            This modal is part of the ms-ui-kit. It handles focus trapping, overflow, and backdrop blur automatically.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default TestingUI;
