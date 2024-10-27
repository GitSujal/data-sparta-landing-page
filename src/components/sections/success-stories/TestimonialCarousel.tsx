import React from "react";
import { Card, CardBody, Avatar } from "@nextui-org/react";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-card">
          <CardBody className="p-6">
            <Quote className="h-8 w-8 text-primary mb-4" />
            <p className="text-secondary-content mb-6">{testimonial.content}</p>
            <div className="flex items-center">
              <Avatar
                src={testimonial.image}
                className="w-12 h-12"
                alt={testimonial.name}
              />
              <div className="ml-4">
                <p className="font-semibold text-primary-content">{testimonial.name}</p>
                <p className="text-sm text-secondary-content">{testimonial.role}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}