import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";

export default function App() {
  return (
    <div className="site">
      <Hero />
      <main>
        <About />
        <Classes />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
