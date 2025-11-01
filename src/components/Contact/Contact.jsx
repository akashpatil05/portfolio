import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://instagram.com/akash_ajay_patil", // Update with your Instagram handle
      color: "#E4405F",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/akashpatil05", // Update with your GitHub
      color: "#000000ff",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/akash-patil-b1119a32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Update with your LinkedIn
      color: "#0A66C2",
    },
  ];

  const contactInfo = [
    {
      type: "Email",
      value: "akash@example.com",
      icon: "fas fa-envelope",
      link: "mailto:akash.apatil05@gmail.com",
    },
    {
      type: "Phone",
      value: "+91 7666639680",
      icon: "fas fa-phone",
      link: "tel:+917666639680",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="footer-section">
            <h3 className="section-title">Get In Touch</h3>
            <div className="contact-links">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  className="contact-link"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <i className={`${contact.icon} contact-icon`}></i>
                  <div className="contact-details">
                    <span className="contact-type">{contact.type}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants} className="footer-section">
            <h3 className="section-title">Follow Me</h3>
            <motion.div
              className="social-links"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ "--social-color": social.color }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p className="copyright">
            © {new Date().getFullYear()} Akash Ajay Patil. All Rights Reserved.
          </p>
          <p className="footer-text">
            Designed & Built with <i className="fas fa-heart heart-icon"></i> by Akash
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
