import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export function Success() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <CheckCircle className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Message Sent Successfully!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for contacting us. We'll get back to you as soon as possible.
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