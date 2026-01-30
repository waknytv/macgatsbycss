import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ContactPage = ({ data }) => {
  const page = data.content;
  const site = data.site.frontmatter;
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopy = async (text, setter) => {
    if (!navigator?.clipboard) {
      return;
    }
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <Layout>
      <section className="section hero hero--simple">
        <div className="container">
          <h1>{page.frontmatter.pageTitle}</h1>
          <p className="lead">{page.frontmatter.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          <div className="contact__card">
            <h2>Coordonnées</h2>
            <p>{site.address}</p>
            <p>{site.hours}</p>
            <div className="contact__links">
              <a href={`tel:${site.phone}`}>{site.phone}</a>
              <button
                type="button"
                className="button button--ghost"
                onClick={() => handleCopy(site.phone, setPhoneCopied)}
              >
                {phoneCopied ? "Numéro copié" : "Copier le numéro"}
              </button>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <button
                type="button"
                className="button button--ghost"
                onClick={() => handleCopy(site.email, setEmailCopied)}
              >
                {emailCopied ? "Email copié" : "Copier l’email"}
              </button>
            </div>
          </div>
          <div className="contact__card contact__card--accent">
            <h2>{page.frontmatter.ctaTitle}</h2>
            <p>{page.frontmatter.ctaText}</p>
            <a className="button" href={`mailto:${site.email}`}>
              {page.frontmatter.ctaButton}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Contact"
    description="Contactez BE WEB pour un site vitrine sur mesure. Appel ou email en Belgique."
    pathname="/contact"
  />
);

export const query = graphql`
  query ContactPage {
    content: markdownRemark(frontmatter: { slug: { eq: "contact" } }) {
      frontmatter {
        pageTitle
        intro
        ctaTitle
        ctaText
        ctaButton
      }
    }
    site: markdownRemark(frontmatter: { siteName: { ne: null } }) {
      frontmatter {
        address
        phone
        email
        hours
      }
    }
  }
`;

export default ContactPage;
