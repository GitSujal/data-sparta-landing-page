import React from "react";

export function ServicesHero() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Our Services — Tailored Data Solutions for Your Business
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
          Explore how Data Sparta empowers SMBs with customized data platforms, analytics, and training.
        </p>
        <div className="mt-10">
          <a
            href="#services-overview"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:text-lg"
          >
            Discover Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}