'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Shield, User, GraduationCap, Server, Database, Key, LayoutGrid, ClipboardList, Send, FileCode, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const portals = [
  {
    icon: <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />,
    name: '🎓 Student Portal',
    purpose: 'Submit projects, track progress, view documents, manage profile',
    features: [
      'Project Progress Tracker: 6-stage visual pipeline (Submitted → Review → Approved → Development → Delivery → Completed)',
      'Project Overview: View title, domain, description, submission date, and order ID',
      'Meeting Info: Check scheduled meeting links, dates, and times',
      'Project Documents: Access and download uploaded files (Record, PPT, Viva, Notes)',
      'Profile Photo Upload: Crop & upload avatar with real-time preview',
      'Status Badge: Dynamic indicators for approval and development stages'
    ]
  },
  {
    icon: <Shield className="w-5 h-5 text-[#8B5CF6]" />,
    name: '🛡️ Admin Portal',
    purpose: 'Review submissions, manage users, upload documents, update project stages',
    features: [
      'Dashboard: Comprehensive system metrics and platform health overview',
      'Project Submissions: Review, approve, or reject new student ideas',
      'Customer Management: View active students with detail-rich project cards',
      'Meeting Scheduler: Schedule project consultation links with date and time',
      'File Uploader: Upload documents categorized by types (Record, PPT, Viva, Notes)',
      'Platform Analytics: Real-time data visualization charts using Recharts',
      'Account Management: Activate or deactivate employee portal accounts',
      'Email Notifications: Automated credentials and approval mail via SMTP'
    ]
  },
  {
    icon: <User className="w-5 h-5 text-[#8B5CF6]" />,
    name: '👷 Employee Portal',
    purpose: 'Access assigned projects, upload documentation files',
    features: [
      'Project Workspace: Document management panel for assigned active projects',
      'File Actions: Direct InsForge storage operations (Upload, Replace, Delete)',
      'Document Slots: Preset categorizations for Record, PPT, Viva Questions, and Internal Notes'
    ]
  }
];

const techStack = {
  frontend: [
    { tech: 'Next.js', ver: '16.1.6', purpose: 'React framework with App Router, SSR, and API routes' },
    { tech: 'React', ver: '19.2.3', purpose: 'UI component declaration and state management' },
    { tech: 'TypeScript', ver: '5.x', purpose: 'Type-safe JavaScript architecture' },
    { tech: 'Tailwind CSS', ver: '4.x', purpose: 'Utility-first styling design tokens' },
    { tech: 'Framer Motion', ver: '12.35.0', purpose: 'Smooth UI page transitions & micro-animations' },
    { tech: 'React Three Fiber', ver: '9.5.0', purpose: '3D WebGL rendering engine' },
    { tech: 'Three.js', ver: '0.183.2', purpose: '3D graphics engine' },
    { tech: 'Recharts', ver: '3.8.0', purpose: 'Data visualization and analytics charts' }
  ],
  backend: [
    { tech: 'InsForge SDK', purpose: 'BaaS provider managing Database API, File Storage, and Edge Functions' },
    { tech: 'Firebase Auth', purpose: 'Admin authentications with email verification' },
    { tech: 'Firebase Admin SDK', purpose: 'Server-side JWT token verification middleware' },
    { tech: 'PostgreSQL', purpose: 'Primary database (via InsForge PostgREST API)' },
    { tech: 'Nodemailer', purpose: 'Email notifications (Gmail SMTP for approval messages)' },
    { tech: 'bcrypt.js', purpose: 'Secure password hashing for employee database records' },
    { tech: 'jose', purpose: 'JWT sign and verify handlers for student and employee sessions' }
  ]
};

