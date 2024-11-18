import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
          <p className="mt-3 text-lg text-foreground/60">
            Ready to transform your business with data? Let's talk about your needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-content1 shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <dl className="space-y-6">
                <div className="flex items-center">
                  <dt className="sr-only">Email</dt>
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                  <dd className="ml-3">
                    <a
                      href="mailto:contact@datasparta.com"
                      className="text-lg text-foreground hover:text-primary transition-colors"
                    >
                      contact@datasparta.com
                    </a>
                  </dd>
                </div>

                <div className="flex items-center">
                  <dt className="sr-only">Phone number</dt>
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  <dd className="ml-3">
                    <a
                      href="tel:+61410677503"
                      className="text-lg text-foreground hover:text-primary transition-colors"
                    >
                      +61 410 677 503
                    </a>
                  </dd>
                </div>

                <div className="flex items-center">
                  <dt className="sr-only">Location</dt>
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                  <dd className="ml-3 text-lg text-foreground">
                    Perth, Australia
                  </dd>
                </div>
              </dl>

              <div className="mt-8 text-center">
                <a
                  href="mailto:contact@datasparta.com"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  Send us an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}