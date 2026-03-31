export default function Global() {
  return (
    <section className="py-24 md:py-40 lg:py-64 bg-deepBlue text-creme relative overflow-hidden">
      
      {/* subtle glow */}
      <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 bg-white/5 blur-[200px] rounded-full point-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">

        {/* small label */}
        <p className="text-white/40 font-medium text-xs tracking-[0.25em] uppercase mb-10">
          Global Desk
        </p>

        {/* main heading */}
        <h2 className="text-4xl md:text-6xl lg:text-[80px] font-medium leading-[1.05] tracking-tight mb-8 md:mb-12 font-heading">
          Supporting Global Businesses  
          <br />
          Expanding Into the UK
        </h2>

        {/* description */}
        <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide leading-relaxed mb-20 md:mb-32">
          We advise international founders, investors, and enterprises
          entering the United Kingdom — providing structure, compliance,
          and long-term financial clarity.
        </p>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-12">

          <div className="p-10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.05] transition-colors">
            <p className="text-[11px] text-white/40 font-medium mb-4 uppercase tracking-[0.2em]">Market Entry</p>
            <h3 className="text-2xl font-light text-white tracking-tight">
              UK Company Setup & Structure
            </h3>
          </div>

          <div className="p-10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.05] transition-colors">
            <p className="text-[11px] text-white/40 font-medium mb-4 uppercase tracking-[0.2em]">Tax Strategy</p>
            <h3 className="text-2xl font-light text-white tracking-tight">
              Cross-Border Tax Planning
            </h3>
          </div>

          <div className="p-10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.05] transition-colors">
            <p className="text-[11px] text-white/40 font-medium mb-4 uppercase tracking-[0.2em]">Compliance</p>
            <h3 className="text-2xl font-light text-white tracking-tight">
              Ongoing UK Reporting & Support
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}
