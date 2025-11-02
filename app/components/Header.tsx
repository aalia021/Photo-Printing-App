// app/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-4 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">📸 SnapPrint</h1>
        <nav className="hidden md:flex gap-6 text-gray-600 text-sm">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
