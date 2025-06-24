import React from 'react';
import BubbleFilter from './components/BubbleFilter/BubbleFilter';
import HeroSection from './components/HeroSection/HeroSection';
import SpinningCube from './components/Figures/SpinningCube';
import About from './components/About/About';
import ProjectCard from './components/Projects/ProjectCard';

const projects = [
  { title: 'Distance Detector Using IR Sensor', desc: 'IR-based obstacle detection up to 10cm.' },
  { title: 'Light Detector Circuit', desc: 'Ambient light sensing with LDR.' },
  { title: 'Code Lock System', desc: 'Secure access with 4-digit code.' },
  { title: 'Python Snake Game', desc: 'Classic game built in Python.' },
];

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <BubbleFilter />
      <HeroSection />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <SpinningCube />
      </div>
      <About />
      <section style={{ padding: '2rem' }}>
        <h2>Projects</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} title={proj.title} desc={proj.desc} />
          ))}
        </div>
      </section>
      {/* Add more sections: Experience, Contact, etc. */}
    </div>
  );
}

export default App;
