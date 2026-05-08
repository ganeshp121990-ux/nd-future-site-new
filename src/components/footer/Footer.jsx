"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("advisory@scaleupaccounting.co.uk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#07111F] text-slate-300 pt-20 md:pt-32 pb-10 overflow-hidden font-sans border-t border-white/[0.04]">
      {/* ── BACKGROUND SYSTEM ── */}
      {/* Ultra-subtle architectural grid, no glowing lights */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.0]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8FA7BF 1px, transparent 1px),
            linear-gradient(to bottom, #8FA7BF 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 lg:mb-28">

          {/* ── COLUMN 1: FIRM IDENTITY ── */}
          <div className="lg:col-span-4 flex flex-col pr-0 lg:pr-12">
            <h2 className="text-[22px] font-medium text-[#F8FAFC] tracking-tight mb-6">
              ScaleUp Accounting
            </h2>

            <p className="text-[14px] text-slate-500 font-light leading-[1.8] mb-10 max-w-sm">
              A leading London-based firm of Chartered Accountants, providing strategic financial advisory, corporate structuring, and compliance services to growing enterprises.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-[0.1em] font-medium text-slate-500">
                  London Office
                </span>
                <span className="text-[14px] text-slate-300 font-light leading-relaxed">
                  120 Moorgate<br />
                  London, EC2M 6UR
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-[0.1em] font-medium text-slate-500">
                  Direct Inquiries
                </span>
                <span className="text-[14px] text-slate-300 font-light mb-1">
                  +44 (0) 20 7946 0958
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[14px] text-slate-300 font-light hover:text-white transition-colors duration-300 text-left w-fit relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm py-1"
                  aria-label="Copy email address"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-emerald-400 flex items-center gap-2"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Email copied
                      </motion.span>
                    ) : (
                      <motion.span
                        key="email"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        advisory@scaleupaccounting.co.uk
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors duration-300" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>

          {/* ── COLUMN 2: SERVICES ── */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-[14px]
tracking-[0.01em] font-medium text-[#F8FAFC] mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: "Corporate Tax & Structuring", id: "services" },
                { label: "Audit & Assurance", id: "services" },
                { label: "Outsourced Finance Function", id: "services" },
                { label: "Payroll & Compliance", id: "services" },
                { label: "Private Client Advisory", id: "services" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[14px] font-light text-slate-500 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 3: INTELLIGENCE ── */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-[15px] font-medium text-[#F8FAFC] mb-6">
              Intelligence
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: "Autumn Budget 2026 Briefing", path: "/insights/budget" },
                { label: "UK GDPR Regulatory Updates", path: "/insights/gdpr" },
                { label: "HMRC Compliance Guidelines", path: "/insights/hmrc" },
                { label: "Economic & Market Analysis", path: "/insights/analysis" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-[14px] font-light text-slate-500 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 4: CLIENT PORTAL & SOCIAL ── */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-[15px] font-medium text-[#F8FAFC] mb-6">
              Client Portal
            </h3>
            <a
              href="/login"
              className="inline-flex items-center justify-between gap-3 px-5 py-2.5 border border-white/10 bg-transparent hover:bg-white/[0.03] hover:border-white/30 text-[13px] font-medium text-[#F8FAFC] transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-md min-h-[44px]"
            >
              Secure Login
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-white transition-colors"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </a>

            <div className="mt-10">
              <h3 className="text-[15px] font-medium text-[#F8FAFC] mb-5">
                Connect
              </h3>
              <a
                href="https://linkedin.com/company/scaleupaccounting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] font-light text-slate-500 hover:text-white transition-colors duration-300 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm py-1"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* ── REGULATORY & LEGAL FOOTER ── */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-end justify-between gap-10">

          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-[12px] text-slate-500 font-light leading-[1.7]">
              ScaleUp Accounting Ltd is a limited company registered in England and Wales. Registered number: 11223344.
              Registered office: 120 Moorgate, London, EC2M 6UR. VAT Registration No. GB 123 4567 89. <br className="hidden md:block" />
              Licensed and regulated by the Association of Accounting Technicians (AAT) under licence number 98765. Details of our professional registration can be viewed at <a href="https://www.aat.org.uk/" target="_blank" rel="noopener noreferrer" className="underline decoration-slate-600 hover:text-slate-200 transition-colors">aat.org.uk</a>.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-light text-slate-500">
              <span>© {new Date().getFullYear()} ScaleUp Accounting Ltd.</span>
              <span className="hidden sm:inline text-slate-700">|</span>
              <a href="/legal/privacy-policy" className="hover:text-white transition-colors duration-300 py-1.5 md:py-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm">Privacy Policy</a>
              <a href="/legal/cookie-policy" className="hover:text-white transition-colors duration-300 py-1.5 md:py-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm">Cookie Policy</a>
              <a href="/legal/terms" className="hover:text-white transition-colors duration-300 py-1.5 md:py-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm">Terms of Business</a>
              <a href="/legal/modern-slavery" className="hover:text-white transition-colors duration-300 py-1.5 md:py-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm">Modern Slavery Statement</a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[12px] font-light text-slate-500 hover:text-white transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] rounded-sm py-1 pb-1 border-b border-transparent hover:border-white/30 flex-shrink-0"
            aria-label="Back to top"
          >
            Back to Top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:-translate-y-1"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
          </button>

        </div>
      </div>
    </footer>
  );
}