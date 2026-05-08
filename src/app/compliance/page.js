import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Compliance & Regulatory Framework | ScaleUp Accounting Ltd",
  description: "Our commitment to Anti-Money Laundering, UK GDPR 2026, and Professional Indemnity.",
};

export default function CompliancePage() {
  return (
    <main className="bg-[#FDFCFB] text-[#0A1A2F]">
      <Navbar />
      
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-5 lg:px-12 max-w-[86rem] mx-auto min-h-[80vh]">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Information Security & Regulation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-light font-heading leading-[1.1] tracking-tight mb-8">
            Compliance & <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Regulatory Framework
            </span>
          </h1>

          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light tracking-wide leading-[1.8]">
            As an AAT-licensed firm, we operate within the highest standards of financial integrity. Our practice is rigorously governed to ensure absolute confidentiality, data protection, and operational security for our clients.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16 max-w-4xl">
          {/* Section: AML */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-4 text-[#0A1A2F]">Anti-Money Laundering (AML)</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-6">
              ScaleUp Accounting Ltd is supervised by the Association of Accounting Technicians (AAT) for the purposes of the Money Laundering Regulations. 
              We are legally obligated to apply strict customer due diligence (CDD) and Know Your Customer (KYC) measures before undertaking any business relationship.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              This framework ensures that our firm is never utilized to facilitate financial crime. All identity checks and corporate structural verifications are processed through secure, encrypted platforms prior to engagement.
            </p>
          </div>

          {/* Section: GDPR */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-4 text-[#0A1A2F]">UK GDPR 2026 & Data Use</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-6">
              In accordance with the Data Use and Access Act and UK GDPR 2026 legislative requirements, we implement "Privacy by Design" across all our financial frameworks. 
              Your data is processed strictly for the execution of our contracted services.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              We employ advanced endpoint protection, zero-knowledge encryption protocols for document transit, and operate secure, compliant server environments managed entirely within the United Kingdom.
            </p>
          </div>

          {/* Section: PII */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-4 text-[#0A1A2F]">Professional Indemnity Insurance</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-6">
              As a prerequisite of our AAT licensing and to provide unwavering peace of mind to our clients, our firm acts with comprehensive Professional Indemnity Insurance (PII).
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              This robust coverage protects our clients internationally against any claims of professional negligence. Policy details and certificates of coverage are available for corporate inspection upon formal request.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
