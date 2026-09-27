export interface HackathonItem {
  id: string;
  name: string;
  year: string;
  role: string;
  category: string;
  project: string;
  description: string;
  tech: string[];
}

export const HACKATHONS: HackathonItem[] = [
  {
    id: "sih-2025",
    name: "SMART INDIA HACKATHON (SIH)",
    year: "2025",
    role: "Full-Stack & AI Prototyper",
    category: "National Level Hackathon",
    project: "Intelligent Public Safety & Video Event Analysis",
    description:
      "Collaborated with a 6-member team to develop a scalable AI computer vision prototype for real-time video surveillance and rapid incident dispatch.",
    tech: ["Python", "YOLO", "FastAPI", "React", "OpenCV"],
  },
  {
    id: "healthcare-ideathon",
    name: "HEALTH-TECH INNOVATION IDEATHON",
    year: "2025",
    role: "Lead Hardware & Web Developer",
    category: "Ideathon & Rapid Prototype",
    project: "SmartCare Remote Chronic Patient Telemetry",
    description:
      "Engineered an IoT vitals hub prototype on ESP32 paired with a reactive doctor-patient telemedicine dashboard within a 36-hour sprint.",
    tech: ["ESP32", "MQTT", "React", "Node.js", "WebRTC"],
  },
  {
    id: "ai-hackathon",
    name: "CAMPUS AI / ML BUILDATHON",
    year: "2025",
    role: "ML Engineer",
    category: "Developer Hackathon",
    project: "SmartGallery on-device quality ranking",
    description:
      "Built an on-device computer vision pipeline using Laplacian variance and perceptual hashing to identify blurry or corrupted photo captures.",
    tech: ["Python", "TensorFlow", "React", "Tailwind CSS"],
  },
  {
    id: "tech-symposium",
    name: "NATIONAL ENGINEERING TECHATHON",
    year: "2024",
    role: "Frontend & API Developer",
    category: "Student Innovation Track",
    project: "Interactive Citizen Services Portal",
    description:
      "Developed a clean, accessible web dashboard for tracking local civic issues and municipal request resolution times.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
];
