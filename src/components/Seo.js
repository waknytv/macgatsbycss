import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, keywords, pathname }) => {
  const data = useStaticQuery(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
          description
          keywords
          siteUrl
        }
      }
    }
  `);

  const seo = data.site.siteMetadata;
  const metaTitle = title ? `${title} | ${seo.title}` : seo.title;
  const metaDescription = description || seo.description;
  const metaKeywords = keywords || seo.keywords?.join(", ");
  const url = pathname ? `${seo.siteUrl}${pathname}` : seo.siteUrl;

  return (
    <Helmet htmlAttributes={{ lang: "fr" }}>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Seo;
