import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'CEO, SunStyle Eyewear',
    content: 'Data Sparta transformed how we understand our business. The real-time insights have been invaluable, leading to a 25% increase in sales.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director, TechFlow Solutions',
    content: 'The custom analytics platform helped us streamline operations and reduce costs by 30%. Their support team is exceptional.',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-500">
            See how we've helped businesses like yours transform their data operations.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mt-16 bg-gray-50 rounded-2xl overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt="Data analytics dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-bold tracking-tight text-white">SunStyle Eyewear Success Story</h3>
                <p className="mt-6 text-xl text-white">
                  Learn how we helped SunStyle Eyewear increase their sales by 25% through our tailored data platform.
                </p>
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-50"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-gray-500">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}