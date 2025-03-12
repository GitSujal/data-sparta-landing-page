import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  TrendingUp, 
  BookOpen, 
  CheckCircle, 
  BarChart3,
  LineChart,
  PieChart,
  Database,
  Brain,
  Laptop,
  Award,
  ClipboardList,
  School,
  UserCheck,
  Headphones
} from "lucide-react";
import { Button } from "@nextui-org/react";
import { services } from "../data/services";

// Find the organization training service
const orgTraining = services.find(service => service.id === "org-training");

const benefits = [
  {
    title: "Leverage Existing Knowledge",
    description: "Transform your current workforce into data analytics experts while capitalizing on their deep understanding of your business.",
    icon: Brain,
  },
  {
    title: "Custom-Tailored Learning",
    description: "Training programs specifically designed around your organization's tools, data, and business challenges.",
    icon: Target,
  },
  {
    title: "Immediate Application",
    description: "Employees learn using your actual business data, ensuring skills can be applied immediately to real challenges.",
    icon: TrendingUp,
  },
  {
    title: "Cost-Effective Solution",
    description: "Save on recruitment and onboarding costs while increasing employee retention through valuable upskilling.",
    icon: Award,
  },
];

const trainingAreas = [
  {
    title: "Data Analysis Fundamentals",
    description: "Master the basics of data analysis, statistics, and analytical thinking.",
    icon: BarChart3,
    topics: [
      "Statistical analysis basics",
      "Data cleaning and preparation",
      "Analytical problem-solving",
      "Data visualization principles"
    ]
  },
  {
    title: "Tool-Specific Training",
    description: "Get hands-on experience with your organization's preferred analytics tools.",
    icon: Laptop,
    topics: [
      "Power BI mastery",
      "SQL for data analysis",
      "Python/R programming",
      "Custom tool training"
    ]
  },
  {
    title: "Advanced Analytics",
    description: "Dive deep into advanced analytical methods tailored to your industry.",
    icon: LineChart,
    topics: [
      "Predictive modeling",
      "Machine learning basics",
      "Industry-specific analytics",
      "Advanced visualization"
    ]
  },
  {
    title: "Data Management",
    description: "Learn best practices for handling and managing organizational data.",
    icon: Database,
    topics: [
      "Data governance",
      "Quality assurance",
      "Security best practices",
      "Process automation"
    ]
  },
];

const testimonials = [
  {
    quote: "The customized training program from Data Sparta has transformed our team's ability to work with data. We're now making faster, more informed decisions across all departments.",
    author: "Sarah Chen",
    role: "Operations Director",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "What sets Data Sparta apart is their ability to tailor the training to our specific needs and tools. Our team was productive with the new skills immediately.",
    author: "Michael Rodriguez",
    role: "Analytics Manager",
    company: "RetailPro International",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
  }
];

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

      {/* Value Proposition */}
      <section className="py-16 bg-background">
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

      {/* Step by Step Process */}
      <section className="py-16 bg-content2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Training Process</h2>
            <p className="mt-4 text-lg text-foreground/60 max-w-3xl mx-auto">
              A structured approach to transforming your team's data capabilities
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {orgTraining?.steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-content1 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-primary">Step {index + 1}</div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                </div>
                <p className="text-foreground/60 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-foreground/60">{detail}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Testimonials */}
      <section className="py-16 bg-content2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-content1 rounded-lg p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-foreground font-semibold">{testimonial.author}</div>
                    <div className="text-foreground/60 text-sm">{testimonial.role}</div>
                    <div className="text-foreground/60 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-foreground/60 italic">"{testimonial.quote}"</p>
              </div>
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
    </div>
  );
}