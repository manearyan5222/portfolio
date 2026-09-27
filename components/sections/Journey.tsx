"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JOURNEY } from "@/data/journey";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CheckCircle2, ChevronRight, Milestone } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          number="06"
          kicker="TIMELINE & MILESTONES"
          title="THE JOURNEY."
          description="A chronological look at my development progression, key learning phases, and technical evolution."
        />

        <div className="relative border-l border-[var(--border-color)] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {JOURNEY.map((item, index) => (
            <motion.div
              key={item.period + item.role}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-primary)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-300 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 group-hover:bg-white transition-opacity" />
              </div>

              {/* Timeline Content Card */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 hover:border-[var(--border-hover)] transition-all duration-200 shadow-2xs">
                {/* Period & Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[var(--border-color)]">
                  <span className="text-sm font-mono font-black text-[var(--accent)]">
                    {item.period}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--text-secondary)]">
                    {item.tag}
                  </span>
                </div>

                {/* Role & Organization */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-1">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] mb-4">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-[var(--border-color)]/60">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    KEY HIGHLIGHTS
                  </div>
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)]"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
