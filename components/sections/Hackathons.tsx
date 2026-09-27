"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HACKATHONS } from "@/data/hackathons";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";
import { Flame, Trophy, Users, Zap } from "lucide-react";

export function Hackathons() {
  return (
    <section className="py-24 sm:py-32 border-b border-[var(--border-color)] bg-[var(--bg-surface-subtle)]/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          number="05"
          kicker="COMPETITIONS & SPRINTS"
          title="BUILT UNDER PRESSURE."
          description="High-intensity hackathons and ideathons where rapid prototyping, teamwork, and architectural speed were tested against strict deadlines."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {HACKATHONS.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--border-hover)] transition-all duration-300 shadow-2xs hover:shadow-lg group"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-amber-500/10 text-amber-500">
                      <Flame className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--accent)]">
                      {item.year}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {item.name}
                </h3>

                {/* Project Title */}
                <div className="text-xs font-mono font-medium text-[var(--accent)] mb-3 flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  <span>PROJECT: {item.project}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tech.map((t) => (
                    <Badge key={t} size="sm" variant="default">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom Role & Team Tag */}
              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)] font-medium">
                  <Users className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {item.role}
                </span>
                <span className="text-[var(--accent)] font-semibold">SPRINT MVP</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
