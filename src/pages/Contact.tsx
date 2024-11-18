import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "../components/forms/ContactForm";

export function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            Have questions about our services? We're here to help!
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-content2 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary" />
                  <a
                    href="mailto:contact@datasparta.com"
                    className="ml-3 text-foreground/60 hover:text-primary"
                  >
                    contact@datasparta.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary" />
                  <a
                    href="tel:+61410677503"
                    className="ml-3 text-foreground/60 hover:text-primary"
                  >
                    +61 410 677 503
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="ml-3 text-foreground/60">
                    Perth, Australia
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Office Hours</h3>
                <p className="text-foreground/60">
                  Monday - Friday: 9:00 AM - 5:00 PM AWST
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-content1 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}