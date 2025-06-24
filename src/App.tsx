import React from "react";
import BubbleFilter from "./components/BubbleFilter/BubbleFilter";
import HeroSection from "./components/HeroSection/HeroSection";
import { AnimatedProjectCard } from "./components/Projects/AnimatedProjectCard";
import AchievementsCarousel from "./components/Achievements/AchievementsCarousel";
import ContactForm3D from "./components/Contact/ContactForm3D";

const projects = [
  { title: "Distance Detector Using IR Sensor", desc: "IR-based obstacle detection up to 10cm." },
  { title: "Light Detector Circuit", desc: "Ambient light sensing with LDR." },
  { title: "Code Lock System", desc: "Secure access with 4-digit code." },
  { title: "Python Snake Game", desc: "Classic game built in Python." },
  { title: "Lorem Ipsum Project", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Dynamic Portfolio", desc: "A portfolio with scroll-triggered, animated cards." }
];

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #A4C8E1 0%, #F5E1A4 100%)" }}>
      <BubbleFilter />
      <HeroSection />
      <section>
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {projects.map((proj, idx) => (
            <AnimatedProjectCard key={idx} title={proj.title} desc={proj.desc} idx={idx} />
          ))}
        </div>
      </section>
      <section>
        <h2 style={{ textAlign: "center" }}>Achievements</h2>
        <AchievementsCarousel />
      </section>
      <section>
        <h2 style={{ textAlign: "center" }}>Contact Me</h2>
        <ContactForm3D />
      </section>
    </div>
  );
}

export default App;
