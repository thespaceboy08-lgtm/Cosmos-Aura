"use client";

import React, { useState } from "react";
import anime from "animejs";
import { JWST_COMPONENTS, SpacecraftComponent } from "@/data/mockData";
import { Cpu, Info, CheckCircle2 } from "lucide-react";

export const SpacecraftExplainer: React.FC = () => {
  const [selected, setSelected] = useState<SpacecraftComponent>(JWST_COMPONENTS[0]);

  const handleSelect = (component: SpacecraftComponent) => {
    setSelected(component);
    anime({
      targets: `#${component.svgTargetId}`,
      scale: [1, 1.05, 1],
      strokeWidth: ["2px", "4px", "2px"],
      easing: "easeInOutQuad",
      duration: 600,
    });
  };

  return (
    <section id="instruments" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Sub-Systems Explorer</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">James Webb Space Telescope (JWST)</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SVG Blueprint */}
        <div className="lg:col-span-7 bg-[#070714] border border-white/10 rounded-2xl p-6 flex flex-col items-center">
          <svg viewBox="0 0 500 380" className="w-full max-w-[420px] my-auto">
            {/* Sunshield */}
            <polygon
              id="jwst-shield"
              points="250,160 450,210 250,260 50,210"
              onClick={() => handleSelect(JWST_COMPONENTS[1])}
              className="cursor-pointer transition-all"
              fill={selected.svgTargetId === "jwst-shield" ? "rgba(56,189,248,0.3)" : "rgba(255,255,255,0.06)"}
              stroke={selected.svgTargetId === "jwst-shield" ? "#38bdf8" : "#94a3b8"}
              strokeWidth="2"
            />
            {/* Bus */}
            <rect
              id="jwst-bus"
              x="225"
              y="260"
              width="50"
              height="40"
              rx="4"
              onClick={() => handleSelect(JWST_COMPONENTS[3])}
              className="cursor-pointer"
              fill={selected.svgTargetId === "jwst-bus" ? "rgba(168,85,247,0.3)" : "rgba(255,255,255,0.1)"}
              stroke={selected.svgTargetId === "jwst-bus" ? "#a855f7" : "#64748b"}
              strokeWidth="2"
            />
            {/* Mirror Hexagons */}
            <g id="jwst-mirror" onClick={() => handleSelect(JWST_COMPONENTS[0])} className="cursor-pointer">
              <polygon
                points="250,60 300,90 300,150 250,180 200,150 200,90"
                fill={selected.svgTargetId === "jwst-mirror" ? "rgba(245,158,11,0.35)" : "rgba(245,158,11,0.12)"}
                stroke={selected.svgTargetId === "jwst-mirror" ? "#f59e0b" : "#d97706"}
                strokeWidth="2"
              />
            </g>
            {/* Secondary Mirror Boom */}
            <g id="jwst-secondary" onClick={() => handleSelect(JWST_COMPONENTS[2])} className="cursor-pointer">
              <line x1="250" y1="60" x2="250" y2="20" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="205" y1="120" x2="250" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="295" y1="120" x2="250" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
              <circle cx="250" cy="20" r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
            </g>
          </svg>

          {/* Selector pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-4">
            {JWST_COMPONENTS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`py-2 px-2 rounded-lg text-xs font-mono transition-all border ${
                  selected.id === item.id
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {item.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Specs Display */}
        <div className="lg:col-span-5 bg-[#070714] border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-4">
            <div>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">{selected.subsystem}</span>
              <h3 className="text-xl font-bold text-white mt-0.5">{selected.name}</h3>
            </div>
            <Info className="w-5 h-5 text-cyan-400" />
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
            {selected.description}
          </p>

          <div className="bg-[#030308] border border-white/5 rounded-xl p-3.5 space-y-2 mb-4 font-mono text-xs">
            {Object.entries(selected.specs).map(([key, val]) => (
              <div key={key} className="flex justify-between">
                <span className="text-slate-500">{key}</span>
                <span className="text-cyan-300 font-semibold">{val}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> Operational telemetry locked
          </div>
        </div>
      </div>
    </section>
  );
};
