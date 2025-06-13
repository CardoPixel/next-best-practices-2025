// /app/page.tsx

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

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
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-gray-800 sm:p-8 md:p-16 lg:p-24">
            <section className="max-w-4xl rounded-xl border border-gray-200 bg-white px-4 py-12 text-center shadow-lg">
                <h1 className="animate-fade-in-down mb-6 text-4xl leading-tight font-extrabold text-blue-700 sm:text-5xl md:text-6xl">
                    {t("HomePage.welcome")} <br className="sm:hidden" />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
                        next-best-practices-2025
                    </span>
                </h1>

                <p className="animate-fade-in-up mb-10 text-lg leading-relaxed text-gray-600 delay-200 sm:text-xl md:text-2xl">
                    {t("HomePage.description")}
                </p>

                <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 delay-400 sm:flex-row">
                    <Link href="/dashboard" passHref>
                        <button className="focus:ring-opacity-75 transform rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            {t("HomePage.getStarted")}
                        </button>
                    </Link>
                    <Link href="/about" passHref>
                        <button className="focus:ring-opacity-75 transform rounded-lg border border-blue-600 px-8 py-4 font-semibold text-blue-600 shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            {t("HomePage.learnMore")}
                        </button>
                    </Link>
                </div>
            </section>

            <section className="mt-20 max-w-4xl px-4 text-center">
                <h2 className="mb-8 text-3xl font-bold text-gray-700 sm:text-4xl">
                    {t("HomePage.why")}
                </h2>
                <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
                        <h3 className="mb-2 text-xl font-semibold text-blue-600">
                            {t("HomePage.reason1title")}
                        </h3>
                        <p className="text-gray-600">
                            {t("HomePage.reason1description")}
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
                        <h3 className="mb-2 text-xl font-semibold text-blue-600">
                            {t("HomePage.reason2title")}
                        </h3>
                        <p className="text-gray-600">
                            {t("HomePage.reason2description")}
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
                        <h3 className="mb-2 text-xl font-semibold text-blue-600">
                            {t("HomePage.reason3title")}
                        </h3>
                        <p className="text-gray-600">
                            {t("HomePage.reason3description")}
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
                        <h3 className="mb-2 text-xl font-semibold text-blue-600">
                            {t("HomePage.reason4title")}
                        </h3>
                        <p className="text-gray-600">
                            {t("HomePage.reason4description")}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
