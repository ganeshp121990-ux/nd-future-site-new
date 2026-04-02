"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [showExtendedDates, setShowExtendedDates] = useState(false);
  const [booking, setBooking] = useState({
    service: "",
    date: null,
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const [loading, setLoading] = useState(false);

  const services = [
    "Tax Planning & Strategy",
    "Corporate Audit & Assurance",
    "Virtual CFO Services",
    "Wealth & Asset Management"
  ];

  const timings = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM", "07:00 PM", "08:30 PM"];

  const availableDays = useMemo(() => {
    let days = [];
    let d = new Date();
    const limit = showExtendedDates ? 21 : 7;
    while (days.length < limit) {
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        days.push(new Date(d));
      }
      d.setDate(d.getDate() + 1);
    }
    return days;
  }, [showExtendedDates]);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setStep(4);
    } catch (err) {
      alert("Error confirming booking");
    }
    setLoading(false);
  };

  // Cursor Reactive Lighting for Form Card
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Cinematic Step Transitions
  const stepVariants = {
    initial: { opacity: 0, scale: 0.98, y: 15, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.02, filter: "blur(4px)", position: "absolute", top: 0, left: 0, width: "100%" }
  };

  return (
    <section id="contact" className="relative w-full bg-[#FDFCFB] text-[#0A1A2F] py-24 md:py-32 lg:py-48 px-5 lg:px-12 overflow-hidden">
      
      {/* ── Ambient Background Texture & Glows ── */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0A1A2F 1px, transparent 1px), linear-gradient(to right, #0A1A2F 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,169,106,0.04)_0%,_transparent_60%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(47,91,140,0.03)_0%,_transparent_60%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[86rem] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

        {/* ── LEFT COLUMN: Text & Trust Signals ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Connect With Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-light font-heading leading-[1.05] tracking-tight mb-8"
          >
            Elevate Your <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Business.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#0A1A2F]/60 text-lg md:text-xl font-light tracking-wide leading-[1.8] max-w-lg mb-16"
          >
            Schedule a confidential consultation with our principal partners. Experience tailored financial expertise that drives definitive growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-8 max-w-md mb-12"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[9px] tracking-[0.25em] font-bold uppercase text-[#C8A96A]">Global Headquarters</span>
              <p className="text-[0.95rem] font-medium text-[#0A1A2F]">Ahmedabad, India</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[9px] tracking-[0.25em] font-bold uppercase text-[#C8A96A]">Direct Contact</span>
              <p className="text-[0.95rem] font-medium text-[#0A1A2F]">partners@scaleup.com</p>
            </div>
          </motion.div>

          {/* Premium Trust Signals */}
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-4 text-[11px] font-bold tracking-[0.15em] uppercase text-[#0A1A2F]/40 flex-wrap mt-8 pt-8 border-t border-[#0A1A2F]/[0.05]"
          >
            <li className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#5B8C5A]/10 text-[#5B8C5A] flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              Confidential
            </li>
            <li className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#0A1A2F]/10 mx-1" />
            <li className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#5B8C5A]/10 text-[#5B8C5A] flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              Partner-led
            </li>
            <li className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#0A1A2F]/10 mx-1" />
            <li className="flex items-center gap-2">
               Response within 24h
            </li>
          </motion.ul>
        </div>

        {/* ── RIGHT COLUMN: Interactive Form Card ── */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-40px" }}
           transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div 
            onMouseMove={handleMouseMove}
            className="group relative bg-white/70 backdrop-blur-2xl border border-[#0A1A2F]/[0.05] rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(10,26,47,0.06)] overflow-hidden"
          >
            {/* Cinematic Spotlight Glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-multiply"
              style={{
                background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(200,169,106,0.05), transparent 80%)`
              }}
            />

            {/* ── Animated Progress Bar ── */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#0A1A2F]/[0.03] z-20">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#C8A96A] via-[#B5952F] to-[#C8A96A]"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-14 min-h-[500px] flex flex-col">
              
              {/* Card Header & Step Indicators */}
              <div className="flex items-end justify-between mb-10 pb-6 border-b border-[#0A1A2F]/[0.06]">
                <div>
                  {/* Step Metric */}
                  <div className="flex items-center gap-2 mb-4">
                    {[1,2,3,4].map(num => (
                      <div 
                        key={num} 
                        className={`text-[9px] font-bold tracking-[0.2em] transition-colors duration-500 ${num === step ? 'text-[#C8A96A]' : num < step ? 'text-[#0A1A2F]/40' : 'text-[#0A1A2F]/20'}`}
                      >
                        0{num} {num < 4 && <span className="ml-2 font-normal opacity-40">/</span>}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-[1.75rem] font-medium font-heading text-[#0A1A2F] tracking-tight mb-2">
                    {step === 4 ? "Consultation Confirmed" : "Secure Your Session"}
                  </h3>
                  <p className="text-[0.95rem] text-[#0A1A2F]/50 font-light">
                    {step === 1 && "Select an area of expertise"}
                    {step === 2 && "Choose your preferred date and time"}
                    {step === 3 && "Provide your professional details"}
                    {step === 4 && "We will outline the next steps via email."}
                  </p>
                </div>
                
                {step > 1 && step < 4 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="group/btn flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#0A1A2F]/40 hover:text-[#C8A96A] transition-colors pb-1 outline-none"
                  >
                    <span className="transform group-hover/btn:-translate-x-1 transition-transform">←</span>
                    Back
                  </button>
                )}
              </div>

              {/* ── Form Body with AnimatePresence ── */}
              <div className="relative flex-grow">
                <AnimatePresence mode="popLayout" custom={step}>
                   
                   {/* STEP 1: SERVICES */}
                   {step === 1 && (
                     <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="space-y-3">
                        {services.map(s => (
                          <button
                            key={s}
                            onClick={() => { setBooking({ ...booking, service: s }); setStep(2); }}
                            className="w-full text-left p-5 md:p-6 rounded-[1rem] border border-[#0A1A2F]/10 hover:border-[#C8A96A]/50 hover:bg-white hover:shadow-[0_15px_30px_-10px_rgba(10,26,47,0.05)] transition-all duration-300 flex justify-between items-center group bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
                          >
                            <span className="font-medium text-[1rem] text-[#0A1A2F] group-hover:text-[#C8A96A] transition-colors">{s}</span>
                            <span className="text-[#C8A96A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </span>
                          </button>
                        ))}
                     </motion.div>
                   )}

                   {/* STEP 2: DATE & TIME */}
                   {step === 2 && (
                     <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                        <div className="grid grid-cols-3 gap-3 mb-8">
                          {availableDays.map(d => {
                            const isSelected = booking.date && booking.date.getTime() === d.getTime();
                            return (
                              <button
                                key={d.toISOString()}
                                onClick={() => setBooking({ ...booking, date: d })}
                                className={`p-4 rounded-[1rem] border text-center transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F]/40 ${
                                  isSelected
                                    ? 'border-[#C8A96A] bg-[#C8A96A]/[0.05] shadow-[0_4px_15px_-5px_rgba(200,169,106,0.3)]'
                                    : 'border-[#0A1A2F]/10 bg-white/40 hover:border-[#0A1A2F]/30 hover:bg-white hover:shadow-sm'
                                }`}
                              >
                                <div className={`text-[9px] font-bold uppercase tracking-widest mb-1.5 ${isSelected ? 'text-[#C8A96A]' : 'text-[#0A1A2F]/40'}`}>
                                  {d.toLocaleDateString('en-US', { weekday: 'short' })}
                                </div>
                                <div className={`text-[1.75rem] md:text-3xl leading-none mb-1 font-light font-heading ${isSelected ? 'text-[#C8A96A]' : 'text-[#0A1A2F]'}`}>
                                  {d.getDate()}
                                </div>
                                <div className={`text-[11px] font-medium tracking-wide ${isSelected ? 'text-[#C8A96A]/80' : 'text-[#0A1A2F]/50'}`}>
                                  {d.toLocaleDateString('en-US', { month: 'short' })}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                        
                        <div className="flex justify-center mb-8 -mt-2">
                           <button
                             onClick={() => setShowExtendedDates(!showExtendedDates)}
                             className="text-[10px] font-bold uppercase tracking-widest text-[#0A1A2F]/30 hover:text-[#C8A96A] transition-colors flex items-center gap-1.5 group outline-none"
                           >
                             {showExtendedDates ? "Show Fewer Dates" : "Show More Dates"}
                             <span className={`transform transition-transform ${showExtendedDates ? 'group-hover:-translate-y-0.5' : 'group-hover:translate-y-0.5'}`}>
                               {showExtendedDates ? "↑" : "↓"}
                             </span>
                           </button>
                        </div>

                        <AnimatePresence>
                          {booking.date && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }} 
                              animate={{ opacity: 1, height: 'auto' }} 
                              exit={{ opacity: 0, height: 0 }}
                              className="pt-6 border-t border-[#0A1A2F]/[0.06] overflow-hidden"
                            >
                              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0A1A2F]/40 mb-4">Available Times</p>
                              <div className="grid grid-cols-2 gap-3">
                                {timings.map(t => (
                                  <button
                                    key={t}
                                    onClick={() => { setBooking({ ...booking, time: t }); setStep(3); }}
                                    className="py-3.5 px-4 text-[0.95rem] rounded-[1rem] border border-[#0A1A2F]/10 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-white hover:shadow-md transition-all duration-300 text-[#0A1A2F] font-medium tracking-wide flex justify-center items-center group bg-white/50 focus:outline-none"
                                  >
                                    {t}
                                    <span className="ml-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-white">→</span>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                     </motion.div>
                   )}

                   {/* STEP 3: DETAILS */}
                   {step === 3 && (
                     <motion.form 
                       key="step3" 
                       variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                       onSubmit={handleSubmit} 
                       className="space-y-6"
                     >
                        {/* Summary Pill Container */}
                        <div className="bg-[#0A1A2F]/[0.02] border border-[#0A1A2F]/5 p-5 rounded-[1.25rem] mb-8 flex flex-col gap-2 relative overflow-hidden ring-1 ring-inset ring-white/50 shadow-inner">
                          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C8A96A] to-[#B5952F]" />
                          <div className="flex items-center gap-3 text-[0.95rem] text-[#0A1A2F] font-medium pl-2">
                            {booking.service}
                          </div>
                          <div className="flex items-center gap-5 text-sm text-[#0A1A2F]/60 pl-2 font-light">
                            <span className="flex items-center gap-1.5">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                              {booking.date?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                              {booking.time}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-5">
                          {["name", "email", "phone"].map(field => (
                            <div key={field} className="relative group/input">
                              <input
                                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                name={field}
                                placeholder={field === "name" ? "Full Name" : field === "email" ? "Corporate Email" : "Phone Number"}
                                value={booking[field]}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-0 border-b border-[#0A1A2F]/10 pb-3 pt-2 focus:outline-none focus:border-[#C8A96A] focus:ring-0 text-[#0A1A2F] placeholder:text-[#0A1A2F]/30 transition-colors font-light tracking-wide rounded-none px-1"
                              />
                            </div>
                          ))}
                          
                          <div className="relative group/input">
                            <textarea
                              name="notes"
                              placeholder="Brief context about your requirements (Optional)"
                              rows="2"
                              value={booking.notes}
                              onChange={handleChange}
                              className="w-full bg-transparent border-0 border-b border-[#0A1A2F]/10 pb-3 pt-4 focus:outline-none focus:border-[#C8A96A] focus:ring-0 text-[#0A1A2F] placeholder:text-[#0A1A2F]/30 transition-colors font-light tracking-wide resize-none rounded-none px-1"
                            />
                          </div>
                        </div>

                        <div className="pt-8">
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#0A1A2F] hover:bg-[#1E3A5F] text-white font-bold tracking-[0.2em] uppercase text-[11px] py-4 rounded-[1rem] transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(10,26,47,0.25)] hover:shadow-[0_20px_40px_-10px_rgba(10,26,47,0.35)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center min-h-[56px] focus:outline-none focus:ring-2 focus:ring-[#C8A96A] focus:ring-offset-2"
                          >
                            {loading ? (
                              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : "Confirm Schedule"}
                          </button>
                        </div>
                     </motion.form>
                   )}

                   {/* STEP 4: SUCCESS */}
                   {step === 4 && (
                     <motion.div 
                       key="step4" 
                       initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                       animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                       className="flex flex-col items-center justify-center py-12 text-center h-full"
                     >
                        <div className="w-24 h-24 bg-[#5B8C5A]/10 text-[#5B8C5A] rounded-full flex items-center justify-center mb-8 relative">
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 1 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                            className="absolute inset-0 bg-[#5B8C5A]/20 rounded-full" 
                          />
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <h4 className="text-3xl font-medium font-heading text-[#0A1A2F] mb-4 tracking-tight">Request Received</h4>
                        <p className="text-[#0A1A2F]/60 text-[1.05rem] font-light max-w-[320px] leading-relaxed mb-10">
                          A secure calendar invitation has been sent to your inbox. We look forward to speaking with you.
                        </p>
                        <button
                          onClick={() => {
                            setStep(1);
                            setBooking({ service: "", date: null, time: "", name: "", email: "", phone: "", notes: "" });
                          }}
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A96A] hover:text-[#0A1A2F] transition-colors pb-1 border-b border-[#C8A96A]/30 hover:border-[#0A1A2F]"
                        >
                          Book Another Session
                        </button>
                     </motion.div>
                   )}

                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
