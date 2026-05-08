import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import ComplianceandSecurity from "../components/sections/Compliance&Security";

import Contact from "../components/sections/Contact";
import Footer from "../components/footer/Footer";

import RPOandBusinessAdvisory from "../components/sections/RPO&BusinessAdvisory";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <RPOandBusinessAdvisory />
      <ComplianceandSecurity />
      <Contact />
      <Footer />
    </main>
  );
}
