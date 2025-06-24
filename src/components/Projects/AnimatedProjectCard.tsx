import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const directions = [
  { x: -100, y: 0 },
  { x: 100, y: 0 },
  { x: 0, y: 100 },
  { x: 0, y: -100 }
];

export const AnimatedProjectCard: React.FC<{ title: string; desc: string; idx: number }> = ({ title, desc, idx }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const variant = {
    hidden: { opacity: 0, scale: 0.6, ...directions[idx % directions.length] },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", duration: 0.8, bounce: 0.45 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={controls}
      style={{
        background: "rgba(255,255,255,0.8)",
        borderRadius: "1.5rem",
        padding: "2rem",
        margin: "1rem",
        minWidth: 260,
        maxWidth: 350,
        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.14)",
        backdropFilter: "blur(8px)",
        border: "1px solid #A4C8E1",
        color: "#1A3742"
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
};
