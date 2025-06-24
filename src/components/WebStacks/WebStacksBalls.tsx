import React from "react";
import { motion, Variants } from "framer-motion";

const stacks = [
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "Verilog", logo: "/logos/verilog.svg" },
  { name: "Assembly", logo: "/logos/assembly.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Grok", logo: "/logos/grok.svg" },
  { name: "Claude", logo: "/logos/claude.svg" },
  { name: "Gamma", logo: "/logos/gamma.svg" },
  { name: "Perplexity", logo: "/logos/perplexity.svg" },
];

const ballVariants: Variants = {
  initial: (i: number) => ({
    y: -120,
    opacity: 0,
    scale: 0.5,
    transition: { delay: i * 0.15 }
  }),
  animate: (i: number) => ({
    y: [0, -30, 0],
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 1.2,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1 + i * 0.08,
      delay: i * 0.15,
    },
  }),
};

export default function WebStacksBalls() {
  return (
    <section style={{ margin: "3rem 0" }}>
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{ textAlign: "center" }}
      >
        My Web Stacks
      </motion.h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "2.5rem",
          minHeight: 160,
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {stacks.map((stack, i) => (
          <motion.div
            key={stack.name}
            variants={ballVariants}
            custom={i}
            initial="initial"
            animate="animate"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "#F5E1A4",
              boxShadow: "0 6px 24px 0 rgba(31, 38, 135, 0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #A4C8E1",
              position: "relative",
              zIndex: 1,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            whileHover={{
              scale: 1.15,
              background: "#A4C8E1",
              boxShadow: "0 12px 32px 0 rgba(31, 38, 135, 0.22)",
            }}
            title={stack.name}
          >
            <img
              src={stack.logo}
              alt={stack.name}
              style={{ width: 38, height: 38, objectFit: "contain" }}
              onError={e => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/38";
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
