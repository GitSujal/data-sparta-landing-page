import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const navigation = [
  { 
    name: "Home", 
    href: "/" 
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Data Platform", href: "/services#data-platform" },
      { name: "Analytics", href: "/services#analytics" },
      { name: "Organization Training", href: "/organization-training" },
      { name: "Individual Training", href: "/services#individual-training" },
      { name: "Success Stories", href: "/success-stories" }
    ]
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "FAQs", href: "/faq" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" }
    ]
  }
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
    ? "text-primary bg-content2"
    : "text-primary";

  const inactiveStyles = mobile
    ? "text-foreground hover:bg-content2 hover:text-primary"
    : "text-foreground hover:text-primary";

  const renderDropdown = (item: any) => (
    <div className="group relative">
      <button
        className={`flex items-center space-x-1 ${baseStyles} ${
          isActive(item.href) ? activeStyles : inactiveStyles
        }`}
      >
        <span>{item.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-content1 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1" role="menu" aria-orientation="vertical">
          {item.dropdown.map((subItem: any) => (
            <Link
              key={subItem.name}
              to={subItem.href}
              className="block px-4 py-2 text-sm text-foreground hover:bg-content2 hover:text-primary"
              onClick={onClose}
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMobileDropdown = (item: any) => (
    <div className="space-y-1">
      <div
        className={`${baseStyles} ${
          isActive(item.href) ? activeStyles : inactiveStyles
        }`}
      >
        {item.name}
      </div>
      <div className="pl-4 space-y-1">
        {item.dropdown.map((subItem: any) => (
          <Link
            key={subItem.name}
            to={subItem.href}
            className={`${baseStyles} ${
              isActive(subItem.href) ? activeStyles : inactiveStyles
            }`}
            onClick={onClose}
          >
            {subItem.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {navigation.map((item) => (
        <React.Fragment key={item.name}>
          {item.dropdown ? (
            mobile ? (
              renderMobileDropdown(item)
            ) : (
              renderDropdown(item)
            )
          ) : (
            <Link
              to={item.href}
              className={`${baseStyles} ${
                isActive(item.href) ? activeStyles : inactiveStyles
              }`}
              onClick={onClose}
            >
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
      <Link
        to="/contact"
        className={
          mobile
            ? "block w-full text-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90"
            : "ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90 transition-colors"
        }
        onClick={onClose}
      >
        Schedule Consultation
      </Link>
    </>
  );
}