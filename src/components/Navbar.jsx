import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chanchal</h1>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>

        <button className="border px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;