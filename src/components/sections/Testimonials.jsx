"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Their clarity and precision around UK tax and compliance gave us confidence expanding into the UK market. Everything was structured and proactive.",
    name: "International Founder",
    role: "SaaS Company",
  },
  {
    quote:
      "A modern accounting partner who understands both compliance and growth. Communication is clear, direct, and strategic.",
    name: "Managing Director",
    role: "UK Business",
  },
  {
    quote:
      "We moved from reactive accounting to forward planning. The difference in control and reporting has been significant.",
    name: "Finance Lead",
    role: "Global Firm",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white text-deepBlue py-20 md:py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-deepBlue/50 font-medium text-xs tracking-[0.25em] uppercase mb-8"
          >
            Client Perspective
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight font-heading"
          >
            Trusted by founders,
            <br />
            directors, and global teams.
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-creme/50 rounded-2xl p-10 transition-colors hover:bg-creme flex flex-col justify-between"
            >
              <p className="text-deepBlue/70 font-light text-lg leading-relaxed italic tracking-wide">
                “{t.quote}”
              </p>

              <div className="mt-12 flex flex-col border-t border-deepBlue/5 pt-6">
                <p className="text-sm font-medium tracking-wide text-deepBlue">{t.name}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-deepBlue/40 mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST STRIP */}
        <div className="mt-24 md:mt-40 border-t border-deepBlue/5 pt-16 md:pt-20 text-center">
          <p className="text-deepBlue/50 text-base max-w-2xl mx-auto font-light tracking-wide">
            Confidentiality and discretion are central to every engagement.
            Client names and data are strictly protected.
          </p>
        </div>

      </div>
    </section>
  );
}
