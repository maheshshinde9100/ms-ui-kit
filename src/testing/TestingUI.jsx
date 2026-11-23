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
    Breadcrumb,
    Pagination,
    Timeline,
    EmptyState,
    Checkbox,
    Dropdown,
    Footer,
    DataTable,
    Drawer,
    CommandPalette,
    FileUpload,
    DatePicker,
    TypewriterEffect,
    OTPInput,
    useToast
} from '../components';
import {
    Copy,
    Check,
    Code,
    Eye,
    Layers,
    Layout,
    MousePointer2,
    Zap,
    Home,
    User,
    Settings,
    Info,
    PackageSearch,
    Github,
    Linkedin,
    Bell,
    Menu,
    Command as CommandIcon,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    TerminalSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UIProvider, CustomCursor } from '../components';

const EASE = [0.22, 1, 0.36, 1];

const Reveal = ({ children, delay = 0, className = '' }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, delay, ease: EASE }}
        className={className}
    >
        {children}
    </motion.div>
);

const Eyebrow = ({ children, className = '' }) => (
    <p className={`font-mono text-[10px] uppercase tracking-[0.2em] text-faint ${className}`}>
        {children}
    </p>
);

const ComponentShowcase = ({ title, children, code, description }) => {
    const [copied, setCopied] = useState(false);
    const [showCode, setShowCode] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
                <div>
                    <h3 className="text-[15px] font-semibold tracking-tight text-ink">{title}</h3>
                    {description && (
                        <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{description}</p>
                    )}
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                    <button
                        onClick={() => setShowCode(!showCode)}
                        className={`grid h-8 w-8 place-items-center rounded-full border transition-colors duration-200 ${
                            showCode
                                ? 'border-accent-line bg-accent-soft text-accent-ink'
                                : 'border-line text-ink-soft hover:border-line-strong hover:text-ink'
                        }`}
                        aria-label="Toggle code"
                        aria-pressed={showCode}
                    >
                        <Code size={15} strokeWidth={1.75} />
                    </button>
                    <button
                        onClick={handleCopy}
                        className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-soft transition-colors duration-200 hover:border-line-strong hover:text-ink"
                        aria-label="Copy code"
                    >
                        {copied ? (
                            <Check size={15} className="text-emerald-500" />
                        ) : (
                            <Copy size={15} strokeWidth={1.75} />
                        )}
                    </button>
                </div>
            </div>

            <div className="dot-grid flex flex-1 items-center justify-center bg-paper/50 px-6 py-10">
                {children}
            </div>

            <AnimatePresence initial={false}>
                {showCode && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden border-t border-line"
                    >
                        <div className="bg-code">
                            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-2.5">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                    <span className="h-2 w-2 rounded-full bg-white/15" />
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                                    jsx
                                </span>
                            </div>
                            <pre className="max-h-[320px] overflow-auto px-5 py-4 text-[12.5px] leading-relaxed text-[#c9c8f2]">
                                <code>{code}</code>
                            </pre>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ShowcaseSection = ({ index, title, icon, visible, children }) => {
    if (!visible) return null;

    return (
        <Reveal>
            <section className="scroll-mt-28">
                <div className="mb-8 flex items-center gap-4">
                    <span className="font-mono text-[11px] tabular-nums text-faint">{index}</span>
                    <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-ink sm:text-[26px]">
                        {title}
                    </h2>
                    <span className="h-px flex-1 bg-line" />
                    <span className="text-faint">{icon}</span>
                </div>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">{children}</div>
            </section>
        </Reveal>
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
    const [otpCode, setOtpCode] = useState('');
    const [installCopied, setInstallCopied] = useState(false);
    const toast = useToast();
    const navLinks = [
        { label: 'Components', href: '/components' },
        { label: 'Developer', href: '/developer' },
        { label: 'GitHub', href: 'https://github.com/maheshshinde9100/ms-ui-kit' },
    ];

    const user = {
        name: 'Mahesh Shinde',
        role: 'Full Stack Developer',
        avatar: 'https://maheshshinde-dev.vercel.app/profile.jpg'
    };

    const categories = [
        { id: 'all', label: 'All components', count: 22, icon: Layers },
        { id: 'buttons', label: 'Buttons & forms', count: 3, icon: MousePointer2 },
        { id: 'feedback', label: 'Feedback', count: 4, icon: Zap },
        { id: 'navigation', label: 'Navigation', count: 4, icon: Layout },
        { id: 'data', label: 'Data display', count: 4, icon: Code },
        { id: 'advanced', label: 'Advanced UI', count: 5, icon: TerminalSquare },
        { id: 'overlays', label: 'Overlays & toasts', count: 2, icon: Bell },
    ];

    const marqueeNames = [
        'Button', 'Card', 'Modal', 'Tabs', 'Data Table', 'Command Palette',
        'OTP Input', 'Drawer', 'Toast', 'Date Picker', 'Timeline', 'Accordion',
        'File Upload', 'Typewriter', 'Empty State', 'Pagination', 'Breadcrumb',
        'Tooltip', 'Rating', 'Stepper',
    ];

    const principles = [
        {
            title: 'Contrast over decoration',
            body: 'Hierarchy comes from type scale, hairlines, and space — not gradients and glow.',
        },
        {
            title: 'Motion with restraint',
            body: 'Every transition has a job: feedback, continuity, or focus. Nothing moves just to move.',
        },
        {
            title: 'Built to compose',
            body: 'Small, predictable APIs. One token set that carries through light and dark without patching.',
        },
    ];

    const accordionItems = [
        {
            title: "What is ms-ui-kit?",
            content: "ms-ui-kit is a hand-built React component library on Tailwind CSS — editorial surfaces, tight type, and motion that stays out of the way."
        },
        {
            title: "How to use it?",
            content: "Import the components you need and drop them into your React application. Every component is customizable through props and theme tokens."
        }
    ];

    const tabItems = [
        { id: 'design', label: 'Design', icon: <Eye size={14} />, content: <p className="p-4 text-sm leading-relaxed text-ink-soft">Editorial surfaces, warm neutrals, and a single indigo accent.</p> },
        { id: 'code', label: 'Code', icon: <Code size={14} />, content: <p className="p-4 text-sm leading-relaxed text-ink-soft">Clean, modular components with predictable prop APIs.</p> },
        { id: 'perf', label: 'Performance', icon: <Zap size={14} />, content: <p className="p-4 text-sm leading-relaxed text-ink-soft">Lightweight and tree-shakable — only ship what you import.</p> },
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
        { key: 'status', label: 'Status', render: (val) => <Badge variant={val === 'Active' ? 'success' : 'neutral'}>{val}</Badge> }
    ];
    const tableData = [
        { id: 1, name: 'Mahesh Shinde', role: 'Developer', status: 'Active' },
        { id: 2, name: 'John Doe', role: 'Designer', status: 'Offline' },
        { id: 3, name: 'Jane Smith', role: 'Manager', status: 'Active' },
    ];

    const handleInstallCopy = () => {
        navigator.clipboard.writeText('npm install ms-ui-kit');
        setInstallCopied(true);
        toast.success('Install command copied');
        setTimeout(() => setInstallCopied(false), 2000);
    };

    const specs = [
        { label: 'Latest release', value: 'v0.3.0' },
        { label: 'Components', value: '34 primitives' },
        { label: 'Themes', value: 'Light + dark' },
        { label: 'License', value: 'MIT' },
    ];

    return (
        <div className="min-h-screen bg-paper font-sans text-ink">
            <Navbar logo="ms-ui-kit" links={navLinks} user={user} />

            <main>
                {/* ── Hero ─────────────────────────────────────────── */}
                <section className="relative isolate overflow-hidden pb-0 pt-32 sm:pt-40">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-[15%] -z-10 h-[720px] w-[720px] -translate-x-1/2 animate-orbit sm:h-[1000px] sm:w-[1000px]"
                    >
                        <div className="halo h-full w-full opacity-90" />
                    </div>

                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: EASE }}
                        >
                            <Eyebrow>React · Tailwind CSS · Framer Motion</Eyebrow>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
                            className="mx-auto mt-7 max-w-3xl text-[clamp(2.75rem,7.5vw,5.4rem)] font-light leading-[0.98] tracking-[-0.045em] text-ink"
                        >
                            A <em className="italic">quiet</em> foundation
                            <br className="hidden sm:block" /> for loud ideas.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
                            className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base"
                        >
                            34 hand-built components — theme-aware, accessible, and animated with
                            intent. Copy a pattern, keep the details.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
                            className="mt-10 flex flex-wrap items-center justify-center gap-3"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                endIcon={<ArrowRight size={16} />}
                                onClick={() =>
                                    document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })
                                }
                            >
                                Browse components
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                endIcon={<ArrowUpRight size={16} />}
                                onClick={() =>
                                    window.open('https://github.com/maheshshinde9100/ms-ui-kit', '_blank', 'noopener')
                                }
                            >
                                View source
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                            className="mt-8 flex justify-center"
                        >
                            <button
                                onClick={handleInstallCopy}
                                className="group flex items-center gap-3 rounded-full border border-line bg-surface py-1.5 pl-5 pr-1.5 transition-colors duration-200 hover:border-line-strong"
                            >
                                <span className="font-mono text-[13px] text-faint">$</span>
                                <span className="font-mono text-[13px] text-ink">npm install ms-ui-kit</span>
                                <span className="grid h-8 w-8 place-items-center rounded-full bg-surface-2 text-ink-soft transition-colors duration-200 group-hover:text-ink">
                                    {installCopied ? (
                                        <Check size={14} className="text-emerald-500" />
                                    ) : (
                                        <Copy size={14} strokeWidth={1.75} />
                                    )}
                                </span>
                            </button>
                        </motion.div>

                        {/* Spec strip */}
                        <motion.dl
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                            className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4"
                        >
                            {specs.map((spec) => (
                                <div key={spec.label} className="bg-paper px-6 py-5 text-left">
                                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                                        {spec.label}
                                    </dt>
                                    <dd className="mt-1.5 text-[15px] font-medium text-ink">{spec.value}</dd>
                                </div>
                            ))}
                        </motion.dl>
                    </div>

                    {/* Component marquee */}
                    <div className="mask-fade-x mt-16 overflow-hidden border-y border-line py-4">
                        <div className="marquee-track flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
                            {[...marqueeNames, ...marqueeNames].map((name, index) => (
                                <span
                                    key={`${name}-${index}`}
                                    className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft"
                                >
                                    {name}
                                    <span className="h-1 w-1 rounded-full bg-accent/60" aria-hidden />
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Principles ───────────────────────────────────── */}
                <section className="mx-auto max-w-6xl px-6 py-24">
                    <Reveal className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
                        <div>
                            <Eyebrow>00 — Principles</Eyebrow>
                            <h2 className="mt-3 max-w-lg text-[clamp(1.75rem,3.4vw,2.5rem)] font-light leading-tight tracking-[-0.03em] text-ink">
                                Restraint is a feature.
                            </h2>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
                            The kit is deliberately quiet so your product can do the talking.
                        </p>
                    </Reveal>

                    <div className="grid gap-px border-b border-line bg-line md:grid-cols-3">
                        {principles.map((principle, index) => (
                            <Reveal
                                key={principle.title}
                                delay={index * 0.08}
                                className="group bg-paper p-8 transition-colors duration-300 hover:bg-surface"
                            >
                                <span className="font-mono text-[11px] text-faint">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-ink">
                                    {principle.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                                    {principle.body}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Component explorer ───────────────────────────── */}
                <section id="components" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24">
                    <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-8">
                        <div>
                            <Eyebrow>01 — The collection</Eyebrow>
                            <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] font-light tracking-[-0.03em] text-ink">
                                Browse the components.
                            </h2>
                        </div>
                        <p className="text-[13px] text-ink-soft">
                            Every demo is live — toggle the theme, open the dialogs, type in the fields.
                        </p>
                    </Reveal>

                    <div className="mt-10 flex gap-12">
                        {/* Desktop filter */}
                        <aside className="hidden w-52 shrink-0 lg:block">
                            <div className="sticky top-24">
                                <Eyebrow>Filter</Eyebrow>
                                <nav className="mt-4 flex flex-col" aria-label="Component categories">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            aria-pressed={activeCategory === cat.id}
                                            className={`flex items-center justify-between border-l py-2.5 pl-4 pr-2 text-[13px] transition-colors duration-200 ${
                                                activeCategory === cat.id
                                                    ? 'border-accent font-medium text-ink'
                                                    : 'border-line text-ink-soft hover:border-line-strong hover:text-ink'
                                            }`}
                                        >
                                            <span className="flex items-center gap-2.5">
                                                <cat.icon size={15} strokeWidth={1.75} />
                                                {cat.label}
                                            </span>
                                            <span className="font-mono text-[10px] tabular-nums text-faint">
                                                {cat.count}
                                            </span>
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-8 rounded-xl border border-line bg-surface p-4">
                                    <p className="text-[12px] leading-relaxed text-ink-soft">
                                        Use the code button on any card to open its source, then copy
                                        it straight into your app.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        <div className="min-w-0 flex-1">
                            {/* Mobile filter */}
                            <div className="-mx-6 mb-10 overflow-x-auto px-6 pb-1 lg:hidden">
                                <div className="flex w-max gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            aria-pressed={activeCategory === cat.id}
                                            className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] transition-colors duration-200 ${
                                                activeCategory === cat.id
                                                    ? 'border-ink bg-ink text-paper'
                                                    : 'border-line text-ink-soft hover:border-line-strong hover:text-ink'
                                            }`}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-20">
                                <ShowcaseSection
                                    index="02"
                                    title="Buttons & Forms"
                                    icon={<MousePointer2 size={18} strokeWidth={1.5} />}
                                    visible={isVisible('buttons')}
                                >
                                    <ComponentShowcase
                                        title="Buttons"
                                        description="Pill controls with one accent and a quiet ink default"
                                        code={`<Button variant="primary">Primary</Button>\n<Button variant="outline" startIcon={<Zap />}>Quick start</Button>`}
                                    >
                                        <div className="flex flex-wrap justify-center gap-3">
                                            <Button variant="primary">Primary</Button>
                                            <Button variant="premium">Accent</Button>
                                            <Button variant="outline" startIcon={<Zap size={16} />}>Outlined</Button>
                                            <Button variant="danger" loading>Loading</Button>
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Form Controls"
                                        description="Pill inputs, textareas, and selects"
                                        code={`<Input label="Email" placeholder="hi@ms.com" />\n<Textarea label="Message" />\n<Dropdown options={opts} />`}
                                    >
                                        <div className="w-full max-w-sm space-y-2">
                                            <Input
                                                label="Search"
                                                placeholder="Looking for something?"
                                                startIcon={<Info size={16} />}
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
                                            <div className="flex flex-col gap-2 pt-2">
                                                <Checkbox
                                                    label="I agree to the terms"
                                                    description="You must agree to continue."
                                                />
                                                <div className="flex gap-4 pt-1">
                                                    <Switch checked={switchState} onChange={setSwitchState} label="Enable feature" />
                                                </div>
                                            </div>
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="OTP Input"
                                        description="Verification fields with backspace, paste, and navigation"
                                        code={`<OTPInput\n  length={6}\n  variant="outline"\n  size="md"\n  onComplete={(code) => toast.success(\`OTP: \${code}\`)}\n/>`}
                                    >
                                        <div className="flex w-full flex-col items-start gap-6">
                                            <div className="w-full">
                                                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Outline · 6 digits</span>
                                                <OTPInput
                                                    length={6}
                                                    variant="outline"
                                                    size="md"
                                                    onComplete={(code) => {
                                                        setOtpCode(code);
                                                        toast.success(`OTP Completed: ${code}`);
                                                    }}
                                                    onChange={(val) => setOtpCode(val)}
                                                />
                                            </div>

                                            <div className="w-full">
                                                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Filled · 4 digits, alphanumeric</span>
                                                <OTPInput
                                                    length={4}
                                                    variant="filled"
                                                    size="lg"
                                                    otpType="text"
                                                    placeholder="-"
                                                    onComplete={(code) => toast.info(`Alphanumeric OTP: ${code}`)}
                                                />
                                            </div>

                                            <div className="w-full">
                                                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Glass · 5 digits</span>
                                                <div className="flex w-full justify-center rounded-2xl border border-line bg-surface-2/60 p-4">
                                                    <OTPInput
                                                        length={5}
                                                        variant="glass"
                                                        size="md"
                                                        onComplete={(code) => toast.success(`Glass OTP: ${code}`)}
                                                    />
                                                </div>
                                            </div>

                                            {otpCode && (
                                                <div className="text-sm text-ink-soft">
                                                    Current OTP:{' '}
                                                    <span className="rounded-md border border-accent-line bg-accent-soft px-2 py-1 font-mono text-xs font-medium text-accent-ink">
                                                        {otpCode}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </ComponentShowcase>
                                </ShowcaseSection>

                                <ShowcaseSection
                                    index="03"
                                    title="Feedback & Indicators"
                                    icon={<Zap size={18} strokeWidth={1.5} />}
                                    visible={isVisible('feedback')}
                                >
                                    <ComponentShowcase
                                        title="Progress"
                                        description="Smooth animated bars for determinate values"
                                        code={`<Progress value={65} variant="premium" showValue animated />`}
                                    >
                                        <div className="w-full space-y-6 px-2">
                                            <Progress value={75} variant="premium" showValue animated />
                                            <Progress value={45} variant="success" size="sm" animated />
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Skeletons"
                                        description="Placeholders for async content"
                                        code={`<Skeleton variant="circular" width={60} height={60} />\n<Skeleton variant="text" />`}
                                    >
                                        <div className="flex w-full items-center gap-4 px-4">
                                            <Skeleton variant="circular" width={64} height={64} />
                                            <div className="flex-1 space-y-2">
                                                <Skeleton variant="text" width="60%" />
                                                <Skeleton variant="text" />
                                            </div>
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Alerts & Spinners"
                                        description="System feedback and loading states"
                                        code={`<Alert variant="info" title="Update available" />`}
                                    >
                                        <div className="w-full space-y-4">
                                            <Alert variant="info" title="Update" icon={<Info size={20} />}>New version 0.3 is available.</Alert>
                                            <div className="flex justify-center gap-6">
                                                <Spinner size="xl" variant="premium" />
                                                <Spinner size="xl" variant="success" />
                                            </div>
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Badges"
                                        description="Contextual labels and status dots"
                                        code={`<Badge variant="success">Online</Badge>`}
                                    >
                                        <div className="flex flex-wrap justify-center gap-2">
                                            <Badge variant="success">Online</Badge>
                                            <Badge variant="danger" isDot />
                                            <Badge variant="warning" size="lg">Reviewing</Badge>
                                            <Badge variant="premium">Premium</Badge>
                                            <Badge variant="neutral">Draft</Badge>
                                        </div>
                                    </ComponentShowcase>
                                </ShowcaseSection>

                                <ShowcaseSection
                                    index="04"
                                    title="Navigation"
                                    icon={<Layout size={18} strokeWidth={1.5} />}
                                    visible={isVisible('navigation')}
                                >
                                    <ComponentShowcase
                                        title="Tabs"
                                        description="Spring-based transitions between panels"
                                        code={`<Tabs tabs={items} activeColor="blue" variant="pill" />`}
                                    >
                                        <div className="w-full">
                                            <Tabs tabs={tabItems} activeColor="blue" />
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Dialogs"
                                        description="Focus-trapped, motion-driven modals"
                                        code={`<Modal isOpen={open} onClose={close} title="Hello" />`}
                                    >
                                        <Button variant="premium" onClick={() => setIsModalOpen(true)}>
                                            Launch modal
                                        </Button>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Breadcrumbs & Pagination"
                                        description="Wayfinding for longer journeys"
                                        code={`<Breadcrumb items={items} />\n<Pagination current={page} total={5} onChange={setPage} />`}
                                    >
                                        <div className="w-full space-y-8">
                                            <Breadcrumb items={breadcrumbItems} />
                                            <Pagination current={currentPage} total={5} onChange={setCurrentPage} />
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Accordion"
                                        description="Expandable vertical panels"
                                        code={`<Accordion items={items} />`}
                                    >
                                        <div className="w-full">
                                            <Accordion items={accordionItems} />
                                        </div>
                                    </ComponentShowcase>
                                </ShowcaseSection>

                                <ShowcaseSection
                                    index="05"
                                    title="Data Display"
                                    icon={<Code size={18} strokeWidth={1.5} />}
                                    visible={isVisible('data')}
                                >
                                    <ComponentShowcase
                                        title="Timeline"
                                        description="Step-by-step histories"
                                        code={`<Timeline items={events} />`}
                                    >
                                        <div className="w-full rounded-xl border border-line bg-surface p-6 text-left">
                                            <Timeline items={[
                                                { title: 'Started', date: 'March', description: 'Core established.', active: true },
                                                { title: 'Release', date: 'Today', description: 'v0.3.0 shipped.', active: true },
                                            ]} />
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Avatars"
                                        description="Identity marks with presence"
                                        code={`<Avatar src={url} status="online" />`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <Avatar src={user.avatar} size="lg" bordered status="online" />
                                            <Avatar name="MS" size="md" status="offline" />
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Surfaces"
                                        description="Quiet translucent containers"
                                        code={`<Card variant="glass" />`}
                                    >
                                        <Card variant="glass" className="w-full max-w-sm p-6">
                                            <p className="text-[15px] font-semibold text-ink">Translucent surface</p>
                                            <p className="mt-1 text-xs text-ink-soft">Automatic backdrop blur, hairline border.</p>
                                        </Card>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Empty States"
                                        description="Guidance when there is nothing to show"
                                        code={`<EmptyState title="No data" />`}
                                    >
                                        <div className="w-full origin-center scale-90">
                                            <EmptyState icon={<PackageSearch size={30} />} title="No items yet" actionLabel="Add new" />
                                        </div>
                                    </ComponentShowcase>
                                </ShowcaseSection>

                                <ShowcaseSection
                                    index="06"
                                    title="Advanced UI"
                                    icon={<TerminalSquare size={18} strokeWidth={1.5} />}
                                    visible={isVisible('advanced')}
                                >
                                    <ComponentShowcase
                                        title="Data Table"
                                        description="Sortable, searchable, paginated grid"
                                        code={`<DataTable columns={cols} data={data} searchable paginated />`}
                                    >
                                        <div className="w-full">
                                            <DataTable columns={tableColumns} data={tableData} searchable paginated pageSize={2} />
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Command Palette"
                                        description="Search-driven actions from anywhere"
                                        code={`<CommandPalette isOpen={open} onClose={close} actions={actions} />`}
                                    >
                                        <Button variant="primary" onClick={() => setIsCommandOpen(true)} startIcon={<CommandIcon size={16} />}>
                                            Open command palette
                                        </Button>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="File Upload"
                                        description="Drag-and-drop zone with feedback"
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

                                    <ComponentShowcase
                                        title="Typewriter"
                                        description="Animated typing for statements"
                                        code={`<TypewriterEffect texts={['Hello!', 'Welcome to ms-ui-kit.']} />`}
                                    >
                                        <div className="text-xl font-medium tracking-tight text-accent-ink">
                                            <TypewriterEffect texts={['Hello!', 'Welcome to ms-ui-kit.']} />
                                        </div>
                                    </ComponentShowcase>
                                </ShowcaseSection>

                                <ShowcaseSection
                                    index="07"
                                    title="Overlays & Toasts"
                                    icon={<Bell size={18} strokeWidth={1.5} />}
                                    visible={isVisible('overlays')}
                                >
                                    <ComponentShowcase
                                        title="Toasts"
                                        description="Global, contextual messages"
                                        code={`const toast = useToast();\ntoast.success('Saved successfully!');`}
                                    >
                                        <div className="flex flex-wrap justify-center gap-3">
                                            <Button variant="success" onClick={() => toast.success("Successfully saved changes!")}>
                                                Success toast
                                            </Button>
                                            <Button variant="danger" onClick={() => toast.error("Failed to delete item.")}>
                                                Error toast
                                            </Button>
                                            <Button variant="outline" onClick={() => toast.info("New update available.")}>
                                                Info toast
                                            </Button>
                                        </div>
                                    </ComponentShowcase>

                                    <ComponentShowcase
                                        title="Drawer"
                                        description="Off-canvas side panels"
                                        code={`<Drawer isOpen={open} onClose={close} title="Menu">...</Drawer>`}
                                    >
                                        <Button variant="outline" onClick={() => setIsDrawerOpen(true)} startIcon={<Menu size={16} />}>
                                            Open drawer
                                        </Button>
                                    </ComponentShowcase>
                                </ShowcaseSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Closing CTA ──────────────────────────────────── */}
                <section className="border-t border-line">
                    <div className="relative isolate mx-auto max-w-6xl overflow-hidden px-6 py-28 text-center">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-orbit"
                        >
                            <div className="halo h-full w-full opacity-70" />
                        </div>
                        <Reveal>
                            <Eyebrow>Get started</Eyebrow>
                            <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.02] tracking-[-0.04em] text-ink">
                                Ship something considered.
                            </h2>
                            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
                                Install the package, copy a pattern, and make the details yours.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    startIcon={<Copy size={16} />}
                                    onClick={handleInstallCopy}
                                >
                                    {installCopied ? 'Copied to clipboard' : 'Copy install command'}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    endIcon={<ArrowUpRight size={16} />}
                                    onClick={() =>
                                        window.open('https://github.com/maheshshinde9100/ms-ui-kit', '_blank', 'noopener')
                                    }
                                >
                                    Star on GitHub
                                </Button>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>

            <Footer
                logoText="ms-ui-kit"
                description="A hand-built React component system — editorial surfaces, tight type, and motion that stays out of the way."
                companyInfo={{ name: "Mahesh Shinde", year: new Date().getFullYear() }}
                socials={[
                    { label: "GitHub", href: "https://github.com/maheshshinde9100", icon: <Github size={18} /> },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/maheshshinde9100/", icon: <Linkedin size={18} /> },
                ]}
                links={[
                    {
                        title: "Product",
                        items: [
                            { label: "Components", href: "/" },
                            { label: "About developer", href: "/developer" }
                        ]
                    },
                    {
                        title: "Resources",
                        items: [
                            { label: "NPM package", href: "https://www.npmjs.com/package/ms-ui-kit" },
                            { label: "GitHub repo", href: "https://github.com/maheshshinde9100/ms-ui-kit" }
                        ]
                    },
                    {
                        title: "Meta",
                        items: [
                            { label: "License (MIT)", href: "https://github.com/maheshshinde9100/ms-ui-kit/blob/main/LICENSE" },
                            { label: "Contributing", href: "https://github.com/maheshshinde9100/ms-ui-kit/blob/main/CONTRIBUTING.md" }
                        ]
                    }
                ]}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="A considered component system"
                footer={
                    <div className="flex justify-end gap-3">
                        <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Close</Button>
                        <Button variant="premium" onClick={() => setIsModalOpen(false)}>Got it</Button>
                    </div>
                }
            >
                <div className="space-y-6 py-4 text-center">
                    <div className="flex justify-center">
                        <div className="grid h-16 w-16 place-items-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 size={32} strokeWidth={1.5} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold tracking-tight text-ink">Dark mode ready</h4>
                        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                            Every component reads from the same token set, so light and dark stay in sync
                            without per-component overrides.
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
                title="Application menu"
            >
                <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-ink-soft">
                        This is a custom drawer. Put navigation, filters, or settings here.
                    </p>
                    <div className="space-y-2">
                        <Button variant="outline" fullWidth className="justify-start" startIcon={<Home size={16} />}>Dashboard</Button>
                        <Button variant="outline" fullWidth className="justify-start" startIcon={<Settings size={16} />}>Settings</Button>
                        <Button variant="outline" fullWidth className="justify-start" startIcon={<User size={16} />}>Profile</Button>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default TestingUI;
