import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const shineVariants = {
    shine: {
      backgroundPosition: ["200% center", "-200% center"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.section
      className="hero"
      variants={backgroundVariants}
      animate="animate"
      id="home"
    >
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-greeting">
          <motion.span
            className="greeting-text"
            variants={shineVariants}
            animate="shine"
          >
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.h1 variants={nameVariants} className="hero-title">
          Hi, I'm{" "}
          <span className="hero-name">Akash Ajay Patil</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-subtitle">
          <p className="hero-role">
            Full Stack Developer
            <span className="role-separator">•</span>
            React Specialist
            <span className="role-separator">•</span>
            Problem Solver
          </p>
          <p className="hero-description">
            Crafting seamless digital experiences with modern technologies. Specialized in React, Node.js, MongoDB, and responsive design for innovative web solutions.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hero-tech-stack"
        >
          <span className="tech-label">Tech Stack:</span>
          <div className="tech-icons">
            <motion.span
              className="tech-badge"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              React
            </motion.span>
            <motion.span
              className="tech-badge"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Node.js
            </motion.span>
            <motion.span
              className="tech-badge"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              MongoDB
            </motion.span>
            <motion.span
              className="tech-badge"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              JavaScript
            </motion.span>
            <motion.span
              className="tech-badge"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Responsive Design
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
