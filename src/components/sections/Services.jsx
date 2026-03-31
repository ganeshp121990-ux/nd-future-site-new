"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "UK Company Accounting",
    desc: "End-to-end statutory accounts, filings, and financial reporting for UK companies operating locally or internationally.",
  },
  {
    title: "Corporation Tax Strategy",
    desc: "Proactive tax planning, compliance, and optimisation designed to protect cashflow and reduce long-term liability.",
  },
  {
    title: "International Structuring",
    desc: "Advisory for founders and global firms expanding into the UK market with clarity on cross-border tax exposure.",
  },
  {
    title: "VAT & Compliance",
    desc: "VAT registrations, filings, investigations, and ongoing compliance across domestic and international transactions.",
  },
  {
    title: "R&D & Innovation Relief",
    desc: "Maximise UK innovation incentives including R&D credits and advanced relief structures for modern companies.",
  },
  {
    title: "CFO & Advisory",
    desc: "Ongoing strategic support, forecasting, and decision-level financial guidance for scaling businesses.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-creme text-deepBlue py-20 md:py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-deepBlue/50 font-medium text-xs tracking-[0.25em] uppercase mb-8"
          >
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight font-heading"
          >
            Built for modern UK businesses
            <br />
            operating with global ambition.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 text-deepBlue/60 font-light text-xl tracking-wide max-w-2xl mx-auto"
          >
            We combine compliance, advisory, and forward planning to give
            companies clarity, control, and confidence as they scale.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => {
                const target = document.getElementById("contact");
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative pt-10 hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
            >
              <div className="absolute top-0 left-0 h-[1px] w-12 bg-deepBlue/20 group-hover:w-full group-hover:bg-deepBlue transition-all duration-700" />

              <h3 className="text-2xl font-medium mb-5 font-heading text-deepBlue tracking-tight">
                {s.title}
              </h3>

              <p className="text-deepBlue/60 text-base leading-relaxed font-light tracking-wide">
                {s.desc}
              </p>

              <div className="mt-8 inline-block text-[11px] tracking-[0.2em] font-medium uppercase text-deepBlue/40 group-hover:text-deepBlue transition-colors duration-300">
                Explore Advisory →
              </div>
            </motion.div>
          ))}
        </div>

        {/* LOWER STRIP */}
        <div className="mt-24 md:mt-40 pt-16 md:pt-20 border-t border-deepBlue/5 grid md:grid-cols-3 gap-12 md:gap-16 text-left md:text-center">

          <div>
            <p className="text-sm tracking-[0.2em] font-medium text-deepBlue/40 uppercase mb-4">Focus</p>
            <p className="text-2xl font-light text-deepBlue tracking-tight">Chartered UK expertise</p>
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] font-medium text-deepBlue/40 uppercase mb-4">Reach</p>
            <p className="text-2xl font-light text-deepBlue tracking-tight">International support</p>
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] font-medium text-deepBlue/40 uppercase mb-4">Standard</p>
            <p className="text-2xl font-light text-deepBlue tracking-tight">Confidential handling</p>
          </div>

        </div>

      </div>
    </section>
  );
}
