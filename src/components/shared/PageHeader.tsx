import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}