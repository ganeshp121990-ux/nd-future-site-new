"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   MAGNETIC HOVER COMPONENT
═══════════════════════════════════════════════════════════════ */
function MagneticWrapper({ children, className = "", strength = 20 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Extremely snappy, fluid spring for organic tracking
  const springX = useSpring(x, { stiffness: 350, damping: 25, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 350, damping: 25, mass: 0.2 });

  function handleMouse(e) {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) / (width / strength));
    y.set((clientY - centerY) / (height / strength));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN FOOTER COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Footer() {
  const footerRef = useRef(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [copied, setCopied] = useState(false);

  // Parallax scroll logic for the floating frame
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.5
  });

  // Layered 3D Parallax Effects
  const yFrame = useTransform(smoothProgress, [0, 1], [60, 0]);
  const scaleFrame = useTransform(smoothProgress, [0, 1], [0.97, 1]);
  const opacityFrame = useTransform(smoothProgress, [0, 0.5], [0, 1]);
  const yContent = useTransform(smoothProgress, [0, 1], [40, 0]);

  const LINKS = [
    { label: "Tax", id: "services" },
    { label: "Accounting", id: "services" },
    { label: "Advisory", id: "services" },
  ];

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("support@scaleupaccounting.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-transparent px-4 md:px-6 pb-4 md:pb-6 pt-16 md:pt-24 lg:pt-32">
      <motion.footer
        ref={footerRef}
        style={{
          y: yFrame,
          scale: scaleFrame,
          opacity: opacityFrame,
          willChange: "transform, opacity"
        }}
        className="relative bg-[#0A1A2F] text-[#0A1A2F] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_60px_-10px_rgba(2,5,10,0.8)] border border-white/[0.04]"
      >
        {/* ── Soft Top Glass Reflection ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[150px] bg-white/[0.01] blur-xl z-10 pointer-events-none" />

        {/* ── Ambient Cinematic Lighting ── */}
        <div className="absolute -bottom-[20%] left-1/2 w-[120vw] h-[700px] bg-[radial-gradient(ellipse_at_bottom,_rgba(200,169,106,0.06)_0%,_transparent_60%)] transform-gpu -translate-x-1/2 pointer-events-none mix-blend-screen z-0" />
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(47,91,140,0.08)_0%,_transparent_60%)] transform-gpu pointer-events-none mix-blend-screen z-0" />

        <motion.div
          style={{ y: yContent, willChange: "transform" }}
          className="max-w-[85rem] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-12 lg:pt-32 lg:pb-16 relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">

            {/* ── Brand/Logo Column ── */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* 3D Interactive Logo Component with Magnetic Pull */}
                <MagneticWrapper strength={15}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-flex items-center justify-center p-4 px-5 rounded-2xl backdrop-blur-md bg-white/[0.01] border border-white/[0.05] shadow-[0_15px_30px_rgba(0,0,0,0.5)] cursor-pointer mb-10 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96A]/0 to-[#C8A96A]/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none" />
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-[#C8A96A]/0 via-[#C8A96A]/20 to-[#C8A96A]/0 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-[4px] rounded-2xl pointer-events-none" />

                    <img
                      src="/logo.png"
                      alt="ScaleUp Logo"
                      className="h-9 md:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.08)] relative z-10 transition-transform duration-700 group-hover:drop-shadow-[0_0_20px_rgba(200,169,106,0.25)] opacity-90"
                    />
                  </motion.div>
                </MagneticWrapper>

                <p className="text-[#E8EEF2]/50 text-lg lg:text-[1.35rem] font-light leading-[1.7] max-w-[22rem] tracking-wide mt-2">
                  Architecting precision.<br className="hidden md:block" />
                  Future-focused UK Chartered Accountants for visionary enterprises.
                </p>
              </div>

              {/* Interactive Social Links */}
              <div className="mt-16 sm:mt-24 flex items-center gap-6 lg:gap-10">
                {['LinkedIn', 'Twitter', 'Insights'].map((social) => (
                  <MagneticWrapper key={social} strength={30}>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="group relative flex flex-col items-center justify-center overflow-visible px-2 py-1 outline-none"
                    >
                      <div className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#E8EEF2]/40 group-hover:text-[#C8A96A] transition-all duration-300 relative z-10 delay-75">
                        {social}
                      </div>

                      {/* Spring Underline */}
                      <motion.div
                        className="absolute -bottom-1 h-px bg-[#C8A96A]/50 w-0 group-hover:w-full transition-all duration-300 pointer-events-none"
                        layoutId={`underline-${social}`}
                      />

                      {/* Ambient Glow */}
                      <div className="absolute inset-0 bg-[#C8A96A]/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none scale-150" />
                    </motion.a>
                  </MagneticWrapper>
                ))}
              </div>
            </div>

            {/* ── Nav & Contact Columns ── */}
            <div className="md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-12 lg:pl-10">

              {/* Navigation / Expertise */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#E8EEF2]/20 mb-8 sm:mb-10 pl-2">
                  Capabilities
                </h4>
                <ul className="space-y-6">
                  {LINKS.map((link) => (
                    <li key={link.label}>
                      <MagneticWrapper strength={40}>
                        <motion.button
                          onHoverStart={() => setHoveredLink(link.label)}
                          onHoverEnd={() => setHoveredLink(null)}
                          whileHover={{ x: 6 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          onClick={() => {
                            const target = document.getElementById(link.id);
                            if (target) target.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="group relative inline-flex items-center text-[#E8EEF2]/60 hover:text-white text-lg lg:text-xl font-light tracking-wide outline-none pl-2"
                        >
                          <AnimatePresence>
                            {hoveredLink === link.label && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0, x: -10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0, x: -10 }}
                                className="absolute -left-5 w-1.5 h-1.5 rounded-full bg-[#C8A96A] shadow-[0_0_10px_rgba(200,169,106,0.6)]"
                              />
                            )}
                          </AnimatePresence>

                          <span className="relative z-10 transition-colors duration-300">
                            {link.label}
                            {/* Fluid Line Sweep */}
                            <span className="absolute left-0 -bottom-1 h-[1px] bg-gradient-to-r from-[#C8A96A] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-[0.22,1,0.36,1]" />
                          </span>
                        </motion.button>
                      </MagneticWrapper>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Status */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#E8EEF2]/20 mb-8 sm:mb-10 pl-2">
                  Engage
                </h4>

                <MagneticWrapper strength={30}>
                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex flex-col text-left text-[#E8EEF2]/70 hover:text-white transition-colors duration-500 text-[1.1rem] sm:text-xl lg:text-[1.35rem] font-light tracking-wide outline-none relative pl-2"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="copied"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-[#10B981] font-medium flex items-center gap-2"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Copied to clipboard
                        </motion.div>
                      ) : (
                        <motion.div
                          key="email"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex flex-col"
                        >
                          <span className="relative z-10 transition-transform duration-500">support@</span>
                          <span className="relative z-10 transition-transform duration-500 group-hover:text-[#C8A96A]">scaleupaccounting.com</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Ambient underline glow track */}
                    <div className="absolute -bottom-2 left-2 w-16 h-[1px] bg-[#E8EEF2]/10 group-hover:w-[calc(100%-8px)] group-hover:bg-[#C8A96A]/60 group-hover:shadow-[0_0_12px_rgba(200,169,106,0.6)] transition-all duration-700 ease-[0.22,1,0.36,1]" />
                  </motion.button>
                </MagneticWrapper>

                <div className="mt-16 pl-2">
                  <p className="text-[#E8EEF2]/30 text-xs font-light tracking-[0.2em] uppercase mb-4">
                    London • Remote Global
                  </p>

                  <MagneticWrapper strength={20}>
                    {/* Dynamic Interactive Status Pill */}
                    <motion.div
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(16,185,129,0.15)" }}
                      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-emerald-500/10 bg-emerald-500/[0.04] cursor-default transition-shadow duration-500"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                      </span>
                      <span className="text-[9px] text-emerald-400/90 uppercase tracking-[0.2em] font-bold mt-0.5">Accepting Clients</span>
                    </motion.div>
                  </MagneticWrapper>
                </div>
              </div>

            </div>
          </div>

          {/* ── Separation Line before footer bottom ── */}
          <div className="mt-24 md:mt-32 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8 relative">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#C8A96A]/20 to-transparent"
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
            />
          </div>

          {/* ── Footer Bottom Strip ── */}
          <div className="flex flex-col md:flex-col-reverse lg:flex-row lg:items-center justify-between gap-8 pt-4">
            <p className="text-[#E8EEF2]/30 text-[9px] md:text-[10px] tracking-[0.25em] font-light uppercase text-center lg:text-left mix-blend-plus-lighter">
              © {new Date().getFullYear()} ScaleUp Accounting Ltd. All Rights Reserved.
            </p>
            <p className="text-[#E8EEF2]/30 text-[9px] md:text-[10px] tracking-[0.25em] font-light uppercase text-center lg:text-left mix-blend-plus-lighter">
              Trusted by global founders • UK compliant • Confidential by design
            </p>
            <MagneticWrapper strength={25}>
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center lg:items-end gap-2 text-[#E8EEF2]/30 hover:text-white transition-colors duration-300 outline-none p-2 -m-2"
              >
                <div className="flex items-center gap-4">
                  {/* Subtle top arrow */}
                  <motion.svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-[#C8A96A]"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </motion.svg>
                  <span className="text-[10px] tracking-[0.35em] uppercase font-bold group-hover:text-white transition-colors duration-300 origin-right">
                    Top
                  </span>
                  <div className="w-12 h-px bg-white/10 group-hover:bg-[#C8A96A]/40 transition-colors duration-500 relative overflow-hidden group-hover:w-16">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.button>
            </MagneticWrapper>
          </div>

        </motion.div>
      </motion.footer>
    </div>
  );
}
