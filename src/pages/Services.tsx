import React from 'react';
import { Database, BarChart3, GraduationCap, Users } from 'lucide-react';
import { ServiceCard } from '../components/sections/services/ServiceCard';
import { ServicesHero } from '../components/sections/services/ServicesHero';
import { ServicesOverview } from '../components/sections/services/ServicesOverview';

const services = [
  {
    id: "data-platform",
    title: "Fully Managed Data Platform",
    description: "Integrate all your data into a single, reliable platform customized for your business.",
    icon: Database,
    features: [
      "Comprehensive data integration from all sources",
      "Flexible choice of analytics tools",
      "Scalable infrastructure that grows with you",
      "Robust data validation and reliability",
    ],
    benefits: [
      "Real-time insights for faster decision making",
      "Reduced manual workload through automation",
      "Cost-effective solution with predictable pricing",
      "Enterprise-grade security and compliance",
    ],
    ctaText: "Request a Demo",
    ctaHref: "/contact",
  },
  {
    id: "analytics",
    title: "Analytics as a Service",
    description: "Get expert analytics and custom data products without the overhead of an in-house team.",
    icon: BarChart3,
    features: [
      "Ad-hoc analysis and reporting",
      "Custom dashboard development",
      "Predictive modeling and forecasting",
      "Data visualization and storytelling",
    ],
    benefits: [
      "Access to expert data analysts",
      "Customized solutions for your needs",
      "Quick turnaround on insights",
      "No long-term staffing commitments",
    ],
    ctaText: "Discuss Your Needs",
    ctaHref: "/contact",
  },
  {
    id: "org-training",
    title: "Organization Training",
    description: "Empower your team with the skills to drive insights from your data.",
    icon: Users,
    features: [
      "Customized curriculum development",
      "Hands-on workshops and exercises",
      "Multiple delivery methods",
      "Progress tracking and assessment",
    ],
    benefits: [
      "Build in-house data expertise",
      "Enhance team decision-making",
      "Flexible scheduling options",
      "Ongoing support and resources",
    ],
    ctaText: "Customize Training",
    ctaHref: "/contact",
  },
  {
    id: "individual-training",
    title: "Individual Training",
    description: "Start your journey to becoming a data analyst with Data Profession Academy.",
    icon: GraduationCap,
    features: [
      "Comprehensive data analysis curriculum",
      "Real-world project experience",
      "Industry-recognized certifications",
      "Career support services",
    ],
    benefits: [
      "Learn in-demand data skills",
      "Build a professional portfolio",
      "Network with industry experts",
      "Job placement assistance",
    ],
    ctaText: "Explore Courses",
    ctaHref: "/contact",
  },
];

export function Services() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesOverview />
      
      {/* Services Grid */}
      <section className="py-16 bg-content2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Leverage the Power of Data?</h2>
          <p className="mt-4 text-xl text-white">
            Whether you're looking for a managed data platform, expert analytics, or training programs, Data Sparta is here to help.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:text-lg"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}