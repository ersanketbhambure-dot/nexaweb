"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technology", href: "#technology" },
    { name: "Clients", href: "#industries" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide"> 
          <span className="text-white">Nexa</span> 
          <span className="text-blue-500">Web</span> 
          <span className="text-gray-400 text-sm ml-1">Technologies</span> 
        </h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0f172a] px-6 pb-6 space-y-4 text-white"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
