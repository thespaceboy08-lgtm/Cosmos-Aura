"use client";

import React from "react";
import { Sparkles, Radio, Rocket, Telescope, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center px-4 pt-10 pb-16 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-6">
        <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
        <span>L2 Orbit Synchronized</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
        Unveil the Mysteries of the <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
          Deep Cosmos
        </span>
      </h1>

      <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 leading-relaxed">
        Explore interactive spacecraft schematics, unearth anomalies, and read open community-driven astrophysical preprints.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="#instruments"
          className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#030308] font-bold font-mono text-xs tracking-wider flex items-center gap-2 transition-transform hover:-translate-y-0.5"
        >
          JWST Blueprint <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#mysteries"
          className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10"
        >
          Anomalies Hub
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-16 text-left">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-3">
          <Rocket className="w-6 h-6 text-cyan-400 shrink-0" />
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">Next Mission</div>
            <div className="text-sm font-bold text-white">Gaganyaan G1 (ISRO)</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-3">
          <Telescope className="w-6 h-6 text-purple-400 shrink-0" />
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">Observatory Active</div>
            <div className="text-sm font-bold text-white">JWST Deep Field</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">Exoplanets Found</div>
            <div className="text-sm font-bold text-white">5,612 Worlds</div>
          </div>
        </div>
      </div>
    </section>
  );
};
