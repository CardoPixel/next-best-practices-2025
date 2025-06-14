import { Geist, Geist_Mono, Noto_Color_Emoji } from "next/font/google";

export const noto_color_emoji = Noto_Color_Emoji({
    preload: true,
    variable: "--font-noto-color-emoji",
    display: "swap",
    weight: "400",
    subsets: ["emoji"],
});

export const geistSans = Geist({
    preload: true,
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    preload: true,
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
