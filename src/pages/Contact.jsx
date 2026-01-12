// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

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

const Contact = () => {
  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <header className={styles.header}>
        <motion.h1 variants={itemVariants}>Contact</motion.h1>
      </header>

      <div className={styles.content}>
        <motion.div variants={itemVariants}>
          <span className={styles.label}>Email</span>
          <a href="mailto:gaurdevansh8@gmail.com" className={styles.cta}>
            gaurdevansh8@gmail.com
          </a>
        </motion.div>

        <motion.div variants={itemVariants}>
          <span className={styles.label}>Connect</span>
          <div className={styles.socialList}>
            {/* GitHub hidden 
            <a href="https://github.com/devanshgaur" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            */}
            
            <a href="https://www.linkedin.com/in/devansh-gaur-b275452bb/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>

            {/* Instagram hidden
            <a href="https://instagram.com/devanshsbrain" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;