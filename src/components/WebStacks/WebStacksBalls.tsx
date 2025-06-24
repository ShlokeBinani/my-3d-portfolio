import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Use only the filename for each logo, matching your /public/logos/ folder
const stacks = [
  { name: "Python", logo: "python.svg", fallback: "PY" },
  { name: "Java", logo: "java.svg", fallback: "JAVA" },
  { name: "Verilog", logo: "verilog.svg", fallback: "VLG" },
  { name: "Assembly", logo: "assembly.svg", fallback: "ASM" },
  { name: "OpenAI", logo: "chatgpt.svg", fallback: "AI" },
  { name: "Grok", logo: "grok.svg", fallback: "GRK" },
  { name: "Claude", logo: "claude.svg", fallback: "CLD" },
  { name: "Gamma", logo: "gemini.svg", fallback: "GMM" },
  { name: "Perplexity", logo: "perplexity.svg", fallback: "PPX" },
];

// TypeScript: define BallPhysics with all properties initialized in constructor
class BallPhysics {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  id: number;
  gravity = 1.1;
  bounce = 0.7;
  friction = 0.97;

  constructor(x: number, y: number, radius: number, id: number) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = 0;
    this.radius = radius;
    this.id = id;
  }

  update(containerHeight: number, containerWidth: number, balls: BallPhysics[]) {
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;

    // Ground collision
    if (this.y + this.radius > containerHeight - 20) {
      this.y = containerHeight - 20 - this.radius;
      this.vy *= -this.bounce;
      this.vx *= this.friction;
      if (Math.abs(this.vy) < 1) this.vy = 0;
    }

    // Wall collisions
    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.vx *= -this.bounce;
    }
    if (this.x + this.radius > containerWidth) {
      this.x = containerWidth - this.radius;
      this.vx *= -this.bounce;
    }

    // Ball-to-ball collisions
    balls.forEach(other => {
      if (other.id !== this.id) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = this.radius + other.radius;

        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx);
          const overlap = minDistance - distance;
          const separateX = (overlap / 2) * Math.cos(angle);
          const separateY = (overlap / 2) * Math.sin(angle);

          this.x -= separateX;
          this.y -= separateY;
          other.x += separateX;
          other.y += separateY;

          // Exchange velocities
          const tempVx = this.vx;
          const tempVy = this.vy;
          this.vx = other.vx * 0.8;
          this.vy = other.vy * 0.8;
          other.vx = tempVx * 0.8;
          other.vy = tempVy * 0.8;
        }
      }
    });
  }
}

export default function WebStacksBalls() {
  const refC = useRef<HTMLDivElement>(null);
  const refB = useRef<BallPhysics[]>([]);
  const anim = useRef<number | null>(null);

  const [pos, setPos] = useState<{ x: number; y: number }[]>([]);
  const [errs, setErrs] = useState<Set<number>>(new Set());
  const [start, setStart] = useState(false);

  const handleImageError = (index: number) => {
    setErrs(prev => new Set(prev).add(index));
  };

  useEffect(() => {
    if (!start || !refC.current) return;
    const rect = refC.current.getBoundingClientRect();
    const r = 42;

    refB.current = stacks.map((_, i) => new BallPhysics(100 + i * 80, -150 - i * 30, r, i));

    const loop = () => {
      refB.current.forEach(b => b.update(rect.height, rect.width, refB.current));
      setPos(refB.current.map(b => ({ x: b.x, y: b.y })));
      anim.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (anim.current) cancelAnimationFrame(anim.current);
    };
  }, [start]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => setStart(true)}
      style={{
        margin: "4rem auto",
        background: "var(--card-bg)",
        border: "1.5px solid var(--primary)",
        borderRadius: "1.5rem",
        padding: "3rem 2rem",
        maxWidth: 1000,
        position: "relative",
        zIndex: 2
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          fontSize: "2.5rem",
          color: "var(--primary)"
        }}
      >
        My Tech Stack
      </motion.h2>
      <div
        ref={refC}
        style={{
          position: "relative",
          height: 320,
          width: "100%",
          background: "linear-gradient(180deg, transparent 0%, rgba(187, 10, 33, 0.05) 100%)",
          borderRadius: "1rem",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
            height: 3,
            background: "var(--primary)",
            opacity: 0.3
          }}
        />
        {stacks.map((stack, i) => (
          <motion.div
            key={stack.name}
            style={{
              position: "absolute",
              left: pos[i]?.x - 42 || 0,
              top: pos[i]?.y - 42 || 0,
              width: 85,
              height: 85,
              borderRadius: "50%",
              background: "var(--primary)",
              boxShadow: "0 10px 35px 0 rgba(187, 10, 33, 0.4), inset 0 2px 0 rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #fff",
              cursor: "pointer",
              overflow: "hidden",
              zIndex: 10 - i
            }}
            whileHover={{
              scale: 1.2,
              zIndex: 20,
              boxShadow: "0 20px 50px 0 rgba(255, 26, 75, 0.6)",
              transition: { duration: 0.2 }
            }}
            title={stack.name}
          >
            {!errs.has(i) && (
              <img
                src={`${process.env.PUBLIC_URL}/logos/${stack.logo}`}
                alt={stack.name}
                style={{
                  width: 45,
                  height: 45,
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  zIndex: 2,
                  position: "relative"
                }}
                onError={() => handleImageError(i)}
              />
            )}
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#fff",
                textAlign: "center",
                pointerEvents: "none",
                zIndex: errs.has(i) ? 2 : 1
              }}
            >
              {errs.has(i) ? stack.fallback : ""}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
