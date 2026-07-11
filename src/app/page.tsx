'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutText from '@/components/AboutText';
import PolaroidSection from '@/components/PolaroidSection';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ThanksSection from '@/components/ThanksSection';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Custom Global Accessories */}
      <CustomCursor />
      <GrainOverlay />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <main key="content" className="relative w-full min-h-screen bg-[#05040a] flex flex-col">
            <Navbar />
            <Hero />
            <AboutText />
            <PolaroidSection />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <ThanksSection />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
