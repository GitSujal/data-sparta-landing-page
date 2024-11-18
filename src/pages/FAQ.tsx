import React from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";
import { faqs } from "../data/faqs";

export function FAQ() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            Find answers to common questions about our services and how we can help your business.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-foreground/60">
            We understand that choosing the right data solutions partner is a significant decision. To help you make an informed choice, we've compiled answers to some of the most frequently asked questions about our services, processes, and how we work with clients.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-content2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, index) => (
            <div key={category.category} className={index > 0 ? "mt-12" : ""}>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {category.category}
              </h2>
              <Accordion variant="bordered" className="bg-content1">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    aria-label={faq.question}
                    title={
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">{faq.question}</span>
                      </div>
                    }
                    className="text-foreground/60"
                  >
                    <p className="text-foreground/60">{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Didn't Find the Answer You Were Looking For?
          </h2>
          <p className="mt-4 text-xl text-foreground/60">
            Our team is here to help. Reach out to us with your questions or to schedule a free consultation.
          </p>
          <div className="mt-8">
            <Link to="/#contact">
              <Button
                size="lg"
                className="bg-primary text-white"
                endContent={<ArrowRight className="h-5 w-5" />}
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}