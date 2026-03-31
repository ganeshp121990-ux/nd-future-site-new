"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white text-deepBlue py-20 md:py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-deepBlue/50 font-medium text-xs tracking-[0.25em] uppercase mb-8"
          >
            About the Firm
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight font-heading"
          >
            Most firms record history.
            <br />
            We design financial
            <br />
            clarity for what comes next.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 space-y-6"
          >
            <p className="text-deepBlue/60 leading-relaxed font-light text-lg md:text-xl tracking-wide">
              ScaleUp Accounting Limited is a future-focused UK accounting
              practice supporting modern businesses with tax strategy,
              compliance, and financial precision. We work with founders,
              international companies, and growing enterprises who require
              more than traditional accounting.
            </p>

            <p className="text-deepBlue/60 leading-relaxed font-light text-lg md:text-xl tracking-wide">
              Our approach combines deep regulatory expertise with a modern
              advisory mindset. Every engagement is built around clarity,
              control, and long-term financial confidence.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid grid-cols-2 gap-6 md:gap-12">

          <div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-light text-deepBlue font-heading mb-4">10+</p>
            <p className="text-sm md:text-base text-deepBlue/50 tracking-wide font-light">
              Years combined experience in UK & global finance
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-light text-deepBlue font-heading mb-4">UK</p>
            <p className="text-sm md:text-base text-deepBlue/50 tracking-wide font-light">
              Registered & compliant across all structures
            </p>
          </div>

          <div className="mt-8">
            <p className="text-4xl md:text-5xl lg:text-6xl font-light text-deepBlue font-heading mb-4">Global</p>
            <p className="text-sm md:text-base text-deepBlue/50 tracking-wide font-light">
              International clients supported and advised
            </p>
          </div>

          <div className="mt-8">
            <p className="text-4xl md:text-5xl lg:text-6xl font-light text-deepBlue font-heading mb-4">100%</p>
            <p className="text-sm md:text-base text-deepBlue/50 tracking-wide font-light">
              Confidential advisory for scaling businesses
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
