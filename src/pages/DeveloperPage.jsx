import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  Terminal,
  Globe,
  GraduationCap,
  Briefcase,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';

const SectionTitle = ({ icon, children }) => (
  <h2 className="mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-ink">
    <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface-2 text-accent-ink">
      {icon}
    </span>
    {children}
  </h2>
);

const DeveloperPage = () => {
  const info = {
    name: "Mahesh Shinde",
    title: "Full Stack Developer | Java & Spring Boot Developer",
    education: "B.Tech Computer Engineering (3rd Year) - Sanjivani College of Engineering, Kopargaon",
    location: "Yeola, Maharashtra, India",
    email: "maheshshinde9100@gmail.com",
    phone: "+91 9529544681",
    image: "https://maheshshinde-dev.vercel.app/profile.jpg",
    about: "Passionate Full Stack Developer specializing in Java, Spring Boot, and React. I enjoy building scalable backend systems and responsive web applications while continuously improving my problem-solving and DSA skills.",
    skills: {
      "Java": 91,
      "Spring Boot": 92,
      "Hibernate": 90,
      "JavaScript": 85,
      "React.js": 80,
      "Tailwind CSS": 80,
      "Node.js": 70,
      "MongoDB": 89,
      "MySQL": 85,
      "Docker": 65,
      "Git": 90,
      "Postman": 95
    },
    experience: [
      {
        role: "Backend Developer Intern",
        company: "GolokaIT",
        duration: "Dec 2025 — Present"
      },
      {
        role: "Android Developer Intern",
        company: "ATJOIN Pvt. Ltd",
        duration: "June 2023"
      },
      {
        role: "Web Developer Intern",
        company: "CodeClause",
        duration: "April 2023"
      }
    ],
    profiles: {
      linkedin: "https://www.linkedin.com/in/maheshshinde9100/",
      github: "https://github.com/maheshshinde9100",
      leetcode: "https://leetcode.com/u/code-with-mahesh/",
      hackerrank: "https://www.hackerrank.com/profile/maheshshinde9100",
      codechef: "https://www.codechef.com/users/coder_mahi",
      gfg: "https://www.geeksforgeeks.org/user/coder_mahi/",
      portfolio: "https://maheshshinde-dev.vercel.app"
    }
  };

  const navLinks = [
    { label: 'Components', href: '/' },
    { label: 'Developer', href: '/developer' },
    { label: 'GitHub', href: 'https://github.com/maheshshinde9100/ms-ui-kit' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Navbar logo="ms-ui-kit" links={navLinks} />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mb-8 overflow-hidden rounded-3xl border border-line bg-surface"
          >
            <div className="dot-grid relative h-32 border-b border-line">
              <div className="absolute inset-0 flex items-end justify-between px-8 pb-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  Developer
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  Est. 2023
                </p>
              </div>
            </div>

            <div className="px-6 pb-8 sm:px-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end">
                  <div className="relative -mt-14">
                    <img
                      src={info.image}
                      alt={info.name}
                      className="h-28 w-28 rounded-2xl border-4 border-surface object-cover"
                    />
                    <span className="absolute bottom-2 right-2 h-3 w-3 rounded-full border-2 border-surface bg-emerald-500" />
                  </div>

                  <div className="pb-1">
                    <h1 className="text-3xl font-medium tracking-[-0.03em] text-ink sm:text-4xl">
                      {info.name}
                    </h1>
                    <p className="mt-1.5 text-sm font-medium text-accent-ink">{info.title}</p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-ink-soft">
                      <span className="flex items-center gap-1.5"><MapPin size={14} strokeWidth={1.75} /> {info.location}</span>
                      <span className="flex items-center gap-1.5"><GraduationCap size={14} strokeWidth={1.75} /> {info.education.split('-')[0].trim()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2.5 pb-1">
                  <a
                    href={info.profiles.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition-colors duration-200 hover:border-line-strong hover:text-ink"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={info.profiles.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition-colors duration-200 hover:border-line-strong hover:text-ink"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${info.email}`}
                    aria-label="Email"
                    className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper transition-opacity duration-200 hover:opacity-90"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Left column */}
            <div className="space-y-6 md:col-span-2">
              <motion.section variants={itemVariants} className="rounded-2xl border border-line bg-surface p-7">
                <SectionTitle icon={<Terminal size={16} strokeWidth={1.75} />}>About</SectionTitle>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {info.about}
                </p>
              </motion.section>

              <motion.section variants={itemVariants} className="rounded-2xl border border-line bg-surface p-7">
                <SectionTitle icon={<Code size={16} strokeWidth={1.75} />}>Skills & expertise</SectionTitle>
                <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                  {Object.entries(info.skills).map(([skill, level]) => (
                    <div key={skill}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">{skill}</span>
                        <span className="font-mono text-[11px] text-accent-ink">{level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="rounded-2xl border border-line bg-surface p-7">
                <SectionTitle icon={<Briefcase size={16} strokeWidth={1.75} />}>Experience</SectionTitle>
                <div className="space-y-7">
                  {info.experience.map((exp, index) => (
                    <div key={index} className="relative border-l border-line pl-6">
                      <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface" />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-[15px] font-semibold text-ink">{exp.role}</h3>
                        <span className="w-fit rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[13px] text-ink-soft">{exp.company}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <motion.section variants={itemVariants} className="rounded-2xl border border-line bg-surface p-7">
                <SectionTitle icon={<Globe size={16} strokeWidth={1.75} />}>Profiles</SectionTitle>
                <div className="space-y-1">
                  {Object.entries(info.profiles).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg px-2.5 py-2.5 transition-colors duration-200 hover:bg-surface-2"
                    >
                      <span className="text-[13px] capitalize text-ink-soft transition-colors group-hover:text-ink">
                        {platform}
                      </span>
                      <ExternalLink size={14} className="text-faint transition-colors group-hover:text-accent-ink" />
                    </a>
                  ))}
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="rounded-2xl bg-ink p-7 text-paper">
                <h2 className="text-lg font-semibold tracking-tight">Let's connect</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-paper/70">
                  Open to opportunities and collaborations. Feel free to reach out.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-paper/10"><Phone size={15} /></span>
                    <span className="text-[13px]">{info.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-paper/10"><Mail size={15} /></span>
                    <span className="break-all text-xs">{info.email}</span>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/file/d/1iGdpqued0sxXV5AW5NrGHUt6-F2m6nRa/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block w-full rounded-full bg-paper py-3 text-center text-[13px] font-medium text-ink transition-opacity duration-200 hover:opacity-90"
                >
                  Download resume
                </a>
              </motion.section>

              <motion.section variants={itemVariants} className="rounded-2xl border border-dashed border-line-strong p-7 text-center">
                <Star size={18} className="mx-auto text-accent-ink" strokeWidth={1.75} />
                <h3 className="mt-3 text-[15px] font-semibold text-ink">Portfolio</h3>
                <a
                  href={info.profiles.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-[13px] text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
                >
                  maheshshinde-dev.vercel.app
                </a>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer
        logoText="ms-ui-kit"
        description="A hand-built React component system crafted for modern web applications."
        companyInfo={{ name: "Mahesh Shinde", year: new Date().getFullYear() }}
        socials={[
          { label: "GitHub", href: "https://github.com/maheshshinde9100", icon: <Github size={18} /> },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/maheshshinde9100/", icon: <Linkedin size={18} /> }
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
              { label: "GitHub repository", href: "https://github.com/maheshshinde9100/ms-ui-kit" },
              { label: "NPM package", href: "https://www.npmjs.com/package/ms-ui-kit" }
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
    </div>
  );
};

export default DeveloperPage;
