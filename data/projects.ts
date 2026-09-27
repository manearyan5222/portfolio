export interface ProjectStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  technologies: string[];
  links: {
    github?: string;
  };
  accentColor: string;
  year: string;
  status: string;
  role: string;
  overview: string;
  theProblem: string;
  theIdea: string;
  howItWorks: ProjectStep[];
  keyFeatures: ProjectFeature[];
  technicalHighlights: string[];
  whatILearned: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "sentinel-ai",
    slug: "sentinel-ai",
    number: "01",
    title: "SENTINEL AI",
    category: "AI · Computer Vision · Full Stack",
    tagline: "Real-Time Computer Vision Monitoring & Event Risk Engine",
    shortDescription:
      "An AI-powered real-time computer vision platform for automated object detection, spatial tripwire monitoring, and Gemini AI risk assessment.",
    description:
      "Sentinel AI combines high-throughput video stream analysis with OpenCV and YOLO object detection. Integrated with Google Gemini AI for contextual incident evaluation, it broadcasts instant alerts and telemetry to a reactive web console.",
    featured: true,
    technologies: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "FastAPI",
      "Gemini AI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WebSockets",
    ],
    links: {
      github: "https://github.com/manearyan5222/portfolio",
    },
    accentColor: "#4F46E5",
    year: "2025–2026",
    status: "Active Antigravity Build",
    role: "AI Engineer & Full-Stack Developer",
    overview:
      "Traditional surveillance and monitoring systems require constant human oversight, resulting in delayed incident responses and operator fatigue. Sentinel AI was engineered to bridge this gap by running lightweight neural object detection and motion analysis on live streams, delivering sub-second anomaly notifications to an intuitive control dashboard.",
    theProblem:
      "Security cameras capture vast amounts of passive video data that are rarely analyzed in real time. Standard cloud vision APIs introduce prohibitive latency and recurring bandwidth costs, making continuous edge stream monitoring difficult for small facilities and laboratories.",
    theIdea:
      "Create an end-to-end modular pipeline that processes video frames locally on edge/server instances, extracts bounding boxes and confidence scores, classifies safety/operational events, and broadcasts lightweight JSON event payloads via WebSockets to connected client consoles.",
    howItWorks: [
      {
        step: "01",
        title: "Video Stream Ingestion",
        description:
          "OpenCV captures and decodes RTSP/camera feeds into frame queues for non-blocking multi-threaded processing.",
      },
      {
        step: "02",
        title: "Neural Object Detection",
        description:
          "YOLOv8 evaluates incoming frames to detect personnel, vehicles, and spatial region of interest (ROI) breaches.",
      },
      {
        step: "03",
        title: "Gemini AI Risk Assessment",
        description:
          "Detected incident snapshots are passed to Gemini AI to generate contextual risk scores and actionable emergency summaries.",
      },
      {
        step: "04",
        title: "Real-Time Dashboard Telemetry",
        description:
          "FastAPI dispatches event logs, bounding box coordinates, and snapshot alerts to the Next.js control console via WebSockets.",
      },
    ],
    keyFeatures: [
      {
        title: "Sub-Second Incident Alerts",
        description:
          "Instant alert notifications with visual snapshot verification and polygon zone highlights.",
      },
      {
        title: "AI Contextual Summaries",
        description:
          "Automated incident descriptions powered by Google Gemini AI for swift operator understanding.",
      },
      {
        title: "Custom Restricted Zone Editor",
        description:
          "Interactive dashboard tool allowing operators to define custom polygon tripwires directly over video feeds.",
      },
      {
        title: "Edge-Optimized Pipeline",
        description:
          "Multi-threaded Python frame processing to maintain stable frame rates without dropping frames.",
      },
    ],
    technicalHighlights: [
      "Asynchronous FastAPI backend with WebSocket event streaming",
      "Integration of Google Gemini AI for multi-modal image & risk evaluation",
      "Ray-casting polygon containment algorithms for virtual fence triggering",
    ],
    whatILearned: [
      "Optimizing computer vision inference pipelines to maintain stable frame rates without dropping critical packets.",
      "Structuring multi-modal AI prompts to receive clean, structured JSON risk evaluations.",
    ],
  },
  {
    id: "shashwat-hospital",
    slug: "shashwat-hospital",
    number: "02",
    title: "SHASHWAT HOSPITAL PLATFORM",
    category: "Full Stack · Healthcare · Supabase",
    tagline: "Modern Hospital Management & Patient Telemetry System",
    shortDescription:
      "A comprehensive digital healthcare management platform for appointment scheduling, patient records, and real-time medical workflow coordination.",
    description:
      "Shashwat Hospital Platform is a full-stack medical management web application built with Next.js and Supabase. It simplifies patient registrations, doctor consultations, appointment tracking, and medical record management with role-based access.",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Lucide React",
      "React",
    ],
    links: {
      github: "https://github.com/manearyan5222/portfolio",
    },
    accentColor: "#0EA5E9",
    year: "2026",
    status: "Active Antigravity Build",
    role: "Full-Stack Developer",
    overview:
      "Managing healthcare workflows across outpatient registration, doctor schedules, and confidential patient records requires a secure, responsive digital interface. Shashwat Hospital Platform provides an end-to-end management portal for patients and clinical staff.",
    theProblem:
      "Manual hospital booking systems cause long wait times, miscommunicated schedules, and fragmented patient records that are difficult for doctors to retrieve during consultations.",
    theIdea:
      "Develop a modern web portal utilizing Supabase for real-time relational database storage, secure authentication, and instant appointment updates between patients and healthcare providers.",
    howItWorks: [
      {
        step: "01",
        title: "Patient & Staff Authentication",
        description:
          "Role-based authentication via Supabase Auth distinguishing patient portals from doctor/admin dashboards.",
      },
      {
        step: "02",
        title: "Real-Time Appointment Scheduling",
        description:
          "Patients select available doctor time slots with instant database booking updates and status tracking.",
      },
      {
        step: "03",
        title: "Clinical Medical Records",
        description:
          "Doctors update prescription logs, diagnostic notes, and patient history securely in PostgreSQL.",
      },
      {
        step: "04",
        title: "Administrative Control Center",
        description:
          "Hospital administrators oversee daily visit counts, department workloads, and bed management.",
      },
    ],
    keyFeatures: [
      {
        title: "Online Appointment Booking",
        description:
          "Streamlined appointment booking interface with real-time doctor availability checking.",
      },
      {
        title: "Secure Medical Record Storage",
        description:
          "Patient history and prescription records protected with Row Level Security (RLS).",
      },
      {
        title: "Doctor Schedule Console",
        description:
          "Dedicated consultation dashboard for physicians to manage daily appointments and patient charts.",
      },
      {
        title: "Responsive Medical UI",
        description:
          "Clean, accessible interface designed for mobile phones, tablets, and desktop clinic terminals.",
      },
    ],
    technicalHighlights: [
      "Next.js App Router architecture with server actions and client components",
      "Supabase PostgreSQL backend with Row Level Security (RLS) policies",
      "Tailwind CSS responsive design optimized for fast medical data entry",
    ],
    whatILearned: [
      "Implementing secure database policies for sensitive healthcare records.",
      "Structuring seamless multi-role user flows for patients, doctors, and hospital administrators.",
    ],
  },
  {
    id: "citizen-development-platform",
    slug: "citizen-development-platform",
    number: "03",
    title: "CITIZEN DEVELOPMENT PLATFORM",
    category: "Civic Tech · Geospatial · Full Stack",
    tagline: "Interactive Municipal Issue Tracking & Urban Project Portal",
    shortDescription:
      "A civic engagement platform enabling citizens to report local infrastructure issues on an interactive map and track municipal resolution progress.",
    description:
      "Citizen Development Platform bridges the gap between residents and city administration. It features geo-tagged issue reporting, real-time status tracking, interactive project mapping, and public feedback channels.",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Geospatial Mapping",
      "REST APIs",
      "Lucide React",
    ],
    links: {
      github: "https://github.com/manearyan5222/portfolio",
    },
    accentColor: "#10B981",
    year: "2026",
    status: "Active Antigravity Build",
    role: "Lead Full-Stack Developer",
    overview:
      "Civic issues such as road damage, streetlight failures, and waste accumulation often go unresolved due to lack of transparent reporting channels. This platform gives citizens a voice while providing municipal departments with a structured issue dashboard.",
    theProblem:
      "Traditional municipal complaint lines are opaque, leaving citizens unaware of whether their reports have been received, assigned, or resolved.",
    theIdea:
      "Create an open-access web dashboard where citizens submit geo-tagged photos and location pins of civic issues, tracking their resolution status on a public interactive city map.",
    howItWorks: [
      {
        step: "01",
        title: "Geo-Tagged Issue Submission",
        description:
          "Citizens capture photos, select issue categories (roads, sanitation, lighting), and tag exact GPS location coordinates.",
      },
      {
        step: "02",
        title: "Automated Ticket Dispatch",
        description:
          "Submitted reports are categorized and assigned to the relevant municipal department based on location and topic.",
      },
      {
        step: "03",
        title: "Interactive City Map View",
        description:
          "An interactive map visualizes active, in-progress, and resolved civic tickets across city sectors.",
      },
      {
        step: "04",
        title: "Public Resolution Tracking",
        description:
          "Residents receive status notifications as city workers update ticket progress with verification photos.",
      },
    ],
    keyFeatures: [
      {
        title: "Interactive Issue Map",
        description:
          "Color-coded map markers displaying active municipal tickets and ongoing public infrastructure projects.",
      },
      {
        title: "Photo & Geolocation Reporting",
        description:
          "Simple reporting flow allowing citizens to attach photos and pinpoint exact issue locations.",
      },
      {
        title: "Department Workload Dashboard",
        description:
          "Administrative view for city staff to prioritize urgent reports and update resolution status.",
      },
      {
        title: "Community Upvoting System",
        description:
          "Allows neighboring residents to upvote existing issues to highlight high-priority neighborhood concerns.",
      },
    ],
    technicalHighlights: [
      "Responsive mapping integration with custom location markers and cluster views",
      "Filtering algorithms for sorting civic issues by urgency, category, and sector",
      "Clean dark/light theme web interface optimized for mobile reporting on location",
    ],
    whatILearned: [
      "Handling geospatial data and interactive map marker rendering in Next.js applications.",
      "Designing civic web interfaces that are simple enough for any citizen to use quickly.",
    ],
  },
  {
    id: "vacation-planner",
    slug: "vacation-planner",
    number: "04",
    title: "AI VACATION & TRIP PLANNER",
    category: "AI · Web App · Product Prototyping",
    tagline: "AI-Powered Custom Itinerary & Travel Planning Assistant",
    shortDescription:
      "An intelligent travel planner that generates customized multi-day itineraries, budget estimates, and destination recommendations tailored to user preferences.",
    description:
      "AI Vacation & Trip Planner takes user travel constraints—destination, trip duration, budget level, interest tags—and utilizes AI models to construct day-by-day itineraries, complete with activity schedules and local highlights.",
    featured: true,
    technologies: [
      "React",
      "JavaScript",
      "Generative AI",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "REST APIs",
    ],
    links: {
      github: "https://github.com/manearyan5222/portfolio",
    },
    accentColor: "#F59E0B",
    year: "2026",
    status: "Active Build",
    role: "Frontend & AI Developer",
    overview:
      "Planning a vacation involves spending hours searching multiple travel blogs, calculating budget estimates, and mapping out daily schedules. AI Vacation & Trip Planner streamlines this into a 30-second automated itinerary generator.",
    theProblem:
      "Generic travel guides don't account for personal budget constraints, family preferences, or specific travel paces.",
    theIdea:
      "Combine user preference inputs with LLM prompting pipelines to produce structured, customizable daily itineraries with estimated costs and route recommendations.",
    howItWorks: [
      {
        step: "01",
        title: "Preference Input",
        description:
          "User selects destination city, trip length (e.g. 5 days), budget category, and interests (adventure, food, culture).",
      },
      {
        step: "02",
        title: "AI Itinerary Generation",
        description:
          "The backend constructs a structured prompt payload and queries the AI model to generate a balanced daily schedule.",
      },
      {
        step: "03",
        title: "Interactive Schedule Review",
        description:
          "The frontend renders an interactive timeline cards with morning, afternoon, and evening activity recommendations.",
      },
      {
        step: "04",
        title: "Budget & Export Summary",
        description:
          "Computes estimated expense breakdowns and allows users to copy or export their travel plan.",
      },
    ],
    keyFeatures: [
      {
        title: "Custom Day-by-Day Itineraries",
        description:
          "Detailed schedule breakdowns formatted with morning, afternoon, and evening recommendations.",
      },
      {
        title: "Budget Estimator",
        description:
          "Estimated accommodation, food, and activity cost breakdowns based on budget level.",
      },
      {
        title: "Interest-Based Customization",
        description:
          "Filter itineraries by theme: foodie exploration, historical sightseeing, outdoor adventure, or relaxed travel.",
      },
      {
        title: "Instant Plan Export",
        description:
          "One-click option to copy or save travel plans directly to mobile notes.",
      },
    ],
    technicalHighlights: [
      "Structured JSON prompt output parsing for reliable frontend rendering",
      "Dynamic timeline component rendering with clean responsive Tailwind styling",
    ],
    whatILearned: [
      "Prompt engineering techniques to enforce deterministic structured output from Generative AI models.",
      "Creating fluid interactive forms with instant visual feedback.",
    ],
  },
  {
    id: "the-lab",
    slug: "the-lab",
    number: "05",
    title: "THE LAB / EXPERIMENTS",
    category: "AI Prototypes · Creative Tech · Micro-Tools",
    tagline: "Collection of Exploratory AI Demos, Web Scripts & Micro-Tools",
    shortDescription:
      "A creative sandbox of rapid prototypes, CLI utilities, LLM experiments, and hackathon sketches built while exploring emerging technologies.",
    description:
      "Not every build starts as a full-scale application. The Lab is an ongoing repository of smaller experiments, micro-demos, developer CLI scripts, and hackathon prototypes built to test new frameworks, benchmark model speeds, or solve workflow friction.",
    featured: true,
    technologies: [
      "TypeScript",
      "Python",
      "Web Audio API",
      "Ollama",
      "FastAPI",
      "Tailwind CSS",
      "Node.js",
    ],
    links: {
      github: "https://github.com/manearyan5222/portfolio",
    },
    accentColor: "#EC4899",
    year: "Ongoing",
    status: "Active Sandbox",
    role: "Explorer & Builder",
    overview:
      "The Lab serves as Aryan's personal digital sandbox where new technical ideas are tested rapidly. From local LLM benchmark scripts to real-time audio visualizers and developer utilities, this is where raw curiosity gets turned into working code.",
    theProblem:
      "Developers often hesitate to try new APIs or libraries without a dedicated playground to build zero-risk prototypes.",
    theIdea:
      "Maintain a modular repository of small, focused experiments that each solve a single technical question or benchmark a technique.",
    howItWorks: [
      {
        step: "01",
        title: "Hypothesis & Goal",
        description:
          "Identify an emerging tool or technique to evaluate (e.g., benchmarking local Ollama LLM execution on CPU).",
      },
      {
        step: "02",
        title: "24-Hour Prototype Build",
        description:
          "Build a minimal working slice within a day using lightweight scripts or single-page web utilities.",
      },
      {
        step: "03",
        title: "Benchmarking & Measurement",
        description:
          "Measure performance parameters like latency, memory footprint, and token generation speeds.",
      },
      {
        step: "04",
        title: "Module Extraction",
        description:
          "Extract useful code helpers into personal utility toolkits for future hackathons and full-scale builds.",
      },
    ],
    keyFeatures: [
      {
        title: "Local LLM Benchmark Tester",
        description:
          "A testbed comparing token generation speeds across Ollama models on local hardware.",
      },
      {
        title: "Real-Time Web Audio Spectrum",
        description:
          "Interactive Fourier transform visualizer rendering audio frequencies from microphone input.",
      },
      {
        title: "Developer Helper Scripts",
        description:
          "Node.js CLI scripts for asset compression, Git branch automation, and markdown processing.",
      },
      {
        title: "Hackathon Boilerplate Kits",
        description:
          "Quick-start templates pre-configured with Next.js, Tailwind, and database connections for 24-hour sprints.",
      },
    ],
    technicalHighlights: [
      "Direct integration with Web Audio API AnalyserNode for 60fps audio spectrum rendering",
      "Server-Sent Events (SSE) streaming with local LLMs",
      "Zero-dependency utility functions in TypeScript",
    ],
    whatILearned: [
      "The power of rapid micro-prototyping to validate engineering ideas early.",
      "Designing modular code components that accelerate hackathon turnarounds.",
    ],
  },
];
