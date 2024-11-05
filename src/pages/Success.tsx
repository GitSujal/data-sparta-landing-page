import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export function Success() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formType = searchParams.get('form');

  const getMessage = () => {
    switch (formType) {
      case 'expression-of-interest':
        return {
          title: "Application Submitted Successfully!",
          description: "Thank you for your interest in joining Data Sparta. We'll review your application and get back to you soon."
        };
      case 'contact':
      default:
        return {
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We'll get back to you as soon as possible."
        };
    }
  };

  const { title, description } = getMessage();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <CheckCircle className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
