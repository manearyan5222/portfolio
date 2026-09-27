"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  number?: string;
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  kicker,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-12 sm:mb-16 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {/* Kicker & Number */}
      <div
        className={`flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[var(--accent)] font-semibold ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        {number && (
          <>
            <span>// {number}</span>
            <span>·</span>
          </>
        )}
        <span>{kicker}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-4">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
