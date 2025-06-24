import React from "react";
import { motion } from "framer-motion";

const name = "SHLOKE BINANI".split("");

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const bubble = {
  hidden: { y: -120, opacity: 0, scale: 0.2 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.6, duration: 0.8 },
  },
};

const bubbleColors = [
  "#A4C8E1", "#F5E1A4", "#B7D6E1", "#E1B7A4", "#4f8cff", "#F9F6F2",
  "#D6C2B2", "#A4C8E1", "#F5E1A4", "#E1B7A4", "#B7D6E1", "#4f8cff"
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
        gap: "1.5rem",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "140px",
        marginTop: "2rem"
      }}
    >
      {name.map((char, i) => (
        <motion.div
          key={i}
          variants={bubble}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: bubbleColors[i % bubbleColors.length],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            color: "#1A3742",
            boxShadow: "0 4px 16px rgba(31,38,135,0.12)",
            border: "2px solid #fff"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.div>
      ))}
    </motion.div>
  );
}
