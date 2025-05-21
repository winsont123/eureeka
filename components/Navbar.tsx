"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check for saved preference or system preference
  useEffect(() => {
    if (
      window.localStorage.getItem("theme") === "dark" ||
      (!("theme" in window.localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className={`bg-white text-black shadow-md dark:bg-gray-900 dark:text-white`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">MyPortfolio</Link>
        </div>
        <div className="flex items-center space-x-6 text-sm sm:text-base">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <Link href="/about" className="hover:text-teal-600 dark:hover:text-teal-400">About</Link>
          <Link href="/projects" className="hover:text-teal-600 dark:hover:text-teal-400">Projects</Link>
          <Link href="/contact" className="hover:text-teal-600 dark:hover:text-teal-400">Contact</Link>
          <button
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.485-12.485l-.707.707M5.222 17.778l-.707.707M21 12h-1M4 12H3m16.485 4.485l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M21.752 15.002A9 9 0 1112 3v0a7.5 7.5 0 009.752 12.002z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

