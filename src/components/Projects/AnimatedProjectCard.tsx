import React from "react";
import { motion } from "framer-motion";

export const AnimatedProjectCard = ({
  title,
  desc,
  idx,
  tech = []
}: {
  title: string;
  desc: string;
  idx: number;
  tech?: string[];
}) => (
  <motion.div
    layout
    whileHover={{
      scale: 1.06,
      boxShadow: "0 0 32px 0 rgba(187, 10, 33, 0.25)"
    }}
    transition={{ type: "spring", stiffness: 350, damping: 22 }}
    style={{
      background: "var(--card-bg)",
      borderRadius: "1.5rem",
      padding: "2.5rem",
      minWidth: 320,
      maxWidth: 340,
      minHeight: 200,
      boxShadow: "0 0 0 1.5px var(--primary)",
      border: "1.5px solid var(--primary)",
      color: "var(--text-primary)",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      transition: "transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s"
    }}
  >
    <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>{title}</h3>
    <p style={{ marginBottom: "1.5rem", lineHeight: 1.6, color: "var(--text-primary)" }}>{desc}</p>
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "auto" }}>
      {tech.map((t, i) => (
        <span
          key={i}
          style={{
            background: "var(--primary)",
            color: "#fff",
            padding: "0.3rem 0.8rem",
            borderRadius: "1rem",
            fontSize: "0.8rem",
            fontWeight: 600
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);
