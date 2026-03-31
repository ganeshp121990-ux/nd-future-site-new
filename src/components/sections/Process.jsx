"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Assessment",
    desc: "We begin with a detailed review of your business structure, goals, and current financial position to identify opportunities and risks.",
  },
  {
    title: "Strategy & Planning",
    desc: "A tailored accounting and tax strategy is developed based on UK regulations and your long-term growth direction.",
  },
  {
    title: "Implementation",
    desc: "We handle registrations, filings, structuring, and compliance with precision while keeping communication transparent.",
  },
  {
    title: "Ongoing Advisory",
    desc: "Continuous monitoring, reporting, and advisory support ensure you stay compliant and financially confident as you grow.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white text-deepBlue py-20 md:py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-deepBlue/50 font-medium text-xs tracking-[0.25em] uppercase mb-8"
          >
            Our Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight font-heading"
          >
            Structured. Transparent.
            <br />
            Built for long-term clarity.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 text-deepBlue/60 text-xl font-light tracking-wide max-w-2xl mx-auto"
          >
            We follow a clean, structured approach so international and UK
            clients always know where they stand and what comes next.
          </motion.p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-deepBlue/10 pl-12 md:pl-20 space-y-20 md:space-y-32 ml-2 md:ml-12">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative max-w-2xl"
            >
              {/* DOT */}
              <div className="absolute -left-[54px] md:-left-[86px] top-2 w-3 h-3 rounded-full bg-deepBlue" />

              <p className="text-sm font-medium tracking-[0.2em] text-deepBlue/40 uppercase mb-4">
                Phase 0{i + 1}
              </p>
              
              <h3 className="text-3xl font-medium mb-4 font-heading text-deepBlue tracking-tight">
                {step.title}
              </h3>

              <p className="text-deepBlue/60 text-lg leading-relaxed font-light tracking-wide">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-24 md:mt-40 grid md:grid-cols-3 gap-12 md:gap-16 text-left border-t border-deepBlue/5 pt-16 md:pt-20">

          <div>
            <p className="text-3xl font-light text-deepBlue tracking-tight">01</p>
            <p className="text-deepBlue/50 text-base mt-4 font-light tracking-wide">
              Clear onboarding process
            </p>
          </div>

          <div>
            <p className="text-3xl font-light text-deepBlue tracking-tight">02</p>
            <p className="text-deepBlue/50 text-base mt-4 font-light tracking-wide">
              Direct partner communication
            </p>
          </div>

          <div>
            <p className="text-3xl font-light text-deepBlue tracking-tight">03</p>
            <p className="text-deepBlue/50 text-base mt-4 font-light tracking-wide">
              Ongoing financial clarity
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
