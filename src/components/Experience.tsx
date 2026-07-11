'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const workExperiences = [
  {
    role: 'Freelancer & Content Creator',
    company: 'Self-Employed',
    type: 'Freelance & Video',
    period: 'Jun 2025 — Present',
    location: 'Remote',
    description: 'Developing high-performance web applications, designing database schemas, and creating educational programming content for developers. Building custom full-stack solutions and sharing software engineering tutorials with the coding community.',
    skills: ['React.js', 'Next.js', 'Spring Boot', 'TailwindCSS', 'Content Creation'],
    document: null
  },
  {
    role: 'Java Developer',
    company: 'VaultofCodes',
    type: 'Internship',
    period: 'May 2025 — Jun 2025 · 2 mos',
    location: 'Remote',
    description: 'Worked on developing and maintaining Java-based applications with a focus on clean, efficient, and reusable code. Gained hands-on experience working with Java, OOP concepts, and debugging real-world software.',
    skills: ['Java', 'OOP', 'GitHub', 'Software Engineering'],
    document: {
      title: 'Vaultofcodes.pdf',
      description: 'Completed a Java Developer internship at VaultofCodes. Gained hands-on experience working with Java core concepts, object-oriented programming structure, and debugging codebases.'
    }
  },
  {
    role: 'Full-stack Developer',
    company: 'Ripan Technologies',
    type: 'Internship',
    period: 'Apr 2025 — May 2025 · 2 mos',
    location: 'Remote',
    description: 'Assisted in developing and maintaining web applications using modern full-stack technologies. Contributed to responsive frontend interfaces, API routing, and backend optimization.',
    skills: ['JavaScript', 'React.js', 'Node.js', 'CSS Grid', 'TailwindCSS'],
    document: {
      title: 'Ripan technologies.pdf',
      description: 'Had an incredible time building real-world projects, solving algorithmic problems, and leveling up my coding mindset. Every task pushed me to write clean and modular code.'
    }
  }
];

