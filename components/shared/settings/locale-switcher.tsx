"use client";
import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export type Props = unknown;

export default function LocaleSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    // Define the available languages and their corresponding flag emojis.
    const languages = [
        { locale: "en", alt: "US English", flagEmoji: "🇺🇸" },
        { locale: "es", alt: "Español de España", flagEmoji: "🇪🇸" },
        { locale: "pt", alt: "Portuguese Brasileiro", flagEmoji: "🇧🇷" },
    ];

    /**
     * Handles changing the locale.
     * Uses router.replace to update the URL with the new locale without a full page reload,
     * maintaining the current path.
     * @param newLocale The new locale to switch to (e.g., "en", "pt", "es").
     */
    const handleChange = (newLocale: (typeof routing.locales)[number]) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="bg-transparent flex flex-row gap-4 justify-end items-center h-fit py-2 px-4">
            {languages.map((langData) => (
                <div key={langData.locale}>
                    <button
                        onClick={() => handleChange(langData.locale as (typeof routing.locales)[number])}
                        className={`
                                px-2 py-0.5 rounded
                                ${currentLocale === langData.locale
                                ? "border bg-gray-50 scale-120"
                                : "border-none"
                            }
                            `}
                    >
                        <span role="img" aria-label={langData.alt} className="text-2xl">
                            {langData.flagEmoji}
                        </span>
                    </button>
                </div>
            ))}
        </div>
    );
}