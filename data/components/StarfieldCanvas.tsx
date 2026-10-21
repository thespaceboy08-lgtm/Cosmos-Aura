"use client";

import React, { useEffect, useRef } from "react";

export const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const stars = Array.from({ length: 240 }, () => ({
      x: (Math.random() - 0.5) * w * 2,
      y: (Math.random() - 0.5) * h * 2,
      z: Math.random() * w,
      size: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.fillStyle = "#030308";
      ctx.fillRect(0, 0, w, h);

      for (let s of stars) {
        s.z -= 0.6;
        if (s.z <= 0) {
          s.z = w;
          s.x = (Math.random() - 0.5) * w * 2;
          s.y = (Math.random() - 0.5) * h * 2;
        }

        const k = 220 / s.z;
        const px = s.x * k + w / 2;
        const py = s.y * k + h / 2;

        if (px >= 0 && px <= w && py >= 0 && py <= h) {
          const alpha = Math.min(1, 1 - s.z / w);
          ctx.beginPath();
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = alpha;
          ctx.arc(px, py, s.size * k * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