const educationHistory = [
  {
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Sai Tirumala NVR Engineering College',
    period: '2023 — 2027',
    description: 'Currently pursuing a Bachelor of Technology in Computer Science & Engineering. Focused on Java enterprise technologies, database modeling, data structures, and web application architecture. Current CPI: 6.95.'
  },
  {
    role: 'Intermediate in Physics, Chemistry, & Mathematics',
    company: 'Chaitanya Junior College',
    period: '2021 — 2023',
    description: 'Completed senior secondary education focusing on Physics, Chemistry, and Mathematics (PCM). Gained foundational knowledge in analytical logic, numerical computation, and basic sciences. Aggregate score: 7.05.'
  },
  {
    role: 'Secondary School Certificate (SSC)',
    company: 'Chaitanya Littles School',
    period: '2020 — 2021',
    description: 'Graduated secondary school curriculum with a perfect aggregate score of 10.0, establishing a strong academic foundation.'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Experience() {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (activePdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePdf]);

  return (
    <>
      {/* 1. WORK EXPERIENCE SECTION */}
      <section id="experience" className="relative w-full py-24 md:py-32 bg-[#05040a] overflow-hidden px-6 md:px-12 border-t border-white/5">
        <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
        
        {/* Soft background glow */}
        <div className="absolute top-1/4 right-[-10%] w-[350px] h-[350px] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#8B5CF6] block mb-3 font-semibold">
                04 // PROFESSIONAL
              </span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
                Work <br />
                <span className="font-normal text-zinc-300">Experience.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-end">
              <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans">
                A track record of industry internships, freelance engineering, and educational developer content creation.
              </p>
            </div>
          </div>

          {/* Experience Cards List */}
          <div className="flex flex-col gap-10 mt-12">
            {workExperiences.map((work, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-[#0e0c18]/40 border border-white/5 hover:border-white/10 transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group"
              >
                {/* Micro Ambient Glow behind each card on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Left Column: Period / Metadata */}
                <div className="md:w-1/4 flex flex-col gap-2 flex-shrink-0">
                  <span className="font-mono text-xs text-zinc-500 font-semibold tracking-widest block">
                    {work.period}
                  </span>
                  <div>
                    <span className="inline-block border border-[#8B5CF6]/30 text-[#8B5CF6] text-[9px] tracking-widest uppercase font-mono px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/5">
                      {work.type}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 tracking-wider flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {work.location}
                  </span>
                </div>

                {/* Right Column: Details */}
                <div className="md:w-3/4 flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif italic text-zinc-100 group-hover:text-white transition-colors duration-300">
                      {work.role}
                    </h3>
                    <p className="text-xs text-[#8B5CF6]/85 uppercase tracking-widest font-mono mt-1">
                      {work.company}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed font-sans">
                    {work.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {work.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="bg-white/[0.02] text-zinc-400 border border-white/5 px-2.5 py-1 text-[9px] tracking-wide rounded-md font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Document Attachment Panel */}
                  {work.document && (
                    <div 
                      onClick={() => setActivePdf(`/${work.document.title}`)}
                      className="border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2 cursor-pointer group/doc"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-950/20 border border-red-900/30 flex items-center justify-center text-red-400">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-semibold text-zinc-200 group-hover/doc:text-white transition-colors">{work.document.title}</p>
                            <span className="inline-flex items-center gap-1 text-[8px] bg-emerald-950/40 border border-emerald-900/50 text-emerald-400 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider font-semibold">
                              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              Verified
                            </span>
                          </div>
                          <p className="text-[10px] text-zinc-550 line-clamp-1 mt-0.5 max-w-[320px] sm:max-w-[450px]">
                            {work.document.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 hover:text-white flex items-center gap-1 self-end sm:self-auto transition-colors">
                        <span>Preview</span>
                        <span>↗</span>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. ACADEMIC TIMELINE SECTION */}
      <section id="education" className="relative w-full py-24 md:py-32 bg-[#05040a] overflow-hidden px-6 md:px-12 border-t border-white/5">
        <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
        
        {/* Soft background glow */}
        <div className="absolute bottom-1/4 left-[-10%] w-[350px] h-[350px] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#8B5CF6] block mb-3 font-semibold">
                05 // CHRONOLOGY
              </span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
                Academic <br />
                <span className="font-normal text-zinc-300">Timeline.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-end">
              <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans">
                A historical trace of educational achievements, technical studies, and core academic milestones.
              </p>
            </div>
          </div>

          {/* Timeline Path */}
          <div className="relative mt-12 pl-6 sm:pl-12 border-l border-white/10 flex flex-col gap-16">
            {/* Vertical line - simple and clean */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10" />

            {educationHistory.map((edu, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Minimalist timeline tick */}
                <div className="absolute left-[-29px] sm:left-[-53px] top-2 w-1.5 h-1.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-white" />

                {/* Grid content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Period Left Column */}
                  <div className="md:col-span-3">
                    <span className="font-mono text-xs text-zinc-500 font-semibold tracking-widest block mt-1">
                      {edu.period}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#8B5CF6]/60 mt-1 block">
                      {edu.company}
                    </span>
                  </div>

                  {/* Role Details Right Column */}
                  <div className="md:col-span-9">
                    <h3 className="text-xl md:text-2xl font-serif italic text-zinc-100">
                      {edu.role}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed font-sans mt-4 max-w-3xl">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PDF Modal Viewer */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePdf(null)}
            className="fixed inset-0 z-[99999] bg-[#05040a]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] bg-[#0e0c18] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0e0c18]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                  <span className="font-mono text-xs text-zinc-300 uppercase tracking-wider">{activePdf.replace('/', '')}</span>
                </div>
                <button
                  onClick={() => setActivePdf(null)}
                  className="text-zinc-400 hover:text-white transition-colors p-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 bg-[#05040a] relative">
                {/* Embed PDF with toolbar=0 to hide download options */}
                <iframe
                  src={`${activePdf}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-none"
                  title="Certificate Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
