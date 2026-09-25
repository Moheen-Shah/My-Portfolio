import React from "react";
import { contactLinks } from "../data/portfolioData";
import ContactForm from "./ContactForm";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <SectionHeader title="Get in touch" />

      <div className="contact-grid">
        <FadeUp className="contact-details">
          <h3>Let's talk!</h3>
          <p>
            I would love to hear from you. Send a project idea, question, or opportunity and I will get back to you.
          </p>

          <div className="contact-links">
            {contactLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <span aria-hidden="true">{link.icon}</span>
                  {link.label}
                </a>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <ContactForm />
        </FadeUp>
      </div>
    </section>
  );
}
