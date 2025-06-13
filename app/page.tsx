// /app/page.tsx

import React from 'react';
import Link from 'next/link';

/**
 * Renders the main landing page of the next-best-practices-2025 template.
 * This component is a React Server Component by default in the App Router.
 *
 * It provides a welcoming message, a brief introduction to the template,
 * and calls to action, demonstrating a basic page structure.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 bg-gray-50 text-gray-800">
      <section className="text-center max-w-4xl px-4 py-12 bg-white rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight mb-6 animate-fade-in-down">
          Welcome to <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-800 text-transparent bg-clip-text">
            next-best-practices-2025
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up delay-200">
          Your robust starting point for modern web applications,
          built with <strong>Next.js v15 App Router</strong> and the latest best practices for <strong>2025</strong>.
          Accelerate your development with a pre-configured, scalable foundation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <Link href="/dashboard" passHref>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
          <Link href="/about" passHref>
            <button className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-20 px-4 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-8">Why this template?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Cutting-Edge Technologies</h3>
            <p className="text-gray-600">
              Leverage Next.js v15 with the App Router, TypeScript, and modern styling conventions for
              a powerful and efficient development experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Optimized for Performance</h3>
            <p className="text-gray-600">
              Built with performance in mind, ensuring fast load times and a smooth user experience
              right out of the box.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Best Practices Applied</h3>
            <p className="text-gray-600">
              Incorporates industry-standard best practices for code quality, project structure,
              accessibility, and maintainability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Developer Friendly</h3>
            <p className="text-gray-600">
              Configured with ESLint and Prettier for consistent code style, absolute imports for
              cleaner paths, and clear environment setup.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}