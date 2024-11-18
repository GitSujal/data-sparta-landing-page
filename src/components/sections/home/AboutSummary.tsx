import React from "react";
import { Link } from "react-router-dom";

export function AboutSummary() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">About Data Sparta</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Founded in August 2023 by Sujal Dhungana, Data Sparta empowers SMBs with tailored data solutions that drive insights, streamline operations, and enhance decision-making.
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="Data Sparta team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}