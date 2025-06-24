import React from "react";
import { motion } from "framer-motion";

const name = "SHLOKE BINANI".split("");

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.5,
    },
  },
};

const ball = {
  hidden: { 
    y: -250, 
    opacity: 0, 
    scale: 0.2,
    rotate: -180
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      mass: 1.5,
      bounce: 0.8,
    },
  },
};

const ballColors = [
  "#bb0a21", "#ff1a4b", "#1a1a1a", "#bb0a21", "#ff1a4b", "#0a0a0a",
  "#1a1a1a", "#bb0a21", "#ff1a4b", "#bb0a21", "#1a1a1a", "#ff1a4b"
];

export default function AnimatedNameBubbles() {
  return (
    <motion.div
      className="name-bubbles-row"
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        display: "flex",
        gap: "0.8rem",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "140px",
        marginTop: "2rem",
        flexWrap: "nowrap", // Prevent line breaks
        overflowX: "auto", // Allow horizontal scroll if needed
        minWidth: "fit-content"
      }}
    >
      {name.map((char, i) => (
        <motion.div
          key={i}
          variants={ball}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.3 }
          }}
          style={{
            width: char === " " ? 20 : 55, // Smaller width for space
            height: 55,
            borderRadius: "50%",
            background: char === " " ? "transparent" : ballColors[i % ballColors.length],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.8rem",
            color: "#fafafa",
            boxShadow: char === " " ? "none" : "0 6px 20px rgba(187,10,33,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            border: char === " " ? "none" : "2px solid #fff",
            cursor: "pointer",
            userSelect: "none",
            flexShrink: 0 // Prevent balls from shrinking
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.div>
      ))}
    </motion.div>
  );
}
