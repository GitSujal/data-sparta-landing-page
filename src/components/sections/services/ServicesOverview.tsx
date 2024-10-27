import React from "react";

export function ServicesOverview() {
  return (
    <section id="services-overview" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Comprehensive Data Solutions for Your Business
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              At Data Sparta, we offer a comprehensive suite of services designed to empower small and medium-sized businesses with the tools and knowledge needed to harness the power of data. From fully managed data platforms to personalized training programs, our solutions are tailored to meet your unique business needs.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="Data analytics dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}