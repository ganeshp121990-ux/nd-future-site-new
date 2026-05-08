"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: 0,
    index: "01",
    title: "Bookkeeping",
    tag: "MTD 2026",
    accentHex: "#2F5B8C",

    short:
      "Digital bookkeeping and financial record keeping compliant with MTD 2026 requirements.",

    detail:
      "Accurate maintenance of business transactions, ledgers, and reconciliations using compliant cloud accounting systems.",

    stat: {
      value: "MTD",
      label: "Compliant",
    },
  },

  {
    id: 1,
    index: "02",
    title: "VAT Services",
    tag: "HMRC VAT",
    accentHex: "#456B8C",

    short:
      "Preparation and submission of VAT returns using HMRC-compatible accounting software.",

    detail:
      "Support with VAT calculations, digital submissions, reporting obligations, and ongoing VAT compliance.",

    stat: {
      value: "VAT",
      label: "Returns",
    },
  },

  {
    id: 2,
    index: "03",
    title: "Payroll & RTI",
    tag: "PAYE",
    accentHex: "#3B6FA0",

    short:
      "Full payroll processing including PAYE calculations and RTI submissions to HMRC.",

    detail:
      "Management of employee payroll, pension deductions, statutory pay, and monthly Real Time Information reporting.",

    stat: {
      value: "RTI",
      label: "Filed",
    },
  },

  {
    id: 3,
    index: "04",
    title: "Financial Accounts",
    tag: "Year-End",
    accentHex: "#355C7D",

    short:
      "Preparation of year-end financial accounts for sole traders and partnerships.",

    detail:
      "Structured financial reporting prepared in line with UK accounting and tax requirements.",

    stat: {
      value: "AAT",
      label: "Standard",
    },
  },

  {
    id: 4,
    index: "05",
    title: "Management Accounts",
    tag: "Reporting",
    accentHex: "#4A6A88",

    short:
      "Monthly and quarterly management reports to support business decision-making.",

    detail:
      "Profit and loss reporting, cashflow visibility, and financial performance tracking for ongoing operational clarity.",

    stat: {
      value: "Monthly",
      label: "Reports",
    },
  },
];

const TRUST_CHIPS = [
  "HMRC Compliant Systems",
  "End-to-End Data Encryption",
  "Confidential Financial Handling",
];





