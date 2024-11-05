import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { 
  Brain, 
  Lightbulb, 
  Code2, 
  Database, 
  Workflow, 
  Wrench,
  Rocket,
  Users,
  GraduationCap,
  Clock,
  Target,
  Laptop,
  Send,
  PhoneCall,
  UserCheck,
  UserPlus,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const qualities = [
  {
    icon: Brain,
    title: "Passion for Data",
    description: "A genuine love for data and a curiosity to explore beyond the numbers."
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "You thrive on finding solutions, even in the face of complex or unstructured data."
  },
  {
    icon: Code2,
    title: "Data Pipeline Development",
    description: "Experience (or interest) in building and optimizing data pipelines to capture data from various sources."
  },
  {
    icon: Database,
    title: "Data Warehousing Knowledge",
    description: "Understanding of data warehousing concepts, or a willingness to learn and master them."
  },
  {
    icon: Workflow,
    title: "Software Development Mindset",
    description: "A structured approach to problem-solving, with a focus on code quality, automation, and continuous improvement."
  },
  {
    icon: Wrench,
    title: "Resourcefulness",
    description: "You're not afraid to get your hands dirty and gather data from unexpected sources to solve tough problems."
  }
];

const benefits = [
  {
    icon: Rocket,
    title: "Innovation-Driven Environment",
    description: "We believe in constant learning and growth. Here, you'll have the freedom to innovate and explore new solutions to data challenges."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work alongside a team of skilled data professionals who support each other to achieve big goals."
  },
  {
    icon: GraduationCap,
    title: "Opportunities for Growth",
    description: "With access to ongoing training and mentorship, we support your professional development and encourage you to reach new heights."
  },
  {
    icon: Clock,
    title: "Flexible Work Options",
    description: "Enjoy a flexible work environment that respects your work-life balance."
  },
  {
    icon: Target,
    title: "Impactful Work",
    description: "Our solutions drive real value for our clients, allowing you to make a meaningful impact in their success."
  },
  {
    icon: Laptop,
    title: "Cutting-Edge Tools and Technologies",
    description: "We provide access to the latest tools and tech to help you perform at your best."
  }
];

const applicationSteps = [
  {
    icon: Send,
    title: "Submit Your Application",
    description: "Send us your resume and a cover letter that tells us why you're passionate about data and why you'd make a great Data Spartan."
  },
  {
    icon: PhoneCall,
    title: "Initial Screening",
    description: "Our team will review your application and, if we think there's a good fit, we'll reach out to schedule an initial call."
  },
  {
    icon: UserCheck,
    title: "Technical Interview",
    description: "We'll dive deeper into your technical skills and experience to understand your approach to data challenges. We believe that skills can be taught so what we are looking for is your learning attitude."
  },
  {
    icon: UserPlus,
    title: "Join the Team",
    description: "If everything aligns, you'll receive an offer to join Data Sparta and start your journey as a Data Spartan!"
  }
];

export function Careers() {
  const navigate = useNavigate();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'expression-of-interest',
          ...Object.fromEntries(formData)
        }).toString()
      });

      if (response.ok) {
        navigate('/success?form=expression-of-interest');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

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
            Join the Data Spartans
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            Are you passionate about data and eager to go beyond just analysis? Do you thrive on tackling challenges head-on? Become a part of our journey!
          </p>
          <div className="mt-10">
            <a
              href="#open-positions"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:text-lg"
            >
              Explore Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Become a Data Spartan</h2>
          <p className="mt-6 text-lg text-gray-500">
            At Data Sparta, we're always on the lookout for the next Data Spartan – someone who shares our passion for data and has the drive to make a real impact. We believe that data is more than just numbers; it's about discovery, transformation, and creating value for our clients.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            If you enjoy diving into complex data challenges, finding insights in unexpected places, and have the skills (or a strong desire to learn) to build pipelines, capture and standardize data from various sources, we want to hear from you.
          </p>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What It Takes to Be a Data Spartan</h2>
            <p className="mt-4 text-lg text-gray-500">
              We value these qualities in our team members
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {qualities.map((quality) => (
              <div
                key={quality.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <quality.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                  {quality.title}
                </h3>
                <p className="mt-2 text-gray-500 text-center">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions and Expression of Interest Form Side by Side */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Open Positions */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Current Open Positions</h2>
                <p className="mt-4 text-lg text-gray-500">
                  While we may not have specific openings at the moment, we're always eager to connect with talented professionals who align with our vision. If you're interested in joining our team, please don't hesitate to reach out and introduce yourself!
                </p>
              </div>
              {/* You can add a list of open positions here when available */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-lg text-gray-600">
                  No specific positions are currently open, but we're always interested in meeting talented individuals who are passionate about data.
                </p>
                <p className="mt-4 text-primary font-medium">
                  Submit your expression of interest to be considered for future opportunities →
                </p>
              </div>
            </div>

            {/* Expression of Interest Form */}
            <div id="expression-of-interest">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Express Your Interest</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Take the first step towards becoming a Data Spartan by submitting your expression of interest.
                </p>
              </div>
              <form
                name="expression-of-interest"
                method="POST"
                onSubmit={handleSubmit}
                data-netlify="true"
                encType="multipart/form-data"
                className="space-y-6 bg-white rounded-lg shadow-lg p-8"
              >
                <input type="hidden" name="form-name" value="expression-of-interest" />
                <input type="hidden" name="subject" value="New Expression of Interest Submission" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                    Resume/CV * (PDF or DOC format, max 3MB)
                  </label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    max-size="3000000"
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-primary file:text-white
                      hover:file:bg-primary/90"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Maximum file size: 3MB. Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Data Sparta */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Join Data Sparta?</h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover the benefits of being a Data Spartan
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-500 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How to Join Our Team</h2>
            <p className="mt-4 text-lg text-gray-500">
              Your journey to becoming a Data Spartan
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-xl"
                onClick={() => toggleStep(index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                    {step.title}
                  </h3>
                  <div className="flex justify-center mt-4">
                    {expandedStep === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
                {expandedStep === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-500 text-center">{step.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Become a Data Spartans?</h2>
          <p className="mt-4 text-xl text-white">
            If you're passionate about data and ready to make an impact, we'd love to hear from you.
          </p>
          <div className="mt-8">
            <a
              href="#expression-of-interest"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-primary hover:bg-gray-50 md:text-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
