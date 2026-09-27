"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/personal";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Hammer, Sparkles, Users, BookOpen } from "lucide-react";

export function Personality() {
  const getIcon = (id: string) => {
    switch (id) {
      case "building":
        return <Hammer className="w-5 h-5 text-[var(--accent)]" />;
      case "experimenting":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case "collaborating":
        return <Users className="w-5 h-5 text-emerald-500" />;
      case "learning":
        return <BookOpen className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 border-b border-[var(--border-color)] bg-[var(--bg-surface-subtle)]/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          number="03"
          kicker="HUMAN PERSPECTIVE"
          title="BEYOND THE CODE."
          description="How I approach technology, problem-solving, and continuous growth as a student developer."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PERSONAL_INFO.philosophyPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              variants={fadeInUp}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--accent)]/50 transition-all duration-200 group hover:-translate-y-1 shadow-2xs"
            >
              <div>
                {/* Top Pillar Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] group-hover:bg-[var(--accent-muted)] transition-colors">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)] font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Pillar Title */}
                <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-[var(--accent)] mb-3 font-medium">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                <span>PILLAR // 0{idx + 1}</span>
                <span className="group-hover:text-[var(--text-primary)] transition-colors">EXPLORE →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
