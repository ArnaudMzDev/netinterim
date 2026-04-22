import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://netinterim.fr";

    const routes = [
        "",
        "/pricing",
        "/historique",

        "/calcul-salaire-interim",

        "/calcul-ifm-interim",
        "/conges-payes-interim",
        "/heures-supplementaires-interim",
        "/acompte-interim",

        "/1500-brut-interim-net",
        "/1800-brut-interim-net",
        "/2000-brut-interim-net",
        "/smic-interim-net",
        "/calcul-acompte-interim-75",
        "/combien-reste-apres-acompte-interim",
        "/combien-touche-interimaire-par-mois",
        "/interim-salaire-net-apres-ifm",
        "/taux-horaire-interim-net",
        "/calcul-salaire-interim-35h",

        "/pourquoi-mon-acompte-interim-est-plus-bas-que-prevu",
        "/comment-lire-sa-fiche-de-paie-interim",
        "/fin-de-mission-interim-combien-je-vais-toucher",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency:
            route === ""
                ? "daily"
                : route === "/calcul-salaire-interim"
                    ? "weekly"
                    : "monthly",
        priority:
            route === ""
                ? 1
                : route === "/calcul-salaire-interim"
                    ? 0.9
                    : 0.8,
    }));
}