"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    "Bookkeeping Services",
    "VAT Returns & Compliance",
    "Payroll & RTI",
    "Management Accounts",
    "Business Advisory",
    "Recruitment Process Outsourcing (RPO)"
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

  // Structured Corporate Transitions
  const stepVariants = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10, position: "absolute", top: 0, left: 0, width: "100%" }
  };

  return (
    <section id="contact" className="relative w-full bg-[#F7F8FA] text-[#0A1A2F] py-20 md:py-28 px-5 lg:px-12 overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      {/* ── Subtle Corporate Background Pattern ── */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0A1A2F 1px, transparent 1px), linear-gradient(to right, #0A1A2F 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[80rem] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

        {/* ── LEFT COLUMN: Text & Trust Signals ── */}
        <div className="pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-[#C8A96A]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0A1A2F]/70">
              Connect With Us
            </span>

          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-normal leading-[1.15] text-[#0A1A2F] mb-6"
          >
            Professional support for <br />
            <span className="font-semibold">
              UK businesses.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed max-w-lg mb-12"
          >
            Contact our team for bookkeeping, VAT, payroll, business advisory, and compliance support tailored to UK businesses and regulated operational requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-xs tracking-wider font-semibold uppercase text-slate-500">Registered Office</span>
              <p className="text-sm font-medium text-[#0A1A2F] leading-relaxed">
                Registered Office Address<br />
                London, United Kingdom
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs tracking-wider font-semibold uppercase text-slate-500">Direct Contact</span>
              <p className="text-sm font-medium text-[#0A1A2F]">
                +44 20 7946 0958
              </p>
              <p className="text-sm font-medium text-[#0A1A2F]">
                info@yourfirmname.co.uk
              </p>
            </div>
          </motion.div>

          {/* Regulated Trust Signals */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6 text-xs font-semibold tracking-wide uppercase text-slate-600 flex-wrap pt-6 border-t border-slate-200"
          >
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 text-[#0A1A2F]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              UK GDPR Aligned
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 text-[#0A1A2F]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              AAT Regulated
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 text-[#0A1A2F]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              HMRC Compliant
            </li>
          </motion.ul>
        </div>

        {/* ── RIGHT COLUMN: Structured Form Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden relative">
            {/* ── Solid Progress Bar ── */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-slate-100 z-20">
              <motion.div
                className="h-full bg-[#0A1A2F]"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-10 min-h-[500px] flex flex-col">

              {/* Card Header & Step Indicators */}
              <div className="flex items-end justify-between mb-8 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {[1, 2, 3, 4].map(num => (
                      <div
                        key={num}
                        className={`text-xs font-semibold transition-colors duration-300 ${num === step ? 'text-[#0A1A2F]' : num < step ? 'text-slate-400' : 'text-slate-300'}`}
                      >
                        Step 0{num}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold text-[#0A1A2F] mb-1">
                    {step === 4 ? "Enquiry Submitted" : "Submit Your Enquiry"}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {step === 1 && "Select an area of expertise"}
                    {step === 2 && "Choose your preferred date and time"}
                    {step === 3 && "Provide your professional details"}
                    {step === 4 && "We will outline the next steps via email."}
                  </p>
                </div>

                {step > 1 && step < 4 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-[#0A1A2F] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#0A1A2F] focus-visible:ring-offset-2 rounded-sm"
                  >
                    <span>←</span> Back
                  </button>
                )}
              </div>

              {/* ── Form Body ── */}
              <div className="relative flex-grow">
                <AnimatePresence mode="popLayout" custom={step}>

                  {/* STEP 1: SERVICES */}
                  {step === 1 && (
                    <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="space-y-3">
                      {services.map(s => (
                        <button
                          key={s}
                          onClick={() => { setBooking({ ...booking, service: s }); setStep(2); }}
                          className="w-full text-left px-5 py-4 rounded-md border border-slate-200 hover:border-[#0A1A2F] transition-all duration-200 flex justify-between items-center group bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1A2F]"
                        >
                          <span className="font-medium text-sm text-[#0A1A2F]">{s}</span>
                          <span className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* STEP 2: DATE & TIME */}
                  {step === 2 && (
                    <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-6">
                        {availableDays.map(d => {
                          const isSelected = booking.date && booking.date.getTime() === d.getTime();
                          return (
                            <button
                              key={d.toISOString()}
                              onClick={() => setBooking({ ...booking, date: d })}
                              className={`p-3 rounded-md border text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0A1A2F] ${isSelected
                                ? 'border-[#0A1A2F] bg-[#0A1A2F] text-white shadow-md'
                                : 'border-slate-200 bg-white hover:border-slate-300 text-[#0A1A2F]'
                                }`}
                            >
                              <div className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                                {d.toLocaleDateString('en-US', { weekday: 'short' })}
                              </div>
                              <div className="text-2xl leading-none mb-1 font-semibold">
                                {d.getDate()}
                              </div>
                              <div className={`text-[11px] font-medium ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                                {d.toLocaleDateString('en-US', { month: 'short' })}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-center mb-6">
                        <button
                          onClick={() => setShowExtendedDates(!showExtendedDates)}
                          className="text-xs font-semibold text-[#0A1A2F] hover:text-[#C8A96A] transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1A2F] focus-visible:ring-offset-2 rounded-sm"
                        >
                          {showExtendedDates ? "Show Fewer Dates" : "Show More Dates"}
                        </button>
                      </div>

                      <AnimatePresence>
                        {booking.date && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-6 border-t border-slate-100 overflow-hidden"
                          >
                            <p className="text-xs font-semibold text-slate-500 mb-4">Available Times</p>
                            <div className="grid grid-cols-2 gap-3">
                              {timings.map(t => (
                                <button
                                  key={t}
                                  onClick={() => { setBooking({ ...booking, time: t }); setStep(3); }}
                                  className="py-3 px-4 text-sm rounded-md border border-slate-200 hover:border-[#0A1A2F] hover:bg-slate-50 transition-colors text-[#0A1A2F] font-medium flex justify-between items-center group bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1A2F]"
                                >
                                  {t}
                                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#0A1A2F]">→</span>
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
                      variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Summary Container */}
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-md mb-6">
                        <div className="text-sm text-[#0A1A2F] font-semibold mb-2">
                          {booking.service}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            {booking.date?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            {booking.time}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {["name", "email", "phone"].map(field => (
                          <div key={field}>
                            <input
                              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                              name={field}
                              placeholder={field === "name" ? "Full Name" : field === "email" ? "Corporate Email" : "Phone Number"}
                              value={booking[field]}
                              onChange={handleChange}
                              required
                              className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#0A1A2F] focus:ring-1 focus:ring-[#0A1A2F] text-sm text-[#0A1A2F] placeholder:text-slate-400 transition-colors"
                            />
                          </div>
                        ))}

                        <div>
                          <textarea
                            name="notes"
                            placeholder="Brief context about your requirements (Optional)"
                            rows="3"
                            value={booking.notes}
                            onChange={handleChange}
                            className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#0A1A2F] focus:ring-1 focus:ring-[#0A1A2F] text-sm text-[#0A1A2F] placeholder:text-slate-400 transition-colors resize-none"
                          />
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                          <input
                            type="checkbox"
                            id="privacy"
                            name="privacy"
                            required
                            className="mt-1 w-4 h-4 rounded border-slate-300 text-[#0A1A2F] focus:ring-[#0A1A2F] transition-colors cursor-pointer"
                          />
                          <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                            I consent to the processing of my information in accordance with the <a href="/privacy" className="text-[#0A1A2F] underline hover:text-[#C8A96A] transition-colors">Privacy Policy</a> and UK GDPR requirements.
                          </label>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-[#0A1A2F] hover:bg-[#162740] text-white font-semibold tracking-wide text-sm py-3.5 rounded-md transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center h-[50px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A1A2F]"
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
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center py-10 text-center h-full"
                    >
                      <div className="w-16 h-16 bg-[#0A1A2F] text-white rounded-full flex items-center justify-center mb-6">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <h4 className="text-2xl font-semibold text-[#0A1A2F] mb-3">Request Received</h4>
                      <p className="text-slate-600 text-sm max-w-[320px] leading-relaxed mb-8">
                        Your enquiry has been received successfully. A member of our team will contact you shortly regarding your request and next steps.
                      </p>
                      <button
                        onClick={() => {
                          setStep(1);
                          setBooking({ service: "", date: null, time: "", name: "", email: "", phone: "", notes: "" });
                        }}
                        className="text-sm font-semibold text-[#0A1A2F] hover:text-[#C8A96A] transition-colors underline underline-offset-4 decoration-2 decoration-slate-200 hover:decoration-[#C8A96A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1A2F] focus-visible:ring-offset-2 rounded-sm"
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