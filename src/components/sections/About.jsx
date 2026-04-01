"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   ABOUT — "The Living Standard"
   Algorithmic Entropy. Sub-Pixel Parallax. Permanent Crossfade.
   ───────────────────────────────────────────────────────────── */

// Asynchronous Bezier Matrix: No two elements ease exactly the same way
const BEZIER_MATRIX = [
  [0.16, 1.00, 0.30, 1.00], // Base fluid
  [0.18, 0.98, 0.32, 1.02], // Slightly elastic tail
  [0.15, 1.01, 0.28, 0.99], // Softer entry, abrupt settle
  [0.17, 0.99, 0.31, 1.00], // Linear median
];

// Imperfect entry waves
const WAVE_DURATIONS = [1.65, 1.42, 1.83, 1.51];
const WAVE_DELAYS = [0.03, 0.21, 0.11, 0.26];

const PILLARS = [
  {
    label: "Clarity",
    statement: "No noise. No confusion. Only decisions backed by complete understanding.",
  },
  {
    label: "Control",
    statement: "Your finances don’t dictate you.You operate with structure, discipline, and intent.",
  },
  {
    label: "Precision",
    statement: "Every number matters.Nothing is left to assumption.",
  },
  {
    label: "Confidence",
    statement: "Move faster. Decide smarter. Act with certainty in every financial step.",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [activePillar, setActivePillar] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  /* PERMANENT CROSSFADE MATRIX
     Transitions take 3000ms. The cycle fires between 2500ms and 3500ms.
     The system never stops animating; states overlap indefinitely.
  */
  useEffect(() => {
    if (isInteracting) return;
    let timeout;
    const cycle = () => {
      // Base ambient drift + algorithmic entropy (±40ms randomization built into the variance)
      const entropy = (Math.random() * 80) - 40;
      const delay = 3000 + (Math.random() * 1000) + entropy;

      timeout = setTimeout(() => {
        setActivePillar((prev) => (prev + 1) % PILLARS.length);
        cycle();
      }, delay);
    };
    cycle();
    return () => clearTimeout(timeout);
  }, [isInteracting]);

  const interactionTimeout = useRef(null);

  /* Tactile input with algorithmic micro-delay */
  const handleInteraction = useCallback((i) => {
    const entropy = (Math.random() * 80) - 40; // ±40ms imperfection

    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      setIsInteracting(true);
      setActivePillar(i);
    }, 120 + entropy);
  }, []);

  const handleLeave = useCallback(() => {
    clearTimeout(interactionTimeout.current);
    setIsInteracting(false);
  }, []);

  useEffect(() => {
    return () => clearTimeout(interactionTimeout.current);
  }, []);

  /* ── Liquid Scroll Physics ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Extreme mass and damping: behaves like thick oil, zero mechanical snap
  const smooth = useSpring(scrollYProgress, {
    stiffness: 10,
    damping: 80,
    mass: 1.2,
    restDelta: 0.0001,
  });

  /* Sub-Pixel Parallax Mapping 
     Amplitudes crushed to single digits. It drifts imperceptibly. */
  const yHeadline = useTransform(smooth, [0, 1], [8.5, -8.5]);
  const yStatements = useTransform(smooth, [0, 1], [3.2, -3.2]);
  const yPillars = useTransform(smooth, [0, 1], [14.8, -14.8]);

  const lineScale = useTransform(smooth, [0.05, 0.45], [0, 1]);
  const lineOpacity = useTransform(smooth, [0.05, 0.25, 0.5, 0.7], [0, 0.15, 0.08, 0.02]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#F9F8F6] text-stone-900 py-20 md:py-32 lg:py-48 px-5 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* ═══════════════════════════════════════════════════════
            HEADLINE ZONE
            ═══════════════════════════════════════════════════════ */}
        <motion.div style={{ y: yHeadline }} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">

          <div className="md:col-span-4 md:pt-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 2.5, ease: BEZIER_MATRIX[0], delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="h-[1px] w-6 md:w-8 bg-stone-900/10" />
              <p className="text-stone-400 font-medium text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-sans">
                The New Standard
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-1 md:gap-2">
            <div className="overflow-hidden pb-1 md:pb-2">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: WAVE_DURATIONS[0], ease: BEZIER_MATRIX[1], delay: WAVE_DELAYS[0] }}
                className="text-[36px] sm:text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.05] tracking-tight font-serif text-stone-800"
              >
                Most firms manage compliance.
              </motion.h2>
            </div>

            <div className="overflow-hidden pb-1 md:pb-2">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: WAVE_DURATIONS[1], ease: BEZIER_MATRIX[2], delay: WAVE_DELAYS[1] }}
                className="text-[36px] sm:text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.05] tracking-tight font-serif text-stone-800"
              >
                We remove uncertainty.
              </motion.h2>
            </div>

            <div className="overflow-hidden pb-1 md:pb-2">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: WAVE_DURATIONS[2], ease: BEZIER_MATRIX[3], delay: WAVE_DELAYS[2] }}
                className="text-[36px] sm:text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.05] tracking-tight font-serif text-stone-800"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3.2, ease: "linear", delay: 0.6 }} // Linear fade for ambient ghosting
                  className="inline-block italic font-light tracking-[0.01em] text-[#3A4B36]"
                >
                  Clarity
                </motion.span>
                {" "}Isn’t a Service.It’s Your Advantage.
              </motion.h2>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════
            TRANSITION DIVIDER
            ═══════════════════════════════════════════════════════ */}
        <div className="relative mt-16 md:mt-24 lg:mt-32 mb-16 md:mb-24 lg:mb-32">
          <div className="h-px bg-stone-900/[0.02] w-full" />
          <motion.div
            style={{ scaleX: lineScale, opacity: lineOpacity, transformOrigin: "left" }}
            className="absolute top-0 left-0 w-full h-px bg-stone-900"
          />
        </div>

        {/* ═══════════════════════════════════════════════════════
            STATEMENTS
            ═══════════════════════════════════════════════════════ */}
        <motion.div style={{ y: yStatements }} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 mb-20 md:mb-32 lg:mb-40">
          <div className="md:col-start-2 md:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 5 }} // Sub-pixel initial state
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 2.5, ease: BEZIER_MATRIX[0], delay: 0.2 }}
              className="text-stone-500 text-[15px] md:text-[16px] font-light font-sans leading-[1.8] md:leading-[1.9]"
            >
              We simplify complexity into clear financial direction.
              <br />
              Structured reporting. Predictable outcomes.
              <br />
              Decisions made with confidence, not assumption.
            </motion.p>
          </div>
          <div className="md:col-start-8 md:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 2.5, ease: BEZIER_MATRIX[1], delay: 0.35 }}
              className="text-stone-400 text-[14px] md:text-[15px] font-light font-sans leading-[1.8] md:leading-[1.9]"
            >
              Built on discipline. Driven by precision.
              <br />
              Systems that scale as your business grows.
              <br />
              Designed for control. Not compromise.
            </motion.p>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════
            PILLAR SYSTEM (The Breathing Lung)
            ═══════════════════════════════════════════════════════ */}
        <motion.div
          style={{ y: yPillars }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
          onMouseLeave={handleLeave}
        >
          {PILLARS.map((pillar, i) => {
            const isActive = activePillar === i;

            // Generate a uniquely customized cubic-bezier string for each pillar's internal transition
            const uniqueBezier = `cubic-bezier(${BEZIER_MATRIX[i % 4].join(",")})`;

            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: WAVE_DURATIONS[i % 4],
                  ease: BEZIER_MATRIX[i % 4],
                  delay: WAVE_DELAYS[i % 4],
                }}
                onMouseEnter={() => handleInteraction(i)}
                onPointerDown={() => handleInteraction(i)}
                className={`group relative cursor-pointer lg:cursor-default py-8 md:py-10 lg:py-14 px-2 sm:px-4 lg:px-8
                  ${i === 0 ? "lg:pl-0" : ""}
                  ${i === PILLARS.length - 1 ? "lg:pr-0" : ""}
                  border-b lg:border-b-0 border-stone-900/[0.02]
                  ${i % 2 === 0 ? "sm:border-r" : "sm:border-r-0"} 
                  ${i < PILLARS.length - 1 ? "lg:border-r" : "lg:border-r-0"}
                  [-webkit-tap-highlight-color:transparent]
                `}
              >
                {/* 3000ms Transitions. 
                    The cycle interval is ~3000ms. 
                    The out-fade collides seamlessly with the in-fade of the next pillar.
                */}

                {/* Accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-[#3A4B36]/50 origin-left transition-all duration-[3000ms]`}
                  style={{
                    transitionTimingFunction: uniqueBezier,
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    opacity: isActive ? 1 : 0
                  }}
                />

                {/* Label */}
                <h3
                  className={`text-[24px] md:text-[28px] font-serif font-medium tracking-tight mb-3 md:mb-5 text-stone-900 transition-opacity duration-[3000ms]`}
                  style={{
                    transitionTimingFunction: uniqueBezier,
                    opacity: isActive ? 1 : 0.15
                  }}
                >
                  {pillar.label}
                </h3>

                {/* Statement - Sub-pixel composite drift (0.5px) */}
                <div
                  className={`transition-all duration-[3000ms]`}
                  style={{
                    transitionTimingFunction: uniqueBezier,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0px)" : "translateY(0.5px)",
                    pointerEvents: isActive ? "auto" : "none"
                  }}
                >
                  <p className="text-[14px] md:text-[15px] font-sans font-light leading-[1.7] md:leading-[1.8] text-stone-600">
                    {pillar.statement}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}