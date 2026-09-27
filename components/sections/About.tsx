"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/personal";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, Compass, Layers, Terminal, Wrench } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          number="02"
          kicker="BACKGROUND & PHILOSOPHY"
          title="A LITTLE ABOUT ME."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative (Left) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed"
          >
            <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-[var(--text-primary)] font-medium leading-snug">
              I&apos;m Aryan — a student developer exploring the intersection of AI, software and product development.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Most of my learning happens by building. Rather than spending weeks studying theory in isolation, I like taking an idea from a rough concept, experimenting with technology, and turning it into something people can actually interact with.
            </motion.p>

            <motion.p variants={fadeInUp}>
              My projects span computer vision event-detection pipelines, IoT remote patient telemetry, signal processing concepts on microcontrollers, and full-stack web applications. I enjoy the process of solving practical engineering puzzles: optimizing inference speeds, wrangling sensor noise, and creating clean, intuitive user interfaces.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-primary)] flex items-start gap-3"
            >
              <Terminal className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[var(--accent)]">// CORE MINDSET: </span>
                <span className="text-[var(--text-secondary)]">
                  &ldquo;I build ideas into practical technology.&rdquo; Not driven by hype, but by the tangible excitement of seeing code transform into functional tools.
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Currently Exploring & Focus Areas (Right) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[var(--accent)]" />
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--text-primary)] uppercase">
                    CURRENTLY EXPLORING
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">ACTIVE FOCUS</span>
              </div>

              <div className="space-y-3">
                {PERSONAL_INFO.currentlyExploring.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] hover:border-[var(--accent)]/40 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-mono font-medium text-[var(--text-primary)]">
                      {topic}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--accent)] font-semibold">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learning stats box */}
              <div className="mt-6 pt-6 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>APPROACH: RAPID PROTOTYPING</span>
                <span className="text-emerald-500 font-semibold">● ACTIVE LEARNER</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
