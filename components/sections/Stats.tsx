"use client";

import React from "react";
import { motion } from "framer-motion";
import { STATS } from "@/data/stats";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Stats() {
  return (
    <section className="py-20 sm:py-24 border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors shadow-2xs"
            >
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                  // METRIC 0{idx + 1}
                </span>
                <div className="text-4xl sm:text-5xl font-black font-mono text-[var(--text-primary)] tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-bold text-[var(--accent)] mb-2 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2 pt-3 border-t border-[var(--border-color)] font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
