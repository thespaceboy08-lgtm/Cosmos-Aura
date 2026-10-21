"use client";

import React, { useState } from "react";
import { Orbit, Compass, Cpu, FileText, Menu, X } from "lucide-react";

export const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Overview", href: "#hero", icon: Orbit },
    { label: "Cosmic Hub", href: "#mysteries", icon: Compass },
    { label: "JWST Blueprint", href: "#instruments", icon: Cpu },
    { label: "Research Lab", href: "#research", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 lg:px-8 py-3.5 backdrop-blur-xl bg-[#030308]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center p-0.5">
            <div className="w-full h-full bg-[#030308] rounded-[6px] flex items-center justify-center">
              <Orbit className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <span className="text-lg font-bold tracking-wider text-white font-mono">
            COSMOS<span className="text-cyan-400">AURA</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1.5 bg-[#070714] px-3 py-1.5 rounded-full border border-white/10">
          {links.map((link) => {
            const Icon = link.icon;
            const active = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  active ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#research"
          className="hidden md:inline-block text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#030308] font-mono transition-all"
        >
          Submit Paper
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-300">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 p-4 rounded-xl bg-[#070714] border border-white/10 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
