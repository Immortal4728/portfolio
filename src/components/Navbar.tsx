'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-[#05040a]/40 backdrop-blur-md border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand */}
          <a 
            href="#" 
            className="flex items-center gap-2 group text-zinc-100 transition-colors"
          >
            <div className="w-2 h-2 bg-[#8B5CF6] rounded-full group-hover:scale-125 transition-transform duration-300" />
            <span className="text-sm font-semibold tracking-[0.2em] font-mono group-hover:text-[#8B5CF6] transition-colors">
              K.RISHI
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-[0.15em] text-zinc-400 hover:text-[#8B5CF6] transition-colors font-mono relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8B5CF6] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-[#8B5CF6] text-xs uppercase tracking-[0.1em] font-mono text-zinc-300 hover:text-[#8B5CF6] transition-all duration-300 interactive-hover hover:bg-[#8B5CF6]/5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-[#8B5CF6] transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#05040a]/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
          >
            <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
            <nav className="flex flex-col items-center gap-8 text-center">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="text-2xl font-serif italic text-zinc-300 hover:text-[#8B5CF6] transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
                className="mt-6"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#8B5CF6] text-xs uppercase tracking-[0.15em] font-mono text-[#8B5CF6] bg-[#8B5CF6]/5"
                >
                  <span>Connect with Rishi</span>
                  <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
