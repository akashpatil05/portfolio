import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Preloader from "./components/Preloader/Preloader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="app-container">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
