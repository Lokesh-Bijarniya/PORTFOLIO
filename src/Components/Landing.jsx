import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Work from "./Work";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <div className="relative z-0">
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
