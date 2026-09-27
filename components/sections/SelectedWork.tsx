"use client";

import React from "react";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 sm:py-32 border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="01"
            kicker="PORTFOLIO & EXPERIMENTS"
            title="SELECTED WORK."
            description="A curated selection of systems, prototypes, and applications built while exploring AI, computer vision, IoT telemetry, and modern web platforms."
            className="mb-0"
          />

          <div className="hidden lg:flex flex-col items-end text-xs font-mono text-[var(--text-muted)] space-y-1">
            <span>SHOWCASING 06 CORE BUILDS</span>
            <span className="text-[var(--accent)]">CLICK TO READ MINI CASE STUDIES ↗</span>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-[var(--text-secondary)] text-center sm:text-left">
            <span className="text-[var(--text-primary)] font-semibold">LOOKING FOR MORE EXPERIMENTS?</span> Check out my GitHub for exploratory scripts, hackathon repos, and active sandbox code.
          </div>
          <a
            href="https://github.com/aryanmane"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent)] hover:text-white transition-colors font-semibold"
          >
            <span>VIEW GITHUB REPOSITORIES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
