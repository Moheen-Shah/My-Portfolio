import React from "react";
export default function InfoCard({ icon, title, text }) {
  return (
    <article className="info-card">
      <span className="info-card-icon" aria-hidden="true">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
