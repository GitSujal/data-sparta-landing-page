import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

export function SuccessStoriesSummary() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-500">
            See how businesses like yours have transformed with our solutions
          </p>
        </div>

        {/* Featured Success Story */}
        <div className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt="Data analytics success story"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold tracking-tight text-white">
                SunStyle Eyewear Success Story
              </h3>
              <p className="mt-6 text-xl text-white">
                Learn how we helped SunStyle Eyewear increase their sales by 25% through our tailored data platform.
              </p>
              <div className="mt-10">
                <Link
                  to="/success-stories"
                  className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-50"
                >
                  Read More Success Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-center">
              <p className="text-lg text-gray-600">
                "Data Sparta transformed how we understand our business. The real-time insights have been invaluable, leading to a 25% increase in sales."
              </p>
              <footer className="mt-4">
                <p className="text-base font-semibold text-gray-900">Sarah Thompson</p>
                <p className="text-sm text-gray-500">CEO, SunStyle Eyewear</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}