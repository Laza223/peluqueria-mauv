"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "dark" | "darker" | "gradient" | "glass";
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "dark",
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const bgClasses = {
    dark: "bg-background",
    darker: "bg-dark",
    gradient: "bg-gradient-electric",
    glass: "bg-surface",
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`section-padding ${bgClasses[bg]} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </motion.section>
  );
}
