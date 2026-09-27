"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO } from "@/data/personal";

const NAV_LINKS = [
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/#about" },
  { label: "JOURNEY", href: "/#journey" },
  { label: "CONTACT", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-color)] py-3 shadow-xs"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand & Status */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="group flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              <span>{PERSONAL_INFO.name.toUpperCase()}</span>
            </Link>

            {/* Live Status Badge */}
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-[10px] font-mono tracking-wide text-[var(--text-secondary)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status.text}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-xs font-mono tracking-widest text-[var(--text-secondary)]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative py-1 hover:text-[var(--text-primary)] transition-colors group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="h-4 w-[1px] bg-[var(--border-color)]" />

            {/* Quick Resume/Contact link & Theme Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1 transition-colors"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[var(--bg-primary)]/98 backdrop-blur-xl border-b border-[var(--border-color)] px-6 py-8 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {/* Mobile Status */}
              <div className="flex items-center gap-2 pb-4 border-b border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PERSONAL_INFO.status.text}</span>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-lg font-mono font-medium text-[var(--text-primary)] hover:text-[var(--accent)] border-b border-[var(--border-color)]/50"
                  >
                    <span>0{idx + 1} // {link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
                  </Link>
                ))}
              </nav>

              {/* Social Links on mobile */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  GITHUB ↗
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  EMAIL ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
