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
            <a
              href="/resume.pdf"
              className="navbar-link navbar-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
