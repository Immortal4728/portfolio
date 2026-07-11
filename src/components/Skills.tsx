'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'languages', name: 'Languages' },
  { id: 'frameworks', name: 'Frameworks & Databases' },
  { id: 'concepts', name: 'Concepts & Tools' }
];

const skillData = [
  // Programming Languages
  { name: 'Java', level: 92, category: 'languages', tags: ['Core & Advanced', 'JVM Internals', 'Collections Framework', 'Multithreading'] },
  { name: 'JavaScript & TypeScript', level: 80, category: 'languages', tags: ['ES6+', 'Static Typing', 'DOM Manipulation', 'Async JS'] },
  
  // Frameworks & Databases
  { name: 'Spring Boot', level: 88, category: 'frameworks', tags: ['Hibernate / JPA', 'JDBC & REST APIs', 'Spring Security'] },
  { name: 'Microservices & Spring Cloud', level: 86, category: 'frameworks', tags: ['Eureka Discovery', 'Cloud Gateway', 'Resilience4j', 'Config Server'] },
  { name: 'React & Next.js', level: 85, category: 'frameworks', tags: ['Tailwind CSS', 'Dynamic Routing', 'State Management'] },
  { name: 'PostgreSQL & Supabase', level: 83, category: 'frameworks', tags: ['Database Design', 'Cloud Storage', 'Row Level Security'] },

  // Concepts & Tools
  { name: 'OOP Concepts', level: 90, category: 'concepts', tags: ['Inheritance & Polymorphism', 'Encapsulation & Abstraction', 'Interfaces'] },
  { name: 'Data Structures & Algorithms', level: 85, category: 'concepts', tags: ['Problem Solving', 'Collections Framework', 'Optimization'] },
  { name: 'Tools & Pub/Sub', level: 82, category: 'concepts', tags: ['Apache Kafka', 'Docker Container', 'Maven Build Tool', 'Git & GitHub'] }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const filteredSkills = skillData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="relative w-full py-24 md:py-32 bg-[#05040a] overflow-hidden px-6 md:px-12 border-t border-white/5">
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#8B5CF6] block mb-3 font-semibold">
              02 // EXPERTISE
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-100 font-light leading-tight">
              Technical <br />
              <span className="font-normal text-zinc-300">Expertise.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm md:text-base font-light text-zinc-400 leading-relaxed font-sans max-w-xl">
              Building robust full-stack applications requires structured databases, secure Spring Boot APIs, microservice architectures, and responsive React &amp; Next.js user interfaces.
            </p>
          </div>
        </div>

        {/* Tab & Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Tabs Selector Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500 mb-2">CATEGORIES</p>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full text-left px-5 py-3.5 rounded-lg font-mono text-[10px] uppercase tracking-[0.2em] border transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-white border-white text-zinc-950 font-semibold'
                    : 'bg-transparent border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid Right Column */}
          <div className="lg:col-span-8">
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="border border-white/10 p-6 rounded-xl flex flex-col justify-between bg-white/[0.01] hover:border-white/25 transition-colors duration-300 group"
                  >
                    <div>
                      {/* Title & Level */}
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-serif italic text-zinc-200">
                          {skill.name}
                        </h4>
                        <span className="font-mono text-xs text-zinc-400 tracking-wider">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Mini Meter */}
                      <div className="w-full h-[1px] bg-white/10 overflow-hidden mb-6">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-white/60"
                        />
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] font-mono tracking-wider uppercase bg-white/[0.03] border border-white/[0.04] text-zinc-400 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
