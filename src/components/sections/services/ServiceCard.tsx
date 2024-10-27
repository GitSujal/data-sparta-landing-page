import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  ctaText: string;
  ctaHref: string;
  id: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  ctaText,
  ctaHref,
  id,
}: ServiceCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-8">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-center text-primary-content">{title}</h3>
        <p className="mt-4 text-secondary-content text-center">{description}</p>
        
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-primary-content">Key Features</h4>
          <ul className="mt-4 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="ml-3 text-secondary-content">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-primary-content">Benefits</h4>
          <ul className="mt-4 space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="ml-3 text-secondary-content">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            to={ctaHref}
            className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            {ctaText}
          </Link>
          <Link
            to={`/how-it-works#${id}`}
            className="block w-full text-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary/10 transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </div>
  );
}