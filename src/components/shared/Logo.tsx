import React from "react";

interface LogoProps {
  onClick?: (e: React.MouseEvent) => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <a 
      href="/"
      onClick={onClick}
      className="flex items-center space-x-2"
    >
      <img 
        src="https://lwfiles.mycourse.app/64e1593f6f801424e29f5705-public/1d5fd27821ece5e922916b2404eafcf8.png" 
        alt="Data Sparta Logo" 
        className="h-10 w-auto"
      />
      <span className="text-2xl font-bold text-gray-900">Data Sparta</span>
    </a>
  );
}