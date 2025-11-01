import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
      category: "Design & Tools",
      skills: ["Figma", "Responsive Design", "Framer Motion"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-title"
        >
          Skills & <span className="highlight">Expertise</span>
        </motion.h2>

        <motion.div
          className="skills-categories"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={categoryVariants}
            >
              <h3 className="category-title">{category.category}</h3>

              <motion.div
                className="skills-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="skill-item"
                    variants={skillVariants}
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
