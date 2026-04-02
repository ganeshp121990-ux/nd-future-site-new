"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useMotionTemplate } from "framer-motion";

const STEPS = [
  {
    title: "Discovery & Assessment",
    desc: "We begin with a detailed review of your business structure, goals, and current financial position to identify opportunities and risks.",
  },
  {
    title: "Strategy & Planning",
    desc: "A tailored accounting and tax strategy is developed based on UK regulations and your long-term growth direction.",
  },
  {
    title: "Implementation",
    desc: "We handle registrations, filings, structuring, and compliance with precision while keeping communication transparent.",
  },
  {
    title: "Ongoing Advisory",
    desc: "Continuous monitoring, reporting, and advisory support ensure you stay compliant and financially confident as you grow.",
  },
];

const BOTTOM_ITEMS = [
  { num: "01", text: "Clear onboarding process" },
  { num: "02", text: "Direct partner communication" },
  { num: "03", text: "Ongoing financial clarity" },
];

/* ═══════════════════════════════════════════════════════════════
   CURSOR-REACTIVE GLASS CARD (TIMELINE)
═══════════════════════════════════════════════════════════════ */
function ProcessCard({ step, i, isEven, prefersReduced }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Center Node / Dot */}
      <div className="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-10 md:top-1/2 z-20">
        <motion.div 
          initial={prefersReduced ? { opacity: 1 } : { scale: 0, opacity: 0 }}
          whileInView={prefersReduced ? { opacity: 1 } : { scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "backOut" }}
          className="w-[18px] h-[18px] rounded-full bg-white border-[4px] border-[#C8A96A] shadow-[0_0_20px_rgba(200,169,106,0.5)]"
        />
      </div>

      {/* Empty space for alternating layout on desktop */}
      <div className="hidden md:block md:w-1/2" />

      {/* Floating Glass Card with Cursor Glow */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: prefersReduced ? 0 : (isEven ? -20 : 20) }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full md:w-1/2 pl-20 md:pl-0 ${!isEven ? 'md:pr-20' : 'md:pl-20'} relative z-10`}
      >
        <div 
          onMouseMove={handleMouseMove}
          className="group relative bg-white/70 backdrop-blur-xl border border-[#0A1A2F]/[0.04] p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(10,26,47,0.08)] hover:border-[#0A1A2F]/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
        >
          {/* Framer Motion GPU-accelerated cursor lighting */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-multiply"
            style={{
              background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(200,169,106,0.07), transparent 80%)`
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C8A96A]">
                Phase 0{i + 1}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-[1.75rem] font-heading font-medium text-[#0A1A2F] tracking-tight mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A1A2F] group-hover:to-[#2F5B8C] transition-all duration-300">
              {step.title}
            </h3>
            
            <p className="text-[#0A1A2F]/60 text-[0.95rem] md:text-base font-light leading-[1.8]">
              {step.desc}
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CURSOR-REACTIVE BOTTOM STRIP CARD
═══════════════════════════════════════════════════════════════ */
function BottomCard({ item, i }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col gap-4 bg-white/40 backdrop-blur-md border border-[#0A1A2F]/[0.03] p-8 md:p-10 rounded-[1.5rem] hover:bg-white/60 transition-colors duration-500 hover:-translate-y-1 overflow-hidden"
    >
      {/* Dynamic Cursor Light */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-multiply"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(47,91,140,0.06), transparent 80%)`
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <p className="text-4xl md:text-5xl font-light text-[#C8A96A] font-heading tracking-[-0.04em]">{item.num}</p>
        <div className="w-8 h-px bg-[#C8A96A]/30 group-hover:w-16 group-hover:bg-[#C8A96A]/80 transition-all duration-500" />
      </div>
      <p className="relative z-10 text-[#0A1A2F]/80 text-[1.05rem] font-medium tracking-wide mt-2">
        {item.text}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Process() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef(null);

  // Scroll tracking for the vertical process line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section 
      id="process"
      className="relative py-24 md:py-32 lg:py-48 bg-[#FDFCFB] text-[#0A1A2F] overflow-hidden"
    >
      {/* ── Ambient Background Texture ── */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0A1A2F 1px, transparent 1px), linear-gradient(to right, #0A1A2F 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      
      {/* Subtle Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,169,106,0.05)_0%,_transparent_60%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(47,91,140,0.04)_0%,_transparent_60%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[86rem] mx-auto px-5 md:px-8 lg:px-12">
        
        {/* ── HEADER ── */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[2px] w-10 bg-gradient-to-l from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Our Process
            </span>
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[4.75rem] font-light font-heading leading-[1.05] tracking-tight mb-8"
          >
            Structured. Transparent.<br className="hidden md:block" />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Built for long-term clarity.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#0A1A2F]/60 text-lg md:text-xl font-light tracking-wide leading-[1.8] max-w-2xl mx-auto"
          >
            We follow a clean, structured approach so international and UK clients always know where they stand and what comes next.
          </motion.p>
        </div>

        {/* ── TIMELINE ── */}
        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          
          {/* Animated Scroll Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-px bg-[#0A1A2F]/[0.06]">
            {!prefersReduced && (
              <motion.div
                style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                className="w-full h-full bg-gradient-to-b from-[#C8A96A] via-[#2F5B8C] to-[#C8A96A]"
              />
            )}
          </div>

          <div className="space-y-12 md:space-y-32 py-10">
            {STEPS.map((step, i) => (
              <ProcessCard 
                key={i} 
                step={step} 
                i={i} 
                isEven={i % 2 === 0} 
                prefersReduced={prefersReduced} 
              />
            ))}
          </div>
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div className="mt-24 md:mt-40 max-w-5xl mx-auto border-t border-[#0A1A2F]/[0.06] pt-16 md:pt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {BOTTOM_ITEMS.map((item, i) => (
              <BottomCard key={i} item={item} i={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
