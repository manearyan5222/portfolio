export interface SkillCategory {
  name: string;
  categoryNumber: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Exploring";
    highlight?: boolean;
    note?: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "BUILD",
    categoryNumber: "01",
    description: "Languages, frameworks, and architecture used to build modern full-stack web applications and robust services.",
    skills: [
      { name: "JavaScript", level: "Core", highlight: true },
      { name: "TypeScript", level: "Core", highlight: true },
      { name: "React", level: "Core", highlight: true },
      { name: "Next.js", level: "Core", highlight: true },
      { name: "Node.js", level: "Core" },
      { name: "Tailwind CSS", level: "Core", highlight: true },
      { name: "HTML5 / CSS3", level: "Core" },
      { name: "FastAPI", level: "Advanced" },
      { name: "REST APIs", level: "Core" },
      { name: "WebSockets", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
    ],
  },
  {
    name: "AI & INTELLIGENCE",
    categoryNumber: "02",
    description: "Machine learning, computer vision, and generative AI models turned into working, applied systems.",
    skills: [
      { name: "Python", level: "Core", highlight: true },
      { name: "Computer Vision", level: "Advanced", highlight: true },
      { name: "OpenCV", level: "Advanced", highlight: true },
      { name: "YOLO (v8/v11)", level: "Advanced", highlight: true },
      { name: "PyTorch", level: "Advanced" },
      { name: "TensorFlow / TFLite", level: "Advanced" },
      { name: "Generative AI", level: "Core", highlight: true },
      { name: "LLM Orchestration", level: "Advanced" },
      { name: "NumPy & Pandas", level: "Core" },
      { name: "Model Quantization", level: "Exploring" },
      { name: "Prompt Engineering", level: "Core" },
      { name: "Hugging Face", level: "Advanced" },
    ],
  },
  {
    name: "TOOLS & HARDWARE",
    categoryNumber: "03",
    description: "Developer workflows, embedded prototyping platforms, and deployment toolchains.",
    skills: [
      { name: "Git & GitHub", level: "Core", highlight: true },
      { name: "Vercel", level: "Core", highlight: true },
      { name: "VS Code", level: "Core" },
      { name: "Docker", level: "Advanced" },
      { name: "Linux / Terminal", level: "Core" },
      { name: "ESP32 / Arduino", level: "Advanced" },
      { name: "MQTT / IoT Protocols", level: "Advanced" },
      { name: "Figma (UI / Wireframing)", level: "Advanced" },
      { name: "Postman", level: "Core" },
      { name: "C++ (Embedded)", level: "Exploring" },
    ],
  },
];
