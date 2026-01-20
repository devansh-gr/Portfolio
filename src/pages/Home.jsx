// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Neuroplay | BCI Gaming',
    description: 'Engineered an EEG interface decoding SSVEP and motor-imagery signals for real-time game control.',
    tech: 'Python, PyTorch, OpenBCI'
  },
  {
    id: 2,
    title: 'Hawking.AI',
    description: 'Developed a Neuro-linguistic interface translating brain signals into text using large language models.',
    tech: 'Python, OpenBCI, Gemini 2.0 Flash API'

  },
  {
    id: 2,
    title: '6-DOF Robotic Manipulator',
    description: 'Designed and programmed a 6-axis arm with custom Inverse Kinematics and closed-loop control.',
    tech: 'C++, SolidWorks, IK Algorithms'
  },
  {
    id: 3,
    title: 'Lung Cancer Detection',
    description: 'Developed a CNN with Grad-CAM integration to classify medical images with high interpretability.',
    tech: 'Python, PyTorch, OpenCV'
  },
  {
    id: 4,
    title: 'Distributed Swarm System',
    description: 'Built a collision-avoidance framework for 10 autonomous robots with sub-10ms latency.',
    tech: 'C++, Embedded Systems, PCB Design'
  },
  {
    id: 5,
    title: 'Solar Efficiency Analysis',
    description: 'Modeled thermal regulation and irradiance efficiency across 10+ years of climate data.',
    tech: 'Python, MATLAB, Pandas'

    
  }
];

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Intro Section */}
      <motion.section 
        className={styles.introSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.name}>Devansh Gaur</h1>
        <p className={styles.blurb}>
          I engineer interfaces between biological systems and synthetic control. 
          Focusing on Brain-Computer Interfaces (BCI) and autonomous robotics to bridge 
          <span className={styles.highlight}> intent and action</span>.
        </p>
      </motion.section>

      {/* Projects Section - Alternating Slide Animation */}
      <section className={styles.projectSection}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            // Even index (0, 2, 4): Slide from LEFT. Odd index (1, 3): Slide from RIGHT.
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
              <span className={styles.tech}>{project.tech}</span>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;