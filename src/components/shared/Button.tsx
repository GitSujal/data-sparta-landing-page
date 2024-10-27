import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  to,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-colors";
  
  const variantStyles = {
    primary: "text-white bg-primary hover:bg-primary/90",
    secondary: "text-primary bg-white hover:bg-gray-50 border-primary",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} onClick={onClick} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}