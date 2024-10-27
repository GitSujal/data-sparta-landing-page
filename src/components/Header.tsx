import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-teal-500 py-6">
          <div className="flex items-center">
            <a 
              href="/"
              onClick={handleHomeClick}
              className="flex items-center space-x-2"
            >
              <img 
                src="https://lwfiles.mycourse.app/64e1593f6f801424e29f5705-public/1d5fd27821ece5e922916b2404eafcf8.png" 
                alt="Data Sparta Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-gray-900">Data Sparta</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              item.name === "Home" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleHomeClick}
                  className={`text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              ) : (
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
              )
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
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
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                item.name === "Home" ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleHomeClick}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      isActive(item.href)
                        ? "text-primary bg-gray-50"
                        : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      isActive(item.href)
                        ? "text-primary bg-gray-50"
                        : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
              >
                Contact
              </a>
              <a
                href="https://calendly.com/dataprofessionacademy/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}