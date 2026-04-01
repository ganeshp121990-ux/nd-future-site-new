"use client";

import { useState, useMemo } from "react";

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

  return (
    <section id="contact" className="w-full bg-creme py-20 md:py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 tracking-tight font-heading text-deepBlue">
            Elevate Your Business.
          </h2>
          <p className="text-deepBlue/60 mb-12 text-xl font-light tracking-wide max-w-md leading-relaxed">
            Schedule a confidential consultation with our principal partners. Experience tailored financial expertise that drives growth.
          </p>

          <div className="space-y-8 text-deepBlue/80 font-light tracking-wide">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-[#C5A059]">Global Headquarters</span>
              <p className="text-lg text-deepBlue">Ahmedabad, India</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-[#C5A059]">Direct Contact</span>
              <p className="text-lg text-deepBlue">partners@scaleupaccounting.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-deepBlue/5 relative overflow-hidden">

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-deepBlue/5">
            <div
              className="h-full bg-[#C5A059] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {/* Header */}
          <div className="mb-10 flex items-start justify-between min-h-[60px]">
            <div>
              <h3 className="text-2xl font-medium text-deepBlue tracking-tight">
                {step === 4 ? "Consultation Confirmed" : "Book a Consultation"}
              </h3>
              <p className="text-sm text-deepBlue/60 mt-2 font-light">
                {step === 1 && "Select an area of expertise"}
                {step === 2 && "Choose your preferred date and time"}
                {step === 3 && "Provide your professional details"}
                {step === 4 && "We will be fully prepared for your session."}
              </p>
            </div>
            {step > 1 && step < 4 && (
              <button
                onClick={() => setStep(step - 1)}
                className="text-[11px] uppercase tracking-widest text-deepBlue/40 hover:text-[#C5A059] transition-colors font-medium mt-1 flex items-center gap-1 group"
              >
                <span className="transform -translate-x-1 group-hover:-translate-x-2 transition-transform">←</span>
                Back
              </button>
            )}
          </div>

          <div className="relative">
            {/* Step 1: Services */}
            {step === 1 && (
              <div className="space-y-3">
                {services.map(s => (
                  <button
                    key={s}
                    onClick={() => { setBooking({ ...booking, service: s }); setStep(2); }}
                    className="w-full text-left p-5 rounded-2xl border border-deepBlue/10 hover:border-[#C5A059] hover:shadow-[0_8px_30px_-12px_rgba(197,160,89,0.25)] transition-all duration-300 flex justify-between items-center group bg-white"
                  >
                    <span className="font-medium text-deepBlue group-hover:text-[#C5A059] transition-colors">{s}</span>
                    <span className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
                  {availableDays.map(d => {
                    const isSelected = booking.date && booking.date.getTime() === d.getTime();
                    return (
                      <button
                        key={d.toISOString()}
                        onClick={() => setBooking({ ...booking, date: d })}
                        className={`p-3 sm:p-4 rounded-2xl border text-center transition-all duration-300 ${isSelected
                            ? 'border-[#C5A059] bg-[#C5A059]/5 shadow-inner'
                            : 'border-deepBlue/10 hover:border-deepBlue/30 hover:bg-deepBlue/[0.02]'
                          }`}
                      >
                        <div className={`text-[10px] uppercase tracking-widest mb-1 ${isSelected ? 'text-[#C5A059]' : 'text-deepBlue/50'}`}>
                          {d.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className={`text-2xl font-light ${isSelected ? 'text-[#C5A059]' : 'text-deepBlue'}`}>
                          {d.getDate()}
                        </div>
                        <div className={`text-xs mt-1 ${isSelected ? 'text-[#C5A059]/80' : 'text-deepBlue/50'}`}>
                          {d.toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {!showExtendedDates ? (
                  <div className="flex justify-center mb-8 -mt-2">
                    <button
                      onClick={() => setShowExtendedDates(true)}
                      className="text-[11px] uppercase tracking-widest text-deepBlue/40 hover:text-[#C5A059] transition-colors font-medium flex items-center gap-1 group"
                    >
                      Show More Dates
                      <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center mb-8 -mt-2">
                    <button
                      onClick={() => setShowExtendedDates(false)}
                      className="text-[11px] uppercase tracking-widest text-deepBlue/40 hover:text-[#C5A059] transition-colors font-medium flex items-center gap-1 group"
                    >
                      Show Fewer Dates
                      <span className="transform group-hover:-translate-y-0.5 transition-transform">↑</span>
                    </button>
                  </div>
                )}

                {booking.date && (
                  <div className="pt-6 border-t border-deepBlue/5">
                    <p className="text-xs uppercase tracking-widest text-deepBlue/50 mb-4 font-medium">Available Times</p>
                    <div className="grid grid-cols-2 gap-3">
                      {timings.map(t => (
                        <button
                          key={t}
                          onClick={() => { setBooking({ ...booking, time: t }); setStep(3); }}
                          className="py-3 px-4 text-sm rounded-xl border border-deepBlue/10 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-deepBlue font-medium tracking-wide flex justify-center items-center group"
                        >
                          {t}
                          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-white">→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Details form */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Summary Card */}
                <div className="bg-deepBlue/[0.02] border border-deepBlue/10 p-5 rounded-2xl mb-8 flex flex-col gap-3 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]" />
                  <div className="flex items-center gap-3 text-sm text-deepBlue font-medium pl-1">
                    {booking.service}
                  </div>
                  <div className="flex items-center gap-5 text-xs text-deepBlue/70 pl-1 font-light tracking-wide">
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                      {booking.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      {booking.time}
                    </span>
                  </div>
                </div>

                <div className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={booking.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-deepBlue/10 pb-4 focus:outline-none focus:border-[#C5A059] focus:ring-0 text-deepBlue placeholder:text-deepBlue/30 transition-colors font-light tracking-wide rounded-none px-1"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Corporate Email"
                    value={booking.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-deepBlue/10 pb-4 focus:outline-none focus:border-[#C5A059] focus:ring-0 text-deepBlue placeholder:text-deepBlue/30 transition-colors font-light tracking-wide rounded-none px-1"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={booking.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-deepBlue/10 pb-4 focus:outline-none focus:border-[#C5A059] focus:ring-0 text-deepBlue placeholder:text-deepBlue/30 transition-colors font-light tracking-wide rounded-none px-1"
                  />

                  <textarea
                    name="notes"
                    placeholder="Brief context about your requirements (Optional)"
                    rows="2"
                    value={booking.notes}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-deepBlue/10 pb-4 pt-2 focus:outline-none focus:border-[#C5A059] focus:ring-0 text-deepBlue placeholder:text-deepBlue/30 transition-colors font-light tracking-wide resize-none rounded-none px-1 mt-2"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C5A059] hover:bg-[#B5952F] text-white font-medium tracking-widest uppercase text-[13px] py-4 rounded-xl transition-all duration-300 shadow-[0_10px_25px_-8px_rgba(197,160,89,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(197,160,89,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center min-h-[56px]"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : "Confirm Schedule"}
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-20 h-20 bg-[#C5A059]/10 text-[#C5A059] rounded-[1.5rem] flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 bg-[#C5A059]/10 rounded-[1.5rem] animate-ping opacity-20" />
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 className="text-2xl font-medium text-deepBlue mb-3 tracking-tight">Request Received</h4>
                <p className="text-deepBlue/60 text-[15px] font-light max-w-[280px] leading-relaxed">
                  A calendar invitation has been sent to your email. We look forward to speaking with you.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setBooking({ service: "", date: null, time: "", name: "", email: "", phone: "", notes: "" });
                  }}
                  className="mt-10 text-[11px] font-medium uppercase tracking-widest text-[#C5A059] hover:text-[#B5952F] transition-colors pb-1 border-b border-[#C5A059]/30 hover:border-[#C5A059]"
                >
                  Book Another Session
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

