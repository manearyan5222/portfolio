"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/personal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[var(--border-color)]">
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)]">
                  AM / 2026
                </span>
                <span className="text-xs font-mono text-emerald-500 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  OPERATIONAL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                {PERSONAL_INFO.name.toUpperCase()}
              </h2>
              <p className="text-sm font-mono text-[var(--text-secondary)] mb-1">
                {PERSONAL_INFO.primaryIdentity}
              </p>
              <p className="text-xs font-mono text-[var(--text-muted)]">
                {PERSONAL_INFO.secondaryIdentity}
              </p>
            </div>

            <div className="mt-8 pt-4">
              <p className="text-sm text-[var(--text-secondary)] max-w-md font-sans italic">
                &ldquo;{PERSONAL_INFO.tagline}&rdquo;
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mb-4">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <Link
                  href="/#work"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                >
                  <span>// 01 WORK</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                >
                  <span>// 02 ABOUT</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#journey"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                >
                  <span>// 03 JOURNEY</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                >
                  <span>// 04 CONTACT</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mb-4">
                CHANNELS
              </h3>
              <ul className="space-y-2.5 font-mono text-xs">
                <li>
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
                {PERSONAL_INFO.socials.twitter && (
                  <li>
                    <a
                      href={PERSONAL_INFO.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>X (TWITTER)</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                )}
                {PERSONAL_INFO.socials.instagram && (
                  <li>
                    <a
                      href={PERSONAL_INFO.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>INSTAGRAM</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.socials.email}`}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>EMAIL DIRECT</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer group w-fit"
            >
              <span>BACK TO TOP</span>
              <span className="p-1 rounded-full border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors">
                <ArrowUp className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            <span>© {new Date().getFullYear()} Aryan Mane. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="tracking-wider uppercase font-semibold text-[var(--text-secondary)]">
              BUILT WITH CURIOSITY.
            </span>
          </div>
          <div className="text-[11px]">
            <span>DESIGNED & ENGINEERED IN INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
