export interface Article {
  id: string;
  title: string;
  category: "Mysteries" | "History" | "Cosmology" | "Missions";
  readTime: string;
  date: string;
  summary: string;
  fullContent: string;
}

export interface SpacecraftComponent {
  id: string;
  svgTargetId: string;
  name: string;
  subsystem: string;
  specs: { [key: string]: string };
  description: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  author: string;
  institution: string;
  date: string;
  abstract: string;
  category: string;
  downloads: number;
}

export const ARTICLES: Article[] = [
  {
    id: "wow-signal",
    title: "Deciphering the 1977 Wow! Signal in Modern Astrophysics",
    category: "Mysteries",
    readTime: "7 min read",
    date: "Feb 14, 2025",
    summary: "A 72-second narrow-band burst detected by the Big Ear radio telescope remains one of SETI's greatest enigmas.",
    fullContent: "On August 15, 1977, Ohio State University's Big Ear radio telescope registered a 72-second radio frequency pulse at 1420.4556 MHz (neutral hydrogen frequency). Astronomer Jerry Ehman famously circled the printout with 'Wow!'. To this day, no repeated signal has ever been verified in that constellation sector.",
  },
  {
    id: "voyager-interstellar",
    title: "Voyager 1: Crossing the Heliopause into the Interstellar Abyss",
    category: "History",
    readTime: "9 min read",
    date: "Jan 28, 2025",
    summary: "Launched in 1977, Voyager 1 pierced the boundary where the solar wind gives way to the cold interstellar medium.",
    fullContent: "On August 25, 2012, Voyager 1 became the first human-made artifact to pierce the heliopause at 121 AU from the Sun. Particle counts dropped drastically as cosmic ray radiation surged, marking humanity's arrival in interstellar space.",
  },
  {
    id: "dark-energy-expansion",
    title: "The Hubble Tension: Is Our Standard Lambda-CDM Cosmology Broken?",
    category: "Cosmology",
    readTime: "11 min read",
    date: "Feb 02, 2025",
    summary: "Discrepancies between Cosmic Microwave Background data and local Cepheid measurements suggest physics beyond the Standard Model.",
    fullContent: "Planck CMB models calculate Hubble's constant at 67.4 km/s/Mpc, while SH0ES local distance measurements show 73.04 km/s/Mpc. This irreconcilable 5-sigma discrepancy may point toward early dark energy or unknown sterile neutrinos.",
  },
  {
    id: "great-attractor",
    title: "The Great Attractor: Monolithic Gravity Behind the Milky Way",
    category: "Mysteries",
    readTime: "6 min read",
    date: "Jan 19, 2025",
    summary: "Obscured by the Zone of Avoidance, an unseen gravity anomaly pulls our entire Laniakea Supercluster toward it.",
    fullContent: "Millions of galaxies are moving at 600 km/s toward the Centaurus constellation. Behind the dust lane of the Milky Way lies the Norma Cluster, though its mass alone cannot explain this massive gravitational pull.",
  },
];

export const JWST_COMPONENTS: SpacecraftComponent[] = [
  {
    id: "primary-mirror",
    svgTargetId: "jwst-mirror",
    name: "Primary Mirror Array",
    subsystem: "Optical Telescope Element",
    specs: {
      Diameter: "6.5 Meters",
      Segments: "18 Beryllium Hexagons",
      Coating: "100 nm Pure Gold",
      Mass: "20.1 kg per segment",
    },
    description: "Constructed from beryllium for cryogenic stability (-233°C). The gold vapor coat maximizes infrared light collection from the earliest cosmic dawn.",
  },
  {
    id: "sunshield",
    svgTargetId: "jwst-shield",
    name: "Five-Layer Sunshield",
    subsystem: "Thermal Protection",
    specs: {
      Dimensions: "21.2m x 14.2m",
      Material: "Kapton Polyimide",
      Layers: "5 Vacuum-separated sheets",
      "Cold-Side Temp": "36 Kelvin (-237°C)",
    },
    description: "Blocks heat radiation from the Sun, Earth, and Moon, providing a 300+ Kelvin drop without requiring mechanical refrigeration.",
  },
  {
    id: "secondary-mirror",
    svgTargetId: "jwst-secondary",
    name: "Secondary Mirror",
    subsystem: "Optical Train",
    specs: {
      Diameter: "0.74 Meters",
      BoomLength: "7.6m Carbon Composite",
      Alignment: "6-DOF Hexapod",
      Tolerance: "10 Nanometers",
    },
    description: "Suspended on three carbon composite struts. It captures the light from the 18 primary segments and reflects it directly into the central instruments.",
  },
  {
    id: "spacecraft-bus",
    svgTargetId: "jwst-bus",
    name: "Spacecraft Bus",
    subsystem: "Avionics & Propulsion",
    specs: {
      Orbit: "Sun-Earth L2 (1.5M km)",
      Downlink: "Ka-band 25.9–27.0 GHz",
      Propellant: "Hydrazine & N2O4",
      Pointing: "0.001 Arcseconds",
    },
    description: "Houses power storage, solar array electronics, reaction wheels, communications dishes, and Star Trackers.",
  },
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "p1",
    title: "Atmospheric Characterization of Sub-Neptune TOI-270 d via NIRISS",
    author: "Elena Rostova",
    institution: "Cambridge Cavendish Lab",
    date: "Jan 2025",
    category: "Exoplanets",
    downloads: 342,
    abstract: "Transmission spectra reveal clear signatures of carbon dioxide and methane with minimal ammonia, pointing to a potential oceanic water-world.",
  },
  {
    id: "p2",
    title: "Relativistic Magnetohydrodynamic Jet Collimation in Blazar TXS 0506+056",
    author: "K. S. Narayanan & D. Chen",
    institution: "IUCAA",
    date: "Dec 2024",
    category: "High Energy",
    downloads: 519,
    abstract: "High-frequency radio observations showcase helical magnetic field stabilization along parsec-scale cosmic ray corridors.",
  },
  {
    id: "p3",
    title: "Autonomous Closed-Loop Descent Guidance for Lunar Polar Craters",
    author: "Aarav Sharma",
    institution: "ISRO Space Applications Centre",
    date: "Feb 2025",
    category: "Astrodynamics",
    downloads: 871,
    abstract: "Presents real-time convex optimization algorithms for hazard-avoidance pinpoint landings in permanently shadowed regions.",
  },
];
