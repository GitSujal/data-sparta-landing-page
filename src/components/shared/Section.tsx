import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "secondary" | "primary";
}

export function Section({ children, className = "", id, background = "default" }: SectionProps) {
  const backgroundStyles = {
    default: "bg-background",
    secondary: "bg-content2",
    primary: "bg-primary",
  };

  return (
    <section id={id} className={`py-24 ${backgroundStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}