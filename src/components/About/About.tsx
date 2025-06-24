import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    style={{
      background: '#f9f9f9',
      borderRadius: '1rem',
      padding: '2rem',
      margin: '2rem 0'
    }}
  >
    <h2>About Me</h2>
    <p>
      Dedicated Electronics and Communication Engineering student specializing in AI/ML, with a passion for design and innovation.
    </p>
  </motion.div>
);

export default About;
