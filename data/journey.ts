export interface JourneyItem {
  period: string;
  role: string;
  organization: string;
  tag: string;
  description: string;
  highlights: string[];
}

export const JOURNEY: JourneyItem[] = [
  {
    period: "2026",
    role: "AI & Full-Stack Development",
    organization: "Independent Projects & Applied Research",
    tag: "Current Focus",
    description:
      "Deepening focus on computer vision pipelines, multi-modal LLM applications, and scalable full-stack web platforms. Building Sentinel AI and experimental terrain evaluation workflows.",
    highlights: [
      "Architected Sentinel AI real-time event detection system",
      "Benchmarked local quantized LLMs on edge devices",
      "Explored WebRTC & WebSocket streaming architectures",
    ],
  },
  {
    period: "2025 – 2026",
    role: "Hackathons & Ideathons",
    organization: "National & University Competitions",
    tag: "Competitions",
    description:
      "Formed cross-functional teams to build practical technology solutions under strict 24-to-36-hour time constraints, focusing on healthcare IoT and computer vision.",
    highlights: [
      "Smart India Hackathon (SIH) team project development",
      "Prototyped SmartCare IoT telemetry platform",
      "Designed rapid UI/UX and functional software MVPs",
    ],
  },
  {
    period: "2024 – PRESENT",
    role: "Computer Engineering Student",
    organization: "Undergraduate Degree",
    tag: "Education",
    description:
      "Studying core computer science fundamentals including Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management, and Computer Networks.",
    highlights: [
      "Strengthened mathematical foundations in linear algebra & calculus for ML",
      "Active participant in developer clubs, tech workshops, and hackathons",
      "Peer mentoring and collaborative software projects",
    ],
  },
  {
    period: "2023 – 2024",
    role: "First Code to Real Software",
    organization: "Self-Directed Learning",
    tag: "Origins",
    description:
      "Started exploring Python, JavaScript, and modern web frameworks. Transitioned from solving algorithmic exercises to creating functional digital products and interactive web interfaces.",
    highlights: [
      "Built first full-stack CRUD applications and REST APIs",
      "Started experimenting with OpenCV and machine learning basics",
      "Discovered the joy of shipping working software",
    ],
  },
];
