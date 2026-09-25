import React from "react";
import { useInView } from "../hooks/useInView";

export default function FadeUp({ as: Component = "div", children, className = "", delay = 0 }) {
  const { ref, isVisible } = useInView();

  return (
    <Component
      ref={ref}
      className={`fade-up ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}
