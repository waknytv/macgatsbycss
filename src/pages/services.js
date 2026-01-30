import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import AssetImage from "../components/AssetImage";

const ServicesPage = ({ data }) => {
  const page = data.markdownRemark;

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
          <div className="cards">
            {page.frontmatter.services.map((service) => (
              <article key={service.title} className="card card--wide">
                <AssetImage src={service.image} alt={service.title} />
                <div className="card__body">
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
    title="Services"
    description="Création de site internet, gestion des réseaux sociaux, support technique & marketing et stratégies digitales."
    pathname="/services"
  />
);

export const query = graphql`
  query ServicesPage {
    markdownRemark(frontmatter: { slug: { eq: "services" } }) {
      frontmatter {
        pageTitle
        intro
        ctaTitle
        ctaText
        ctaButton
        services {
          title
          text
          image
        }
      }
    }
  }
`;

export default ServicesPage;
