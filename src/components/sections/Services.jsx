"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: 0, index: "01",
    title: "UK Company Accounting", tag: "Statutory", accentHex: "#2F5B8C",
    short: "End-to-end statutory accounts, filings, and financial reporting for UK companies operating locally or internationally.",
    detail: "From year-end preparation and Companies House filings to IFRS-compliant management accounts — we ensure your financials are bulletproof, deadline-ready, and strategically meaningful.",
    stat: { value: "100%", label: "Compliance Rate" },
  },
  {
    id: 1, index: "02",
    title: "Corporation Tax Strategy", tag: "Tax", accentHex: "#C8A96A",
    short: "Proactive tax planning, compliance, and optimisation designed to protect cashflow and reduce long-term liability.",
    detail: "We move beyond basic filing — structuring your affairs with intelligent relief claims, group tax efficiencies, and HMRC-compliant optimisation that genuinely moves the dial.",
    stat: { value: "34%", label: "Avg. Tax Saved" },
  },
  {
    id: 2, index: "03",
    title: "International Structuring", tag: "Global", accentHex: "#3B6FA0",
    short: "Advisory for founders and global firms expanding into the UK market with clarity on cross-border tax exposure.",
    detail: "Navigating double tax treaties, PE risk, transfer pricing, and holding structures for international scale. We architect the right entry strategy before the first pound moves.",
    stat: { value: "60+", label: "Countries Served" },
  },
  {
    id: 3, index: "04",
    title: "VAT & Compliance", tag: "Compliance", accentHex: "#5B8C5A",
    short: "VAT registrations, filings, investigations, and ongoing compliance across domestic and international transactions.",
    detail: "Handling MTD filings, partial exemption calculations, cross-border VAT on goods and services, and proactive diary management so deadlines are never a risk.",
    stat: { value: "Zero", label: "Late Filings" },
  },
  {
    id: 4, index: "05",
    title: "R&D & Innovation Relief", tag: "Innovation", accentHex: "#7A5B8C",
    short: "Maximise UK innovation incentives including R&D credits and advanced relief structures for modern companies.",
    detail: "Deep technical writers and tax specialists build defensible R&D claims that withstand HMRC enquiry — unlocking credits most firms leave on the table.",
    stat: { value: "£2.4M+", label: "Credits Unlocked" },
  },
  {
    id: 5, index: "06",
    title: "CFO & Strategic Advisory", tag: "Strategy", accentHex: "#1E3A5F",
    short: "Ongoing strategic support, forecasting, and decision-level financial guidance for scaling businesses.",
    detail: "Part-time CFO support giving founders board-ready financials, investor-grade models, and real-time cashflow intelligence — at a fraction of in-house cost.",
    stat: { value: "3×", label: "Faster Decisions" },
  },
];

const TRUST_CHIPS = [
  "HMRC Compliant Systems",
  "End-to-End Data Encryption",
  "Confidential Financial Handling",
];

const CALC_REVENUE = ["Under £500k", "£500k–£2M", "£2M–£10M", "£10M+"];
const CALC_CHALLENGE = ["Tax Compliance", "International Expansion", "R&D Relief", "Full CFO Support"];

const IMPACT_MAP = {
  "Under £500k": { min: 8, max: 22, time: 12, risk: "Medium", riskPct: 55 },
  "£500k–£2M": { min: 22, max: 85, time: 28, risk: "Low", riskPct: 25 },
  "£2M–£10M": { min: 85, max: 320, time: 55, risk: "Very Low", riskPct: 12 },
  "£10M+": { min: 320, max: 600, time: 90, risk: "Minimal", riskPct: 4 },
};

