import React from "react";
import { motion } from "framer-motion";
import AnimatedNameBubbles from "./AnimatedNameBubbles";

export default function HeroSection() {
  return (
    <section style={{ textAlign: "center", padding: "3rem 1rem" }}>
      <motion.img
        src={`${process.env.PUBLIC_URL}/images/shlokee.jpg`}
        alt="Shloke Binani"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          borderRadius: "50%",
          width: 200,
          height: 200,
          objectFit: "cover",
          boxShadow: "0 12px 40px rgba(187,10,33,0.4)"
        }}
      />
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ color: "var(--text-primary)", margin: "2rem 0" }}
      >
        Welcome to
      </motion.h3>
      <AnimatedNameBubbles />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        style={{ color: "#fff", marginTop: "2rem" }}
      >
        Electronics & AI/ML Enthusiast | Designer | Open to Internships
      </motion.p>
    </section>
  );
}
