"use client";

import React from "react";
import { motion, useReducedMotion, useMotionValue, useMotionTemplate } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Their clarity and precision around UK tax and compliance gave us confidence expanding into the UK market. Everything was structured and proactive.",
    name: "International Founder",
    role: "SaaS Company",
  },
  {
    quote:
      "A modern accounting partner who understands both compliance and growth. Communication is clear, direct, and strategic.",
    name: "Managing Director",
    role: "UK Business",
  },
  {
    quote:
      "We moved from reactive accounting to forward planning. The difference in control and reporting has been significant.",
    name: "Finance Lead",
    role: "Global Firm",
  },
];

/* ═══════════════════════════════════════════════════════════════
   PREMIUM CURSOR-REACTIVE TESTIMONIAL CARD
═══════════════════════════════════════════════════════════════ */
function TestimonialCard({ t, i, prefersReduced }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div 
        onMouseMove={handleMouseMove}
        className="group relative h-full bg-white/60 backdrop-blur-md border border-[#0A1A2F]/[0.04] p-10 md:p-12 rounded-[2rem] flex flex-col justify-between hover:bg-white/80 hover:shadow-[0_30px_60px_-15px_rgba(10,26,47,0.06)] hover:border-[#0A1A2F]/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
      >
        {/* Cinematic Cursor Spotlight */}
        <motion.div
           className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-multiply"
           style={{
             background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(200,169,106,0.07), transparent 70%)`
           }}
        />

        <div className="relative z-10 flex flex-col h-full flex-grow">
          {/* Decorative Quote Mark */}
          <div className="mb-8 text-[#C8A96A]/20 transition-colors duration-500 group-hover:text-[#C8A96A]/40" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
               <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
          </div>
          
          <p className="text-[#0A1A2F]/70 font-light text-xl md:text-[1.35rem] leading-[1.8] font-heading tracking-tight mb-12 flex-grow transition-colors duration-500 group-hover:text-[#0A1A2F]">
            "{t.quote}"
          </p>
          
          <div className="mt-auto pt-8 border-t border-[#0A1A2F]/[0.05] group-hover:border-[#C8A96A]/20 transition-colors duration-500">
             <p className="text-[1.05rem] font-medium tracking-wide text-[#0A1A2F] mb-1.5">{t.name}</p>
             <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#C8A96A]">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Testimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="testimonials" className="relative py-24 md:py-32 lg:py-48 bg-[#FDFCFB] text-[#0A1A2F] overflow-hidden">
      
      {/* ── Subtle Ambient Backdrop ── */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0A1A2F 1px, transparent 1px), linear-gradient(to right, #0A1A2F 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      
      {/* Soft Luminous Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,169,106,0.04)_0%,_transparent_60%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-[86rem] mx-auto px-5 md:px-8 lg:px-12 z-10">
        
        {/* ── HEADER ── */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-gradient-to-l from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Client Perspective
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-light font-heading leading-[1.05] tracking-tight"
          >
            Trusted by founders,<br className="hidden md:block" />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              directors, and global teams.
            </span>
          </motion.h2>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
           {TESTIMONIALS.map((t, i) => (
             <TestimonialCard key={i} t={t} i={i} prefersReduced={prefersReduced} />
           ))}
        </div>

        {/* ── TRUST STRIP ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-32 max-w-4xl mx-auto border-t border-[#0A1A2F]/[0.06] pt-12 md:pt-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#5B8C5A]/10 text-[#5B8C5A]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
          </div>
          <p className="text-[#0A1A2F]/50 text-[0.95rem] md:text-base max-w-2xl mx-auto font-light leading-[1.8]">
            Confidentiality and discretion are central to every engagement.<br className="hidden md:block" />
            Client names and data are strictly protected.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
