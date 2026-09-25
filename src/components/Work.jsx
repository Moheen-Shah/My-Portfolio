import React from "react";
import { projects } from "../data/portfolioData";
import FadeUp from "./FadeUp";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Work() {
  return (
    <section id="work" className="work section-shell section-muted">
      <SectionHeader
        title="My latest work"
        description="A selected collection of full-stack projects covering real estate, recruitment, analytics, healthcare, and corporate websites."
      />

      <div className="card-grid projects-grid">
        {projects.map((project, index) => (
          <FadeUp key={project.title} delay={index * 0.08}>
            <ProjectCard {...project} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
