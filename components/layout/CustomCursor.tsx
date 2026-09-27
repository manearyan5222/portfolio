"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<"default" | "link" | "project" | "hidden">("default");
  const [projectText, setProjectText] = useState("VIEW →");
  const [isDesktop, setIsDesktop] = useState(false);

  // Smooth spring physics for cursor
  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 };
  const mouseX = useSpring(-100, springConfig);
  const mouseY = useSpring(-100, springConfig);

  useEffect(() => {
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const isWideScreen = window.innerWidth >= 1024;
      setIsDesktop(hasFinePointer && isWideScreen);
    };

    checkPointer();
    window.addEventListener("resize", checkPointer);

    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest("[data-cursor='project']");
      const linkTarget = target.closest("a, button, [role='button'], [data-cursor='pointer']");

      if (projectTarget) {
        setCursorState("project");
        const customLabel = projectTarget.getAttribute("data-cursor-text") || "VIEW →";
        setProjectText(customLabel);
      } else if (linkTarget) {
        setCursorState("link");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseLeave = () => setCursorState("hidden");
    const handleMouseEnter = () => setCursorState("default");

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkPointer);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop || cursorState === "hidden") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorState === "project" ? 84 : cursorState === "link" ? 36 : 10,
          height: cursorState === "project" ? 84 : cursorState === "link" ? 36 : 10,
          backgroundColor:
            cursorState === "project"
              ? "rgba(79, 70, 229, 1)"
              : cursorState === "link"
              ? "rgba(0, 0, 0, 0)"
              : "rgba(17, 17, 17, 1)",
          borderColor:
            cursorState === "link" ? "rgba(79, 70, 229, 1)" : "rgba(0, 0, 0, 0)",
          borderWidth: cursorState === "link" ? 1.5 : 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 350,
        }}
        className="rounded-full flex items-center justify-center backdrop-blur-[1px] shadow-sm select-none"
      >
        {cursorState === "project" && (
          <span className="text-[11px] font-mono font-medium tracking-wider text-white text-center leading-none px-2">
            {projectText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
