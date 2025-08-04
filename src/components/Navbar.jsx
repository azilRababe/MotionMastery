import { FaDumbbell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-[#ff5722] font-bold text-xl"
        >
          <FaDumbbell className="text-2xl" />
          Motion Mastery
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#exercises" className="hover:text-[#ff5722]">
            Exercises
          </a>
          <a href="#" className="hover:text-[#ff5722]">
            Programs
          </a>
          <a
            href="https://www.smaug-x.com/"
            className="hover:text-[#ff5722]"
            target="_blank"
          >
            About
          </a>
        </div>

        {/* TODO: Mobile Menu Placeholder (optional later) */}
      </div>
    </nav>
  );
};

export default Navbar;
