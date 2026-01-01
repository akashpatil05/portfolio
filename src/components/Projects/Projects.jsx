import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Grooviti",
      logo: (
        <div className="project-logo grooviti-logo">
          <span className="logo-text">GROOVITI.</span>
        </div>
      ),
      desc: "An event ticket booking platform — BOOK IT. GROOVE IT. LIVE IT.",
      details: "A comprehensive sports venue booking platform with real-time updates, user profiles, and seamless booking experience.",
      tech: ["React", "MongoDB", "Responsive Design", "Cloudinary"],
      link: "https://grooviti.com",
    },
    {
      name: "TEDxPCCOER",
      logo: (
        <div className="project-logo tedx-logo">
          <span className="tedx-part">TEDx</span>
          <span className="pccoer-part">PCCOER<span style={{fontSize: '0.7em'}}></span></span>
        </div>
      ),
      desc: "Official website for TEDxPCCOER event — Ideas Worth Spreading.",
      details: "An engaging event website showcasing speakers, sessions, and event details with smooth animations and responsive design.",
      tech: ["React", "Vite", "Framer Motion", "Responsive Design"],
      link: "https://tedxpccoe-r.onrender.com/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          Featured <span className="highlight">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="projects-subtitle"
        >
          Projects that showcase my skills in frontend development and design
        </motion.p>

        <motion.div
          className="project-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {/* Logo - Clickable */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-logo-container"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {project.logo}
              </motion.a>

              {/* Project Title */}
              <h3 className="project-name">{project.name}</h3>

              {/* Short Description */}
              <p className="project-desc">{project.desc}</p>

              {/* Detailed Description */}
              <p className="project-details">{project.details}</p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-globe"></i>
                  View Site
                </motion.a>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
