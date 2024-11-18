import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { qualities, benefits, applicationSteps } from "../data/careers";

export function Careers() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Submit the form data to Netlify
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thank you for your interest! Your application has been submitted successfully.'
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        type: 'error',
        message: 'Failed to submit the form. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
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
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Become a Data Spartan</h2>
          <p className="mt-6 text-lg text-foreground/60">
            At Data Sparta, we're always on the lookout for the next Data Spartan – someone who shares our passion for data and has the drive to make a real impact. We believe that data is more than just numbers; it's about discovery, transformation, and creating value for our clients.
          </p>
          <p className="mt-4 text-lg text-foreground/60">
            If you enjoy diving into complex data challenges, finding insights in unexpected places, and have the skills (or a strong desire to learn) to build pipelines, capture and standardize data from various sources, we want to hear from you.
          </p>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 bg-content2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">What It Takes to Be a Data Spartan</h2>
            <p className="mt-4 text-lg text-foreground/60">
              We value these qualities in our team members
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {qualities.map((quality) => (
              <div
                key={quality.title}
                className="bg-content1 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <quality.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground text-center">
                  {quality.title}
                </h3>
                <p className="mt-2 text-foreground/60 text-center">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Why Join Data Sparta?</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Discover the benefits of being a Data Spartan
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-content1 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground text-center">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-foreground/60 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions and Expression of Interest Form Side by Side */}
      <section id="open-positions" className="py-16 bg-content2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Open Positions */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground">Current Open Positions</h2>
                <p className="mt-4 text-lg text-foreground/60">
                  While we may not have specific openings at the moment, we're always eager to connect with talented professionals who align with our vision. If you're interested in joining our team, please don't hesitate to reach out and introduce yourself!
                </p>
              </div>
              <div className="bg-content1 rounded-lg p-8 text-center">
                <p className="text-lg text-foreground/60">
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
                <h2 className="text-3xl font-bold text-foreground">Express Your Interest</h2>
                <p className="mt-4 text-lg text-foreground/60">
                  Take the first step towards becoming a Data Spartan by submitting your expression of interest.
                </p>
              </div>
              <form
                name="expression-of-interest"
                method="POST"
                action="/"
                onSubmit={handleSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
                encType="multipart/form-data"
                className="space-y-6 bg-content1 rounded-lg shadow-lg p-8"
              >
                <input type="hidden" name="form-name" value="expression-of-interest" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="subject" value="New Expression of Interest Submission" />
                
                {formStatus.type && (
                  <div
                    className={`p-4 rounded-md ${
                      formStatus.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-divider shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-content2 text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-divider shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-content2 text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-foreground">
                    Resume/CV * (PDF or DOC format, max 3MB)
                  </label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="mt-1 block w-full text-sm text-foreground/60
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-primary file:text-white
                      hover:file:bg-primary/90"
                  />
                  <p className="mt-1 text-sm text-foreground/60">
                    Maximum file size: 3MB. Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      isSubmitting
                        ? 'bg-primary/70 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/90'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">How to Join Our Team</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Your journey to becoming a Data Spartan
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-content1 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-xl"
                onClick={() => toggleStep(index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground text-center">
                    {step.title}
                  </h3>
                  <div className="flex justify-center mt-4">
                    {expandedStep === index ? (
                      <ChevronUp className="h-5 w-5 text-foreground/60" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-foreground/60" />
                    )}
                  </div>
                </div>
                {expandedStep === index && (
                  <div className="px-6 pb-6">
                    <p className="text-foreground/60 text-center">{step.description}</p>
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
          <h2 className="text-3xl font-bold text-white">Ready to Become a Data Spartan?</h2>
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