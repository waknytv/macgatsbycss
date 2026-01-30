import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import AssetImage from "../components/AssetImage";

const AproposPage = ({ data }) => {
  const page = data.markdownRemark;
  const {
    pageTitle,
    intro,
    historyTitle,
    historyText,
    teamTitle,
    teamText,
    labelsTitle,
    labelsText,
    image,
    ctaTitle,
    ctaText,
    ctaButton,
  } = page.frontmatter;

  return (
    <Layout>
      <section className="section hero hero--simple">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p className="lead">{intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <div>
            <h2>{historyTitle}</h2>
            <p>{historyText}</p>
            <h3>{teamTitle}</h3>
            <p>{teamText}</p>
            <h3>{labelsTitle}</h3>
            <p>{labelsText}</p>
          </div>
          <div className="about__image">
            <AssetImage src={image} alt="Équipe BE WEB" />
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__content">
          <div>
            <h2>{ctaTitle}</h2>
            <p>{ctaText}</p>
          </div>
          <Link to="/contact" className="button button--light">
            {ctaButton}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="À propos"
    description="Une équipe belge dynamique et à l'écoute des artisans, disponible dans toute la Belgique."
    pathname="/a-propos"
  />
);

export const query = graphql`
  query AproposPage {
    markdownRemark(frontmatter: { slug: { eq: "a-propos" } }) {
      frontmatter {
        pageTitle
        intro
        historyTitle
        historyText
        teamTitle
        teamText
        labelsTitle
        labelsText
        image
        ctaTitle
        ctaText
        ctaButton
      }
    }
  }
`;

export default AproposPage;
