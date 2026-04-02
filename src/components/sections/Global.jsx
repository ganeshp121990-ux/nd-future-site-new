"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const CARDS = [
  {
    id: "entry",
    label: "Market Entry",
    title: "UK Company Setup & Structure",
    desc: "Seamlessly establish your UK presence. We architect optimal corporate holding and subsidiary structures tailored for international scale and robust governance.",
  },
  {
    id: "tax",
    label: "Tax Strategy",
    title: "Cross-Border Tax Planning",
    desc: "Navigate double tax treaties, transfer pricing, and permanent establishment risks. We unlock global tax efficiencies while ensuring airtight compliance.",
  },
  {
    id: "compliance",
    label: "Compliance",
    title: "Ongoing UK Reporting & Support",
    desc: "End-to-end statutory compliance, multi-currency reporting, and proactive VAT management so your UK operations run flawlessly without administrative drag.",
  }
];

export default function Global() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Very subtle parallax for the background glow map
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="global-desk"
      ref={containerRef}
      className="relative py-28 md:py-48 lg:py-56 bg-[#0A1A2F] text-white overflow-hidden"
    >
      {/* ── Ambient Background Glows ── */}
      <motion.div
        aria-hidden="true"
        style={{ y: prefersReduced ? 0 : yBg }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,169,106,0.06)_0%,_transparent_60%)] mix-blend-screen blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(30,58,95,0.4)_0%,_transparent_70%)] mix-blend-screen blur-3xl" />
      </motion.div>

      {/* ── World Map Texture Layer (Subtle) ── */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-[86rem] mx-auto px-5 md:px-8 lg:px-12">
        {/* ── Header Section ── */}
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-gradient-to-l from-[#C8A96A]/60 to-transparent" aria-hidden="true" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Global Desk
            </span>
            <div className="h-px w-10 bg-gradient-to-r from-[#C8A96A]/60 to-transparent" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-light font-heading leading-[1.05] tracking-tight mb-8"
          >
            Supporting Global Businesses <br className="hidden lg:block" />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
              Expanding Into the UK
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/50 text-lg md:text-xl font-light tracking-wide leading-[1.8] max-w-2xl mx-auto"
          >
            We advise international founders, investors, and enterprises entering the United Kingdom — providing unshakeable structure, compliance, and long-term financial clarity.
          </motion.p>
        </div>

        {/* ── Interactive Glass Cards Grid ── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full flex flex-col"
            >
              <div
                className="h-full relative overflow-hidden rounded-[2rem] bg-white/[0.015] border border-white/[0.04] backdrop-blur-xl p-8 lg:p-12 transition-all duration-500 ease-out hover:bg-white/[0.035] hover:border-[#C8A96A]/30 hover:shadow-[0_20px_40px_-20px_rgba(200,169,106,0.15)] flex flex-col"
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${card.title}`}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); } }}
              >

                {/* Immersive Inner Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(120% 120% at 80% 20%, rgba(200,169,106,0.06) 0%, transparent 50%)" }}
                />

                {/* Accent Top Lip */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/0 to-transparent group-hover:via-[#C8A96A]/40 transition-all duration-700" />

                <div className="relative z-10 flex flex-col h-full flex-grow">
                  {/* Label */}
                  <div className="mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]" aria-hidden="true" />
                    <p className="text-[10px] text-[#C8A96A] font-bold uppercase tracking-[0.25em]">
                      {card.label}
                    </p>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-2xl lg:text-[1.75rem] font-light font-heading text-white tracking-tight leading-[1.2] mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-white/40 text-[0.95rem] font-light leading-[1.8] mb-12 flex-grow">
                    {card.desc}
                  </p>

                  {/* Premium Action */}
                  <div className="mt-auto flex items-center pt-6 border-t border-white/[0.04] group-hover:border-[#C8A96A]/20 transition-colors duration-500">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 group-hover:text-white transition-colors duration-300">
                      Explore Service
                    </span>
                    <motion.span
                      aria-hidden="true"
                      className="ml-auto text-[#C8A96A] transform origin-right"
                      variants={{
                        rest: { scaleX: 0, opacity: 0, x: -10 },
                        hover: { scaleX: 1, opacity: 1, x: 0 }
                      }}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                        <path d="M0 6H22M22 6L17 1M22 6L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                    {/* Fallback arrow for mobile/non-hover context */}
                    <span className="ml-auto text-[#C8A96A] group-hover:opacity-0 transition-opacity duration-300 md:hidden">
                      →
                    </span>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
