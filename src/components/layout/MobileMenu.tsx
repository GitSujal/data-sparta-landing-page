import React from "react";
import { Link, useLocation } from "react-router-dom";

interface MobileMenuProps {
  onContactClick: (e: React.MouseEvent) => void;
  onClose: () => void;
}

export function MobileMenu({ onContactClick, onClose }: MobileMenuProps) {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "FAQs", href: "/faq" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="lg:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive(item.href)
                ? "text-primary bg-gray-50"
                : "text-gray-700 hover:bg-gray-50 hover:text-primary"
            }`}
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        <a
          href="#contact"
          onClick={onContactClick}
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
        >
          Contact
        </a>
        <a
          href="https://calendly.com/dataprofessionacademy/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90"
          onClick={onClose}
        >
          Schedule Consultation
        </a>
      </div>
    </div>
  );
}