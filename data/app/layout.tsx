import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CosmosAura | Deep Space Exploration Portal",
  description: "Space telemetry, JWST schematics, and open astrophysics community preprints.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030308] text-slate-100">{children}</body>
    </html>
  );
}
