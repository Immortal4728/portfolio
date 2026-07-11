'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  // Animation presets
  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const lineDraw = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }
  };

  const dotDraw = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 0.3, ease: "easeOut", delay: 2.1 }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#05040a] px-6 py-20 select-none">
      
      {/* Background Geometric Grid & Faint Lines */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.04] pointer-events-none" />
      
      {/* Precision Diagonal Construction Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
        <motion.line 
          x1="0" y1="100%" x2="100%" y2="0" 
          stroke="rgba(255,255,255,0.04)" 
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.line 
          x1="15%" y1="0" x2="85%" y2="100%" 
          stroke="rgba(255,255,255,0.03)" 
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="28%" cy="65%" r="150" 
          fill="none" 
          stroke="rgba(255,255,255,0.015)" 
          strokeWidth="0.5"
        />
      </svg>

      {/* TOP HEADER LINE */}
      <div className="absolute top-24 left-0 w-32 md:w-48 px-8 flex items-center z-20">
        <div className="w-2 h-2 rounded-full bg-[#8B5CF6] mr-4 neon-glow" />
        <div className="flex-grow h-[1px] bg-white/5 relative">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#8B5CF6] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* LEFT VERTICAL TEXT - K. RISHI CHOWDARY */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-6 z-20 mix-blend-difference">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-zinc-500 whitespace-nowrap -rotate-90 origin-center translate-y-[-40px]">
          K. RISHI CHOWDARY
        </span>
        <div className="h-10 w-[1px] bg-white/10" />
        <Sparkles size={12} className="text-[#8B5CF6] animate-pulse" />
      </div>

      {/* RIGHT VERTICAL TEXT - PYTHON DEVELOPER */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-6 z-20 mix-blend-difference">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-zinc-500 whitespace-nowrap rotate-90 origin-center translate-y-[40px]">
          FULL-STACK &amp; JAVA
        </span>
        <div className="h-10 w-[1px] bg-white/10" />
        <div className="flex flex-col gap-1 text-[#8B5CF6]">
          <Sparkles size={12} className="animate-pulse" />
        </div>
      </div>

      {/* MAIN HERO TYPOGRAPHY BLOCK */}
      <div className="relative flex flex-col justify-center items-center w-full max-w-7xl z-10">
        
        {/* Neon Green Accent Year Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="absolute top-[-40px] md:top-[-60px] left-[15%] sm:left-[22%] z-30"
        >
          <div className="border border-white/15 bg-white/5 backdrop-blur-md text-[#8B5CF6] text-xs font-mono px-4 py-1.5 rounded-full tracking-widest font-semibold">
            CLASS OF 2027
          </div>
        </motion.div>

        {/* Text Container */}
        <div className="flex flex-col select-none text-center sm:text-left relative">
          
          {/* Top Line Name Word 1 */}
          <h1 className="text-7xl sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-serif italic font-extralight leading-[0.85] text-zinc-400 tracking-tight relative pr-12 md:pr-24 z-20">
            Rishi
          </h1>

          {/* Bottom Line Name Word 2 */}
          <h1 className="text-7xl sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-serif font-light leading-[0.85] text-zinc-100 tracking-tighter pl-12 sm:pl-32 md:pl-48 mt-[-10px] md:mt-[-25px] relative z-20">
            Chowdary
            <span className="absolute top-[30%] right-[-15px] sm:right-[-35px] text-[10px] md:text-sm font-mono border border-zinc-500/20 rounded-full px-2 py-0.5 font-normal tracking-normal text-zinc-500 bg-zinc-950/80 backdrop-blur-xs select-none">
              ®
            </span>
          </h1>

          {/* Handwritten signature mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            animate={{ opacity: 0.9, scale: 1, rotate: -6 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="absolute bottom-[-15px] right-[5%] sm:right-[10%] md:right-[15%] z-30 pointer-events-none select-none"
          >
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#C084FC] filter drop-shadow-[0_2px_10px_rgba(139,92,246,0.3)] font-semibold">
              K. Rishi Chowdary
            </span>
          </motion.div>

          {/* Calligraphic SVG Stroke Weaving Integrated Into Typography (Behind text) */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full overflow-visible opacity-90"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
              </defs>
              {/* Glowing Blur Underlay for abstract loop */}
              <motion.path
                d="M 290,460 C 180,480 220,380 380,310 C 580,220 620,60 550,50 C 470,40 430,220 380,300 C 330,380 250,420 580,260"
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={lineDraw}
                initial="initial"
                animate="animate"
                className="opacity-25 blur-[5px]"
              />
              {/* Crisp Foreground Path */}
              <motion.path
                d="M 290,460 C 180,480 220,380 380,310 C 580,220 620,60 550,50 C 470,40 430,220 380,300 C 330,380 250,420 580,260"
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={lineDraw}
                initial="initial"
                animate="animate"
              />
            </svg>
          </div>
        </div>

        {/* FLOATING UI ELEMENTS SECTION */}
        <div className="w-full mt-16 md:mt-24 px-4 sm:px-12 md:px-24 flex flex-col sm:flex-row justify-end items-start sm:items-center gap-8 z-30">

          {/* Bottom Right Floating Box: DESIGN EXECUTED BY K. RISHI CHOWDARY */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.2 }}
            className="flex items-start gap-4"
          >
            <div className="w-9 h-9 rounded-full border border-white/20 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 flex items-center justify-center text-zinc-400 hover:text-[#8B5CF6] transition-all duration-300 cursor-pointer">
              <span className="text-lg">↗</span>
            </div>
            <div className="text-left font-mono">
              <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">PORTFOLIO EXECUTED</p>
              <p className="text-xs text-zinc-300 font-light mt-0.5">
                by <span className="text-zinc-100 font-semibold tracking-widest">RISHI CHOWDARY</span>
              </p>
              {/* Thin accent line matching the original Atikur Rahman text decoration */}
              <div className="mt-2 flex items-center gap-1.5">
                <div className="h-[1px] w-8 bg-zinc-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <div className="h-[1px] w-8 bg-zinc-600" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Floating Mouse Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-mono">scroll down</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>

    </section>
  );
}
