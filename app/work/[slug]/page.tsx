import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS, Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectMockupDispatcher } from "@/components/ui/ProjectMockups";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Lightbulb,
  Sparkles,
  Zap,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Aryan Mane",
    };
  }

  return {
    title: `${project.title} — Case Study | Aryan Mane`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study | Aryan Mane`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <main className="min-h-screen pt-28 sm:pt-36 pb-24">
      {/* Top Breadcrumb & Return Nav */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO SELECTED WORK</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="pb-8 border-b border-[var(--border-color)]">
          {/* Top Meta: Number, Category, Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono font-bold text-[var(--accent)]">
                // PROJECT {project.number}
              </span>
              <span className="text-[var(--border-color)]">·</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--text-secondary)]">
                {project.year}
              </span>
              <span className="px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                {project.status}
              </span>
            </div>
          </div>

          {/* Project Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            {project.title}
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-xl font-mono text-[var(--accent)] font-medium max-w-3xl mb-6">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              href="https://github.com/aryanmane"
              external
              size="md"
              variant="primary"
            >
              <GithubIcon className="w-4 h-4" />
              <span>VIEW GITHUB PROFILE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Visual Simulation Showcase */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 mb-16 sm:mb-20">
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-2 sm:p-4 shadow-xl">
          <ProjectMockupDispatcher slug={project.slug} />
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] px-1">
          <span>INTERACTIVE SYSTEM INTERFACE PREVIEW</span>
          <span>ROLE: {project.role.toUpperCase()}</span>
        </div>
      </div>

      {/* Main Narrative Content Grid */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Deep Narrative */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
                <Sparkles className="w-4 h-4" />
                <span>01 // OVERVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                About the Project
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                {project.overview}
              </p>
            </section>

            {/* The Problem & The Idea */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Problem */}
              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider mb-2">
                    THE CHALLENGE
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                    The Problem
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.theProblem}
                  </p>
                </div>
              </div>

              {/* Idea */}
              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
                    THE APPROACH
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                    The Idea & Solution
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.theIdea}
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works: Step-by-Step */}
            <section className="space-y-6 pt-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
                <Cpu className="w-4 h-4" />
                <span>02 // ARCHITECTURE & WORKFLOW</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                How It Works
              </h2>

              <div className="space-y-4">
                {project.howItWorks.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 sm:p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] flex gap-4 sm:gap-6 items-start"
                  >
                    <span className="text-xl sm:text-2xl font-black font-mono text-[var(--accent)] shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section className="space-y-6 pt-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
                <Zap className="w-4 h-4" />
                <span>03 // CORE CAPABILITIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                Key Features
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-6">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* What I Learned */}
            <section className="space-y-6 pt-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>04 // TAKEAWAYS & LESSONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                What I Learned
              </h2>

              <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface-subtle)]/60 space-y-3">
                {project.whatILearned.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                  >
                    <span className="font-mono text-xs font-bold text-[var(--accent)] shrink-0 mt-0.5">
                      [0{idx + 1}]
                    </span>
                    <span>{lesson}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar with Tech Stack & Details */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Tech Stack Card */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 shadow-xs">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[var(--border-color)]">
                  <Layers className="w-4 h-4 text-[var(--accent)]" />
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--text-primary)] uppercase">
                    TECHNOLOGIES USED
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} size="md" variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Technical Highlights */}
                <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
                  <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    TECHNICAL HIGHLIGHTS
                  </div>
                  {project.technicalHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="text-xs font-mono text-[var(--text-secondary)] flex items-start gap-1.5"
                    >
                      <span className="text-[var(--accent)]">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Metadata Card */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 text-xs font-mono space-y-3">
                <div className="flex justify-between pb-2 border-b border-[var(--border-color)]">
                  <span className="text-[var(--text-muted)]">TIMEFRAME:</span>
                  <span className="text-[var(--text-primary)] font-bold">{project.year}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[var(--border-color)]">
                  <span className="text-[var(--text-muted)]">STATUS:</span>
                  <span className="text-emerald-500 font-bold">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">MY ROLE:</span>
                  <span className="text-[var(--text-primary)] font-bold">{project.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Prev / Next Navigation Bar */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 mt-20 sm:mt-28 pt-10 border-t border-[var(--border-color)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Previous Project */}
          <Link
            href={`/work/${prevProject.slug}`}
            className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)]/40 transition-colors group flex items-center justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase mb-1 flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS BUILD</span>
              </div>
              <div className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {prevProject.title}
              </div>
            </div>
            <span className="text-xl font-black font-mono text-[var(--text-muted)]">
              {prevProject.number}
            </span>
          </Link>

          {/* Next Project */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)]/40 transition-colors group flex items-center justify-between text-right"
          >
            <span className="text-xl font-black font-mono text-[var(--text-muted)]">
              {nextProject.number}
            </span>
            <div>
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase mb-1 flex items-center justify-end gap-1">
                <span>NEXT BUILD</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {nextProject.title}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
