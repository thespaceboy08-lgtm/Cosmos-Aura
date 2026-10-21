"use client";

import React, { useState } from "react";
import { RESEARCH_PAPERS, ResearchPaper } from "@/data/mockData";
import { FileText, Download, Check, X, PlusCircle } from "lucide-react";

export const ResearchPortal: React.FC = () => {
  const [papers, setPapers] = useState<ResearchPaper[]>(RESEARCH_PAPERS);
  const [modalOpen, setModalOpen] = useState(false);
  const [downloaded, setDownloaded] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [institution, setInstitution] = useState("");
  const [abstract, setAbstract] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author || !institution || !abstract) return;

    const newPaper: ResearchPaper = {
      id: `p-${Date.now()}`,
      title,
      author,
      institution,
      category: "Community",
      date: "Just Now",
      downloads: 1,
      abstract,
    };

    setPapers([newPaper, ...papers]);
    setModalOpen(false);
    setTitle("");
    setAuthor("");
    setInstitution("");
    setAbstract("");
  };

  const handleDownload = (id: string) => {
    setDownloaded(id);
    setPapers((prev) => prev.map((p) => (p.id === id ? { ...p, downloads: p.downloads + 1 } : p)));
    setTimeout(() => setDownloaded(null), 2000);
  };

  return (
    <section id="research" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Open Astrophysics Repository</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Community Research Papers</h2>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-mono font-bold flex items-center gap-2 self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" /> Submit Paper
        </button>
      </div>

      <div className="space-y-3">
        {papers.map((p) => (
          <div
            key={p.id}
            className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div className="space-y-1">
              <div className="flex gap-2 text-xs font-mono text-slate-400">
                <span className="text-purple-300">[{p.category}]</span>
                <span>•</span>
                <span>{p.author} ({p.institution})</span>
              </div>
              <h3 className="text-base font-bold text-white">{p.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-1">{p.abstract}</p>
            </div>

            <button
              onClick={() => handleDownload(p.id)}
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 flex items-center gap-2 shrink-0"
            >
              {downloaded === p.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              {downloaded === p.id ? "Downloaded" : "PDF"} ({p.downloads})
            </button>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#070714] border border-white/20 rounded-2xl p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-white mb-4">Submit Research Manuscript</h3>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs font-mono">
              <input
                type="text"
                required
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2.5 bg-[#030308] border border-white/10 rounded-lg text-white"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full p-2.5 bg-[#030308] border border-white/10 rounded-lg text-white"
                />
                <input
                  type="text"
                  required
                  placeholder="Institution"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full p-2.5 bg-[#030308] border border-white/10 rounded-lg text-white"
                />
              </div>
              <textarea
                required
                rows={3}
                placeholder="Abstract..."
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                className="w-full p-2.5 bg-[#030308] border border-white/10 rounded-lg text-white font-sans text-xs"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-cyan-400 text-black font-bold font-mono"
              >
                Submit Preprint
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
