'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageText = `Hello Rishi,\n\nMy name is ${formData.name}.\n\nI am reaching out regarding:\n"${formData.message}"\n\nYou can reach me at:\nEmail: ${formData.email}\n\nBest regards,\n${formData.name}`;
    const whatsappUrl = `https://wa.me/918328465473?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden px-6 md:px-12 border-t border-white/5">
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-zinc-500 block mb-3 font-semibold">
              06 // INITIATE
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Begin the <br />
              <span className="font-normal text-zinc-300">Collaboration.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans">
              Have a Java enterprise application to design, a database to model, or want to collaborate on full-stack web solutions? Let&apos;s build it.
            </p>
          </div>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Panel Left */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500 mb-2">DIRECT COMMUNICATION</p>
              <a 
                href="https://www.linkedin.com/in/immortal4728/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-serif italic text-zinc-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group interactive-hover break-all"
              >
                <span>linkedin.com/in/immortal4728</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
              </a>
              <a 
                href="tel:+918328465473" 
                className="text-sm font-mono text-zinc-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 mt-2"
              >
                <span>+91-8328465473</span>
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500 mb-3">SOCIAL ARCHIVES</p>
              <div className="flex gap-4">
                {[
                  { 
                    icon: (
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    ), 
                    url: 'https://github.com/Immortal4728', 
                    label: 'GitHub' 
                  },
                  { 
                    icon: (
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ), 
                    url: 'https://www.linkedin.com/in/immortal4728/', 
                    label: 'LinkedIn' 
                  }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500 mb-2">LOCATION</p>
              <p className="text-sm text-zinc-400 font-light font-sans leading-relaxed">
                Narasaraopet,<br />
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          {/* Form Panel Right */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full relative">
              
              {/* Form Input 1 */}
              <div className="relative group">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder=" "
                  id="form-name"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-zinc-200 outline-none focus:border-white transition-colors peer"
                />
                <label 
                  htmlFor="form-name"
                  className="absolute left-0 top-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-white peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-zinc-400"
                >
                  Your Name
                </label>
              </div>

              {/* Form Input 2 */}
              <div className="relative group">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder=" "
                  id="form-email"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-zinc-200 outline-none focus:border-white transition-colors peer"
                />
                <label 
                  htmlFor="form-email"
                  className="absolute left-0 top-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-white peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-zinc-400"
                >
                  Your Email
                </label>
              </div>

              {/* Form Input 3 */}
              <div className="relative group">
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder=" "
                  rows={4}
                  id="form-message"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-zinc-200 outline-none focus:border-white transition-colors peer resize-none"
                />
                <label 
                  htmlFor="form-message"
                  className="absolute left-0 top-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-white peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-zinc-400"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:border-white text-xs font-mono uppercase tracking-[0.15em] text-zinc-300 hover:text-white bg-transparent hover:bg-white/5 transition-all duration-300"
                >
                  <span>Transmit Query</span>
                  <ArrowUpRight size={14} />
                </button>

                {submitted && (
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs font-mono text-white tracking-wider"
                  >
                    QUERY TRANSMITTED SECURELY
                  </motion.span>
                )}
              </div>

            </form>
          </div>

        </div>

        {/* Footer Area */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase">
              K. RISHI CHOWDARY // Narasaraopet 2027
            </span>
          </div>
          <span className="font-mono text-[9px] text-zinc-600 tracking-[0.15em] uppercase">
            ALL CODE DEPLOYED SECURELY. ALL RIGHTS RESERVED.
          </span>
        </div>

      </div>
    </section>
  );
}
