import React from "react";
export default function Button({ href, children, variant = "primary", download, className = "", ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
