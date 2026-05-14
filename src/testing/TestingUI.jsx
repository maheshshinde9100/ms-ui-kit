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
    Dropdown,
    Footer,
    DataTable,
    Drawer,
    CommandPalette,
    FileUpload,
    DatePicker,
    useToast
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
    Target,
    Github,
    Linkedin,
    Twitter,
    Bell,
    Calendar,
    Table as TableIcon,
    TerminalSquare,
    UploadCloud,
    Menu,
    Command as CommandIcon
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
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isCommandOpen, setIsCommandOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const toast = useToast();

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

    const categories = [
        { id: 'all', label: 'All Components', icon: <Layers size={18} /> },
        { id: 'buttons', label: 'Buttons & Forms', icon: <MousePointer2 size={18} /> },
        { id: 'feedback', label: 'Feedback', icon: <Zap size={18} /> },
        { id: 'navigation', label: 'Navigation', icon: <Layout size={18} /> },
        { id: 'data', label: 'Data Display', icon: <Code size={18} /> },
        { id: 'advanced', label: 'Advanced UI', icon: <TerminalSquare size={18} /> },
        { id: 'overlays', label: 'Overlays & Toasts', icon: <Bell size={18} /> },
    ];

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

    const isVisible = (cat) => activeCategory === 'all' || activeCategory === cat;

    const commandActions = [
        { id: '1', label: 'Go to Dashboard', description: 'Navigate to main dashboard', icon: <Home size={18} />, onSelect: () => toast.success("Navigating to Dashboard") },
        { id: '2', label: 'Settings', description: 'Open account settings', icon: <Settings size={18} />, onSelect: () => toast.info("Opening Settings") },
        { id: '3', label: 'Search Users', description: 'Find a user by name or email', icon: <User size={18} />, onSelect: () => toast.success("Opening User Search") },
    ];

    const tableColumns = [
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'status', label: 'Status', render: (val) => <Badge variant={val === 'Active' ? 'success' : 'default'}>{val}</Badge> }
    ];
    const tableData = [
        { id: 1, name: 'Mahesh Shinde', role: 'Developer', status: 'Active' },
        { id: 2, name: 'John Doe', role: 'Designer', status: 'Offline' },
        { id: 3, name: 'Jane Smith', role: 'Manager', status: 'Active' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans transition-colors duration-500">
            <Navbar logo="MS UI" links={navLinks} user={user} />

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-32 space-y-2">
                            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 mb-4">Categories</h2>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
                                        activeCategory === cat.id 
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 translate-x-1' 
                                        : 'text-gray-500 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    {cat.icon}
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 space-y-16">
                        {/* Hero Section */}
                        {activeCategory === 'all' && (
                            <section className="space-y-8">
                                <header className="text-left relative py-8 border-b border-gray-100 dark:border-gray-800">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Badge variant="premium" className="mb-4 px-3 py-1 text-xs uppercase tracking-widest font-bold">
                                            Version 0.2.0 Available
                                        </Badge>
                                        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                                            Component Library
                                        </h1>
                                        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
                                            Explore our suite of premium UI components. Toggle dark mode in the navigation to see the magic.
                                        </p>
                                    </motion.div>
                                </header>

                                {/* Interactive Playground */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <Card variant="glass" className="lg:col-span-2 p-8 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Zap size={120} />
                                        </div>
                                        <h3 className="text-2xl font-black mb-4">Interactive Playground</h3>
                                        <p className="text-gray-500 mb-8 max-w-md">Try out components in real-time. Everything you see here is theme-aware and built with performance in mind.</p>
                                        <div className="flex flex-wrap gap-4">
                                            <Button variant="premium" size="lg">Get Started</Button>
                                            <Button variant="outline" size="lg">Documentation</Button>
                                        </div>
                                    </Card>
                                    <div className="space-y-8">
                                        <Card className="p-6 bg-blue-600 text-white shadow-xl shadow-blue-500/20">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 bg-white/20 rounded-lg"><Zap size={20} /></div>
                                                <Badge variant="success" className="bg-white/20 text-white border-transparent">v0.2</Badge>
                                            </div>
                                            <h4 className="font-bold text-lg mb-1">Fast Performance</h4>
                                            <p className="text-sm opacity-80">Optimized for 60fps animations.</p>
                                        </Card>
                                        <Card className="p-6 bg-purple-600 text-white shadow-xl shadow-purple-500/20">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 bg-white/20 rounded-lg"><Layout size={20} /></div>
                                                <Badge variant="premium" className="bg-white/20 text-white border-transparent">NEW</Badge>
                                            </div>
                                            <h4 className="font-bold text-lg mb-1">Responsive Design</h4>
                                            <p className="text-sm opacity-80">Works on every screen size.</p>
                                        </Card>
                                    </div>
                                </div>
                            </section>
                        )}

                        <div className="grid grid-cols-1 gap-12">
                            {/* Buttons & Forms */}
                            {isVisible('buttons') && (
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                        <MousePointer2 className="text-blue-600" /> Buttons & Forms
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                                <div className="flex flex-col gap-2 mt-2">
                                                    <Checkbox 
                                                        label="I agree to the terms" 
                                                        description="You must agree to continue." 
                                                    />
                                                    <div className="flex gap-4 mt-2">
                                                        <Switch checked={switchState} onChange={setSwitchState} label="Enable Feature" />
                                                    </div>
                                                </div>
                                            </div>
                                        </ComponentShowcase>
                                    </div>
                                </section>
                            )}

                            {/* Feedback */}
                            {isVisible('feedback') && (
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                        <Zap className="text-yellow-500" /> Feedback & Indicators
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                                </div>
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="System Feedback" 
                                            description="Alerts and status indicators"
                                            code={`<Alert variant="info" title="Update Available" />`}
                                        >
                                            <div className="w-full space-y-4">
                                                <Alert variant="info" title="Update" icon={<Info size={20} />}>New version 2.0.</Alert>
                                                <div className="flex justify-center gap-4">
                                                    <Spinner size="xl" variant="premium" />
                                                    <Spinner size="xl" variant="success" />
                                                </div>
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Status Badges" 
                                            description="Contextual info and status badges"
                                            code={`<Badge variant="success">Online</Badge>`}
                                        >
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                <Badge variant="success">Online</Badge>
                                                <Badge variant="danger" isDot />
                                                <Badge variant="warning" size="lg">Reviewing</Badge>
                                                <Badge variant="premium">Premium</Badge>
                                            </div>
                                        </ComponentShowcase>
                                    </div>
                                </section>
                            )}

                            {/* Navigation */}
                            {isVisible('navigation') && (
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                        <Layout className="text-purple-600" /> Overlays & Navigation
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <ComponentShowcase 
                                            title="Animated Tabs" 
                                            description="Spring-based transitions between panels"
                                            code={`<Tabs tabs={items} activeColor="blue" variant="pill" />`}
                                        >
                                            <div className="w-full">
                                                <Tabs tabs={tabItems} activeColor="blue" />
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Interactive Dialogs" 
                                            description="Framer Motion powered modals"
                                            code={`<Modal isOpen={open} onClose={close} title="Hello" />`}
                                        >
                                            <Button variant="premium" onClick={() => setIsModalOpen(true)}>
                                                Launch Modal
                                            </Button>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Navigation Helpers" 
                                            description="Breadcrumbs and Pagination"
                                            code={`<Breadcrumb items={items} />`}
                                        >
                                            <div className="w-full space-y-8">
                                                <Breadcrumb items={breadcrumbItems} />
                                                <Pagination current={currentPage} total={5} onChange={setCurrentPage} />
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Accordion Groups" 
                                            description="Expandable vertical panels"
                                            code={`<Accordion items={items} />`}
                                        >
                                            <div className="w-full">
                                                <Accordion items={accordionItems} />
                                            </div>
                                        </ComponentShowcase>
                                    </div>
                                </section>
                            )}

                            {/* Data Display */}
                            {isVisible('data') && (
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                        <Code className="text-emerald-600" /> Data Display
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <ComponentShowcase 
                                            title="Interactive Timeline" 
                                            description="Step-by-step histories"
                                            code={`<Timeline items={events} />`}
                                        >
                                            <div className="w-full text-left bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                                                <Timeline items={[
                                                    { title: 'Started', date: 'March', description: 'Core established.', active: true },
                                                    { title: 'Release', date: 'Today', description: 'v0.2.0 live.', active: true },
                                                ]} />
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="User Avatars" 
                                            description="Representation with status"
                                            code={`<Avatar src={url} status="online" />`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <Avatar src={user.avatar} size="lg" bordered status="online" />
                                                <Avatar name="MS" size="md" status="offline" />
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Surfaces" 
                                            description="Premium containers with glassmorphism"
                                            code={`<Card variant="glass" />`}
                                        >
                                            <Card variant="glass" className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                                                <p className="font-bold">Glassmorphism Surface</p>
                                                <p className="text-xs text-gray-500 mt-1">Automatic backdrop blur.</p>
                                            </Card>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Empty Contexts" 
                                            description="Missing data placeholders"
                                            code={`<EmptyState title="No Data" />`}
                                        >
                                            <div className="transform scale-75">
                                                <EmptyState icon={<PackageSearch size={32} />} title="No items" actionLabel="Add New" />
                                            </div>
                                        </ComponentShowcase>
                                    </div>
                                </section>
                            )}

                            {/* Advanced UI */}
                            {isVisible('advanced') && (
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                        <TerminalSquare className="text-indigo-600" /> Advanced UI
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <ComponentShowcase 
                                            title="Data Table" 
                                            description="Sortable, filterable, paginated data grid"
                                            code={`<DataTable columns={cols} data={data} searchable paginated />`}
                                        >
                                            <div className="w-full">
                                                <DataTable columns={tableColumns} data={tableData} searchable paginated pageSize={2} />
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Command Palette" 
                                            description="Search-driven navigation and actions"
                                            code={`<CommandPalette isOpen={open} onClose={close} actions={actions} />`}
                                        >
                                            <Button variant="premium" onClick={() => setIsCommandOpen(true)} startIcon={<CommandIcon size={18} />}>
                                                Open Command Palette
                                            </Button>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="File Upload" 
                                            description="Drag and drop file upload zone"
                                            code={`<FileUpload onUpload={(files) => console.log(files)} />`}
                                        >
                                            <div className="w-full">
                                                <FileUpload onUpload={(f) => toast.success(`Uploaded ${f.length} file(s)`)} />
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Date Picker" 
                                            description="Custom animated calendar"
                                            code={`<DatePicker selected={date} onChange={setDate} />`}
                                        >
                                            <div className="w-full max-w-sm">
                                                <DatePicker selected={selectedDate} onChange={setSelectedDate} />
                                            </div>
                                        </ComponentShowcase>
                                    </div>
                                </section>
                            )}

                            {/* Overlays & Toasts */}
                            {isVisible('overlays') && (
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                        <Bell className="text-rose-500" /> Overlays & Toasts
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <ComponentShowcase 
                                            title="Toast Notifications" 
                                            description="Global contextual message system"
                                            code={`const toast = useToast();\ntoast.success('Saved successfully!');`}
                                        >
                                            <div className="flex flex-wrap gap-4 justify-center">
                                                <Button onClick={() => toast.success("Successfully saved changes!")} className="bg-emerald-500 hover:bg-emerald-600 text-white border-transparent">Success Toast</Button>
                                                <Button onClick={() => toast.error("Failed to delete item.")} className="bg-rose-500 hover:bg-rose-600 text-white border-transparent">Error Toast</Button>
                                                <Button onClick={() => toast.info("New update available.")} className="bg-blue-500 hover:bg-blue-600 text-white border-transparent">Info Toast</Button>
                                            </div>
                                        </ComponentShowcase>

                                        <ComponentShowcase 
                                            title="Drawer Navigation" 
                                            description="Off-canvas side panels"
                                            code={`<Drawer isOpen={open} onClose={close} title="Menu">...</Drawer>`}
                                        >
                                            <Button variant="outline" onClick={() => setIsDrawerOpen(true)} startIcon={<Menu size={18} />}>
                                                Open Drawer
                                            </Button>
                                        </ComponentShowcase>
                                    </div>
                                </section>
                            )}
                        </div>
                    </main>
                </div>
            </div>

            <Footer 
                logoText="MS UI Kit"
                description="A premium UI component library crafted for modern web applications."
                companyInfo={{ name: "Mahesh Shinde", year: new Date().getFullYear() }}
                socials={[
                    { label: "GitHub", href: "https://github.com/maheshshinde9100", icon: <Github size={20} /> },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/maheshshinde9100/", icon: <Linkedin size={20} /> },
                ]}
                links={[
                    {
                        title: "Product",
                        items: [
                            { label: "Components", href: "/" },
                            { label: "About Developer", href: "/developer" }
                        ]
                    }
                ]}
            />

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
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Dark Mode Ready</h4>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Every component is optimized for both light and dark themes using the Context API and Tailwind CSS.
                        </p>
                    </div>
                </div>
            </Modal>

            <CommandPalette 
                isOpen={isCommandOpen} 
                onClose={() => setIsCommandOpen(false)} 
                actions={commandActions} 
            />

            <Drawer 
                isOpen={isDrawerOpen} 
                onClose={() => setIsDrawerOpen(false)} 
                title="Application Menu"
            >
                <div className="space-y-4">
                    <p className="text-gray-500">This is a custom drawer component. You can put anything here.</p>
                    <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start" startIcon={<Home size={18} />}>Dashboard</Button>
                        <Button variant="outline" className="w-full justify-start" startIcon={<Settings size={18} />}>Settings</Button>
                        <Button variant="outline" className="w-full justify-start" startIcon={<User size={18} />}>Profile</Button>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default TestingUI;
