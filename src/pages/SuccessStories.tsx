import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { CaseStudyCard } from "../components/sections/success-stories/CaseStudyCard";
import { TestimonialCarousel } from "../components/sections/success-stories/TestimonialCarousel";
import { ArrowUpRight, TrendingUp, Users2, Building2 } from "lucide-react";

const caseStudies = [
  {
    id: "retail-success",
    industry: "Retail",
    companySize: "Mid-sized fashion retailer",
    location: "Melbourne, Australia",
    title: "Fashion Hub Transforms Inventory Management",
    description: "How a fashion retailer reduced stockouts by 30% and increased sales through data-driven decisions.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    challenges: [
      "Fragmented data across sales, inventory, and customer loyalty systems",
      "Lacked real-time insights into inventory levels",
      "Frequent stockouts and overstock situations",
    ],
    solution: [
      "Implemented Fully Managed Data Platform",
      "Integrated all data sources into a unified system",
      "Customized Power BI dashboards for real-time analytics",
    ],
    results: [
      "30% reduction in stockouts",
      "20% decrease in excess inventory",
      "15% increase in sales",
    ],
    icon: Building2,
  },
  {
    id: "manufacturing-success",
    industry: "Manufacturing",
    companySize: "Small-scale automotive parts manufacturer",
    location: "Sydney, Australia",
    title: "AutoParts Co. Optimizes Operations",
    description: "Achieving 25% reduction in equipment downtime through predictive maintenance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    challenges: [
      "Inefficient production scheduling",
      "High operational costs",
      "Equipment downtime issues",
    ],
    solution: [
      "Implemented Analytics as a Service",
      "Developed predictive maintenance models",
      "Integrated sensor data analytics",
    ],
    results: [
      "25% decrease in equipment downtime",
      "10% reduction in operational costs",
      "Improved production efficiency",
    ],
    icon: TrendingUp,
  },
  {
    id: "hospitality-success",
    industry: "Hospitality",
    companySize: "Boutique hotel chain with five locations",
    location: "Brisbane, Australia",
    title: "Serenity Hotels Enhances Guest Experience",
    description: "Boutique hotel chain increases repeat bookings by 18% through data-driven personalization.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    challenges: [
      "Scattered guest data across platforms",
      "Low repeat booking rate",
      "Underutilized amenities",
    ],
    solution: [
      "Implemented Organization Training",
      "Developed unified guest profile system",
      "Trained staff in data analytics",
    ],
    results: [
      "18% increase in repeat bookings",
      "22% improvement in guest satisfaction",
      "Enhanced service personalization",
    ],
    icon: Users2,
  },
];

const testimonials = [
  {
    name: "Sarah L.",
    role: "Operations Manager at Fashion Hub",
    content: "Data Sparta's solutions have revolutionized the way we manage our inventory. The real-time insights have been invaluable, leading to a 25% increase in sales.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Michael T.",
    role: "CEO of AutoParts Co.",
    content: "The predictive maintenance models provided by Data Sparta have significantly reduced our downtime. Their team's expertise and support have been invaluable to our operational efficiency.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Emily R.",
    role: "General Manager at Serenity Hotels",
    content: "Investing in staff training through Data Sparta was one of the best decisions we've made. Our team is now more confident in using data to enhance guest experiences, and we've seen a noticeable improvement in customer satisfaction.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export function SuccessStories() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Driving Success Through Data
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            Discover how businesses like yours have transformed with Data Sparta's tailored solutions.
          </p>
          <div className="mt-10">
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:text-lg"
            >
              See Our Success Stories
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-foreground/60">
            At Data Sparta, we're proud to have partnered with numerous small and medium-sized businesses across various industries to unlock the power of their data. Our customized solutions have helped our clients overcome challenges, streamline operations, and achieve significant growth. Below are some of the success stories that highlight the impact of our services.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 bg-content2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Case Studies
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What Our Clients Say
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="mt-4 text-xl text-white">
            Discover how Data Sparta can help transform your business through data-driven solutions.
          </p>
          <div className="mt-8">
            <Link to="/#contact">
              <Button
                size="lg"
                className="bg-white text-primary"
              >
                Contact Us for a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}