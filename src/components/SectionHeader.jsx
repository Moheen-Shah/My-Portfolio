import React from "react";
export default function SectionHeader({ title, eyebrow, description, align = "left" }) {
  return (
    <div className={`section-header section-header-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