function ServiceCard({ s, i, isOpen, onToggle, prefersReduced }) {
  return (
    <motion.article
      layout
      onClick={onToggle}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      aria-expanded={isOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}
      className={`group relative flex flex-col bg-white/70 backdrop-blur-xl rounded-3xl border transition-all duration-500 overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2
        ${isOpen
          ? "border-[#C8A96A]/40 shadow-[0_20px_50px_-15px_rgba(10,26,47,0.08)] ring-1 ring-[#C8A96A]/10"
          : "border-[#0A1A2F]/[0.06] shadow-[0_4px_20px_rgba(10,26,47,0.02)] hover:border-[#0A1A2F]/15 hover:shadow-[0_12px_30px_rgba(10,26,47,0.05)]"
        }`}
    >
      {/* Dynamic Luminous Gradient Hover Glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        style={{
          background: `radial-gradient(120% 120% at 85% 15%, ${s.accentHex}12 0%, transparent 60%)`
        }}
      />

      {/* Top Accent Strip */}
      <div className="absolute top-0 left-0 w-full h-[3px]">
        <motion.div
          layout
          className="h-full w-full"
          style={{ background: `linear-gradient(90deg, ${s.accentHex}80, ${s.accentHex}10)` }}
        />
      </div>

      <motion.div layout className="relative z-10 flex flex-col h-full p-8 md:p-10">

        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0A1A2F]">
              {s.index} — {s.tag}
            </span>
            <h4 className="text-xl md:text-2xl font-heading font-medium text-[#0A1A2F] leading-tight">
              {s.title}
            </h4>
          </div>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-500 ${isOpen ? 'border-transparent bg-[#0A1A2F]' : 'border-[#0A1A2F]/10 bg-transparent group-hover:bg-[#0A1A2F]/[0.02]'}`}
          >
            {/* Morphing Icon (+ to -) */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="relative w-3 h-3 flex items-center justify-center"
            >
              <div className={`absolute w-full h-[1.5px] rounded-full transition-colors duration-300 ${isOpen ? 'bg-white' : 'bg-[#0A1A2F]/60 group-hover:bg-[#0A1A2F]'}`} />
              <div className={`absolute w-[1.5px] h-full rounded-full transition-all duration-300 ${isOpen ? 'bg-transparent scale-y-0' : 'bg-[#0A1A2F]/60 group-hover:bg-[#0A1A2F] scale-y-100'}`} />
            </motion.div>
          </div>
        </div>

        {/* Short description */}
        <motion.p layout className="text-[1rem] font-light text-[#0A1A2F]/60 leading-[1.7] mb-2">
          {s.short}
        </motion.p>

        {/* Expanded Content with AnimatePresence */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
              animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
              exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-4 border-t border-[#0A1A2F]/[0.06] flex flex-col gap-6">
                <p className="text-[0.95rem] font-light text-[#0A1A2F]/50 leading-[1.8]">
                  {s.detail}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#0A1A2F]/30">{s.stat.label}</span>
                    <span
                      className="text-xl font-medium tracking-tight"
                      style={{ color: s.accentHex }}
                    >
                      {s.stat.value}
                    </span>
                  </div>

                  <motion.button
                    whileHover="hover"
                    className="group/btn flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-[#0A1A2F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2 rounded-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Discuss
                    <motion.span
                      variants={{ hover: { x: 4 } }}
                      transition={{ duration: 0.3 }}
                      className="text-[#C8A96A]"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </motion.article>
  );
}




export default function Services() {
  const prefersReduced = useReducedMotion();
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40 text-[#0A1A2F]"
      style={{
        background:
          "linear-gradient(180deg, #F5F7FA 0%, #EEF2F6 45%, #F8FAFC 100%)",
      }}
    >

      {/* Premium Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,26,47,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(10,26,47,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute top-[-10%] right-[-10%] w-[55rem] h-[55rem] rounded-full bg-[radial-gradient(circle,rgba(47,91,140,0.08)_0%,transparent_70%)] blur-3xl" />

        <div className="absolute bottom-[-20%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.06)_0%,transparent_70%)] blur-3xl" />

      </div>

      {/* ── HEADER ── */}
      <div className="relative z-10 max-w-[86rem] mx-auto px-5 md:px-8 lg:px-12 mb-20 md:mb-28">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-5 mb-8"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#0A1A2F]/50">
              Accounting & Bookkeeping Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-light font-heading leading-[1.05] tracking-[-0.03em] text-[#0A1A2F] mb-8"
          >
            Professional accounting services   <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F] bg-clip-text text-transparent font-medium">built for UK business compliance.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#0A1A2F]/60 text-lg md:text-xl lg:text-2xl font-light leading-[1.7] max-w-2xl"
          >
            AAT-regulated bookkeeping, VAT, payroll, and financial reporting services designed to support sole traders, partnerships, and growing UK businesses.
          </motion.p>
        </div>
      </div>

      {/* ── INTERACTIVE SERVICE CARDS GRID ── */}
      <div className="relative z-10 max-w-[86rem] mx-auto px-5 md:px-8 lg:px-12 mb-32 md:mb-48">
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.id}
              s={s}
              i={i}
              isOpen={expandedIdx === i}
              onToggle={() => setExpandedIdx(expandedIdx === i ? null : i)}
              prefersReduced={prefersReduced}
            />
          ))}
        </div>
      </div>
      {/* ── TRUST BLOCK ── */}
      <div className="relative z-10 max-w-[86rem] mx-auto px-5 md:px-8 lg:px-12 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            "HMRC-Compatible Software",
            "AAT-Regulated Financial Oversight",
            "MTD 2026 Digital Compliance",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-[#0F172A] backdrop-blur-xl backdrop-blur-sm p-8 md:p-10 shadow-[0_10px_30px_rgba(10,26,47,0.04)]"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-4">
                Trusted Standard
              </p>

              <h4 className="text-xl md:text-2xl font-medium text-[#E8EEF2] leading-[1.4]">
                {item}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>


    </section>
  );
}
