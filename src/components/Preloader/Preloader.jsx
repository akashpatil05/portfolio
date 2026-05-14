import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // update every 20ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400); // Wait for the 100% state to show briefly before completing
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100vh' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <motion.div 
            className="preloader-spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.h1 
            className="preloader-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            AP
          </motion.h1>
        </div>
        <div className="preloader-progress-bar-container">
          <motion.div 
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="preloader-percentage">
          {Math.floor(progress)}%
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="preloader-blob preloader-blob-1" />
      <div className="preloader-blob preloader-blob-2" />
    </motion.div>
  );
};

export default Preloader;
