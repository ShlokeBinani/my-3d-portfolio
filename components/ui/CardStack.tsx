"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CardStackItem = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset = 12,
  scaleFactor = 0.07,
  intervalTime = 3500,
  className = "",
}: {
  items: CardStackItem[];
  offset?: number;
  scaleFactor?: number;
  intervalTime?: number;
  className?: string;
}) => {
  const [cards, setCards] = useState<CardStackItem[]>(items);

  useEffect(() => {
    if (cards.length <= 1) return;
    const interval = setInterval(() => {
      setCards((prev) => {
        const arr = [...prev];
        arr.unshift(arr.pop()!);
        return arr;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, [cards.length, intervalTime]);

  return (
    <div className={`relative h-80 w-full max-w-md mx-auto ${className}`}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute left-0 right-0 mx-auto dark:bg-black bg-white h-72 w-full rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
            opacity: 1 - index * 0.15,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {card.content}
        </motion.div>
      ))}
    </div>
  );
};
