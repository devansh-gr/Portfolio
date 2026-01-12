// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import styles from './Projects.module.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Neuroplay',
    description: 'A real-time BCI interface converting motor imagery into game inputs using Python and Unity.',
    tech: 'Python, C#, Unity, LSL Streams'
  },
  {
    id: 2,
    title: 'Swarm Robotics Control',
    description: 'Decentralized algorithm managing 8 autonomous units for coordinated spatial tasks.',
    tech: 'C++, ROS2, Gazebo'
  },
  {
    id: 3,
    title: 'Personal Profile',
    description: 'Minimalist engineering portfolio built with React and Framer Motion for high performance.',
    tech: 'React, Vite, CSS Modules'
  }
];

// Animation Variants (Configuration)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each item appearing
      delayChildren: 0.1 // Initial delay
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 // Start 20px lower
  },
  visible: { 
    opacity: 1, 
    y: 0, // Slide up to natural position
    transition: {
      duration: 0.5,
      ease: "easeOut" // "Editorial" feel, no bounce
    }
  }
};

const Projects = () => {
  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <header className={styles.header}>
        <motion.h1 variants={itemVariants}>Projects</motion.h1>
        <motion.p variants={itemVariants} className={styles.intro}>
          Selected engineering and research work.
        </motion.p>
      </header>

      <section className={styles.projectList}>
        {PROJECTS.map((project) => (
          <motion.article 
            key={project.id} 
            className={styles.projectItem}
            variants={itemVariants}
          >
            <div className={styles.projectHeader}>
              <h3 className={styles.title}>{project.title}</h3>
            </div>
            <p className={styles.description}>{project.description}</p>
            <span className={styles.techStack}>{project.tech}</span>
          </motion.article>
        ))}
      </section>
    </motion.div>
  );
};

export default Projects;