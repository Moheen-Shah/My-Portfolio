import React from "react";
import { services } from "../data/portfolioData";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="services section-shell">
      <SectionHeader
        title="My Services"
        description="I deliver scalable, production-ready applications with clean UI, strong back-end structure, and practical QA experience."
      />

      <div className="card-grid services-grid">
        {services.map((service, index) => (
          <FadeUp key={service.title} delay={index * 0.08}>
            <ServiceCard {...service} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
