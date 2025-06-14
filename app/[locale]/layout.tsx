import type { Metadata } from "next";

import "@/styles/globals.css";

import { geistMono, geistSans, noto_color_emoji } from "@/app/fonts";
import { LayoutHeader } from "@/components/shared/layout/header";
import LocaleSwitcher from "@/components/shared/settings/locale-switcher";
import { ModeToggle } from "@/components/shared/settings/mode-toggle";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Next.js Best Practices 2025",
    description:
        "A comprehensive, opinionated Next.js v15 App Router template engineered to kickstart your web projects with the latest best practices for 2025.",
};

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${noto_color_emoji.variable} antialiased`}
            >
                <NextIntlClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <LayoutHeader>
                            <LocaleSwitcher />
                            <ModeToggle />
                        </LayoutHeader>
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
