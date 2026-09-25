import React from "react";
import { profile } from "../data/portfolioData";

const footerLinks = [
  { label: "LinkedIn", href: profile.linkedIn },
  { label: "Email", href: `mailto:${profile.email}` }
];

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-brand">
        {profile.shortName}<span>.</span>
      </a>

      <div className="footer-links">
        {footerLinks.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <a
              key={link.href}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <p>© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
