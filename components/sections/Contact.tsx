"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/personal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { LinkedinIcon } from "@/components/ui/Icons";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import confetti from "canvas-confetti";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#4F46E5", "#6366F1", "#38BDF8"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Open mailto link with prefilled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Aryan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.socials.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Giant Typography & Direct Channels */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Kicker */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--accent)] font-semibold">
                  // 07 CONTACT & COLLABORATION
                </span>
              </motion.div>

              {/* Giant Editorial Heading */}
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[0.98] mb-6"
              >
                <span>HAVE AN IDEA?</span>
                <span className="block font-editorial italic font-normal text-[var(--accent)] mt-1">
                  let&apos;s build it.
                </span>
              </motion.h2>

              {/* Supporting Text */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl font-normal leading-relaxed mb-8 sm:mb-10"
              >
                Open to interesting projects, collaborations, internships, hackathon teams, and conversations around AI, computer vision, and emerging software.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <MagneticButton
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  size="lg"
                  variant="primary"
                  className="group"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL DIRECTLY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>

                <MagneticButton
                  href={PERSONAL_INFO.socials.linkedin}
                  external
                  size="lg"
                  variant="secondary"
                  className="group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </MagneticButton>
              </motion.div>
            </div>

            {/* Email Copier Card */}
            <motion.div
              variants={fadeInUp}
              className="p-4 sm:p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center justify-between gap-4 max-w-lg shadow-xs"
            >
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                  DIRECT EMAIL ADDRESS
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[var(--text-primary)] truncate">
                  {PERSONAL_INFO.socials.email}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 shrink-0 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Fast Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[var(--accent)]" />
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[var(--text-primary)] uppercase">
                    SEND A MESSAGE
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  DIRECT TO INBOX
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">
                    Opening Mail Client...
                  </h4>
                  <p className="text-xs font-mono text-[var(--text-secondary)]">
                    Thanks for reaching out! You can also write directly to{" "}
                    <span className="text-[var(--accent)]">{PERSONAL_INFO.socials.email}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-[var(--accent)] underline cursor-pointer pt-2"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                    >
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] text-[var(--text-primary)] text-sm font-sans focus:border-[var(--accent)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                    >
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] text-[var(--text-primary)] text-sm font-sans focus:border-[var(--accent)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5"
                    >
                      PROJECT / MESSAGE
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project, idea, or what you'd like to collaborate on..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] text-[var(--text-primary)] text-sm font-sans focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent)] hover:text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>SEND MESSAGE VIA EMAIL</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
