"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectMockupDispatcher } from "@/components/ui/ProjectMockups";
import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      data-cursor="project"
      data-cursor-text={`CASE STUDY →`}
      className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xs hover:shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Project Info Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div>
            {/* Top Meta: Project Number & Category */}
            <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[var(--border-color)]">
              <span className="text-2xl sm:text-3xl font-black font-mono text-[var(--accent)]">
                {project.number}
              </span>
              <span className="text-xs font-mono tracking-wider text-[var(--text-muted)] uppercase">
                {project.category}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors">
              <Link href={`/work/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            {/* Tagline */}
            <p className="text-xs font-mono font-medium text-[var(--accent)] mb-3 uppercase tracking-wider">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
              {project.technologies.slice(0, 6).map((tech) => (
                <Badge key={tech} size="sm" variant="default">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 6 && (
                <Badge size="sm" variant="outline">
                  +{project.technologies.length - 6} more
                </Badge>
              )}
            </div>
          </div>

          {/* Links & CTA Bar */}
          <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group/link"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>

            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5 font-semibold text-[var(--text-primary)]"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB CODE</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Visual Mockup Column */}
        <div
          className={`lg:col-span-7 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Link href={`/work/${project.slug}`} className="block relative overflow-hidden rounded-xl">
            <div className="transform transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              <ProjectMockupDispatcher slug={project.slug} />
            </div>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