/* ═══════════════════════════════════════════════════════════════
   UTILITY: Animated Number Counting Hook (RAF-based)
═══════════════════════════════════════════════════════════════ */
function useCountUp(target, delay = 0, duration = 1000) {
  const [display, setDisplay] = useState(target);
  const rafRef = useRef(null);
  const prevRef = useRef(target);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) {
      setDisplay(target);
      prevRef.current = target;
      return;
    }
    const timer = setTimeout(() => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const from = prevRef.current;
      const startTime = performance.now();
      const tick = (now) => {
        const p = Math.min((now - startTime) / duration, 1);
        const e = 1 - Math.pow(1 - p, 3); // cubic ease-out
        setDisplay(Math.round(from + (target - from) * e));
        if (p < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          prevRef.current = target;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, delay, duration, shouldReduce]);

  return display;
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: Interactive Service Card
═══════════════════════════════════════════════════════════════ */
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
      className={`group relative flex flex-col bg-white rounded-3xl border transition-all duration-500 overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
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
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0A1A2F]/40">
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
                    className="group/btn flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-[#0A1A2F] focus:outline-none"
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

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: Impact Calculator
═══════════════════════════════════════════════════════════════ */
function ImpactCalculator({ prefersReduced }) {
  const [revenue, setRevenue] = useState("£500k–£2M");
  const [challenge, setChallenge] = useState("Tax Compliance");
  const [liveRevenue, setLiveRevenue] = useState("£500k–£2M");
  const [processing, setProcessing] = useState(false);

  // Simulate complex financial engine processing
  useEffect(() => {
    setProcessing(true);
    const t = setTimeout(() => {
      setLiveRevenue(revenue);
      setProcessing(false);
    }, 250); // slight delay for "calculating" feel
    return () => clearTimeout(t);
  }, [revenue]);

  const impact = IMPACT_MAP[liveRevenue] ?? IMPACT_MAP["£500k–£2M"];

  const savingsMin = useCountUp(impact.min, 160);
  const savingsMax = useCountUp(impact.max, 200);
  const timeVal = useCountUp(impact.time, 180);
  const riskPct = useCountUp(impact.riskPct, 170);

  // Smooth Bar Chart data
  const barHeights = useMemo(() => [15, 28, 42, 55, 67, 79, 88, impact.riskPct], [impact.riskPct]);

  return (
    <div className="relative rounded-[2.5rem] bg-white border border-[#0A1A2F]/[0.05] shadow-[0_40px_100px_-20px_rgba(10,26,47,0.06)] overflow-hidden p-10 md:p-16 lg:p-20">
      
      {/* Background Ambience */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[65%] h-[65%] bg-[radial-gradient(ellipse_at_top_right,_rgba(200,169,106,0.06)_0%,_transparent_65%)] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[45%] h-[55%] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,58,95,0.04)_0%,_transparent_65%)] pointer-events-none" />
      
      {/* Micro Grid Overlay for financial exactness feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "linear-gradient(#0A1A2F 1px, transparent 1px), linear-gradient(to right, #0A1A2F 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
        
        {/* LEFT COMPUTE COLUMN */}
        <div>
          <div className="flex items-center gap-5 mb-8">
            <div className="h-px w-10 bg-[#C8A96A]/40" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0A1A2F]/40">Dynamic Impact Tool</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-light font-heading leading-[1.15] text-[#0A1A2F] tracking-[-0.02em] mb-4">
            Model your <span className="font-medium">financial potential.</span>
          </h2>
          <p className="text-[1.05rem] font-light text-[#0A1A2F]/55 leading-[1.8] mb-12 max-w-lg">
            Select your business profile to simulate our projected impact on your tax exposure, reclaimed hours, and risk profile.
          </p>

          <div className="space-y-10">
            {/* Revenue Select */}
            <div>
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#0A1A2F]/35 mb-4">Annual Revenue Tier</p>
              <div className="flex flex-wrap gap-2.5">
                {CALC_REVENUE.map(val => (
                  <button
                    key={val}
                    onClick={() => setRevenue(val)}
                    aria-pressed={revenue === val}
                    className={`px-5 py-3 rounded-2xl text-[0.85rem] transition-all duration-400 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F]/40 ${
                      revenue === val 
                      ? 'bg-[#0A1A2F] text-white border border-[#0A1A2F] shadow-lg font-medium' 
                      : 'bg-transparent text-[#0A1A2F]/60 border border-[#0A1A2F]/10 hover:border-[#0A1A2F]/30 hover:text-[#0A1A2F]'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Challenge Select */}
            <div>
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#0A1A2F]/35 mb-4">Strategic Focus</p>
              <div className="flex flex-wrap gap-2.5">
                {CALC_CHALLENGE.map(val => (
                  <button
                    key={val}
                    onClick={() => setChallenge(val)}
                    aria-pressed={challenge === val}
                    className={`px-5 py-3 rounded-2xl text-[0.85rem] transition-all duration-400 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F]/40 ${
                      challenge === val 
                      ? 'bg-[#F3F5F9] text-[#0A1A2F] border border-[#0A1A2F]/10 font-medium' 
                      : 'bg-transparent text-[#0A1A2F]/60 border border-transparent hover:bg-[#F3F5F9]/50 hover:text-[#0A1A2F]'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <ul className="mt-12 space-y-3.5 border-t border-[#0A1A2F]/[0.05] pt-10">
            {TRUST_CHIPS.map(chip => (
              <li key={chip} className="flex items-center gap-3.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#5B8C5A]/10 text-[#5B8C5A]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-[0.85rem] font-medium text-[#0A1A2F]/60">{chip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT RESULT COLUMN */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={liveRevenue}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F8FAFC] rounded-[2rem] border border-[#0A1A2F]/[0.05] p-8 md:p-12 space-y-10"
            >
              {/* Status Pill */}
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-[#0A1A2F]/[0.05] w-fit shadow-sm">
                <span className="relative flex h-2 w-2">
                  {processing && <span className="animate-ping absolute h-full w-full rounded-full bg-[#5B8C5A] opacity-75" />}
                  <span className={`relative rounded-full h-2 w-2 ${processing ? "bg-[#5B8C5A]" : "bg-[#5B8C5A]"} transition-colors`} />
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#0A1A2F]/50">
                  {processing ? "Computing Engine..." : "Live Estimate"}
                </span>
              </div>

              {/* Huge Metrics */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0A1A2F]/40 mb-3">Projected Annual Value</p>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[3.5rem] md:text-[4rem] font-light text-[#0A1A2F] tracking-tight leading-none">
                    £{savingsMin}k
                  </span>
                  <span className="text-3xl text-[#0A1A2F]/20 font-light mx-1">–</span>
                  <span className="text-[3.5rem] md:text-[4rem] font-light text-[#0A1A2F] tracking-tight leading-none">
                    £{savingsMax}k
                  </span>
                </div>
              </div>

              {/* Split Secondary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[1.5rem] p-6 border border-[#0A1A2F]/[0.04]">
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#0A1A2F]/30 mb-2">Hours Recovered</p>
                  <p className="text-2xl font-medium text-[#0A1A2F] tracking-tight">
                    {timeVal} <span className="text-sm font-normal text-[#0A1A2F]/40">hrs/mo</span>
                  </p>
                </div>
                <div className="bg-white rounded-[1.5rem] p-6 border border-[#0A1A2F]/[0.04]">
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#0A1A2F]/30 mb-2">Risk Exposure</p>
                  <p className="text-2xl font-medium text-[#5B8C5A] tracking-tight">{impact.risk}</p>
                </div>
              </div>

              {/* Chart visualization */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#0A1A2F]/30">Data Tracking</p>
                  <span className="text-[11px] font-bold text-[#5B8C5A]">{riskPct}% Optimization</span>
                </div>
                <div className="h-[50px] w-full flex items-end gap-1.5 opacity-80 mix-blend-multiply">
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: `${Math.max(10, (h / 100) * 100)}%` }}
                      transition={{ duration: 0.7, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex-1 rounded-[4px] ${i === barHeights.length - 1 ? 'bg-[#5B8C5A]' : 'bg-[#0A1A2F]/[0.08]'}`}
                    />
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full py-4 rounded-2xl bg-[#0A1A2F] text-white text-[0.85rem] font-bold tracking-[0.2em] uppercase shadow-[0_15px_30px_-10px_rgba(10,26,47,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(10,26,47,0.4)] transition-shadow duration-500 focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
              >
                Request Deep Dive Report
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT PAGE COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Services() {
  const prefersReduced = useReducedMotion();
  const [expandedIdx, setExpandedIdx] = useState(0);

  return (
    <section id="services" className="relative bg-[#FDFCFB] text-[#0A1A2F] overflow-hidden py-24 md:py-32 lg:py-40">
      
      {/* Luminous Ambient Backgrounds */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,_rgba(200,169,106,0.04)_0%,_transparent_60%)] pointer-events-none" />
      <div aria-hidden="true" className="absolute top-[40%] left-[-10%] w-[60%] h-[70%] bg-[radial-gradient(ellipse_at_center_left,_rgba(47,91,140,0.05)_0%,_transparent_70%)] pointer-events-none mix-blend-multiply" />

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
              Specialist Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-light font-heading leading-[1.05] tracking-[-0.03em] text-[#0A1A2F] mb-8"
          >
            Engineered for <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F] bg-clip-text text-transparent font-medium">global ambition.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#0A1A2F]/60 text-lg md:text-xl lg:text-2xl font-light leading-[1.7] max-w-2xl"
          >
            World-class compliance, strategic tax advisory, and international structuring designed to give scaling businesses absolute clarity.
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

      {/* ── IMPACT CALCULATOR ── */}
      <div className="relative z-10 max-w-[86rem] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-40px" }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImpactCalculator prefersReduced={prefersReduced} />
        </motion.div>
      </div>

    </section>
  );
}
