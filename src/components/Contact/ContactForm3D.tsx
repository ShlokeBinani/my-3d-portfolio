import React from "react";
import { motion } from "framer-motion";

export default function ContactForm3D() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.8, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      style={{
        margin: "2rem auto",
        padding: "2rem",
        maxWidth: 400,
        borderRadius: "1.5rem",
        background: "rgba(255,255,255,0.9)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transform: hovered ? "rotateY(8deg) rotateX(4deg) scale(1.03)" : "none",
        transition: "transform 0.3s"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input placeholder="Your Name" style={inputStyle} />
      <input placeholder="Your Email" style={inputStyle} />
      <textarea placeholder="Your Message" rows={4} style={inputStyle} />
      <motion.button
        whileTap={{ scale: 0.95 }}
        style={{
          background: "#4f8cff",
          color: "#fff",
          border: "none",
          borderRadius: "1rem",
          padding: "0.8rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >Send</motion.button>
    </motion.form>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "0.8rem",
  borderRadius: "1rem",
  border: "1px solid #A4C8E1",
  fontSize: "1rem",
  background: "#F5E1A4",
  color: "#1A3742"
};
