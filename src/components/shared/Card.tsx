import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-content1 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${className}`}>
      {children}
    </div>
  );
}