'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PolaroidSection() {
  // Arrow drawing animation
  const arrowDraw = {
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut", delay: 0.3 }
  };

  return (
    <section id="about" className="relative w-full bg-[#050505] py-24 md:py-32 px-6 md:px-12 select-none overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />

      {/* Background construction lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
        <line x1="0" y1="20%" x2="100%" y2="80%" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        <circle cx="75%" cy="35%" r="180" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center gap-20">
        
        {/* 1. FLOATING NAV MENU BAR */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between gap-6 md:gap-12 bg-zinc-950/70 border border-white/10 backdrop-blur-md px-6 md:px-8 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] relative"
        >
          {/* Header indicator lines mimicking top of menu */}
          <div className="absolute top-[-8px] left-[15%] w-16 h-[1px] bg-zinc-700/50" />
          <div className="absolute top-[-8px] left-[15%] w-2 h-2 rounded-full bg-[#8B5CF6] top-[-11px]" />
          
          <div className="flex gap-4 md:gap-8 font-mono text-[10px] tracking-[0.2em] text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#education" className="hover:text-white transition-colors">EDUCATION</a>
          </div>

          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-white text-[#05040a] text-xs font-mono font-bold py-2 px-4 rounded-xl shadow-lg hover:bg-zinc-200 transition-colors"
          >
            <div className="w-4 h-4 rounded-full bg-[#8B5CF6] flex items-center justify-center">
              <svg className="w-2.5 h-2.5 fill-current text-black translate-x-[0.5px]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span>CONNECT</span>
          </a>
        </motion.div>

        {/* 2. MAIN GRID - POLAROID & TYPOGRAPHY */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mt-8">
          
          {/* LEFT COLUMN: Polaroid Frame Container */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            
            {/* Squiggly connection arrow pointing from "Hey!" to Photo */}
            <div className="absolute top-[-40px] right-[5%] sm:right-[15%] w-32 h-24 hidden md:block pointer-events-none z-30">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-zinc-500/80 stroke-current">
                {/* Handwritten style squiggly arrow */}
                <motion.path 
                  d="M 90,10 Q 70,15 50,40 T 10,75" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                  variants={arrowDraw}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                />
                <motion.path 
                  d="M 12,65 L 10,75 L 20,73" 
                  strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                />
              </svg>
            </div>

            {/* Polaroid Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-5 pb-12 shadow-[0_30px_70px_rgba(0,0,0,0.85)] rounded-xs rotate-[-4deg] relative w-full max-w-[340px] flex flex-col z-20 group hover:rotate-[-2deg] transition-transform duration-500"
            >
              {/* Red Push-Pin */}
              <div className="absolute top-[-22px] left-[46%] z-30 pointer-events-none">
                <svg width="32" height="42" viewBox="0 0 32 42" fill="none" className="drop-shadow-[0_8px_5px_rgba(0,0,0,0.5)]">
                  {/* Pin body */}
                  <path d="M16 10 C16 4, 24 4, 24 10 C24 14, 18 16, 18 24 L14 24 C14 16, 16 14, 16 10 Z" fill="#e11d48" />
                  <circle cx="16" cy="7" r="6" fill="#f43f5e" />
                  <ellipse cx="16" cy="6" rx="3" ry="1.5" fill="#ffe4e6" opacity="0.6" />
                  {/* Needle */}
                  <rect x="15" y="24" width="2" height="15" fill="#94a3b8" />
                  <path d="M15 39 L16 42 L17 39 Z" fill="#475569" />
                </svg>
              </div>

              {/* Polaroid Image Container */}
              <div className="relative aspect-square bg-zinc-950 w-full overflow-hidden border border-zinc-200/90">
                <Image 
                  src="/rishi_portrait.png" 
                  alt="K. Rishi Chowdary portrait" 
                  fill
                  className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-w-md) 300px, 400px"
                  priority
                />
              </div>

              {/* Signature under Image */}
              <span className="font-script text-zinc-800 text-3xl mt-5 block text-center font-normal tracking-wide">
                Rishi Chowdary
              </span>

              {/* Cyan Coffee Sticker */}
              <motion.div 
                initial={{ scale: 0, rotate: 10 }}
                whileInView={{ scale: 1, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", delay: 0.8 }}
                className="absolute bottom-6 right-[-24px] z-30 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg border border-orange-400 text-2xl select-none"
              >
                ☕
              </motion.div>

              {/* Cyber Yellow Tilted Sticker */}
              <motion.div 
                initial={{ scale: 0, rotate: -25 }}
                whileInView={{ scale: 1, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", delay: 0.6 }}
                className="absolute bottom-6 left-[-28px] z-30 bg-gradient-to-br from-yellow-400 to-amber-500 text-zinc-950 font-mono font-black text-[11px] py-1.5 px-3.5 tracking-[0.2em] rounded-md shadow-xl border border-yellow-300/40 uppercase rotate-[-12deg] select-none"
              >
                SPRING
              </motion.div>

            </motion.div>
          </div>

          {/* RIGHT COLUMN: Hey! Title & Description */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:pl-8">
            
            {/* Hey! Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-8xl font-serif italic text-zinc-200 font-light leading-none relative"
            >
              Hey<span className="text-[#8B5CF6] font-bold">!</span>
            </motion.h2>

            {/* Geometric Paragraph Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-zinc-300 tracking-[0.08em] text-xs md:text-sm leading-relaxed max-w-md flex flex-col gap-2 border-l border-zinc-800/80 pl-6 text-left py-2"
            >
              <p>I&apos;M K. RISHI CHOWDARY - A CSE STUDENT WHO</p>
              <p>LIVES AND BREATHES CODE. WHETHER IT&apos;S</p>
              <p>DEVELOPING ROBUST FULL-STACK WEB PLATFORMS,</p>
              <p>OR SOLVING COMPLEX ALGORITHMIC CHALLENGES.</p>
              <p className="text-zinc-100 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">SOFTWARE ENGINEERING FUELS ALL I DO.</p>
            </motion.div>

            {/* Floating arrow icon below paragraph */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 mt-2 hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6] transition-all"
            >
              <span className="text-lg">↗</span>
            </motion.div>

          </div>

        </div>

        {/* 3. SOCIAL MEDIA BADGES BOTTOM */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          {/* LinkedIn Badge */}
          <motion.a 
            href="https://www.linkedin.com/in/immortal4728/" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 bg-[#0e0c18] border border-white/5 rounded-xl px-5 py-3 hover:border-white/20 transition-all font-mono text-[10px] tracking-widest text-zinc-400 hover:text-white"
          >
            <div className="w-6 h-6 rounded-lg bg-zinc-900 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <span>LINKEDIN / IMMORTAL4728</span>
          </motion.a>

          {/* GitHub Badge */}
          <motion.a 
            href="https://github.com/Immortal4728" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-3 bg-[#0e0c18] border border-white/5 rounded-xl px-5 py-3 hover:border-white/20 transition-all font-mono text-[10px] tracking-widest text-zinc-400 hover:text-white"
          >
            <div className="w-6 h-6 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            <span>GITHUB.COM/IMMORTAL4728</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
