"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────
   NAVBAR — "Floating Precision Bar"
   Emerges with the hero's focus moment (~1.8s after mount).
   Transparent at top → soft glass surface on scroll.
   ───────────────────────────────────────────────────────────── */

const EASE = [0.2, 1, 0.2, 1];

const NAV_LINKS = ["Home", "About", "Services", "Process", "Testimonials", "Contact"];

export default function Navbar() {
  const [visible, setVisible] = useState(false);   // synced to hero focus
  const [scrolled, setScrolled] = useState(false);  // glass surface trigger
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Sync entrance with hero's focus moment ── */
  useEffect(() => {
    // Hero phase 1 (focus) starts at 400ms, resolves ~1.4s later.
    // Navbar emerges as the scene sharpens — ~1800ms after mount.
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  /* ── Scroll: glass surface + active section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track which section is in view
      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ═══════════════════ DESKTOP NAV BAR ═══════════════════ */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 1.2, ease: EASE }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
          ${scrolled
            ? "py-3 backdrop-blur-xl bg-white/30 border-b border-deepBlue/[0.06]"
            : "py-5 bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* ── Logo — clean, no heavy container ── */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
            className="relative group"
          >
            <img
              src="/logo.png"
              alt="ScaleUp Logo"
              className={`h-8 md:h-9 w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                ${scrolled ? "opacity-90" : "opacity-80"}`}
            />
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.02em]">
            {NAV_LINKS.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  className="group relative py-1 font-body font-normal transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2 rounded-sm"
                >
                  {/* Label with upward micro-shift on hover */}
                  <span
                    className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)]
                      group-hover:-translate-y-[1.5px]
                      ${isActive ? "text-deepBlue" : "text-deepBlue/50 group-hover:text-deepBlue/80"}`}
                  >
                    {item}
                  </span>
                  {/* Underline — expands from center with delay */}
                  <span
                    className={`absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[1px] bg-deepBlue/40
                      transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] delay-75
                      ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-60"}`}
                  />
                </a>
              );
            })}
          </div>

          {/* ── CTA — matches hero button system ── */}
          <button
            onClick={() => scrollTo("contact")}
            className="group relative hidden md:block px-7 py-[10px] bg-deepBlue text-white text-[12px] font-medium
                       rounded-[6px] tracking-[0.04em] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2
                       border border-white/[0.06]
                       transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                       hover:scale-[1.02] hover:shadow-[0_12px_36px_-8px_rgba(30,58,95,0.22)]
                       active:scale-[0.985]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,1,0.2,1)]" />
            <span className="relative z-10 flex items-center gap-1.5">
              Book Consultation
              <svg className="w-3 h-3 opacity-60 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            className="md:hidden relative z-[60] flex flex-col justify-center items-center w-11 h-11 gap-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2 rounded-md"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="block w-5 h-[1.5px] bg-deepBlue origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="block w-5 h-[1.5px] bg-deepBlue origin-center"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="block w-5 h-[1.5px] bg-deepBlue origin-center"
            />
          </button>

        </div>
      </motion.nav>

      {/* ═══════════════════ MOBILE FULLSCREEN MENU ═══════════════════
          Scales + fades into view — feels like mode change, not panel.
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 md:hidden bg-[#FAFBFA]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-7">
              {NAV_LINKS.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.05 * i }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    setTimeout(() => scrollTo(item.toLowerCase()), 400);
                  }}
                  className={`text-[22px] tracking-[0.02em] font-heading font-medium transition-colors duration-500
                    ${activeSection === item.toLowerCase() ? "text-deepBlue" : "text-deepBlue/50"}`}
                >
                  {item}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.05 * NAV_LINKS.length }}
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(() => scrollTo("contact"), 400);
                }}
                className="mt-4 px-8 py-[13px] bg-deepBlue text-white text-[13px] font-medium
                           rounded-[7px] tracking-[0.04em] min-w-[220px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2
                           transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                           hover:scale-[1.02] active:scale-[0.985]"
              >
                Book Consultation
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
