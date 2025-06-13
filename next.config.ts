import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    /* config options here */
};

const withNextIntl = createNextIntlPlugin({
    experimental: {
        // Provide the path to the messages that you're using in `AppConfig`
        createMessagesDeclaration: [
            "./messages/en.json",
            "./messages/es.json",
            "./messages/pt.json",
        ],
    },
});

export default withNextIntl(nextConfig);
