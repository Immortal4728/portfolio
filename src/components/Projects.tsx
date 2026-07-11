'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, GraduationCap, Shield, Wrench } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const featuredProject = {
  title: 'Project Immortal',
  tagline: 'Engineering Ideas Into Real Software',
  category: 'FLAGSHIP FULL-STACK PLATFORM',
  description: 'A production-grade, multi-portal project management platform built for engineering students, administrators, and employees to collaborate on final-year and production-grade software projects. It connects students directly with developer teams, enabling live project tracking, automated meeting schedules, and secure document delivery.',
  portals: [
    { name: 'Student Portal', icon: '🎓', desc: 'Submit projects, track progress stages, and access reports.' },
    { name: 'Admin Portal', icon: '🛡️', desc: 'Schedule meetings, update stages, and manage user analytics.' },
    { name: 'Employee Portal', icon: '👷', desc: 'Access assigned workspaces and upload developer artifacts.' }
  ],
  tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Firebase Auth', 'InsForge BaaS', 'PostgreSQL'],
  demo: 'https://project-immortal.vercel.app/',
  github: 'https://github.com/Immortal4728/Project-Immortal',
  image: '/project_immortal.png'
};

const otherProjects = [
  {
    num: '01',
    title: 'JNTUK Student Library',
    category: 'WEB PORTAL & RESOURCE ENGINE',
    tech: ['Next.js', 'React', 'TailwindCSS', 'Firebase', 'DBMS'],
    description: 'A digital library workspace and catalog directory designed for JNTUK students. Enables searchable book index lookups, booking requests, and administrative asset auditing.',
    demo: 'https://jntuk-student-library.vercel.app/',
    github: 'https://github.com/Immortal4728',
    image: '/jntuk_library.jpg'
  },
  {
    num: '02',
    title: 'FarmLink Supply Chain',
    category: 'B2B AGRI-TECH PLATFORM',
    tech: ['React.js', 'TailwindCSS', 'Node.js', 'REST APIs', 'PostgreSQL'],
    description: 'A supply chain listing directory connecting farmers with wholesale agricultural buyers. Integrates real-time crop pricing trackers, secure catalogs, and direct inquiry channels.',
    demo: 'https://farmlink-portfolio.vercel.app/',
    github: 'https://github.com/Immortal4728',
    image: '/farmlink.png'
  },
  {
    num: '03',
    title: 'Minimalist Chess Engine',
    category: 'INTERACTIVE FRONTEND GAME',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'WebSockets', 'Canvas API'],
    description: 'A highly responsive, custom-styled web chess board implementing full validation rules, move log history trackers, turn indicators, and responsive mobile viewport layouts.',
    demo: 'https://immortal4728.github.io/chess/',
    github: 'https://github.com/Immortal4728',
    image: '/chess.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden px-6 md:px-12 border-t border-white/5">
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#8B5CF6] block mb-3 font-semibold">
              03 // PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white leading-none">
              Featured <br />
              <span className="text-zinc-400">Architectures.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans max-w-xl">
              An overview of production-grade systems, digital dashboards, and responsive web products engineered with modern stacks.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            FLAGSHIP PROJECT: PROJECT IMMORTAL — FULL-WIDTH SHOWCASE
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mb-24 relative group"
        >
          {/* Full-width browser mockup with image */}
          <Link href="/project-immortal" className="block">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/25 transition-all duration-700 bg-[#0a0a12] shadow-[0_8px_60px_-12px_rgba(139,92,246,0.15)]">
              {/* Browser chrome bar */}
              <div className="w-full h-10 bg-[#0f0e17] border-b border-white/5 flex items-center px-5 gap-2 select-none">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-md px-4 py-1 text-[10px] font-mono text-zinc-500 tracking-wider flex items-center gap-2">
                    <svg className="w-2.5 h-2.5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    project-immortal.vercel.app
                  </div>
                </div>
                <div className="w-16" />
              </div>
              {/* Screenshot */}
              <div className="aspect-[16/8] md:aspect-[16/7] overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </Link>

          {/* Content below the browser mockup */}
          <div className="relative mt-10 px-2 md:px-4">
            <div className="max-w-5xl">
              {/* Category Badge */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-[#8B5CF6]/15 backdrop-blur-md border border-[#8B5CF6]/30 text-[#8B5CF6] text-[9px] tracking-widest uppercase font-mono px-4 py-1.5 rounded-full mb-4"
              >
                {featuredProject.category}
              </motion.span>

              {/* Title */}
              <Link href="/project-immortal" className="group/title block">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white leading-[0.95] mb-3 flex items-center gap-4">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 text-[#8B5CF6] flex-shrink-0" strokeWidth={2.5} />
                  <span className="group-hover/title:text-[#8B5CF6] transition-colors duration-300">Project Immortal</span>
                </h3>
              </Link>

              {/* Tagline */}
              <p className="text-xs md:text-sm font-mono text-zinc-400 tracking-wider uppercase flex items-center gap-2 mb-6">
                {featuredProject.tagline}
                <Link href="/project-immortal" className="text-[#8B5CF6] text-[10px] font-sans font-medium tracking-normal lowercase hover:underline">
                  (view case study ↗)
                </Link>
              </p>

              {/* Description */}
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed font-sans max-w-3xl mb-8">
                {featuredProject.description}
              </p>

              {/* Portals + Tech + Buttons grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                {/* Left: Portals */}
                <div className="lg:col-span-5">
                  <p className="text-[10px] font-mono tracking-widest text-[#8B5CF6] uppercase mb-4 font-semibold">SYSTEM PORTALS</p>
                  <div className="flex flex-col gap-4">
                    {featuredProject.portals.map((p, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-lg mt-0.5 flex-shrink-0">{p.icon}</span>
                        <div>
                          <p className="text-sm font-sans font-semibold text-zinc-200">{p.name}</p>
                          <p className="text-xs text-zinc-400 font-sans leading-relaxed mt-0.5">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Tech + Buttons */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                  {/* Tech tags */}
                  <div>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3 font-semibold">TECH STACK</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tech.map((t, idx) => (
                        <span key={idx} className="bg-white/[0.04] text-zinc-300 border border-white/[0.06] px-3 py-1.5 text-[10px] tracking-wide rounded-lg font-mono hover:border-[#8B5CF6]/30 hover:text-white transition-all duration-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-xs font-mono uppercase tracking-wider text-white transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(139,92,246,0.5)] hover:shadow-[0_4px_30px_-4px_rgba(139,92,246,0.7)] interactive-hover"
                    >
                      <span>Launch Platform</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 hover:border-white/25 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 interactive-hover"
                    >
                      <span>Inspect Code</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. OTHER PROJECTS GRID */}
        <div>
          <h4 className="font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase mb-8 border-b border-white/5 pb-4">
            OTHER NOTABLE CREATIONS
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="border border-white/10 group rounded-2xl overflow-hidden flex flex-col justify-between bg-white/[0.01] hover:border-white/20 transition-all duration-500"
              >
                {/* Image Showcase Area */}
                <div className="relative aspect-[16/9] w-full bg-[#05040a] border-b border-white/5 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-20 font-mono text-[9px] tracking-[0.2em] text-zinc-300 border border-white/10 rounded-md px-3 py-1 bg-zinc-950/80 backdrop-blur-md uppercase">
                    {proj.category}
                  </div>

                  <div className="absolute top-4 right-4 z-20 font-mono text-lg font-semibold text-zinc-500/80">
                    {proj.num}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl md:text-2xl font-sans font-semibold text-zinc-100 group-hover:text-[#8B5CF6] transition-colors duration-300">
                      {proj.title}
                    </h3>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5 mb-4">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono tracking-wider uppercase border border-white/5 text-zinc-400 bg-white/[0.02] px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed font-sans mb-6">
                      {proj.description}
                    </p>
                  </div>

                  {/* Footer Links */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-auto">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 hover:text-white transition-colors"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#8B5CF6] hover:text-[#EC4899] transition-colors font-semibold"
                    >
                      <span>Launch app</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
