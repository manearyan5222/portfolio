"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/personal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";
import { formatTime } from "@/lib/utils";

export function Hero() {
  const [time, setTime] = useState<string>("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTime(formatTime());
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 35;
    const y = (clientY - (top + height / 2)) / 35;
    setMousePosition({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden border-b border-[var(--border-color)]"
    >
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 subtle-grid-pattern pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6 sm:py-10">
          {/* Left / Main Typography Column (Dominant) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col justify-center"
          >
            {/* Small Kicker / Identity Label */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] shadow-2xs">
                {PERSONAL_INFO.primaryIdentity}
              </span>
              <span className="text-[var(--text-muted)] text-xs font-mono">
                // {PERSONAL_INFO.secondaryIdentity}
              </span>
            </motion.div>

            {/* Giant Editorial Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] xl:text-[6.5rem] font-extrabold tracking-tight text-[var(--text-primary)] leading-[0.95] mb-6 sm:mb-8"
            >
              <span className="block">I BUILD</span>
              <span className="block">
                <span className="font-editorial italic font-normal text-[var(--accent)] tracking-normal mr-2">
                  ideas
                </span>
                INTO
              </span>
              <span className="block">TECHNOLOGY.</span>
            </motion.h1>

            {/* Narrative Supporting Copy */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10"
            >
              {PERSONAL_INFO.heroCopy}
            </motion.p>

            {/* CTAs and Direct Links */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <MagneticButton
                href="#work"
                size="lg"
                variant="primary"
                className="group"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                size="lg"
                variant="secondary"
                className="group"
              >
                <span>LET&apos;S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </motion.div>

            {/* Quick Channel Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 text-xs font-mono text-[var(--text-secondary)] pt-2"
            >
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
              <span className="text-[var(--border-color)]">/</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
              </a>
              <span className="text-[var(--border-color)]">/</span>
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right / Hero Builder Digital ID Card (Interactive Visual Artifact) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 shadow-xl relative overflow-hidden backdrop-blur-sm group hover:border-[var(--accent)]/50 transition-colors">
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--accent)] via-indigo-500 to-sky-400" />

              {/* Card Header: Monogram & ID */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-color)]">
                <div>
                  <div className="text-[10px] font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                    BUILDER SPECIFICATION
                  </div>
                  <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
                    #AM-2026-DEV
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[10px] font-mono text-[var(--text-secondary)] border border-[var(--border-color)]">
                  VERIFIED
                </div>
              </div>

              {/* Identity Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent)] font-medium">
                    {PERSONAL_INFO.primaryIdentity}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-[var(--text-secondary)]">
                    <span>LOCATION:</span>
                    <span className="text-[var(--text-primary)] font-semibold">{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex justify-between text-[var(--text-secondary)]">
                    <span>TIMEZONE:</span>
                    <span className="text-[var(--text-primary)] font-semibold">{time || "IST (UTC+5:30)"}</span>
                  </div>
                  <div className="flex justify-between text-[var(--text-secondary)]">
                    <span>STATUS:</span>
                    <span className="text-emerald-500 font-semibold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      AVAILABLE FOR PROJECTS
                    </span>
                  </div>
                </div>
              </div>

              {/* Focus Pillars Chips */}
              <div className="pt-4 border-t border-[var(--border-color)]">
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>PRIMARY DOMAINS</span>
                  <Sparkles className="w-3 h-3 text-[var(--accent)]" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                    Computer Vision
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                    Generative AI
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                    Next.js
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                    PyTorch
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                    ESP32 IoT
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-[var(--border-color)]/60 flex items-center justify-between text-[9px] font-mono text-[var(--text-muted)]">
                <span>IDENTITY // #AM-2026</span>
                <span>AUTHENTIC BUILDER</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-6 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors group cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[var(--accent)] animate-bounce" />
        </a>

        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span>01 // 05 SECTIONS</span>
          <span>·</span>
          <span>PRODUCTION-READY PORTFOLIO</span>
        </div>
      </motion.div>
    </section>
  );
}
