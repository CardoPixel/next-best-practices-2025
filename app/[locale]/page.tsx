// /app/page.tsx

import { Button } from "@/components/ui/button";
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
        <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24">
            <section className="max-w-4xl rounded-xl border border-primary px-4 py-12 text-center shadow-lg">
                <h1 className="animate-fade-in-down mb-6 text-xl leading-tight font-extrabold sm:text-5xl md:text-6xl">
                    {t("HomePage.welcome")} <br className="sm:hidden" />
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        next-best-practices-2025
                    </span>
                </h1>

                <p className="animate-fade-in-up mb-10 text-lg leading-relaxed text-muted-foreground delay-200 sm:text-xl md:text-2xl">
                    {t("HomePage.description")}
                </p>

                <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 delay-400 sm:flex-row">
                    <Button
                        variant={"default"}
                        className="px-8 py-4 font-semibold"
                    >
                        <Link href="/dashboard" passHref>
                            {t("HomePage.getStarted")}
                        </Link>
                    </Button>
                    <Button
                        variant={"secondary"}
                        className="px-8 py-4 font-semibold"
                    >
                        <Link href="/about" passHref>
                            {t("HomePage.learnMore")}
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="mt-20 max-w-4xl px-4 text-center">
                <h2 className="mb-8 text-3xl font-bold sm:text-4xl bg-gradient-to-l from-secondary to-primary bg-clip-text text-transparent">
                    {t("HomePage.why")}
                </h2>
                <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
                    <div className="rounded-lg border border-primary p-6 shadow">
                        <h3 className="mb-2 text-xl font-semibold text-primary">
                            {t("HomePage.reason1title")}
                        </h3>
                        <p className="text-muted-foreground">
                            {t("HomePage.reason1description")}
                        </p>
                    </div>
                    <div className="rounded-lg border border-secondary p-6 shadow">
                        <h3 className="mb-2 text-xl font-semibold text-secondary">
                            {t("HomePage.reason2title")}
                        </h3>
                        <p className="text-muted-foreground">
                            {t("HomePage.reason2description")}
                        </p>
                    </div>
                    <div className="rounded-lg border border-primary p-6 shadow">
                        <h3 className="mb-2 text-xl font-semibold text-primary">
                            {t("HomePage.reason3title")}
                        </h3>
                        <p className="text-muted-foreground">
                            {t("HomePage.reason3description")}
                        </p>
                    </div>
                    <div className="rounded-lg border border-secondary p-6 shadow">
                        <h3 className="mb-2 text-xl font-semibold text-secondary">
                            {t("HomePage.reason4title")}
                        </h3>
                        <p className="text-muted-foreground">
                            {t("HomePage.reason4description")}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
