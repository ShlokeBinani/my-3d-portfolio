import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({
  children,
  offset = 100
}: {
  children: React.ReactNode;
  offset?: number;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  return <motion.div style={{ y }}>{children}</motion.div>;
}
