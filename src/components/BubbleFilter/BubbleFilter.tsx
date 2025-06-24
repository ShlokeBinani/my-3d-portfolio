import React, { useRef, useEffect } from 'react';
import './BubbleFilter.css';

const NUM_BUBBLES = 25;

const BubbleFilter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < NUM_BUBBLES; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${8 + Math.random() * 6}s`;
      bubble.style.opacity = `${0.1 + Math.random() * 0.3}`;
      bubble.style.width = bubble.style.height = `${15 + Math.random() * 35}px`;
      container.appendChild(bubble);
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      const bubbles = container.querySelectorAll('.bubble');
      bubbles.forEach((bubble) => {
        const rect = bubble.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 80) {
          (bubble as HTMLElement).style.transform = 'scale(1.8)';
          (bubble as HTMLElement).style.background = 'rgba(255, 26, 75, 0.4)';
        } else {
          (bubble as HTMLElement).style.transform = 'scale(1)';
          (bubble as HTMLElement).style.background = 'rgba(187, 10, 33, 0.18)';
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="bubble-filter-container" ref={containerRef}></div>;
};

export default BubbleFilter;
