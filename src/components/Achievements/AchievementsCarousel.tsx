import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  { img: "/award1.png", title: "Elite Chapter of the Year", desc: "SAE-VIT, 2024-25" },
  { img: "/award2.png", title: "Best Intern", desc: "Kofuku Technologies, 2025" },
  { img: "/award3.png", title: "100+ LeetCode Solved", desc: "Problem Solving Excellence" },
  { img: "/award4.png", title: "Lorem Ipsum", desc: "Dolor sit amet, consectetur elit." }
];

export default function AchievementsCarousel() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % achievements.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 220 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 100, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.85 }}
          transition={{ duration: 0.7 }}
          style={{
            background: "#A4C8E1",
            borderRadius: "1.5rem",
            padding: "2rem 3rem",
            margin: "1rem",
            minWidth: 300,
            maxWidth: 400,
            boxShadow: "0 4px 32px 0 rgba(31, 38, 135, 0.17)",
            color: "#1A3742",
            textAlign: "center"
          }}
        >
          <img src={achievements[active].img} alt={achievements[active].title} style={{ width: 80, marginBottom: 16 }} />
          <h3>{achievements[active].title}</h3>
          <p>{achievements[active].desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
