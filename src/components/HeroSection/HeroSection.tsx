import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="hero-section"
    style={{ position: 'relative', zIndex: 1, padding: '5rem 2rem', textAlign: 'center' }}
  >
    <h1 style={{ fontSize: '3rem', color: '#222' }}>Shloke Binani</h1>
    <p style={{ fontSize: '1.5rem', color: '#555' }}>
      Electronics & AI/ML Enthusiast | Designer | Open to Internships
    </p>
  </motion.div>
);

export default HeroSection;
