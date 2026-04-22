import type { Metadata } from "next";

export const siteConfig = {
    name: "NetInterim",
    shortName: "NetInterim",
    url: "https://netinterim.fr",
    description:
        "Calculateur de salaire intérim en France : estimation du brut, du net, des IFM, des congés payés, des heures supplémentaires et du reste à recevoir.",
    locale: "fr_FR",
};

type MetadataParams = {
    title: string;
    description: string;
    path?: string;
};

export function buildMetadata({
                                  title,
                                  description,
                                  path = "/",
                              }: MetadataParams): Metadata {
    const url = `${siteConfig.url}${path}`;

    return {
        title,
        description,
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}