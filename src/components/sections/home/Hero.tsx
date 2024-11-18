import React from "react";

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Tailored Data Solutions</span>
            <span className="block text-primary">for SMBs</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-foreground/60 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empower Your Business with Real-Time Insights — Customized, scalable, and fully managed data platforms built to deliver real-time insights and automate your business.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://calendly.com/dataprofessionacademy/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}