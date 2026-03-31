"use client";

export default function Footer() {
  return (
    <footer className="bg-deepBlue text-creme py-20 font-body">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <div className="mb-6 inline-flex items-center justify-center p-2 px-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 transition-all duration-300">
            <img src="/logo.png" alt="ScaleUp Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-md opacity-90" />
          </div>
          <p className="text-creme/70 leading-relaxed max-w-sm">
            Smart accounting for scaling businesses. Future-focused UK Chartered Accountants.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-lg">Services</h4>
          <ul className="text-creme/70 space-y-3 cursor-pointer">
            <li onClick={() => {
              const target = document.getElementById("services");
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white transition-colors">Tax</li>
            <li onClick={() => {
              const target = document.getElementById("services");
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white transition-colors">Accounting</li>
            <li onClick={() => {
              const target = document.getElementById("services");
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white transition-colors">Advisory</li>
          </ul>
        </div>

        <div>
           <h4 className="mb-4 font-semibold text-lg">Contact</h4>
           <a href="mailto:support@scaleupaccounting.com" className="text-creme/70 hover:text-white transition-colors">
            support@scaleupaccounting.com
           </a>
        </div>

      </div>

      <div className="text-center text-creme/50 mt-16 pt-8 border-t border-creme/10 text-sm">
        © 2026 ScaleUp Accounting Limited. All rights reserved.
      </div>
    </footer>
  );
}
