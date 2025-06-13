// /app/page.tsx

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

/**
 * Renders the main landing page of the next-best-practices-2025 template.
 * This component is a React Server Component by default in the App Router.
 *
 * It provides a welcoming message, a brief introduction to the template,
 * and calls to action, demonstrating a basic page structure.
 */
export default function LocaleHomePage() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 bg-gray-50 text-gray-800">
      <section className="text-center max-w-4xl px-4 py-12 bg-white rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight mb-6 animate-fade-in-down">
          {t("HomePage.welcome")} <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-800 text-transparent bg-clip-text">
            next-best-practices-2025
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up delay-200">
          {t("HomePage.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <Link href="/dashboard" passHref>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105">
              {t("HomePage.getStarted")}
            </button>
          </Link>
          <Link href="/about" passHref>
            <button className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105">
              {t("HomePage.learnMore")}
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-20 px-4 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-8">{t("HomePage.why")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{t("HomePage.reason1title")}</h3>
            <p className="text-gray-600">
              {t("HomePage.reason1description")}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{t("HomePage.reason2title")}</h3>
            <p className="text-gray-600">
              {t("HomePage.reason2description")}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{t("HomePage.reason3title")}</h3>
            <p className="text-gray-600">
              {t("HomePage.reason3description")}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{t("HomePage.reason4title")}</h3>
            <p className="text-gray-600">
              {t("HomePage.reason4description")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}