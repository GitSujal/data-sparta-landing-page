import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <img
                className="h-7"
                src="https://lwfiles.mycourse.app/64e1593f6f801424e29f5705-public/1d5fd27821ece5e922916b2404eafcf8.png"
                alt="Data Sparta"
              />
              <span className="text-xl font-bold text-gray-900">Data Sparta</span>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Empowering SMBs with data-driven solutions.
            </p>
            <div className="flex items-center space-x-2">
              <a
                href="https://www.linkedin.com/company/data-sparta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
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
                    <Link to="/faq" className="text-sm leading-6 text-gray-600 hover:text-primary">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="mailto:contact@datasparta.com" className="text-sm leading-6 text-gray-600 hover:text-primary flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      contact@datasparta.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+61410677503" className="text-sm leading-6 text-gray-600 hover:text-primary flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +61 410 677 503
                    </a>
                  </li>
                  <li>
                    <div className="text-sm leading-6 text-gray-600 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Perth, Australia
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Data Sparta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}