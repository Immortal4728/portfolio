'use client';

import { motion } from 'framer-motion';

export default function AboutText() {
  return (
    <section className="relative w-full bg-[#05040a] py-16 md:py-24 px-6 md:px-12 select-none overflow-hidden">
      {/* Continuing diagonal lines for background consistency */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" aria-hidden="true">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      </svg>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="pl-0 sm:pl-12 md:pl-24 flex flex-col gap-8 text-zinc-400 font-sans font-light leading-relaxed text-sm md:text-base tracking-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m K Rishi Chowdary – a Computer Science &amp; Engineering student at Sai Tirumala NVR, specialized in full-stack web development and Java enterprise technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I am currently pursuing my Bachelor of Technology program (2023 – 2027) in Computer Science &amp; Engineering at Sai Tirumala NVR with a CPI of 6.95. Prior to this, I completed my Intermediate in Physics, Chemistry, &amp; Mathematics from Chaitanya Junior College (2021 – 2023) with a score of 7.05, and SSC from Chaitanya Littles (2021) with a perfect GPA of 10.0.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I specialize in Java, Spring Boot, React, Next.js, and database management with PostgreSQL and Supabase. I am certified in Full Stack Web Development by Ripan Technologies, and hold a Java Programming internship certificate from VaultofCodes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-zinc-300 font-normal"
          >
            At the core of my career, I am seeking a challenging position in a reputed organization where I can deliver my full potential to grow professionally while working towards organizational goals. I am eager to learn new technologies, adapt to dynamic environments, and work collaboratively to develop innovative solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
