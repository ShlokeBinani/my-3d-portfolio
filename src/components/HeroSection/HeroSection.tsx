import React from "react";
import AnimatedNameBubbles from "./AnimatedNameBubbles";

export default function HeroSection() {
  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      background: "linear-gradient(135deg, #A4C8E1 0%, #F5E1A4 100%)"
    }}>
      <img
        src="/your-photo.jpg"
        alt="Shloke Binani"
        style={{
          borderRadius: "50%",
          width: 180,
          height: 180,
          objectFit: "cover",
          marginRight: "4rem",
          boxShadow: "0 8px 32px rgba(31,38,135,0.18)"
        }}
      />
      <div>
        <AnimatedNameBubbles />
      </div>
    </section>
  );
}
