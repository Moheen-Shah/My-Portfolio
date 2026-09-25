import React from "react";
import profileImage from "../assets/1.jpeg";
import { aboutCards, profile, tools } from "../data/portfolioData";
import FadeUp from "./FadeUp";
import InfoCard from "./InfoCard";
import SectionHeader from "./SectionHeader";
import SkillTag from "./SkillTag";

export default function About() {
  return (
    <section id="about" className="about section-shell section-muted">
      <div className="about-grid">
        <FadeUp className="about-image-wrap">
          <img src={profileImage} alt={`${profile.name} portrait`} />
        </FadeUp>

        <FadeUp className="about-content" delay={0.15}>
          <SectionHeader title="About me" />
          <p className="section-text">{profile.about}</p>

          <div className="info-stack">
            {aboutCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>

          <p className="eyebrow tools-label">Tools I use</p>
          <div className="skill-list">
            {tools.map((tool) => (
              <SkillTag key={tool}>{tool}</SkillTag>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
