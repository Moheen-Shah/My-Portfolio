import React from "react";
export default function ProjectCard({ icon, accent, tag, title, description, link, linkLabel = "View Live ↗" }) {
  return (
    <article className="project-card card-hover">
      <div className={`project-cover project-cover-${accent}`}>
        <span aria-hidden="true">{icon}</span>
      </div>
      <div className="project-body">
        <p className="project-tag">{tag}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="project-link">
          {linkLabel}
        </a>
      </div>
    </article>
  );
}
