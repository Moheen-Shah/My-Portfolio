import React from "react";
import profileImage from "../assets/Profiletwo.jpeg";
import resumePdf from "../assets/Moin-Ud-Din-Shah-CV.pdf";
import { profile } from "../data/portfolioData";
import FadeUp from "./FadeUp";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-glow" aria-hidden="true" />

      <FadeUp className="hero-copy">
        <p className="eyebrow">Available for full-stack projects</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>

        <div className="button-row">
          <Button href="#contact">Contact me →</Button>
          <Button href={resumePdf} variant="outline" download="Moin-Ud-Din-Shah-CV.pdf">
            ⬇ My Resume
          </Button>
        </div>
      </FadeUp>

      <FadeUp className="hero-media" delay={0.2}>
        <img src={profileImage} alt={profile.name} />
        <span className="hero-badge">{profile.badge}</span>
      </FadeUp>
    </section>
  );
}