const tables = [
  { name: 'project_requests', desc: 'Stores student submissions, credentials, status flags, and current progress stage.' },
  { name: 'project_files', desc: 'Registers file metadata and bucket references per project and document slot type.' },
  { name: 'project_submissions', desc: 'Retains initial project intake details and timestamps.' },
  { name: 'employees', desc: 'Holds credential hashes and activation status for employee portal users.' }
];
const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function ProjectImmortalDetail() {
  return (
    <div className="min-h-screen bg-[#05040a] text-zinc-100 font-sans selection:bg-[#8B5CF6] selection:text-[#05040a] relative overflow-hidden pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8B5CF6]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* STICKY GLASSMORPHIC HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#05040a]/70 backdrop-blur-md px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="flex gap-3">
            <a
              href="https://project-immortal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-white text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors bg-white/[0.02]"
            >
              <span>Launch Live</span>
              <ArrowUpRight size={10} />
            </a>
            <a
              href="https://github.com/Immortal4728"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-xs font-mono uppercase tracking-wider text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 mt-16 md:mt-24 relative z-10">
        
        {/* HERO TITLE BLOCK */}
        <motion.div {...fadeInUp} className="flex flex-col gap-4 border-b border-white/5 pb-10">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#8B5CF6] block font-semibold">
            CASE STUDY // ARCHITECTURE & FEATURES
          </span>
          <h1 className="text-4xl md:text-7xl font-sans font-bold tracking-tight leading-tight text-white">
            ⚡ Project Immortal
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mt-2 font-sans">
            Engineering Ideas Into Real Software: A full-stack project management platform built for students, administrators, and developers to collaborate on final-year projects.
          </p>
        </motion.div>

        {/* PROJECT OVERVIEW & METADATA */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 items-start"
        >
          <div className="md:col-span-8">
            <h2 className="font-sans font-semibold tracking-tight text-2xl md:text-3xl text-white mb-4">🌟 Project Overview</h2>
            <p className="text-zinc-300 leading-relaxed font-sans text-sm md:text-base font-light">
              Project Immortal is a multi-role web platform designed to streamline student projects and connect them with an engineering oversight team. Students can submit project requests, monitor progress in a real-time status visualizer, and download project files. Admins and employees manage submissions, verify credentials, coordinate consult links, and upload documentation records in a highly secure ecosystem.
            </p>
          </div>
          <div className="md:col-span-4 bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">PORTALS</p>
              <p className="text-sm text-zinc-200 font-medium mt-1">Student, Admin, and Employee Panels</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">DATABASE</p>
              <p className="text-sm text-zinc-200 font-medium mt-1">PostgreSQL managed via InsForge BaaS</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">SECURITY</p>
              <p className="text-sm text-zinc-200 font-medium mt-1">Firebase + Middleware Guards & OTP</p>
            </div>
          </div>
        </motion.div>

        {/* VISUAL ARCHITECTURE FLOWCHART */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="py-12 border-t border-white/5"
        >
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8B5CF6] block mb-2 font-semibold">
              01 // SCHEMATICS
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-white">System Architecture</h2>
            <p className="text-sm text-zinc-400 font-sans mt-2 font-light max-w-xl">
              A high-level map of the secure network boundaries, multi-role client access portals, token gateways, and persistent storage layers.
            </p>
          </div>

          <div className="bg-[#0b0a12]/60 border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col gap-6 relative shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            
            {/* Header: Schematic Label */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-zinc-400 tracking-[0.2em] uppercase font-bold">Boundary Map // Project Immortal</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
            </div>

            {/* LAYER 1: CLIENT ACCESSIBILITY PORTALS */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-[0.2em] font-semibold">01. Cloud Client Layer</span>
                <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">SSL SECURED</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Public Front-end */}
                <div className="bg-[#05040a]/80 border border-white/10 hover:border-white/20 rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden group transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Public Client</span>
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-semibold text-zinc-200">Animated Landing Page</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1 font-sans font-light">Intake submission flow, marquee testimonials, three-dimensional elements (WebGL Shader).</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="bg-white/[0.05] text-zinc-300 text-[10px] font-mono px-2.5 py-0.5 rounded">R3F</span>
                    <span className="bg-white/[0.05] text-zinc-300 text-[10px] font-mono px-2.5 py-0.5 rounded">Framer</span>
                  </div>
                </div>

                {/* Student Client */}
                <div className="bg-[#05040a]/80 border border-white/10 hover:border-[#8B5CF6]/30 rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden group transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8B5CF6]/10 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-widest font-semibold">Student Client</span>
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-semibold text-zinc-200">Dashboard Portal</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1 font-sans font-light">Real-time stage updates, secure file downloader slots, profile picture cropping upload.</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="bg-[#8B5CF6]/20 text-[#c084fc] text-[10px] font-mono px-2.5 py-0.5 rounded font-medium">Auth Cookie</span>
                    <span className="bg-white/[0.05] text-zinc-300 text-[10px] font-mono px-2.5 py-0.5 rounded">Cropper</span>
                  </div>
                </div>

                {/* Team Client */}
                <div className="bg-[#05040a]/80 border border-white/10 hover:border-white/20 rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden group transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Team Client</span>
                    <span className="w-2 h-2 rounded-full bg-zinc-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-semibold text-zinc-200">Admin &amp; Employee Portals</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1 font-sans font-light">Customer registries, meeting coordinators, documents manager, analytics charts.</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="bg-white/[0.05] text-zinc-300 text-[10px] font-mono px-2.5 py-0.5 rounded">Firebase</span>
                    <span className="bg-white/[0.05] text-zinc-300 text-[10px] font-mono px-2.5 py-0.5 rounded">Recharts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PIPELINE CONNECTOR 1 */}
            <div className="flex flex-col items-center justify-center py-2 relative">
              <div className="h-10 w-[1px] bg-gradient-to-b from-[#8B5CF6]/60 via-[#EC4899]/60 to-[#C084FC]/60 relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping" />
              </div>
              <div className="my-1 border border-white/15 bg-[#05040a] px-5 py-2 rounded-full text-xs font-mono text-zinc-200 tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.15)] font-semibold">
                <Shield className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>NextJS Auth Middleware Guard</span>
              </div>
              <div className="h-10 w-[1px] bg-gradient-to-b from-[#C084FC]/60 to-white/10" />
            </div>

            {/* LAYER 2: NEXT.JS APP ROUTER GATEWAY */}
            <div className="bg-[#05040a]/90 border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto w-full shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />
              <div className="flex items-center gap-2 text-zinc-200 font-mono text-sm border-b border-white/10 pb-3 mb-4 font-semibold">
                <Server className="w-4 h-4 text-[#8B5CF6] animate-pulse" />
                <span>Server Endpoint Controller (App Router)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Student &amp; Employee Workspace</span>
                  <div className="flex flex-wrap gap-1 mt-1 font-mono text-[10px]">
                    <span className="bg-white/[0.05] text-zinc-200 px-2 py-0.5 rounded">/api/student/login</span>
                    <span className="bg-white/[0.05] text-zinc-200 px-2 py-0.5 rounded">/api/student/project</span>
                    <span className="bg-white/[0.05] text-zinc-200 px-2 py-0.5 rounded">/api/employee/upload</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light mt-1 border-t border-white/10 pt-2">
                    Validates session cookies containing encrypted custom JWT payloads via the `jose` library.
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Admin Administration Node</span>
                  <div className="flex flex-wrap gap-1 mt-1 font-mono text-[10px]">
                    <span className="bg-[#8B5CF6]/15 text-[#c084fc] px-2 py-0.5 rounded font-semibold">/api/admin/submissions</span>
                    <span className="bg-[#8B5CF6]/15 text-[#c084fc] px-2 py-0.5 rounded font-semibold">/api/admin/analytics</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light mt-1 border-t border-white/10 pt-2">
                    Queries whitelists and verifies active Firebase Authentication identity tokens server-side.
                  </p>
                </div>
              </div>
            </div>

            {/* PIPELINE CONNECTOR 2 */}
            <div className="flex justify-center items-center gap-16 py-2 relative">
              <div className="flex flex-col items-center">
                <div className="w-[1px] h-8 bg-white/10" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-1.5">ID Verification</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[1px] h-8 bg-white/10" />
                <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-widest mt-1.5 font-semibold">PostgREST API / SDK</span>
              </div>
            </div>

            {/* LAYER 3: PERSISTENCE & SERVICES PODS */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-[0.2em] font-semibold">03. Persistence &amp; Service Layer</span>
                <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">BACKEND CORE</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Firebase pod */}
                <div className="bg-[#05040a]/85 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-200 border-b border-white/10 pb-2 font-semibold">
                    <Key className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>Firebase Auth</span>
                  </div>
                  <ul className="text-xs text-zinc-400 flex flex-col gap-2 font-sans font-light list-none">
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Admin session creation</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Verification tokens</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> OTP code stores</li>
                  </ul>
                </div>

                {/* PostgreSQL Database pod */}
                <div className="bg-[#05040a]/85 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-200 border-b border-white/10 pb-2 font-semibold">
                    <Database className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>InsForge PostgreSQL</span>
                  </div>
                  <ul className="text-xs text-zinc-400 flex flex-col gap-2 font-sans font-light list-none">
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Project request registry</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Document indices</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Secure raw SQL APIs</li>
                  </ul>
                </div>

                {/* InsForge Storage bucket pod */}
                <div className="bg-[#05040a]/85 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-200 border-b border-white/10 pb-2 font-semibold">
                    <LayoutGrid className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>InsForge Cloud Storage</span>
                  </div>
                  <ul className="text-xs text-zinc-400 flex flex-col gap-2 font-sans font-light list-none">
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> PDF documentation storage</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> PPT presentation vaults</li>
                    <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Direct file SDK uploads</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* WORKFLOW PIPELINE SECTION */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.25 }}
          className="py-12 border-t border-white/5"
        >
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8B5CF6] block mb-2 font-semibold">
              02 // PIPELINES
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-white">System Workflow</h2>
            <p className="text-sm text-zinc-400 font-sans mt-2 font-light max-w-xl">
              A comprehensive step-by-step breakdown of user interactions, internal routing logic, and data storage flows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0e0c18]/20 border border-white/5 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl text-[#8B5CF6]/10 font-bold">01</div>
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                <ClipboardList className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base md:text-lg text-zinc-100">Intake &amp; Registry</h3>
                <p className="text-xs text-zinc-400 font-mono uppercase mt-0.5 tracking-wider">Phase One</p>
              </div>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans font-light">
                Students initiate the flow by filling out the project request form. The Next.js API routes generate a unique Order ID and store the data in the PostgreSQL table `project_requests`.
              </p>
            </div>

            <div className="bg-[#0e0c18]/20 border border-white/5 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl text-[#8B5CF6]/10 font-bold">02</div>
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                <Send className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base md:text-lg text-zinc-100">Evaluation &amp; Mail</h3>
                <p className="text-xs text-zinc-400 font-mono uppercase mt-0.5 tracking-wider">Phase Two</p>
              </div>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans font-light">
                Admins log in using Firebase Authentication to review the student ideas. Upon approval, credentials are automatically created and dispatched to the student via Gmail SMTP.
              </p>
            </div>

            <div className="bg-[#0e0c18]/20 border border-white/5 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl text-[#8B5CF6]/10 font-bold">03</div>
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                <FileCode className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base md:text-lg text-zinc-100">Development Setup</h3>
                <p className="text-xs text-zinc-400 font-mono uppercase mt-0.5 tracking-wider">Phase Three</p>
              </div>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans font-light">
                Projects progress into active development. Assigned team employees use their dashboard to structure doc deliverables like PPT presentations, viva records, and notes.
              </p>
            </div>

            <div className="bg-[#0e0c18]/20 border border-white/5 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl text-[#8B5CF6]/10 font-bold">04</div>
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base md:text-lg text-zinc-100">Delivery &amp; Tracking</h3>
                <p className="text-xs text-zinc-400 font-mono uppercase mt-0.5 tracking-wider">Phase Four</p>
              </div>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans font-light">
                Employee-uploaded deliverables are committed to the InsForge Storage bucket. Students track status pipelines dynamically and securely download finalized document files.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PORTAL FEATURES SPECIFICATION */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="py-12 border-t border-white/5"
        >
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8B5CF6] block mb-2 font-semibold">
              03 // FUNCTIONALITY
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-white">System Portals &amp; Workspaces</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portals.map((portal, idx) => (
              <div 
                key={idx}
                className="bg-[#0e0c18]/25 border border-white/10 hover:border-white/20 transition-colors rounded-2xl p-6 md:p-8 flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {portal.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-sans font-semibold text-white">{portal.name}</h3>
                    <p className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-widest mt-0.5">role portal</p>
                  </div>
                </div>
                
                <p className="text-sm text-zinc-350 font-light leading-relaxed">
                  {portal.purpose}
                </p>

                <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">KEY FUNCTIONS</p>
                  <ul className="flex flex-col gap-2.5">
                    {portal.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs md:text-sm text-zinc-300 leading-relaxed pl-4 relative font-sans font-light">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TECH STACK TABLES */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="py-12 border-t border-white/5"
        >
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8B5CF6] block mb-2 font-semibold">
              04 // SPECIFICATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-white">Technologies Utilized</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frontend tech stack */}
            <div className="bg-[#0e0c18]/20 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 font-mono text-sm text-zinc-200 border-b border-white/10 pb-4 mb-4 font-semibold">
                <LayoutGrid className="w-4 h-4 text-[#8B5CF6]" />
                <span>Frontend Stack</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-xs font-mono uppercase text-zinc-400 tracking-wider">
                      <th className="pb-3">Library</th>
                      <th className="pb-3">Version</th>
                      <th className="pb-3">Role</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-mono text-zinc-300">
                    {techStack.frontend.map((item, idx) => (
                      <tr key={idx} className="border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors">
                        <td className="py-3 font-semibold text-zinc-100 font-sans text-sm">{item.tech}</td>
                        <td className="py-3 text-zinc-350">{item.ver}</td>
                        <td className="py-3 font-sans font-light text-zinc-300 leading-normal">{item.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Backend stack */}
            <div className="bg-[#0e0c18]/20 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 font-mono text-sm text-zinc-200 border-b border-white/10 pb-4 mb-4 font-semibold">
                <Server className="w-4 h-4 text-[#8B5CF6]" />
                <span>Backend &amp; Cloud Stack</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-xs font-mono uppercase text-zinc-400 tracking-wider">
                      <th className="pb-3">System</th>
                      <th className="pb-3">Utility</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-mono text-zinc-300">
                    {techStack.backend.map((item, idx) => (
                      <tr key={idx} className="border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors">
                        <td className="py-3 font-semibold text-zinc-100 font-sans text-sm">{item.tech}</td>
                        <td className="py-3 font-sans font-light text-zinc-300 leading-normal">{item.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DATABASE SCHEMATICS */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="py-12 border-t border-white/5"
        >
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8B5CF6] block mb-2 font-semibold">
              05 // SCHEMAS
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-white">Database Tables &amp; Buckets</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 bg-[#0e0c18]/20 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 font-mono text-sm text-zinc-200 border-b border-white/10 pb-4 mb-4 font-semibold">
                <Database className="w-4 h-4 text-[#8B5CF6]" />
                <span>PostgreSQL Table Schemas</span>
              </div>
              <div className="flex flex-col gap-4">
                {tables.map((tbl, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-3.5 last:border-0 last:pb-0">
                    <p className="font-mono text-sm font-semibold text-zinc-100">{tbl.name}</p>
                    <p className="text-xs md:text-sm font-sans font-light text-zinc-300 leading-relaxed mt-1.5">{tbl.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-white/[0.02] border border-white/10 rounded-2xl p-6">
              <p className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider mb-3 font-semibold">Storage Bucket</p>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-sm font-semibold text-zinc-100">project_files</span>
                <p className="text-xs md:text-sm font-sans font-light text-zinc-300 leading-relaxed">
                  Holds PDF, DOCX, PPTX, and TXT documentation artifacts corresponding to individual final-year project records.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
