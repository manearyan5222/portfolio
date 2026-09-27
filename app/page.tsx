import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { About } from "@/components/sections/About";
import { Personality } from "@/components/sections/Personality";
import { Skills } from "@/components/sections/Skills";
import { Hackathons } from "@/components/sections/Hackathons";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 01. Hero Section */}
      <Hero />

      {/* 02. Verified Stats Strip */}
      <Stats />

      {/* 03. Selected Work (5-6 Projects & Mini Case Study Links) */}
      <SelectedWork />

      {/* 04. Editorial About & Focus Areas */}
      <About />

      {/* 05. Personality ("Beyond the Code" 4 Pillars) */}
      <Personality />

      {/* 06. Categorized Skills Wall */}
      <Skills />

      {/* 07. Hackathons ("Built Under Pressure") */}
      <Hackathons />

      {/* 08. The Journey (Chronological Milestones) */}
      <Journey />

      {/* 09. Contact ("Have an Idea? Let's Build It.") */}
      <Contact />
    </main>
  );
}
