"use client";

import React, { useState, useEffect } from "react";
import { StarfieldCanvas } from "@/components/StarfieldCanvas";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MysteriesHub } from "@/components/MysteriesHub";
import { SpacecraftExplainer } from "@/components/SpacecraftExplainer";
import { ResearchPortal } from "@/components/ResearchPortal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "mysteries", "instruments", "research"];
      const scrollPos = window.scrollY + 200;

      for (let s of sections) {
        const el = document.getElementById(s);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100">
      <StarfieldCanvas />
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <MysteriesHub />
          <SpacecraftExplainer />
          <ResearchPortal />
        </main>
        <footer className="py-8 text-center text-xs font-mono text-slate-500 border-t border-white/10">
          COSMOSAURA ARCHIVE © {new Date().getFullYear()} — Open Astrophysics Portal
        </footer>
      </div>
    </div>
  );
}
