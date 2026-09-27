"use client";

import React, { useState, useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Clock,
  Cpu,
  Eye,
  FileText,
  MapPin,
  MessageSquare,
  Plane,
  Radio,
  Sparkles,
  Stethoscope,
  Terminal,
  UserCheck,
  Zap,
} from "lucide-react";

// ==========================================
// 01. SENTINEL AI MOCKUP
// ==========================================
export function SentinelAiMockup() {
  const [fps, setFps] = useState("29.8");

  useEffect(() => {
    const interval = setInterval(() => {
      setFps((29.4 + Math.random() * 0.8).toFixed(1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[380px] bg-[#0A0B0E] text-slate-100 font-mono text-xs rounded-xl overflow-hidden border border-slate-800 flex flex-col select-none relative shadow-xl">
      {/* Top Feed Header */}
      <div className="bg-[#12141A] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-slate-200">FEED_01 // SECTOR_NORTH</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">1080P · {fps} FPS</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="hidden sm:inline">YOLOv8 + GEMINI AI</span>
          <span className="text-indigo-400 font-medium">INFERENCE: 14.2ms</span>
        </div>
      </div>

      {/* Main Viewport Simulation */}
      <div className="flex-1 relative bg-gradient-to-b from-[#0D0F16] to-[#08090D] p-4 flex flex-col justify-between overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Dynamic ROI Polygon Boundary */}
        <div className="absolute top-10 left-12 right-24 bottom-16 border border-dashed border-indigo-500/40 bg-indigo-500/5 rounded-lg pointer-events-none">
          <div className="absolute top-1 left-2 text-[9px] text-indigo-400 font-mono tracking-wider">
            ROI // RESTRICTED_ZONE_04
          </div>
        </div>

        {/* Bounding Box 1 (Person Detected) */}
        <div className="absolute top-16 left-20 w-32 h-44 border-2 border-emerald-400 bg-emerald-500/10 rounded-sm flex flex-col justify-between p-1 shadow-[0_0_15px_rgba(52,211,153,0.15)] animate-pulse">
          <div className="flex items-center justify-between bg-emerald-500/90 text-slate-950 font-bold px-1 py-0.5 text-[9px] rounded-xs">
            <span>PERSON: 96.4%</span>
            <span>ID: 804</span>
          </div>
          <div className="text-[8px] text-emerald-300 font-mono bg-slate-950/80 px-1 py-0.5 rounded-xs">
            POS: [X:142, Y:320]
          </div>
        </div>

        {/* Bounding Box 2 (Alert Zone Trigger) */}
        <div className="absolute top-24 right-16 sm:right-28 w-40 h-36 border-2 border-rose-500 bg-rose-500/10 rounded-sm flex flex-col justify-between p-1 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
          <div className="flex items-center justify-between bg-rose-600 text-white font-bold px-1.5 py-0.5 text-[9px] rounded-xs">
            <span className="flex items-center gap-1">
              <AlertTriangle className="w-2.5 h-2.5" />
              INTRUSION DETECTED
            </span>
            <span>98.1%</span>
          </div>
          <div className="text-[8px] text-rose-300 font-mono bg-slate-950/80 px-1 py-0.5 rounded-xs flex justify-between">
            <span>GEMINI RISK: HIGH</span>
            <span className="text-rose-400">ALERT SENT</span>
          </div>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-x-0 h-0.5 bg-indigo-400/30 blur-[1px] animate-[bounce_4s_infinite]" />

        {/* Bottom Status & Event Log Strip */}
        <div className="relative z-10 mt-auto bg-[#12141C]/90 backdrop-blur-sm border border-slate-800/90 rounded-lg p-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-indigo-500/20 text-indigo-400">
              <Zap className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="text-[11px] font-semibold text-slate-200">
                ACTIVE MONITORING // GEMINI AI EVALUATION
              </div>
              <div className="text-[10px] text-slate-400">
                Zone breach confirmed · Automated risk summary generated
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] border border-rose-500/30 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              CRITICAL EVENT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 02. SHASHWAT HOSPITAL MOCKUP
// ==========================================
export function ShashwatHospitalMockup() {
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[380px] bg-[#090F17] text-slate-100 font-mono text-xs rounded-xl overflow-hidden border border-slate-800 flex flex-col select-none relative shadow-xl">
      {/* Top Header */}
      <div className="bg-[#111A26] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-sky-400" />
          <span className="font-semibold text-slate-200">SHASHWAT HOSPITAL // CLINIC PORTAL</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <Radio className="w-3 h-3" /> SUPABASE: CONNECTED
          </span>
        </div>
      </div>

      {/* Main Console Content */}
      <div className="flex-1 p-4 flex flex-col justify-between gap-3">
        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[#111925] border border-slate-800 rounded-lg p-2.5">
            <div className="text-[9px] text-slate-400 uppercase">TODAY&apos;S APPOINTMENTS</div>
            <div className="text-xl font-bold text-sky-400 mt-1">28</div>
            <div className="text-[8px] text-emerald-400">12 Completed</div>
          </div>
          <div className="bg-[#111925] border border-slate-800 rounded-lg p-2.5">
            <div className="text-[9px] text-slate-400 uppercase">ACTIVE DOCTORS</div>
            <div className="text-xl font-bold text-slate-100 mt-1">08</div>
            <div className="text-[8px] text-sky-400">On Duty</div>
          </div>
          <div className="bg-[#111925] border border-slate-800 rounded-lg p-2.5">
            <div className="text-[9px] text-slate-400 uppercase">BED OCCUPANCY</div>
            <div className="text-xl font-bold text-emerald-400 mt-1">84%</div>
            <div className="text-[8px] text-slate-400">General & ICU</div>
          </div>
        </div>

        {/* Appointment Table */}
        <div className="bg-[#0E1520] border border-slate-800 rounded-lg p-3 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-slate-400 pb-2 border-b border-slate-800/80">
            <span>RECENT CONSULTATION QUEUE</span>
            <span className="text-sky-400">POSTGRES RLS ACTIVE</span>
          </div>

          <div className="space-y-2 py-2">
            <div className="flex items-center justify-between bg-[#141F2E] p-2 rounded border border-slate-800 text-[10px]">
              <div className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-200 font-semibold">PATIENT #1042 · OP-CARD</span>
              </div>
              <span className="text-sky-300">10:30 AM · Dr. Sharma (Cardiology)</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px]">CONFIRMED</span>
            </div>

            <div className="flex items-center justify-between bg-[#141F2E] p-2 rounded border border-slate-800 text-[10px]">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-200 font-semibold">PATIENT #1045 · ROUTINE</span>
              </div>
              <span className="text-sky-300">11:15 AM · Dr. Patil (General)</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px]">WAITING</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1 border-t border-slate-800/60">
            <span>REALTIME SYNC ENGINE</span>
            <span className="text-emerald-400">NEXT.JS 14 APP ROUTER</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 03. CITIZEN DEVELOPMENT PLATFORM MOCKUP
// ==========================================
export function CitizenPlatformMockup() {
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[380px] bg-[#0A0E0C] text-slate-100 font-mono text-xs rounded-xl overflow-hidden border border-slate-800 flex flex-col select-none relative shadow-xl">
      {/* Top Header */}
      <div className="bg-[#121B17] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-slate-200">CITIZEN PORTAL // CIVIC MAP & REPORTS</span>
        </div>
        <div className="text-[10px] text-emerald-400 font-mono">SECTOR: METRO SOUTH</div>
      </div>

      {/* Main Map View */}
      <div className="flex-1 p-4 flex flex-col justify-between relative bg-gradient-to-b from-[#0E1713] to-[#080D0B]">
        {/* Map Canvas Background */}
        <div className="h-44 relative rounded-lg border border-emerald-900/40 bg-[#0A120E] overflow-hidden p-3 flex flex-col justify-between">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Map Location Pin 1 */}
          <div className="absolute top-8 left-16 px-2 py-1 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[9px] flex items-center gap-1 shadow-lg">
            <AlertTriangle className="w-3 h-3 text-rose-400" />
            POTHOLE REPORT #302 [HIGH URGENCY]
          </div>

          {/* Map Location Pin 2 */}
          <div className="absolute bottom-8 right-20 px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[9px] flex items-center gap-1 shadow-lg">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            STREETLIGHT FIX [RESOLVED]
          </div>

          {/* Map Location Pin 3 */}
          <div className="absolute top-20 right-32 px-2 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[9px] flex items-center gap-1 shadow-lg">
            <Clock className="w-3 h-3 text-amber-400" />
            DRAINAGE WORK [IN PROGRESS]
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-2 text-[9px] pt-2">
          <div className="bg-[#121F19] p-1.5 rounded border border-slate-800 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="text-slate-300">ACTIVE ISSUE</span>
          </div>
          <div className="bg-[#121F19] p-1.5 rounded border border-slate-800 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="text-slate-300">IN WORK</span>
          </div>
          <div className="bg-[#121F19] p-1.5 rounded border border-slate-800 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300">RESOLVED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 04. VACATION PLANNER MOCKUP
// ==========================================
export function VacationPlannerMockup() {
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[380px] bg-[#110E09] text-slate-100 font-mono text-xs rounded-xl overflow-hidden border border-slate-800 flex flex-col select-none relative shadow-xl">
      {/* Top Header */}
      <div className="bg-[#1D170E] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Plane className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-slate-200">AI VACATION PLANNER // ITINERARY GENERATOR</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
          AI TAILORED
        </span>
      </div>

      {/* Main Itinerary View */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="bg-[#19130B] border border-slate-800 rounded-xl p-3 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px]">
            <span className="text-amber-400 font-bold">5-DAY JAPAN EXPLORATION PLAN</span>
            <span className="text-slate-400">BUDGET: MODERATE ($1,800 EST)</span>
          </div>

          <div className="space-y-2 text-[10px]">
            <div className="p-2 rounded bg-[#20180F] border border-slate-800 flex items-start gap-2">
              <span className="font-bold text-amber-400">DAY 01</span>
              <div>
                <div className="font-bold text-slate-200">Tokyo Arrival & Shinjuku Neon Walking Tour</div>
                <div className="text-[9px] text-slate-400">Morning check-in · Evening local food ramen exploration</div>
              </div>
            </div>

            <div className="p-2 rounded bg-[#20180F] border border-slate-800 flex items-start gap-2">
              <span className="font-bold text-amber-400">DAY 02</span>
              <div>
                <div className="font-bold text-slate-200">Asakusa Historic Temples & Akihabara Tech District</div>
                <div className="text-[9px] text-slate-400">Senso-ji temple morning visit · Electronics afternoon walk</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2">
          <span>AI Prompt Structured Output Engine</span>
          <span className="text-amber-400">EXPORT PLAN →</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 05. THE LAB / EXPERIMENTS MOCKUP
// ==========================================
export function LabExperimentsMockup() {
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[380px] bg-[#0E0B10] text-slate-100 font-mono text-xs rounded-xl overflow-hidden border border-slate-800 flex flex-col select-none relative shadow-xl">
      {/* Top Terminal Header */}
      <div className="bg-[#17121C] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-pink-400" />
          <span className="font-semibold text-slate-200">LAB // RAPID_PROTOTYPES</span>
        </div>
        <div className="text-[10px] text-pink-400 font-mono">SANDBOX: ACTIVE</div>
      </div>

      {/* Terminal Experiments Stream */}
      <div className="flex-1 p-4 flex flex-col justify-between gap-3">
        <div className="bg-[#130E18] border border-slate-800 rounded-lg p-3 space-y-2 font-mono text-[11px]">
          <div className="text-slate-400 flex items-center gap-1.5">
            <span className="text-pink-400">$</span>
            <span>ollama run llama3.2:3b --stream</span>
          </div>
          <div className="text-slate-300 pl-3 border-l-2 border-pink-500/40 text-[10px] leading-relaxed">
            Generating embeddings... <span className="text-emerald-400">42.8 tokens/sec</span> on edge CPU.
          </div>

          <div className="text-slate-400 flex items-center gap-1.5 pt-1">
            <span className="text-pink-400">$</span>
            <span>node scripts/audio-fft.js --input=mic</span>
          </div>
          <div className="text-slate-300 pl-3 border-l-2 border-indigo-500/40 text-[10px]">
            WebAudio AnalyserNode: 2048 FFT bins active @ 60 FPS
          </div>
        </div>

        {/* Micro Demos Grid */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-[#1A1422] p-2 rounded border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">01. WebAudio Visualizer</span>
            <span className="text-pink-400 font-bold">READY</span>
          </div>
          <div className="bg-[#1A1422] p-2 rounded border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">02. LLM Stream Test</span>
            <span className="text-emerald-400 font-bold">42 t/s</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN DISPATCHER
// ==========================================
export function ProjectMockupDispatcher({ slug }: { slug: string }) {
  switch (slug) {
    case "sentinel-ai":
      return <SentinelAiMockup />;
    case "shashwat-hospital":
      return <ShashwatHospitalMockup />;
    case "citizen-development-platform":
      return <CitizenPlatformMockup />;
    case "vacation-planner":
      return <VacationPlannerMockup />;
    case "the-lab":
      return <LabExperimentsMockup />;
    default:
      return <SentinelAiMockup />;
  }
}
