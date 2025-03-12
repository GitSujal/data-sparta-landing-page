import React from "react";
import { Link } from "react-router-dom";
import { Database, BarChart3, GraduationCap, Users } from "lucide-react";

const services = [
  {
    title: "Fully Managed Data Platform",
    description: "Integrate all your data into a single, reliable platform customized for your business.",
    icon: Database,
    href: "/services#data-platform",
  },
  {
    title: "Analytics as a Service",
    description: "Get expert analytics and custom data products without the overhead of an in-house team.",
    icon: BarChart3,
    href: "/services#analytics",
  },
  {
    title: "Organization Training",
    description: "Empower your team with the skills to drive insights from your data.",
    icon: Users,
    href: "/organization-training",
  },
  {
    title: "Individual Training",
    description: "Start your journey to becoming a data analyst with Data Profession Academy.",
    icon: GraduationCap,
    href: "https://dataprofessionacademy.com"
  },
];

export function ServicesSummary() {
  return (
    <section id="services" className="py-24 bg-content2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Our Services</h2>
          <p className="mt-4 text-lg text-foreground/60">
            Comprehensive data solutions tailored for your business needs
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group block bg-content1 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-foreground/60 text-center">
                  {service.description}
                </p>
                <div className="mt-4 text-center">
                  <span className="text-primary font-medium group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
