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
  Database, 
  Globe, 
  GraduationCap, 
  Briefcase,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer } from '../components';

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
        duration: "Dec 2025 - Present"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-8">
          <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-700"></div>
          <div className="px-8 pb-8 -mt-24">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <div className="relative">
                <img 
                  src={info.image} 
                  alt={info.name} 
                  className="w-48 h-48 rounded-2xl object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-green-500 w-5 h-5 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
              </div>
              <div className="flex-1 text-center md:text-left mb-4">
                <h1 className="text-4xl font-black mb-1">{info.name}</h1>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-xl">{info.title}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1.5"><MapPin size={18} /> {info.location}</span>
                  <span className="flex items-center gap-1.5"><GraduationCap size={18} /> {info.education.split('-')[0]}</span>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <a href={info.profiles.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href={info.profiles.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${info.email}`} className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: About & Skills */}
          <div className="md:col-span-2 space-y-8">
            <motion.section variants={itemVariants} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="text-blue-600" /> About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {info.about}
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-purple-600" /> Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(info.skills).map(([skill, level]) => (
                  <div key={skill} className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="font-semibold text-sm uppercase tracking-wider">{skill}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">{level}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="text-emerald-600" /> Experience
              </h2>
              <div className="space-y-6">
                {info.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-900"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                      <h3 className="font-bold text-xl">{exp.role}</h3>
                      <span className="text-sm font-medium px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">{exp.duration}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">{exp.company}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column: Info & Links */}
          <div className="space-y-8">
            <motion.section variants={itemVariants} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe className="text-blue-600" /> Profiles
              </h2>
              <div className="grid gap-4">
                {Object.entries(info.profiles).map(([platform, url]) => (
                  <a 
                    key={platform} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                  >
                    <span className="font-bold capitalize">{platform}</span>
                    <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-3xl shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
              <p className="opacity-90 mb-6">Open to opportunities and collaborations. Feel free to reach out!</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg"><Phone size={18} /></div>
                  <span className="font-medium">{info.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg"><Mail size={18} /></div>
                  <span className="font-medium text-sm break-all">{info.email}</span>
                </div>
              </div>
              <a 
                href="https://drive.google.com/file/d/1iGdpqued0sxXV5AW5NrGHUt6-F2m6nRa/view" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center w-full mt-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-xl hover:bg-gray-100 transition-colors"
              >
                Download Resume
              </a>
            </motion.section>

            <motion.section variants={itemVariants} className="p-8 rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-center">
              <Star className="mx-auto mb-3 text-yellow-500" fill="currentColor" />
              <h3 className="font-bold mb-1">Portfolio</h3>
              <a href={info.profiles.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-medium">
                maheshshinde-dev.vercel.app
              </a>
            </motion.section>
          </div>
        </div>
      </motion.div>
      <div className="mt-12 -mx-4 sm:-mx-6 lg:-mx-8">
        <Footer 
          logoText="MS UI Kit"
          description="A premium UI component library crafted for modern web applications. Built with Tailwind CSS and Framer Motion."
          companyInfo={{ name: "Mahesh Shinde", year: new Date().getFullYear() }}
          socials={[
            { label: "GitHub", href: "https://github.com/maheshshinde9100", icon: <Github size={20} /> },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/maheshshinde9100/", icon: <Linkedin size={20} /> }
          ]}
          links={[
            {
              title: "Product",
              items: [
                { label: "Components", href: "/" },
                { label: "Documentation", href: "#" },
                { label: "About Developer", href: "/developer" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "GitHub Repository", href: "https://github.com/maheshshinde9100/ms-ui-kit" },
                { label: "NPM Package", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </div>
  );
};

export default DeveloperPage;
