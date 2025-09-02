import { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-[#ff5722] font-bold text-xl"
        >
          <FaDumbbell className="text-2xl" />
          Motion Mastery
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a
            href="#exercises"
            className="hover:text-[#ff5722] transition-colors"
          >
            Exercises
          </a>
          <a
            href="#programs"
            className="hover:text-[#ff5722] transition-colors"
          >
            Programs
          </a>
          <a
            href="https://www.smaug-x.com/"
            className="hover:text-[#ff5722] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 hover:text-[#ff5722]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col px-4 py-3 gap-3 text-gray-700 font-medium">
          <a
            href="#exercises"
            className="hover:text-[#ff5722] transition-colors"
            onClick={toggleMenu}
          >
            Exercises
          </a>
          <a
            href="#programs"
            className="hover:text-[#ff5722] transition-colors"
            onClick={toggleMenu}
          >
            Programs
          </a>
          <a
            href="https://www.smaug-x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff5722] transition-colors"
            onClick={toggleMenu}
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
