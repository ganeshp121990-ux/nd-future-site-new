"use client";

import React from "react";
import { motion } from "framer-motion";

const COMPLIANCE_DATA = [
  {
    id: "REG-01",
    title: "AML & Regulatory Oversight",
    description:
      "Operations conducted under AAT regulatory supervision with robust Anti-Money Laundering (AML), Know Your Customer (KYC), and Customer Due Diligence (CDD) procedures.",
    features: [
      "AAT Licensed Practice (Ref: [AAT-XXXX])",
      "AML monitored operations and reporting",
      "KYC and Customer Due Diligence (CDD)",
      "Professional regulatory procedures",
    ],
  },
  {
    id: "SEC-02",
    title: "UK GDPR and Data Use and Access Act 2025/2026 aligned procedures",
    description:
      "Professional data protection procedures aligned with upcoming legislative standards to ensure maximum confidentiality and security.",
    features: [
      "UK GDPR 2026 compliance protocols",
      "Data Use and Access Act 2025/2026 aligned",
      "Encrypted handling of financial information",
      "Secure digital systems & restricted access",
    ],
  },
  {
    id: "INS-03",
    title: "Professional Indemnity",
    description:
      "Professional services supported by full Professional Indemnity Insurance covering accounting, payroll, bookkeeping, advisory, and operational support activities.",
    features: [
      "Full Professional Indemnity Insurance",
      "Accounting, bookkeeping & payroll coverage",
      "Advisory and operational support protection",
      "Risk-managed service delivery frameworks",
    ],
  },
];

const METRICS = [
  "AML Supervised",
  "UK GDPR Aligned",
  "Encrypted Client Data",
  "Professional Indemnity Covered",
];

// Standardized easing to ensure Framer Motion stability
const transitionSettings = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

export default function ComplianceSecurity() {
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

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="flex flex-col"
        >
          <div className="max-w-4xl mb-16 md:mb-24">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: transitionSettings },
              }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-[#8FA7BF]/40" aria-hidden="true" />
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#8FA7BF]">
                Institutional Trust & Security
              </span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: transitionSettings },
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#F8FAFC] tracking-tight leading-[1.1] mb-8"
            >
              Institutional compliance and{" "}
              <span className="font-medium text-[#8FA7BF]">
                regulatory oversight.
              </span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: transitionSettings },
              }}
              className="text-lg md:text-xl text-slate-400 font-light leading-[1.8] max-w-3xl"
            >
              Our operations are underpinned by rigorous regulatory standards,
              ensuring uncompromising security, data confidentiality, and legal
              credibility across all financial and advisory functions.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: transitionSettings },
            }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-16 md:mb-24 py-6 border-y border-white/[0.04]"
          >
            <div className="text-[10px] uppercase tracking-widest text-white/30 mr-4">
              Verified Standards
            </div>
            {METRICS.map((metric, i) => (
              <div key={i} className="flex items-center gap-3" >
                <div className="w-1 h-1 rounded-full bg-[#8FA7BF]" />
                <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-slate-300">
                  {metric}
                </span>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {COMPLIANCE_DATA.map((card) => (
              <motion.article
                key={card.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: transitionSettings },
                }}
                className="group relative flex flex-col justify-between h-full p-8 md:p-10 lg:p-12 bg-white/[0.01] border border-white/[0.04] backdrop-blur-md transition-all duration-700 hover:bg-white/[0.02] hover:border-[#8FA7BF]/30"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#8FA7BF]/0 via-[#8FA7BF]/40 to-[#8FA7BF]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out origin-left" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="block text-[10px] font-mono tracking-widest text-[#8FA7BF]">
                      {card.id}
                    </span>
                    <div className="w-4 h-4 border border-white/10 flex items-center justify-center transition-colors duration-500 group-hover:border-[#8FA7BF]/40">
                      <div className="w-1 h-1 bg-white/20 transition-colors duration-500 group-hover:bg-[#8FA7BF]" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium text-[#F8FAFC] leading-snug mb-6">
                    {card.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-slate-400 font-light leading-[1.8] mb-10">
                    {card.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-4 mt-auto pt-8 border-t border-white/[0.04]">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[#8FA7BF] text-[10px] mt-1.5 opacity-60">
                        0{idx + 1}
                      </span>
                      <span className="text-[13px] md:text-[14px] font-light text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/10 m-6 transition-colors duration-500 group-hover:border-[#8FA7BF]/40"
                  aria-hidden="true"
                />
              </motion.article>
            ))}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: transitionSettings },
            }}
            className="flex justify-start"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-white/10 text-sm tracking-widest text-[#F8FAFC] uppercase font-medium transition-all duration-500 hover:border-[#8FA7BF]/50 hover:bg-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FA7BF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm"
            >
              Speak With Our Team
              <span className="block transition-transform duration-300 group-hover:translate-x-1 text-[#8FA7BF]">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}