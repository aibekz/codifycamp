"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="h-screen bg-white dark:bg-neutral-950 flex flex-col">
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          {darkMode ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-4 font-[family-name:var(--font-saira)]">
            CodifyCamp<sup className="text-lg md:text-2xl relative -top-5 md:-top-7">®</sup>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            Learn to code anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              Learn More
            </button>
            <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
      <footer className="py-6">
        <div className="flex justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">faq</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">terms</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">privacy</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">support</a>
        </div>
      </footer>
    </div>
  );
}
