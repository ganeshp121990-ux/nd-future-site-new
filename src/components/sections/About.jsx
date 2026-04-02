"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CERTIFICATES = [
  {
    title: "ICAEW",
    subtitle: "Chartered Excellence",
    description: "Governed by the Institute of Chartered Accountants in England and Wales, ensuring the highest standards of financial integrity.",
  },
  {
    title: "ACCA",
    subtitle: "Global Standard",
    description: "Fully certified by the Association of Chartered Certified Accountants, delivering world-class financial expertise.",
  },
  {
    title: "FCA",
    subtitle: "Regulated Operations",
    description: "Operating under strict compliance protocols outlined by the Financial Conduct Authority for absolute trust.",
  },
  {
    title: "ISO 27001",
    subtitle: "Information Security",
    description: "Internationally recognized certification for robust data security and absolute client confidentiality.",
  }
];

export default function About() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.4,
  });

  // Parallax calculations for depth (reduced movement)
  const yHeadline = useTransform(smoothProgress, [0, 1], [20, -20]);
  const yGrid = useTransform(smoothProgress, [0, 1], [15, -15]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[linear-gradient(180deg,#F5F8FF_0%,#FAFAF8_100%)] text-[#0A1A2F] overflow-hidden py-32 md:py-48 lg:py-56"
    >
      {/* Soft Ambient Gradients for Cinematic Depth (GPU Optimized - No heavy blur filters) */}
      <div className="absolute top-0 left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#FAFAFA]/50 to-transparent opacity-90 -z-10 transform-gpu -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E8EEF2]/60 to-transparent opacity-70 -z-10 transform-gpu translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/[0.04] to-transparent opacity-60 -z-10 transform-gpu -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* Subtle Accent Line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 mb-12 md:mb-20"
        >
          <div className="h-[1px] w-12 md:w-20 bg-[#D4AF37]/50" />
          <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-[#0A1A2F]/60">
            About Our Firm
          </span>
        </motion.div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 lg:mb-48">
          <motion.div style={{ y: yHeadline, willChange: "transform" }} className="lg:col-span-7 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-[5rem] font-light font-heading leading-[1.08] tracking-[-0.03em] text-[#0A1A2F]"
            >
              A modern{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#0A1A2F] bg-clip-text text-transparent font-medium">
                  UK business
                </span>
                <span className="absolute inset-0 blur-xl opacity-10 bg-[#2F5B8C]" />
              </span>
              <br className="hidden md:block" /> with global ambition.
            </motion.h2>
          </motion.div>

          <motion.div className="lg:col-span-5 flex flex-col justify-end z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#0A1A2F]/65 text-lg md:text-xl lg:text-[1.35rem] font-light leading-[1.7] md:leading-[1.8]"
            >
              We craft <span className="font-medium text-[#0A1A2F]">ultra-premium financial architecture</span> for ambitious enterprises. Uniting technical precision with sophisticated strategy, we empower companies navigating complex, international landscapes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <p className="text-[11px] md:text-xs tracking-[0.15em] text-[#D4AF37]/80 uppercase font-medium">Elevating the Standard</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Elegant Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-[#0A1A2F]/10 to-transparent w-full mb-32 origin-left"
        />

        {/* Trust & Credibility Grid */}
        <motion.div
          style={{
            y: yGrid,
            opacity: useTransform(smoothProgress, [0, 0.3], [0.7, 1]),
            willChange: "transform, opacity"
          }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20"
          >
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#0A1A2F]/40 mb-4">
              Credentials
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#0A1A2F] font-heading">
              Recognized for <span className="font-medium">Excellence.</span>
            </h3>
            <p className="text-[#0A1A2F]/50 text-sm md:text-base max-w-sm font-light">
              Our accreditations signify an unwavering commitment to unparalleled quality, security, and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {CERTIFICATES.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: 0.1 * idx, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/40 backdrop-blur-sm border border-[#0A1A2F]/[0.04] p-8 lg:p-10 rounded-[1.5rem] transition-all duration-700 hover:bg-white hover:border-[#D4AF37]/20 hover:shadow-[0_15px_35px_-10px_rgba(10,26,47,0.06)] hover:-translate-y-1 overflow-hidden flex flex-col justify-between h-full min-h-[280px] transform-gpu will-change-transform"
              >
                {/* Subtle Hover Glow behind the card */}
                <div className="absolute -inset-px bg-gradient-to-br from-[#D4AF37]/5 to-[#0A1A2F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1.5rem] pointer-events-none" />
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />
                <div className="relative z-10">
                  <h4 className="text-2xl lg:text-3xl font-heading font-medium text-[#0A1A2F] mb-2 tracking-tight transition-colors duration-500 group-hover:text-[#D4AF37]">
                    {cert.title}
                  </h4>
                  <p className="text-sm font-medium text-[#0A1A2F]/40 tracking-wider uppercase mb-6">
                    {cert.subtitle}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <p className="text-[#0A1A2F]/60 text-[0.95rem] font-light leading-[1.65]">
                    {cert.description}
                  </p>
                </div>

                {/* Micro-interaction dot */}
                <div className="absolute bottom-8 right-8 w-1.5 h-1.5 rounded-full bg-[#0A1A2F]/10 group-hover:bg-[#D4AF37]/80 group-hover:scale-150 transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}