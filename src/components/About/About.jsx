import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const educationData = [
    {
      type: "College",
      institution: "Pimpri Chinchwad College of Engineering & Research (PCCOE&R)",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      year: "2023 - Present",
      cgpa: "CGPA: 8.5",
      location: "Ravet, Pune",
      details: "Pursuing advanced coursework in frontend technologies, database management systems, and system programming. Active participant in technical clubs and hackathons.",
      icon: "fa-graduation-cap",
    },
    {
      type: "School",
      institution: "Chhatrapati Shivaji Junior College",
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science Stream",
      year: "2021 - 2023",
      cgpa: "Percentage: 72%",
      location: "Jalgaon",
      details: "Completed senior secondary education with focus on Mathematics, Physics, and Chemistry. Strong foundation in analytical and problem-solving skills.",
      icon: "fa-book",
    },
    {
      type: "School",
      institution: "Tapti Public School",
      degree: "Secondary School Certificate (SSC)",
      field: "General Stream",
      year: "2019 - 2021",
      cgpa: "Percentage: 85%",
      location: "Bhusawal",
      details: "Completed secondary education with strong performance across all subjects. Developed core academic skills and interest in technology.",
      icon: "fa-book",
    },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="about-title">
          About <span className="highlight">Me</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="about-intro">
          <p className="about-description">
            I'm a passionate <span className="accent">Frontend Developer</span> currently studying Computer Science & Engineering at PCCOE&R, Pune. Specializing in creating beautiful, responsive, and user-centric web interfaces with modern technologies. I focus on crafting seamless digital experiences through clean code and intuitive design.
          </p>
          <p className="about-location">
            <i className="fas fa-map-marker-alt location-icon"></i>
            <span>Based in Ravet, Pune</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="about-highlight">
          <div className="highlight-card">
            <i className="fas fa-code card-icon"></i>
            <h3>What I Do</h3>
            <p>Build responsive web applications using React, Figma, and modern CSS. Focused on creating pixel-perfect UIs and engaging user experiences.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-bullseye card-icon"></i>
            <h3>Current Focus</h3>
            <p>Mastering advanced React patterns, responsive design, animations, and frontend optimization for performance.</p>
          </div>
          <div className="highlight-card">
            <i className="fas fa-lightbulb card-icon"></i>
            <h3>Passion</h3>
            <p>Turning design concepts into interactive, functional web applications. Continuous learner exploring emerging frontend technologies.</p>
          </div>
        </motion.div>

        <motion.h3 variants={itemVariants} className="education-title">
          <i className="fas fa-book-open section-icon"></i>
          Education
        </motion.h3>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`education-card ${edu.type.toLowerCase()}`}
            >
              <div className="education-header">
                <div className="education-icon">
                  <i className={`fas ${edu.icon}`}></i>
                </div>
                <div className="education-meta">
                  <h4 className="institution-name">{edu.institution}</h4>
                  <span className="education-type">{edu.type}</span>
                </div>
              </div>

              <div className="education-content">
                <div className="education-details">
                  <p className="degree">{edu.degree}</p>
                  <p className="field">{edu.field}</p>
                </div>

                <div className="education-footer">
                  <span className="year">
                    <i className="fas fa-calendar"></i>
                    {edu.year}
                  </span>
                  <span className="cgpa">
                    <i className="fas fa-star"></i>
                    {edu.cgpa}
                  </span>
                  {edu.location && (
                    <span className="location">
                      <i className="fas fa-map-pin"></i>
                      {edu.location}
                    </span>
                  )}
                </div>

                <p className="education-description">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="about-cta">
          <p>Interested in collaborating on frontend projects? Let's connect!</p>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
