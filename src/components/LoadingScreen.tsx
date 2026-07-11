'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MeshGradient } from '@paper-design/shaders-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const panelVariants = {
  initial: { y: '0%' },
  exit: (i: number) => ({
    y: '-100%',
    transition: {
      duration: 0.85,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: i * 0.08
    }
  })
};

const textFade = {
  initial: { opacity: 0, y: 15 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], 
      delay: 0.1 
    }
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { 
      duration: 0.5, 
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number] 
    }
  }
};

const letterContainerVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2
    }
  }
};

const letterVariants = {
  initial: { opacity: 0, y: 15, filter: 'blur(4px)' },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600); // Trigger page reveal
          return 100;
        }
        const increment = prev > 75 
          ? Math.floor(Math.random() * 2) + 1 
          : Math.floor(Math.random() * 4) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 55); // Slightly faster progress for snappier experience

    return () => clearInterval(timer);
  }, [onComplete]);

  // Determine current status message based on progress
  let statusMessage = 'ESTABLISHING SECURE CONNECTION';
  let statusColor = 'text-indigo-400';
  if (progress > 85) {
    statusMessage = 'SYSTEM READY. DEPLOYING WORKSPACE';
    statusColor = 'text-purple-400';
  } else if (progress > 60) {
    statusMessage = 'OPTIMIZING GRAPHICS AND GLOW SHADERS';
    statusColor = 'text-pink-400';
  } else if (progress > 35) {
    statusMessage = 'COMPILING HIGH-END INTERACTIVE ELEMENTS';
    statusColor = 'text-indigo-400';
  } else if (progress > 15) {
    statusMessage = 'PARSING SITE ARCHITECTURE & ROUTING';
    statusColor = 'text-zinc-400';
  }

  const nameLetters = Array.from("K. Rishi Chowdary");

  // Dynamic shader speed that accelerates with progress
  const shaderSpeed = 0.4 + (progress / 100) * 1.2;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden select-none pointer-events-none flex flex-col justify-between p-6 md:p-12">
      {/* 4 Staggered column panels */}
      <div className="absolute inset-0 flex pointer-events-none z-0">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={panelVariants}
            initial="initial"
            exit="exit"
            className="h-full flex-grow bg-[#05040a] border-r border-white/[0.015] last:border-r-0"
          />
        ))}
      </div>

      {/* ═══ SHADER BACKGROUND ═══ */}
      <div className="absolute inset-0 z-[1] opacity-60">
        <MeshGradient
          className="w-full h-full"
          colors={['#05040a', '#0e0c18', '#1a1035', '#8B5CF6']}
          speed={shaderSpeed}
        />
      </div>
      {/* Dark vignette on top of shader for readability */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,#05040a_80%)]" />

      {/* Slow Moving Sweeping Light Line */}
      {progress < 100 && (
        <motion.div 
          className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent pointer-events-none z-10"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Loading Screen Contents (Fades out when leaving) */}
      <AnimatePresence>
        {progress < 100 && (
          <motion.div 
            className="w-full h-full flex flex-col justify-between z-10 pointer-events-none relative"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textFade}
          >
            {/* Header: Issue Code & Location */}
            <div className="flex justify-between items-start font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500 relative z-10">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  K. RISHI CHOWDARY // PORTFOLIO
                </span>
                <span className="text-zinc-600 font-medium">SYS-2027 // PROT-V2</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span>VOL. 27 // ISSUE 01</span>
                <span className="text-zinc-600 font-medium">LOC // Narasaraopet AP</span>
              </div>
            </div>

            {/* Center Section: Beautiful Serif Display Name + Rings */}
            <div className="flex flex-col items-center text-center max-w-xl mx-auto my-auto gap-6 relative z-10">
              
              {/* Circular Orbit Loader Centerpiece */}
              <div className="relative w-36 h-36 flex items-center justify-center mb-2">
                {/* Outer slowly spinning ring with dash array */}
                <motion.svg
                  className="absolute w-full h-full"
                  viewBox="0 0 100 100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="rgba(139, 92, 246, 0.08)"
                    strokeWidth="1"
                    strokeDasharray="5 3"
                  />
                </motion.svg>

                {/* Inner ring spinning faster in opposite direction */}
                <motion.svg
                  className="absolute w-[86%] h-[86%]"
                  viewBox="0 0 100 100"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="rgba(236, 72, 153, 0.06)"
                    strokeWidth="1"
                    strokeDasharray="12 4"
                  />
                </motion.svg>

                {/* Active Progress Ring */}
                <svg className="absolute w-[93%] h-[93%] -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.02)"
                    strokeWidth="1.5"
                  />
                  {/* Progress arc with gradient */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="url(#loaderGradient)"
                    strokeWidth="2"
                    strokeDasharray="276.46"
                    strokeDashoffset={276.46 - (276.46 * progress) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-200 ease-out"
                  />
                  <defs>
                    <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#C084FC" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Monogram in center */}
                <div className="flex flex-col items-center justify-center z-10">
                  <span className="font-serif italic font-light text-2xl text-zinc-150 tracking-wider relative flex items-center justify-center">
                    KRC
                    <span className="absolute top-0 right-[-6px] flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#8B5CF6]"></span>
                    </span>
                  </span>
                  <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-widest mt-1 font-semibold">SYS-INIT</span>
                </div>
              </div>

              {/* Name with character-by-character reveal */}
              <div className="flex flex-col items-center gap-3">
                <motion.h1 
                  variants={letterContainerVariants}
                  className="text-3xl md:text-5xl font-serif italic text-zinc-100 tracking-tight leading-none flex justify-center flex-wrap"
                >
                  {nameLetters.map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      style={{ 
                        display: char === ' ' ? 'inline' : 'inline-block', 
                        marginRight: char === ' ' ? '0.25em' : '0px' 
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-1" 
                />

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                  className="font-mono text-[9px] uppercase tracking-[0.35em] text-zinc-400 leading-relaxed"
                >
                  Full-Stack Web Development &amp; Java Enterprise
                </motion.p>
              </div>

            </div>

            {/* Footer: Live Logs & Numeric Counter */}
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-6 gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 relative z-10">
              <div className="flex flex-col gap-1 text-left">
                <span className="text-zinc-600 font-semibold text-[8px]">MONITORING ACTIVE PORTAL LOAD</span>
                <span className={`${statusColor} transition-all duration-300 font-medium flex items-center gap-1.5`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse mr-0.5" />
                  {statusMessage}
                  <span className="w-[4px] h-[10px] bg-current animate-pulse inline-block" style={{ animationDuration: '0.8s' }} />
                </span>
              </div>
              <div className="flex items-baseline gap-1 text-right">
                <span className="text-zinc-600 font-medium">LDR //</span>
                <span className="text-2xl md:text-3xl font-light text-zinc-200" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {progress.toString().padStart(3, '0')}
                </span>
                <span className="text-[#8B5CF6] font-semibold">%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
