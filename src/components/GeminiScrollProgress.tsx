import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// SVG path for a smooth Gemini-style line (you can customize this)
const GEMINI_PATH = "M20,40 Q100,0 180,40 Q100,80 20,40";

export default function GeminiScrollProgress() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(0);

  // Get scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Animate the path's strokeDashoffset from full length to 0 as you scroll
  const dashOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [pathLength, 0]
  );

  // On mount, measure the path length
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--background)",
        width: "100vw",
        paddingTop: "1.5rem",
        paddingBottom: "0.5rem"
      }}
    >
      <svg
        viewBox="0 0 200 80"
        style={{
          width: "100%",
          height: "40px",
          display: "block",
          filter: "drop-shadow(0 2px 8px rgba(187,10,33,0.13))"
        }}
      >
        <motion.path
          ref={pathRef}
          d={GEMINI_PATH}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={pathLength}
          style={{
            strokeDashoffset: dashOffset
          }}
        />
        {/* Add a blurred background path for glow, optional */}
        <path
          d={GEMINI_PATH}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={12}
          strokeLinecap="round"
          opacity={0.2}
          style={{ filter: "blur(4px)" }}
        />
      </svg>
    </div>
  );
}
