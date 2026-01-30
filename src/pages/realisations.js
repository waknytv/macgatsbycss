import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import AssetImage from "../components/AssetImage";

const RealisationsPage = ({ data }) => {
  const page = data.markdownRemark;
  const [activeImage, setActiveImage] = useState(null);

  return (
    <Layout>
      <section className="section hero hero--simple">
        <div className="container">
          <h1>{page.frontmatter.pageTitle}</h1>
          <p className="lead">{page.frontmatter.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery">
            {page.frontmatter.portfolioImages.map((image) => (
              <button
                key={image}
                type="button"
                className="gallery__item gallery__item--button"
                onClick={() => setActiveImage(image)}
              >
                <AssetImage src={image} alt="Réalisation BE WEB" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div className="lightbox__content" role="document">
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setActiveImage(null)}
            >
              Fermer
            </button>
            <AssetImage src={activeImage} alt="Aperçu réalisation" />
          </div>
        </div>
      )}

      <section className="section cta">
        <div className="container cta__content">
          <div>
            <h2>{page.frontmatter.ctaTitle}</h2>
            <p>{page.frontmatter.ctaText}</p>
          </div>
          <Link to="/contact" className="button button--light">
            {page.frontmatter.ctaButton}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Réalisations"
    description="Galerie de réalisations BE WEB pour artisans et indépendants en Belgique."
    pathname="/realisations"
  />
);

export const query = graphql`
  query RealisationsPage {
    markdownRemark(frontmatter: { slug: { eq: "realisations" } }) {
      frontmatter {
        pageTitle
        intro
        ctaTitle
        ctaText
        ctaButton
        portfolioImages
      }
    }
  }
`;

export default RealisationsPage;
