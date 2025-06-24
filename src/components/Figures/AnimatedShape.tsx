import React from 'react';
import { motion } from 'framer-motion';

const AnimatedShape: React.FC = () => (
  <motion.div
    animate={{
      rotate: 360,
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      width: 100,
      height: 100,
      background: 'linear-gradient(45deg, var(--primary), var(--accent))',
      borderRadius: '20%',
      margin: '2rem auto',
      boxShadow: '0 8px 25px rgba(187, 10, 33, 0.3)'
    }}
  />
);

export default AnimatedShape;
