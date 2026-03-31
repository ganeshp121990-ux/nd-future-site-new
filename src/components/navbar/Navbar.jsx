"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${scrolled
          ? "backdrop-blur-xl bg-creme/60 border-b border-deepBlue/5 py-4"
          : "bg-creme py-6 border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer max-w-fit flex items-center justify-center p-2 px-3 rounded-xl backdrop-blur-md bg-white/30 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/40 transition-all duration-300">
          <img src="/logo.png" alt="ScaleUp Logo" className="h-8 md:h-10 w-auto object-contain drop-shadow-sm opacity-90" />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-12 text-sm tracking-wide">
          {["Home", "About", "Services", "Process", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.toLowerCase());
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative text-deepBlue/60 hover:text-deepBlue transition duration-300 font-light"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const target = document.getElementById("contact");
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-deepBlue text-white px-6 py-3 rounded-full text-xs font-medium tracking-wide hover:bg-deepBlue/90 transition-all duration-300 hidden md:block"
        >
          Book Consultation
        </motion.button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-12 h-12 p-2 rounded-xl backdrop-blur-md bg-white/30 border border-white/40 z-[60] relative transition-transform"
        >
          <motion.div
            animate={mobileMenuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            className="w-5 h-[1.5px] bg-deepBlue"
          />
          <motion.div
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-[1.5px] bg-deepBlue"
          />
          <motion.div
            animate={mobileMenuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            className="w-5 h-[1.5px] bg-deepBlue"
          />
        </button>

      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed md:hidden inset-0 z-40 bg-creme/95 backdrop-blur-xl flex flex-col items-center justify-center pt-24 pb-10 px-6 h-[100dvh] overflow-y-auto"
        >
          <div className="flex flex-col items-center gap-8 text-2xl tracking-wide w-full">
            {["Home", "About", "Services", "Process", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const target = document.getElementById(item.toLowerCase());
                  if (target) {
                    setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 300);
                  }
                }}
                className="text-deepBlue font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-[#C5A059] group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
                <span className="absolute -bottom-2 right-1/2 w-0 h-[1.5px] bg-[#C5A059] group-hover:w-1/2 transition-all duration-300 transform translate-x-1/2"></span>
              </a>
            ))}
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const target = document.getElementById("contact");
                if (target) {
                  setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 300);
                }
              }}
              className="mt-8 bg-deepBlue text-white px-8 py-4 rounded-full text-base font-medium tracking-wide w-full max-w-[280px]"
            >
              Book Consultation
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
