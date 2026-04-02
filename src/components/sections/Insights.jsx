"use client";

import React from "react";
import { motion, useReducedMotion, useMotionValue, useMotionTemplate } from "framer-motion";

const POSTS = [
  {
    title: "2026 UK Tax Changes Every Business Should Know",
    category: "Tax Update",
    date: "Jan 2026"
  },
  {
    title: "How Smart Directors Reduce Corporation Tax",
    category: "Strategy",
    date: "Dec 2025"
  },
  {
    title: "HMRC Compliance: Avoid Costly Mistakes",
    category: "Compliance",
    date: "Nov 2025"
  }
];

function InsightCard({ post, i, prefersReduced }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.article
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col h-full"
    >
      <div 
        onMouseMove={handleMouseMove}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' }); } }}
        className="group relative h-full bg-white/60 backdrop-blur-md border border-[#0A1A2F]/[0.04] p-8 md:p-12 rounded-[2rem] flex flex-col hover:bg-white/80 hover:shadow-[0_30px_60px_-15px_rgba(10,26,47,0.06)] hover:border-[#0A1A2F]/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F]/40"
      >
        {/* Cinematic Cursor Spotlight */}
        <motion.div
           className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-multiply"
           style={{
             background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(200,169,106,0.08), transparent 70%)`
           }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] tracking-[0.25em] font-bold text-[#C8A96A] uppercase">
              {post.category}
            </span>
            <span className="text-[11px] font-medium tracking-[0.05em] text-[#0A1A2F]/40">
              {post.date}
            </span>
          </div>

          <h3 className="text-2xl lg:text-[1.8rem] font-light font-heading text-[#0A1A2F] tracking-tight leading-[1.25] mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A1A2F] group-hover:to-[#2F5B8C] transition-all duration-300">
            {post.title}
          </h3>

          <div className="mt-auto flex items-center gap-3 pt-8 border-t border-[#0A1A2F]/[0.05] group-hover:border-[#C8A96A]/20 transition-colors duration-500">
             <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-[#0A1A2F]/40 group-hover:text-[#0A1A2F] transition-colors duration-300">
               Read Article
             </span>
             <motion.span 
               className="ml-auto text-[#C8A96A] origin-right"
               variants={{
                 rest: { scaleX: 0, opacity: 0, x: -10 },
                 hover: { scaleX: 1, opacity: 1, x: 0 }
               }}
               initial="rest"
               whileHover="hover"
               animate="rest"
               transition={{ duration: 0.4, ease: "easeOut" }}
               aria-hidden="true"
             >
               <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                 <path d="M0 6H22M22 6L17 1M22 6L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </motion.span>
             {/* Mobile & fallback arrow */}
             <span className="ml-auto text-[#C8A96A] md:hidden group-hover:opacity-0 transition-opacity duration-300">
               →
             </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Insights() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="insights" className="relative py-24 md:py-32 lg:py-48 bg-[#FDFCFB] text-[#0A1A2F] overflow-hidden">
      
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
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(47,91,140,0.03)_0%,_transparent_60%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-[86rem] mx-auto px-5 md:px-8 lg:px-12 z-10">
        
        {/* ── HEADER ── */}
        <div className="max-w-4xl mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Editorial & Insights
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[5rem] font-light font-heading leading-[1.05] tracking-tight mb-8"
          >
            Clarity beyond <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              compliance.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#0A1A2F]/60 text-lg md:text-xl font-light tracking-wide leading-[1.8] max-w-2xl"
          >
            Expert insights, macroeconomic tax updates, and strategic thinking engineered for UK business owners, founders, and directors.
          </motion.p>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {POSTS.map((post, i) => (
            <InsightCard key={i} post={post} i={i} prefersReduced={prefersReduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
