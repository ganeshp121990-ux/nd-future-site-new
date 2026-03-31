"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12 bg-creme"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1E3A5F 1px, transparent 1px), linear-gradient(to bottom, #1E3A5F 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 pt-32 pb-24 md:pt-56 md:pb-40 text-center px-6 max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 text-deepBlue/50 font-medium text-xs md:text-sm max-w-xl mx-auto leading-relaxed uppercase tracking-[0.2em]"
        >
          Smart Accounting for Scaling Business
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="mt-8 text-4xl md:text-6xl lg:text-[80px] font-medium leading-[1.05] tracking-tight text-deepBlue font-heading"
        >
          Designing Financial
          <br />
          Clarity for What’s Next
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="mt-10 text-deepBlue/60 text-lg md:text-xl font-light max-w-xl mx-auto font-body leading-relaxed tracking-wide"
        >
          A future-focused UK accounting firm helping businesses move
          with precision, confidence, and control.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button 
            onClick={() => {
              const target = document.getElementById("contact");
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-deepBlue text-white text-sm font-medium hover:opacity-90 transition-all duration-300 min-h-[56px] w-full sm:w-auto tracking-wide"
          >
            Book Consultation
          </button>

          <button 
            onClick={() => {
              const target = document.getElementById("services");
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full text-deepBlue text-sm font-medium hover:bg-deepBlue/5 transition-all duration-300 min-h-[56px] w-full sm:w-auto tracking-wide"
          >
            View Services
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="mt-16 text-[10px] tracking-[0.25em] text-deepBlue/40 uppercase font-medium"
        >
          Trusted by UK Businesses • Tax • Compliance • Advisory
        </motion.p>
      </div>
    </section>
  );
}
