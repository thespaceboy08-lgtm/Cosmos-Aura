"use client";

import React, { useState } from "react";
import { ARTICLES, Article } from "@/data/mockData";
import { Search, Clock, Calendar, ArrowUpRight, X } from "lucide-react";

export const MysteriesHub: React.FC = () => {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Article | null>(null);

  const categories = ["All", "Mysteries", "History", "Cosmology"];

  const filtered = ARTICLES.filter((a) => {
    const matchCat = cat === "All" || a.category === cat;
    const matchQ = a.title.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <section id="mysteries" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Cosmic Dossiers</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Anomalies & Space History</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 pr-3 py-1.5 bg-[#070714] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-1 bg-[#070714] p-1 rounded-lg border border-white/10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-1 rounded text-xs transition-all ${
                  cat === c ? "bg-cyan-400 text-black font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item)}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer backdrop-blur-sm group"
          >
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-3">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {item.category}
              </span>
              <div className="flex gap-3">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
              {item.summary}
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs font-mono text-cyan-400">
              Read Briefing <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-[#070714] border border-white/20 rounded-2xl p-6 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 p-1 rounded-lg bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-cyan-400 uppercase">{active.category}</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-3">{active.title}</h2>
            <div className="text-xs font-mono text-slate-400 mb-6">{active.date} • {active.readTime}</div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">{active.fullContent}</p>
          </div>
        </div>
      )}
    </section>
  );
};
