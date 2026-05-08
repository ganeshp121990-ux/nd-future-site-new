import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import ComplianceandSecurity from "../components/sections/ComplianceSecurity";

import Contact from "../components/sections/Contact";
import RPOBusinessAdvisory from "../components/sections/RPOBusinessAdvisory";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <RPOBusinessAdvisory />
      <ComplianceandSecurity />
      <Contact />
      <Footer />
    </main>
  );
}
