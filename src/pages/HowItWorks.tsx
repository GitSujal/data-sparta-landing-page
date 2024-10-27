import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { ServiceStep } from "../components/ServiceStep";
import { services } from "../data/services";

export function HowItWorks() {
  const location = useLocation();
  const hash = location.hash.replace("#", "");
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            How It Works
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            Discover our streamlined processes for delivering exceptional data solutions
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-b sticky top-16 z-40 backdrop-blur-lg bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  hash === service.id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="py-24 bg-white scroll-mt-32"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
              <p className="mt-4 text-lg text-gray-500">{service.description}</p>
            </div>

            <div className="space-y-8">
              {service.steps.map((step, index) => (
                <ServiceStep key={step.title} step={step} index={index} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to={`/services#${service.id}`}>
                <Button
                  color="primary"
                  size="lg"
                  className="bg-primary text-white"
                >
                  Learn More About {service.title}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-white">
            Transform your business with our data solutions today.
          </p>
          <div className="mt-8">
            <Link to="/#contact">
              <Button
                size="lg"
                className="bg-white text-primary"
              >
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}