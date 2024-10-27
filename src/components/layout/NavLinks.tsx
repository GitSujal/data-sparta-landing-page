import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinksProps {
  onContactClick: (e: React.MouseEvent) => void;
}

export function NavLinks({ onContactClick }: NavLinksProps) {
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
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`text-base font-medium transition-colors ${
            isActive(item.href)
              ? "text-primary"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          {item.name}
        </Link>
      ))}
      <a
        href="#contact"
        onClick={onContactClick}
        className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
      >
        Contact
      </a>
      <a
        href="https://calendly.com/dataprofessionacademy/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90 transition-colors"
      >
        Schedule Consultation
      </a>
    </>
  );
}