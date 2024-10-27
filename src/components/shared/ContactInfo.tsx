import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <ul role="list" className="mt-6 space-y-4">
      <li>
        <a
          href="mailto:contact@datasparta.com.au"
          className="text-sm leading-6 text-gray-600 hover:text-primary flex items-center"
        >
          <Mail className="h-4 w-4 mr-2" />
          contact@datasparta.com.au
        </a>
      </li>
      <li>
        <a
          href="tel:+61410677503"
          className="text-sm leading-6 text-gray-600 hover:text-primary flex items-center"
        >
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
  );
}