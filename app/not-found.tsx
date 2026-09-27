import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center py-20 px-5 sm:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--accent)]">
          <Terminal className="w-3.5 h-3.5" />
          <span>ERROR // 404_NOT_FOUND</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-[var(--text-primary)]">
          404
        </h1>

        <p className="text-lg sm:text-xl font-medium text-[var(--text-primary)]">
          Looks like this page got lost.
        </p>

        <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
          The requested coordinate or project file doesn&apos;t exist in this directory.
        </p>

        <div className="pt-4">
          <MagneticButton href="/" size="lg" variant="primary">
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </MagneticButton>
        </div>
      </div>
    </main>
  );
}
