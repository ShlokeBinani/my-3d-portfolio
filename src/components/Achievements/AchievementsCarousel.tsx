import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    icon: "💼",
    title: "Tech Intern",
    desc: "Kofuku 2025",
    detail: "AI/ML projects"
  },
  {
    icon: "🦇",
    title: "Night Coder",
    desc: "Dark Mode Dev",
    detail: "Built apps in the shadows"
  },
  {
    icon: "🩸",
    title: "Blood Red Theme",
    desc: "UI Design",
    detail: "Crafted evil dark UIs"
  },
  {
    icon: "👻",
    title: "Ghost Debugger",
    desc: "Spooky Fixes",
    detail: "Haunted bugs until they vanished"
  }
];

export default function AchievementsCarousel() {
  const [i, setI] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);

  // Auto-slide every 2s, but pause when hovered
  React.useEffect(() => {
    if (hovered) return;
    const t = setInterval(() => setI(i => (i + 1) % items.length), 2000);
    return () => clearInterval(t);
  }, [hovered]);

  // Manual navigation (optional)
  const goTo = (idx: number) => setI(idx);

  return (
    <motion.section
      style={{ textAlign: "center", padding: "3rem 1rem" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 style={{ color: "var(--primary)", marginBottom: "2rem" }}>Achievements</h2>
      <div style={{ position: "relative", height: 340, marginBottom: "2rem" }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.92, filter: "blur(8px)" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              boxShadow: "0 0 48px 8px #bb0a21, 0 0 0 2px var(--primary)",
              background: "radial-gradient(circle at 60% 40%, #3a0a14 0%, #bb0a21 100%)"
            }}
            exit={{ opacity: 0, y: -80, scale: 0.92, filter: "blur(8px)" }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 14
            }}
            style={{
              borderRadius: "2rem",
              maxWidth: 420,
              margin: "0 auto",
              padding: "3rem 2rem 2rem 2rem",
              color: "#fff",
              position: "absolute",
              inset: 0,
              zIndex: 2,
              border: "2px solid #bb0a21",
              background: "radial-gradient(circle at 60% 40%, #3a0a14 0%, #bb0a21 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 80px 16px #bb0a21, 0 0 0 2px var(--primary)",
              filter: "brightness(1.1)"
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                background: "#18181c",
                borderRadius: "50%",
                margin: "0 auto 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
                boxShadow: "0 0 32px 0 #bb0a21"
              }}
            >
              {items[i].icon}
            </div>
            <h3
              style={{
                fontFamily: "'UnifrakturCook', 'Creepster', 'Poppins', sans-serif",
                color: "#fff",
                textShadow: "0 0 12px #bb0a21, 0 0 2px #fff",
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: 0
              }}
            >
              {items[i].title}
            </h3>
            <p style={{ fontWeight: 600, color: "#ff1a4b", margin: "0.5rem 0" }}>
              {items[i].desc}
            </p>
            <p style={{ color: "#fff", opacity: 0.85 }}>{items[i].detail}</p>
          </motion.div>
        </AnimatePresence>
        {/* Evil mist/particles */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none"
          }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
            filter: ["blur(10px)", "blur(16px)", "blur(10px)"]
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
        >
          <svg width="100%" height="100%">
            <circle cx="60%" cy="30%" r="60" fill="#bb0a21" opacity="0.2" />
            <circle cx="40%" cy="70%" r="40" fill="#bb0a21" opacity="0.13" />
          </svg>
        </motion.div>
      </div>
      {/* Carousel dots for manual navigation */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "none",
              background: idx === i ? "var(--primary)" : "#444",
              boxShadow: idx === i ? "0 0 8px #bb0a21" : "none",
              cursor: "pointer",
              outline: "none",
              transition: "background 0.3s"
            }}
            aria-label={`Go to achievement ${idx + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
