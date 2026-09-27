export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  primaryIdentity: string;
  secondaryIdentity: string;
  tagline: string;
  headline: string;
  heroCopy: string;
  location: string;
  timezone: string;
  status: {
    available: boolean;
    text: string;
  };
  bio: {
    short: string;
    long: string[];
  };
  currentlyExploring: string[];
  philosophyPillars: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
    instagram?: string;
  };
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Aryan Mane",
  firstName: "Aryan",
  lastName: "Mane",
  primaryIdentity: "AI & Technology Enthusiast",
  secondaryIdentity: "Student Developer · Builder",
  tagline: "I build ideas into practical technology.",
  headline: "I BUILD IDEAS INTO TECHNOLOGY.",
  heroCopy:
    "Student developer exploring AI, software and emerging technology by turning ideas, experiments and hackathon concepts into working digital experiences.",
  location: "India",
  timezone: "IST (UTC+5:30)",
  status: {
    available: true,
    text: "AVAILABLE FOR PROJECTS",
  },
  bio: {
    short:
      "I'm Aryan — a student developer exploring the intersection of AI, software and product development. Most of my learning happens by building.",
    long: [
      "I'm Aryan — a student developer exploring the intersection of AI, software and product development.",
      "Most of my learning happens by building. I like taking an idea from a rough concept, experimenting with technology, and turning it into something people can actually interact with.",
      "Whether it is training lightweight vision models, structuring full-stack systems, or wiring up IoT sensor pipelines, I focus on shipping practical, working prototypes over theoretical concepts.",
    ],
  },
  currentlyExploring: [
    "AI / ML & LLMs",
    "Computer Vision",
    "Generative AI",
    "Full-Stack Development",
    "Embedded & IoT Systems",
    "Product Prototyping",
  ],
  philosophyPillars: [
    {
      id: "building",
      title: "BUILDING",
      subtitle: "Learning through projects",
      description:
        "The fastest way to understand complex systems is to build them from scratch, break them, and iterate until they work reliably.",
      icon: "Hammer",
    },
    {
      id: "experimenting",
      title: "EXPERIMENTING",
      subtitle: "Curiosity before certainty",
      description:
        "Trying ideas before knowing exactly where they lead. Exploring new frameworks, models, and architectures without fear of dead ends.",
      icon: "Sparkles",
    },
    {
      id: "collaborating",
      title: "COLLABORATING",
      subtitle: "Teamwork under pressure",
      description:
        "Working with diverse teams through hackathons, ideathons, and peer projects to solve real-world problem statements.",
      icon: "Users",
    },
    {
      id: "learning",
      title: "LEARNING",
      subtitle: "Always exploring",
      description:
        "Staying relentlessly curious — reading research papers, digging into open-source repositories, and mastering emerging tools.",
      icon: "BookOpen",
    },
  ],
  socials: {
    github: "https://github.com/manearyan5222",
    linkedin: "https://linkedin.com/in/aryanmane",
    email: "aryanmane.dev@gmail.com",
    twitter: "https://x.com/aryanmanedev",
    instagram: "https://instagram.com/aryan.mane_",
  },
};
