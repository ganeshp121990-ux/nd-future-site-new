"use client";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   HERO — "Precision Focus System"
   Clarity emerging from uncertainty. Lens-focus reveal.
   Light theme · Parallax depth · Ambient idle motion
   ───────────────────────────────────────────────────────────── */

const EASE = [0.2, 1, 0.2, 1];

export default function Hero() {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState(0);
  // 0 = blurred / waiting
  // 1 = focusing (blur dissolving)
  // 2 = sharp + text revealing

  /* ── Ambient idle motion (sin-wave micro-drift) ── */
  const idleDrift = useMotionValue(0);
  const idleBreath = useMotionValue(1);

  useAnimationFrame((time) => {
    // Very subtle vertical drift: ±2px over ~6s cycle
    idleDrift.set(Math.sin(time / 7000) * 1.2);
    // Light breathing: opacity oscillates 1.0 → 0.92 → 1.0 over ~8s
    idleBreath.set(0.97 + Math.sin(time / 9000) * 0.025);
  });

  /* ── Phased reveal timeline ── */
  useEffect(() => {
    // Phase 1: begin lens focus after 400ms
    const t1 = setTimeout(() => setPhase(1), 400);
    // Phase 2: scene sharp, start text reveals after focus completes (~2s)
    const t2 = setTimeout(() => setPhase(2), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  /* ── Scroll-linked parallax ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // Layer 1 — Video (slowest)
  const vidScale = useTransform(smooth, [0, 1], [1, 1.06]);
  const vidY = useTransform(smooth, [0, 1], ["0%", "4%"]);

  // Layer 2 — Light overlays (medium)
  const lightY = useTransform(smooth, [0, 1], ["0%", "10%"]);

  // Layer 3 — Grain / grid (fastest)
  const grainY = useTransform(smooth, [0, 1], ["0%", "18%"]);

  // Text — exits late
  const txtY = useTransform(smooth, [0, 1], ["0%", "12%"]);
  const txtOpacity = useTransform(smooth, [0, 0.55, 1], [1, 1, 0]);

  /* ── Text stagger delays (relative to phase 2) ── */
  const tagDelay = 0.1;
  const headDelay = 0.4;
  const subDelay = 1.0;
  const ctaDelay = 1.3;
  const trustDelay = 1.7;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100lvh] flex items-center justify-center overflow-hidden bg-[#FAFBFA]"
    >
      {/* ═══════════════════════════════════════════════════════
          LAYER 1 — BACKGROUND VIDEO (slowest parallax)
          Lens-focus: starts at 12px blur, sharpens to 0.
          mix-blend-multiply fuses video into white environment.
          ═══════════════════════════════════════════════════════ */}
      <motion.div
        style={{ scale: vidScale, y: vidY }}
        className="absolute inset-[-4%] pointer-events-none will-change-transform"
      >
        <motion.div
          initial={{ filter: "blur(12px) contrast(0.9)" }}
          animate={
            phase >= 1
              ? { filter: "blur(0px) contrast(1.05)" }
              : { filter: "blur(12px) contrast(0.9)" }
          }
          transition={{ duration: 1.4, ease: [0.3, 1, 0.2, 1] }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-multiply opacity-[0.40] contrast-[1.08] saturate-[0.85]"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Feathered edges — minimal, just prevents hard video boundaries */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #FAFBFA 0%, transparent 8%, transparent 88%, #FAFBFA 100%), " +
              "linear-gradient(to right,  #FAFBFA 0%, transparent 5%, transparent 95%, #FAFBFA 100%)",
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════
          LAYER 2 — LIGHT OVERLAYS (medium parallax)
          Soft ambient radial glows + breathing opacity
          ═══════════════════════════════════════════════════════ */}
      <motion.div
        style={{ y: lightY, opacity: useTransform(idleBreath, (v) => v * 0.92) }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          className="absolute -top-[25%] -right-[12%] w-[65vw] h-[65vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.85) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-[18%] -left-[8%] w-[50vw] h-[50vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(253,250,244,0.88) 0%, transparent 60%)",
          }}
        />
        {/* Warm accent — barely visible */}
        <div
          className="absolute top-[15%] left-[35%] w-[40vw] h-[30vw] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(ellipse, rgba(200,169,106,0.05) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════
          LAYER 3 — GRAIN + GRID (fastest parallax)
          Film texture for cinematic depth
          ═══════════════════════════════════════════════════════ */}
      <motion.div
        style={{ y: grainY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        {/* Film grain via inline SVG noise */}
        <div
          className="absolute inset-0 opacity-[0.026]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px 128px",
          }}
        />
        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1E3A5F 1px, transparent 1px), " +
              "linear-gradient(to bottom, #1E3A5F 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 55% 55% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 55% at 50% 50%, black 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════
          CONTENT LAYER — Text, CTA, Trust
          Only appears after scene has focused (phase 2).
          Idle micro-drift for alive feeling.
          ═══════════════════════════════════════════════════════ */}
      <motion.div
        style={{ y: txtY, opacity: txtOpacity, translateY: idleDrift }}
        className="relative z-10 pt-36 pb-24 md:pt-52 md:pb-36 text-center px-6 max-w-5xl mx-auto w-full will-change-transform"
      >
        {/* ── Tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE, delay: tagDelay }}
          className="flex items-center justify-center gap-4 mb-8 md:mb-12"
        >
          <span className="h-px w-6 md:w-12 bg-deepBlue/15" />
          <p className="text-deepBlue/70 font-medium text-[11px] md:text-[10px] uppercase tracking-[0.4em] font-body">
            Designing Financial Clarity for What's Next
          </p>
          <span className="h-px w-6 md:w-12 bg-deepBlue/15" />
        </motion.div>

        {/* ── Headline: micro-scale 0.96 → 1.03 → 1 + light sweep ── */}
        <motion.h1
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={
            phase === 2
              ? { opacity: 1, y: 0, scale: [0.96, 1.03, 1] }
              : {}
          }
          transition={{
            opacity: { duration: 1.4, ease: EASE, delay: headDelay },
            y: { duration: 1.4, ease: EASE, delay: headDelay },
            scale: { duration: 2.2, ease: EASE, delay: headDelay },
          }}
          className="text-[30px] sm:text-5xl md:text-7xl lg:text-[70px] font-medium leading-[1.04] tracking-[-0.015em] text-deepBlue font-heading mb-8 md:mb-10"
        >
          SMART ACCOUNTING
          <br className="hidden md:block" />
          <span className="relative inline-block overflow-hidden">
            <span className="relative z-10"> FOR SCALING BUSINESSES</span>
            {/* Natural light reflection sweep — very subtle */}
            <motion.span
              initial={{ x: "-120%" }}
              animate={phase === 2 ? { x: "240%" } : {}}
              transition={{
                duration: 3.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: headDelay + 1.6,
                repeat: Infinity,
                repeatDelay: 8,
              }}
              className="absolute inset-0 z-20 w-[30%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.3) 42%, rgba(255,255,255,0.22) 58%, transparent 100%)",
              }}
            />
          </span>
        </motion.h1>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: EASE, delay: subDelay }}
          className="text-deepBlue/65 text-[15px] md:text-[18px] lg:text-[20px] font-light max-w-[580px] mx-auto font-body leading-[1.7] tracking-[0.01em] mb-14 md:mb-16"
        >
          A future-focused UK accounting firm helping modern businesses move
          with precision, confidence, and intelligent control.
        </motion.p>

        {/* ── CTA Buttons — tactile, premium ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: EASE, delay: ctaDelay }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
        >
          {/* Primary */}
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-9 py-[14px] bg-deepBlue text-white text-[13px] font-medium
                       rounded-[7px] min-w-[200px] tracking-[0.04em] overflow-hidden
                       border border-white/[0.06]
                       transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                       hover:scale-[1.02] hover:shadow-[0_14px_44px_-10px_rgba(30,58,95,0.26)]
                       active:scale-[0.985]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,1,0.2,1)]" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book Consultation
              <svg
                className="w-3.5 h-3.5 opacity-70 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>

          {/* Secondary */}
          <button
            onClick={() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-9 py-[14px] text-deepBlue text-[13px] font-medium
                       rounded-[7px] min-w-[200px] tracking-[0.04em] overflow-hidden
                       border border-deepBlue/[0.12]
                       transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                       hover:scale-[1.02] hover:border-deepBlue/25 hover:bg-deepBlue/[0.02]
                       active:scale-[0.985]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-deepBlue/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,1,0.2,1)]" />
            <span className="relative z-10">Explore Services</span>
          </button>
        </motion.div>

        {/* ── Trust footer ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={phase === 2 ? { opacity: 1 } : {}}
          transition={{ duration: 1.8, ease: EASE, delay: trustDelay }}
          className="mt-24 md:mt-36 pt-7 flex justify-center relative"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-xs h-px bg-gradient-to-r from-transparent via-deepBlue/50 to-transparent" />
          <p className="text-[9px] md:text-[10px] tracking-[0.35em] text-deepBlue/70 uppercase font-medium font-body flex gap-4 md:gap-7 flex-wrap justify-center">
            <span>Tax</span>
            <span className="opacity-50">•</span>
            <span>Compliance</span>
            <span className="opacity-50">•</span>
            <span>Advisory</span>
            <span className="opacity-50">•</span>
            <span>Growth</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}