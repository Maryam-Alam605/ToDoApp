import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="bg-yellow-300 p-4 mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        {/* Logo */}
        <div className="logo flex items-center gap-2">
          <svg
            className="w-8 h-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
            />
          </svg>
          <p
            style={{
              fontFamily: "Englebert, cursive",
              fontSize: "1.7rem",
              cursor: "pointer",
            }}
          >
            Your Tasks
          </p>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="sm:hidden bg-gray-800 text-white px-3 py-1 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu */}
        <ul
          className={`flex flex-col sm:flex-row gap-4 sm:gap-8 sm:mx-9 ${
            menuOpen ? "block" : "hidden"
          } sm:flex`}
        >
          <Link to="/home">
            <li
              className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Home
            </li>
          </Link>
          <Link to="/tasks">
            <li
              className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Tasks
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
