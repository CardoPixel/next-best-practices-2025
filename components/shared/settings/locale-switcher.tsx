"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";

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
        <div className="flex h-fit flex-row items-center justify-end gap-4 bg-transparent px-4 py-2">
            {languages.map((langData) => (
                <div key={langData.locale}>
                    <button
                        onClick={() =>
                            handleChange(
                                langData.locale as (typeof routing.locales)[number],
                            )
                        }
                        className={`rounded px-2 py-0.5 ${
                            currentLocale === langData.locale
                                ? "scale-120 border bg-gray-50"
                                : "border-none"
                        } `}
                    >
                        <span
                            role="img"
                            aria-label={langData.alt}
                            className="text-2xl"
                        >
                            {langData.flagEmoji}
                        </span>
                    </button>
                </div>
            ))}
        </div>
    );
}
