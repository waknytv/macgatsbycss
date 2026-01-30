require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "BE WEB | Sites web sur mesure pour artisans",
    description:
      "Création de sites web sur mesure pour artisans et indépendants en Belgique. Sans abonnement, rapide et efficace.",
    siteUrl: "https://www.be-web.be",
    keywords: [
      "création site internet artisan Belgique",
      "création site internet artisan Tournai",
      "site vitrine artisan Tournai",
      "site vitrine artisan Belgique",
      "agence web Tournai",
      "agence web Belgique",
      "gestion des réseaux sociaux Tournai",
      "gestion des réseaux sociaux Belgique",
      "gestion de facebook Belgique",
      "gestion de facebook Tournai",
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-terser",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "legal",
        path: `${__dirname}/public/content`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID || "",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
