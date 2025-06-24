import React from "react";
import BubbleFilter from "./components/BubbleFilter/BubbleFilter";
import HeroSection from "./components/HeroSection/HeroSection";
import WebStacksBalls from "./components/WebStacks/WebStacksBalls";
import { AnimatedProjectCard } from "./components/Projects/AnimatedProjectCard";
import AchievementsCarousel from "./components/Achievements/AchievementsCarousel";
import ContactForm3D from "./components/Contact/ContactForm3D";
import { motion } from "framer-motion";

const projects = [
  { title: "Distance Detector Using IR Sensor", desc: "IR-based obstacle detection up to 10cm." },
  { title: "Light Detector Circuit", desc: "Ambient light sensing with LDR." },
  { title: "Code Lock System", desc: "Secure access with 4-digit code." },
  { title: "Python Snake Game", desc: "Classic game built in Python." },
  { title: "Lorem Ipsum Project", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Dynamic Portfolio", desc: "A portfolio with scroll-triggered, animated cards." }
];

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #A4C8E1 0%, #F5E1A4 100%)" }}>
      <BubbleFilter />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <HeroSection />
      </motion.section>

      {/* Web Stacks Balls Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <WebStacksBalls />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ margin: "3rem 0", position: "relative", zIndex: 1 }}
      >
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {projects.map((proj, idx) => (
            <AnimatedProjectCard key={idx} title={proj.title} desc={proj.desc} idx={idx} />
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ margin: "3rem 0", position: "relative", zIndex: 1 }}
      >
        <h2 style={{ textAlign: "center" }}>Achievements</h2>
        <AchievementsCarousel />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ margin: "3rem 0", position: "relative", zIndex: 1 }}
      >
        <h2 style={{ textAlign: "center" }}>Contact Me</h2>
        <ContactForm3D />
      </motion.section>
    </div>
  );
}
