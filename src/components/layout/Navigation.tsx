import React from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "FAQs", href: "/faq" },
];

interface NavigationProps {
  onContactClick: (e: React.MouseEvent) => void;
  mobile?: boolean;
  onClose?: () => void;
}

export function Navigation({ onContactClick, mobile = false, onClose }: NavigationProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const baseStyles = mobile
    ? "block rounded-md px-3 py-2 text-base font-medium"
    : "text-base font-medium transition-colors";

  const activeStyles = mobile
    ? "text-primary bg-gray-50"
    : "text-primary";

  const inactiveStyles = mobile
    ? "text-gray-700 hover:bg-gray-50 hover:text-primary"
    : "text-gray-700 hover:text-primary";

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`${baseStyles} ${
            isActive(item.href) ? activeStyles : inactiveStyles
          }`}
          onClick={onClose}
        >
          {item.name}
        </Link>
      ))}
      <a
        href="#contact"
        onClick={(e) => {
          onContactClick(e);
          onClose?.();
        }}
        className={`${baseStyles} ${inactiveStyles}`}
      >
        Contact
      </a>
      <a
        href="https://calendly.com/dataprofessionacademy/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={
          mobile
            ? "block w-full text-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90"
            : "ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90 transition-colors"
        }
        onClick={onClose}
      >
        Schedule Consultation
      </a>
    </>
  );
}