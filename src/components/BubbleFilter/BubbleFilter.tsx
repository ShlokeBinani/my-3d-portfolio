// src/components/BubbleFilter/BubbleFilter.tsx
import React, { useRef, useEffect } from 'react';
import './BubbleFilter.css';

const NUM_BUBBLES = 30;

const BubbleFilter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous bubbles
    container.innerHTML = '';

    for (let i = 0; i < NUM_BUBBLES; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${8 + Math.random() * 4}s`;
      bubble.style.opacity = `${0.2 + Math.random() * 0.5}`;
      bubble.style.width = bubble.style.height = `${10 + Math.random() * 30}px`;
      container.appendChild(bubble);
    }
  }, []);

  return <div className="bubble-filter-container" ref={containerRef}></div>;
};

export default BubbleFilter;
