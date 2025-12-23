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
    Navbar
} from '../components';

const TestingUI = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [switchState, setSwitchState] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const navLinks = [
        { label: 'Components', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Examples', href: '#' },
    ];

    const user = {
        name: 'Mahesh Shinde',
        role: 'Lead Designer',
        avatar: ''
    };

    const accordionItems = [
        {
            title: "What is ms-ui-kit?",
            content: "ms-ui-kit is a premium React component library built with Tailwind CSS, focusing on modern aesthetics like glassmorphism and smooth animations."
        },
        {
            title: "How to use it?",
            content: "Simply import the components you need and use them in your React application. Every component is designed to be highly customizable via props."
        },
        {
            title: "Is it responsive?",
            content: "Yes! All components are built with a mobile-first approach and work seamlessly across all screen sizes."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans transition-colors duration-500">
            <Navbar logo="MS UI" links={navLinks} user={user} />

            <div className="max-w-6xl mx-auto space-y-12 p-8 pt-32">
                <header className="text-center mb-16">
                    <Badge variant="primary" className="mb-4">v1.0.0 Now Live</Badge>
                    <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        ms-ui-kit Component Gallery
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        A premium collection of modern UI components for stunning web applications.
                        Crafted for speed, beauty, and accessibility.
                    </p>
                </header>

                {/* Badges & Avatars & Loaders */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-l-4 border-blue-500 pl-4 py-1">General Elements</h2>
                    <Card variant="glass" className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Badges</p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="primary">Primary</Badge>
                                    <Badge variant="success">Success</Badge>
                                    <Badge variant="warning">Warning</Badge>
                                    <Badge variant="danger">Danger</Badge>
                                </div>
                                <div className="flex flex-wrap gap-2 items-center">
                                    <Badge variant="primary" size="sm">Small</Badge>
                                    <Badge variant="primary" size="lg">Large</Badge>
                                    <Badge variant="primary" isDot />
                                    <span className="text-xs text-gray-400">Dot indicator</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Avatars</p>
                                <div className="flex flex-wrap items-end gap-3">
                                    <Avatar name="Mahesh" size="xs" status="online" />
                                    <Avatar name="Admin User" size="sm" status="online" />
                                    <Avatar name="John Doe" size="md" status="away" bordered />
                                    <Avatar name="Jane Smith" size="lg" status="busy" bordered />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Spinners</p>
                                <div className="flex items-center gap-4">
                                    <Spinner size="sm" />
                                    <Spinner size="md" variant="success" />
                                    <Spinner size="lg" variant="danger" />
                                    <Spinner size="xl" variant="warning" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Form Elements Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-l-4 border-emerald-500 pl-4 py-1">Interactions</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="p-8">
                            <h3 className="text-lg font-bold mb-6">Input Fields</h3>
                            <div className="space-y-4">
                                <Input
                                    label="Search Components"
                                    placeholder="Search..."
                                    variant="outline"
                                    startIcon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <Input
                                    label="Glass Variant"
                                    placeholder="Enter secret key"
                                    variant="glass"
                                    helpText="Try focusing this field to see the animation"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <Switch checked={switchState} onChange={setSwitchState} label="Night Mode" variant="primary" />
                                    <Switch checked={true} label="Auto Save" variant="success" />
                                </div>
                            </div>
                        </Card>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold">Accordions</h3>
                            <Accordion items={accordionItems} />

                            <div className="flex gap-4">
                                <Button onClick={() => setIsModalOpen(true)} variant="premium" className="flex-1 py-4">
                                    Open Interactive Dialog
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Alerts Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold border-l-4 border-amber-500 pl-4 py-1">Feedback</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Alert
                            variant="info"
                            title="Welcome to ms-ui-kit!"
                            onClose={() => { }}
                            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        >
                            Explore our wide range of components and start building something amazing today.
                        </Alert>
                        <Alert
                            variant="success"
                            styleType="glass"
                            title="System Updated"
                            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        >
                            All components have been migrated to the new design system.
                        </Alert>
                    </div>
                </section>

                {/* Modal Demo */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Premium Dialog"
                    footer={
                        <div className="flex justify-end gap-3">
                            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Maybe Later</Button>
                            <Button variant="premium" onClick={() => setIsModalOpen(false)}>I Love It!</Button>
                        </div>
                    }
                >
                    <div className="space-y-6 text-center py-4">
                        <div className="flex justify-center">
                            <Avatar name="Mahesh" size="xl" bordered status="online" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold">Stay Updated!</h4>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                Join our newsletter to get the latest components and UI tips.
                            </p>
                        </div>
                        <Input placeholder="email@example.com" variant="filled" />
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default TestingUI;
