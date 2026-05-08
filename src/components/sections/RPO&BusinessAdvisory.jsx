"use client";

import React from "react";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   DATA & CONFIGURATION
═══════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "01",
    title: "Managed Recruitment Services",
    description:
      "End-to-end coordination of the talent acquisition lifecycle, from workforce planning and candidate management to onboarding support and operational integration.",
  },
  {
    id: "02",
    title: "Strategic Workforce Planning",
    description:
      "Analysis of hiring demand, operational capacity, and market trends to help businesses maintain efficient and scalable workforce structures.",
  },
  {
    id: "03",
    title: "Business Advisory Support",
    description:
      "Operational and administrative advisory services designed to support business efficiency, internal processes, and long-term organisational planning.",
  },
];

const METRICS = [
  "AAT Regulated Standard",
  "Compliance-Focused",
  "Operational Advisory Support",
];

// Custom premium easing curve for "heavy but smooth" corporate animations
const premiumEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: premiumEase },
  },
};

/* ═══════════════════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════════════════ */

export default function RPOAdvisorySection() {
  return (
    <section className="relative w-full bg-[#07111F] text-slate-300 overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Subtle Enterprise Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
        aria-hidden="true"
      />

      {/* Soft Ambient Light (Cinematic but restrained) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_55%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {/* Section Header */}
          <div className="max-w-4xl mb-20 md:mb-28">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-slate-500" aria-hidden="true" />
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-slate-400">
                RPO & Business Advisory
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#F8FAFC] tracking-tight leading-[1.1] mb-8"
            >
              Strategic workforce planning and{" "}
              <span className="font-medium text-[#8FA7BF]">
                managed recruitment support.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl"
            >
              We act as an extension of your internal team, managing workforce
              planning, recruitment coordination, onboarding processes, and
              operational support with a compliance-focused approach.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {SERVICES.map((service, index) => (
              <motion.article
                key={service.id}
                variants={itemVariants}
                className="group relative flex flex-col justify-between h-full p-8 md:p-10 lg:p-12 bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm transition-colors duration-500 hover:bg-white/[0.04]"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#355C7D]/0 via-[#355C7D]/50 to-[#355C7D]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out" />

                <div>
                  <span className="block text-[11px] font-mono tracking-widest text-[#8FA7BF] mb-8">
                    {service.id} //
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-[#F8FAFC] leading-snug mb-6">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 font-light leading-[1.8]">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Bottom Corner Frame */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 m-6 transition-colors duration-500 group-hover:border-[#355C7D]/40" aria-hidden="true" />
              </motion.article>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="group relative flex flex-col justify-between h-full p-8 md:p-10 lg:p-12 bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm transition-colors duration-500 hover:bg-white/[0.04]"
          >
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-6">
                  Enterprise Approach
                </p>

                <h3 className="text-3xl md:text-4xl font-light text-white leading-[1.2] mb-6">
                  Embedded recruitment coordination
                  <span className="text-[#8FA7BF] font-medium">
                    {" "}aligned with operational growth.
                  </span>
                </h3>

                <p className="text-slate-400 text-lg leading-[1.9] max-w-2xl">
                  We operate as an extension of internal business functions, supporting
                  workforce planning, onboarding coordination, and structured recruitment
                  processes with a professional and compliance-focused framework.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-4">
                {[
                  "Workforce Planning",
                  "Recruitment Coordination",
                  "Operational Support",
                  "Compliance Focused",
                ].map((item) => (
                  <li
                    key={item}
                    className="border border-white/[0.06] bg-black/20 rounded-2xl p-6"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>

          {/* Trust Metrics / Footer Line */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-t border-white/[0.06]"
          >
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {METRICS.map((metric, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#355C7D]" />
                  <span className="text-[11px] uppercase tracking-widest font-medium text-slate-400">
                    {metric}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-4 mt-8 md:mt-0 text-sm tracking-wide text-[#F8FAFC] transition-colors hover:text-[#8FA7BF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FA7BF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm"
            >
              Discuss Advisory Services
              <span className="block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}