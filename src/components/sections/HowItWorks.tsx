import React from 'react';
import { MessageSquare, Cog, Headphones } from 'lucide-react';

const steps = [
  {
    name: 'Consultation',
    description: 'We assess your business needs and data challenges through a comprehensive discovery session.',
    icon: MessageSquare,
  },
  {
    name: 'Platform Setup',
    description: 'Our team handles everything from data integration to customizing your analytics platform.',
    icon: Cog,
  },
  {
    name: 'Ongoing Support',
    description: 'Enjoy continuous updates, support, and training as your business grows and evolves.',
    icon: Headphones,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-500">
            Our streamlined process ensures a smooth transition to data-driven decision making.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-12 top-16 h-[calc(100%-4rem)] w-0.5 bg-gray-200 lg:left-1/2" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={step.name}
                  className="relative lg:flex lg:items-center lg:gap-8"
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:order-1'}`}>
                    <div className="relative pb-8 lg:pb-0">
                      <div className="lg:hidden absolute left-12 top-16 h-[calc(100%-4rem)] w-0.5 bg-gray-200" />
                      <div className="relative flex items-center lg:justify-end">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white">
                          <step.icon className="h-12 w-12" />
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mr-6">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {step.name}
                          </h3>
                          <p className="mt-2 text-gray-500">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/90"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}