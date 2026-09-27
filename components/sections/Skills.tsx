"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Code, Cpu, Terminal } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (categoryNumber: string) => {
    switch (categoryNumber) {
      case "01":
        return <Code className="w-4 h-4 text-[var(--accent)]" />;
      case "02":
        return <Cpu className="w-4 h-4 text-emerald-500" />;
      case "03":
        return <Terminal className="w-4 h-4 text-amber-500" />;
      default:
        return <Code className="w-4 h-4 text-[var(--accent)]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          number="04"
          kicker="TECHNICAL CAPABILITIES"
          title="SKILLS & TOOLCHAIN."
          description="Technologies, frameworks, and developer tools applied in practical builds and prototypes. No arbitrary percentages — just hands-on competence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.name}
              variants={fadeInUp}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[var(--border-hover)] transition-colors"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[var(--bg-surface-subtle)]">
                      {getCategoryIcon(category.categoryNumber)}
                    </span>
                    <h3 className="text-sm font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-[var(--accent)]">
                    //{category.categoryNumber}
                  </span>
                </div>

                {/* Category Summary */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {category.description}
                </p>

                {/* Skill Wall Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                        skill.highlight
                          ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium shadow-xs"
                          : "bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent)]/40"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Level Indicator Note */}
              <div className="mt-8 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-primary)]" />
                  KEY FOCUS
                </span>
                <span>APPLIED PRACTICALLY</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
