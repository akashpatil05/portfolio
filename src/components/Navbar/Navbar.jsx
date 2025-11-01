import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle resume download
const handleResumeClick = (e) => {
  e.preventDefault();
  
  // Verify the path - adjust if needed
  const resumePath = "/resume/Akash_Ajay_Patil_Resume.pdf";
  
  // Try fetching the file first to ensure it exists
  fetch(resumePath)
    .then(response => {
      if (!response.ok) {
        alert("Resume file not found. Please check the file path.");
        throw new Error("File not found");
      }
      
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Akash_Ajay_Patil_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(error => {
      console.error("Error downloading resume:", error);
      alert("Error downloading resume. Check browser console.");
    });
  
  closeMenu();
};


  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-name">Akash</span>
          <span className="logo-accent">.</span>
        </a>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li className="navbar-item">
            <button
              onClick={handleResumeClick}
              className="navbar-link navbar-cta"
              aria-label="Download resume"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0",
                font: "inherit",
              }}
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
