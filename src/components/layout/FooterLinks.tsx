import React from "react";
import { Link } from "react-router-dom";

export function FooterLinks() {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-gray-900">Quick Links</h3>
      <ul role="list" className="mt-6 space-y-4">
        <li>
          <Link to="/" className="text-sm leading-6 text-gray-600 hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-sm leading-6 text-gray-600 hover:text-primary">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-sm leading-6 text-gray-600 hover:text-primary">
            Services
          </Link>
        </li>
        <li>
          <Link to="/success-stories" className="text-sm leading-6 text-gray-600 hover:text-primary">
            Success Stories
          </Link>
        </li>
        <li>
          <Link to="/careers" className="text-sm leading-6 text-gray-600 hover:text-primary">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/faq" className="text-sm leading-6 text-gray-600 hover:text-primary">
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
}