import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePathLengths } from "../utils/usePathLengths";

export default function GeminiEffect({ svgPaths }: { svgPaths: string[] }) {
  const { lengths, refs, isReady } = usePathLengths(svgPaths.length);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });

  return (
    <motion.div 
      ref={containerRef}
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        padding: "2rem" 
      }}
    >
      <svg 
        viewBox="0 0 200 200" 
        style={{ 
          width: "300px", 
          height: "300px",
          border: "1px solid var(--primary)"
        }}
      >
        {svgPaths.map((d, i) => (
          <motion.path
            key={i}
            ref={(el: SVGPathElement | null) => {
              if (refs.current) {
                refs.current[i] = el;
              }
            }}
            d={d}
            fill="none"
            stroke="var(--primary)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray={lengths[i] || 0}
            initial={{ strokeDashoffset: lengths[i] || 0 }}
            animate={{ 
              strokeDashoffset: inView && isReady ? 0 : lengths[i] || 0 
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut", 
              delay: i * 0.3 
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
