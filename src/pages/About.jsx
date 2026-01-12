// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

// Reuse animation variants for consistency
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const About = () => {
  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.2 } }} // Smooth exit
    >
      <header className={styles.header}>
        <motion.h1 variants={itemVariants}>About</motion.h1>
      </header>

      <div className={styles.content}>
        <motion.p className={styles.textBlock} variants={itemVariants}>
          I engineer interfaces between biological systems and synthetic control. 
          My work focuses on Brain-Computer Interfaces (BCI) and autonomous robotics, 
          bridging the gap between <span className={styles.highlight}>intent and action</span>.
        </motion.p>

        <motion.p className={styles.textBlock} variants={itemVariants}>
          I believe in building systems that are physically grounded and mathematically rigourous. 
          Whether it is optimizing swarm algorithms or decoding motor imagery, 
          I prefer raw functionality over abstraction layers.
        </motion.p>

        <motion.p className={styles.textBlock} variants={itemVariants}>
          Currently studying Biomedical Engineering at the University of Waterloo. 
          I am driven by the hard problems: low-latency signal processing, 
          distributed control, and the ethics of neural data.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;