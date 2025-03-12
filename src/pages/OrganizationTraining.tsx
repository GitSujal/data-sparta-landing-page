import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Users } from "lucide-react";
import { Button } from "@nextui-org/react";
import { services } from "../data/services";
import { benefits, trainingAreas } from "../data/organizationTraining";
import { trainingPackages } from "../data/trainingPackages";
import { TechnologyCarousel } from "../components/TechnologyCarousel";
import { PackageCard } from "../components/sections/training/PackageCard";
import { ServiceStep } from "../components/ServiceStep";

// Find the organization training service
const orgTraining = services.find(service => service.id === "org-training");

export function OrganizationTraining() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team training session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Transform Your Workforce into Data Analytics Powerhouses
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            Empower your team with the skills they need to drive data-informed decisions and create measurable business impact.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:text-lg"
            >
              Schedule a Training Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Training Packages</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Choose from our comprehensive training paths designed to elevate your organization's data capabilities
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {trainingPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Transform Your Team?
          </h2>
          <p className="mt-4 text-xl text-white">
            Schedule a consultation to discuss your organization's training needs and get a customized proposal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-50"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-transparent text-white border-white border hover:bg-white/10"
              >
                Request Training Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-content2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Why Choose Our Training Solutions?</h2>
            <p className="mt-4 text-lg text-foreground/60 max-w-3xl mx-auto">
              Our specialized training programs transform your existing workforce into skilled data analysts, leveraging their valuable business knowledge while building new technical capabilities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-content1 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground text-center">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-foreground/60 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Training Areas</h2>
            <p className="mt-4 text-lg text-foreground/60 max-w-3xl mx-auto">
              Comprehensive training modules customized to your organization's specific needs and industry context.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trainingAreas.map((area) => (
              <div
                key={area.title}
                className="bg-content1 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground text-center">
                  {area.title}
                </h3>
                <p className="mt-2 text-foreground/60 text-center">
                  {area.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {area.topics.map((topic, index) => (
                    <li key={index} className="flex items-center text-foreground/60">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-8 bg-content2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-foreground">Comprehensive Technology Coverage</h2>
            <p className="mt-4 text-lg text-foreground/60 max-w-3xl mx-auto">
              We provide expert training across a wide range of data technologies and tools. Whatever your tech stack, we've got you covered.
            </p>
          </div>
          <TechnologyCarousel />
          <p className="text-center mt-4 text-foreground/60">
            And many more! We adapt to your organization's specific technology needs.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-lg text-foreground/60 max-w-3xl mx-auto">{orgTraining?.description}</p>
          </div>

          <div className="space-y-8">
            {orgTraining?.steps.map((step, stepIndex) => (
              <ServiceStep key={step.title} step={step} index={stepIndex} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
