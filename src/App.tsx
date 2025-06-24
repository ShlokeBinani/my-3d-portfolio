import React from "react";
import { motion } from "framer-motion";
import GeminiScrollProgress from "./components/GeminiScrollProgress";
import BubbleFilter from "./components/BubbleFilter/BubbleFilter";
import HeroSection from "./components/HeroSection/HeroSection";
import WebStacksBalls from "./components/WebStacks/WebStacksBalls";
import { AnimatedProjectCard } from "./components/Projects/AnimatedProjectCard";
import AchievementsCarousel from "./components/Achievements/AchievementsCarousel";
import ContactForm3D from "./components/Contact/ContactForm3D";
import Parallax from "./components/Parallax";
import GeminiEffect from "./components/GeminiEffect";

// Example SVG paths for GeminiEffect (not the progress bar)
const svgPaths = [
  "M20,20 L180,20 L180,180 L20,180 Z", // Rectangle
  "M100,40 L160,140 L40,140 Z", // Triangle
  "M100,100 m-60,0 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0" // Circle
];

const projects = [
  { title: "Distance Detector", desc: "IR-based obstacle detection", tech: ["Arduino", "C++"] },
  { title: "Light Circuit", desc: "Ambient light sensing", tech: ["LDR", "Sensor"] },
  { title: "Code Lock", desc: "4-digit secure access", tech: ["IoT"] },
  { title: "Snake Game", desc: "Classic Python game", tech: ["Python"] }
];

export default function App() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Gemini Scroll Progress Bar at the very top */}
      <GeminiScrollProgress />

      {/* Optionally: GeminiEffect as a hero animation */}
      <motion.section
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "var(--background)",
          padding: "2rem 0 1rem 0"
        }}
      >
        <GeminiEffect svgPaths={svgPaths} />
      </motion.section>

      <BubbleFilter />

      <Parallax offset={30}>
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <HeroSection />
        </motion.section>
      </Parallax>

      <Parallax offset={20}>
        <WebStacksBalls />
      </Parallax>

      {/* Projects Section with Responsive Grid */}
      <Parallax offset={15}>
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ amount: 0.3 }}
          style={{
            margin: "4rem auto",
            background: "var(--card-bg)",
            border: "1.5px solid var(--primary)",
            borderRadius: "1.5rem",
            padding: "3rem 2rem",
            maxWidth: 1200,
            textAlign: "center"
          }}
        >
          <h2 style={{
            color: "var(--primary)",
            marginBottom: "2rem",
            fontSize: "2.5rem"
          }}>
            Featured Projects
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2.5rem",
              justifyItems: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: 1000,
              margin: "0 auto"
            }}
          >
            {projects.map((proj, idx) => (
              <AnimatedProjectCard
                key={idx}
                title={proj.title}
                desc={proj.desc}
                idx={idx}
                tech={proj.tech}
              />
            ))}
          </div>
        </motion.section>
      </Parallax>

      <Parallax offset={10}>
        <AchievementsCarousel />
      </Parallax>

      <Parallax offset={5}>
        <ContactForm3D />
      </Parallax>

      <Parallax offset={0}>
        <motion.footer
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ amount: 0.3 }}
          style={{
            textAlign: "center",
            padding: "2rem",
            color: "var(--text-primary)",
            background: "var(--card-bg)",
            border: "1.5px solid var(--primary)",
            borderRadius: "1.5rem",
            margin: "2rem auto",
            maxWidth: 1000
          }}
        >
          <p style={{ marginBottom: "1rem" }}>
            © 2025 Shloke Binani. All rights reserved.
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap"
          }}>
            <a href="mailto:shloke@example.com" style={{ color: "var(--primary)", textDecoration: "none" }}>
              Email
            </a>
            <a href="#" style={{ color: "var(--primary)", textDecoration: "none" }}>
              LinkedIn
            </a>
            <a href="#" style={{ color: "var(--primary)", textDecoration: "none" }}>
              GitHub
            </a>
          </div>
        </motion.footer>
      </Parallax>
    </div>
  );
}
