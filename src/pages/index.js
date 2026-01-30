import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import AssetImage from "../components/AssetImage";

const IndexPage = ({ data }) => {
  const page = data.markdownRemark;
  const {
    heroTitle,
    heroSubtitle,
    heroCta,
    heroTagline,
    proofsTitle,
    proofsIntro,
    servicesTitle,
    servicesIntro,
    services,
    processTitle,
    processSteps,
    faqTitle,
    faq,
    ctaTitle,
    ctaText,
    ctaButton,
    portfolioTitle,
    portfolioIntro,
    portfolioImages,
  } = page.frontmatter;

  return (
    <Layout>
      <div className="hero">
        <div className="container hero__content">
          <div>
            <p className="eyebrow">BE WEB</p>
            <h1>{heroTitle}</h1>
            <p className="lead">{heroSubtitle}</p>
            <p>{heroTagline}</p>
            <div className="hero__actions">
              <Link to="/contact" className="button">
                {heroCta}
              </Link>
              <Link to="/realisations" className="button button--ghost">
                Voir les réalisations
              </Link>
            </div>
          </div>
          <div className="hero__card">
            <p className="hero__card-title">Objectif principal</p>
            <p>Obtenir un appel ou un email rapidement.</p>
            <div className="hero__highlights">
              <span>Sans abonnement</span>
              <span>Prix compétitif</span>
              <span>Accompagnement complet</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container proofs">
          <div>
            <h2>{proofsTitle}</h2>
            <p>{proofsIntro}</p>
          </div>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>{servicesTitle}</h2>
            <p>{servicesIntro}</p>
          </div>
          <div className="cards">
            {services.map((service) => (
              <article key={service.title} className="card">
                <AssetImage src={service.image} alt={service.title} />
                <div className="card__body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section__footer">
            <Link to="/services" className="button">
              Découvrir les services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>{portfolioTitle}</h2>
            <p>{portfolioIntro}</p>
          </div>
          <div className="gallery">
            {portfolioImages.map((image) => (
              <div key={image} className="gallery__item">
                <AssetImage src={image} alt="Réalisation BE WEB" />
              </div>
            ))}
          </div>
          <div className="section__footer">
            <Link to="/realisations" className="button button--ghost">
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>{processTitle}</h2>
          </div>
          <div className="steps">
            {processSteps.map((step, index) => (
              <div key={step.title} className="step">
                <span className="step__index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>{faqTitle}</h2>
          </div>
          <div className="faq">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
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
    title="Accueil"
    description="Création de sites web sur mesure pour artisans et indépendants. Sans abonnement et avec un accompagnement complet."
    pathname="/"
  />
);

export const query = graphql`
  query HomePage {
    markdownRemark(frontmatter: { slug: { eq: "home" } }) {
      html
      frontmatter {
        heroTitle
        heroSubtitle
        heroCta
        heroTagline
        proofsTitle
        proofsIntro
        servicesTitle
        servicesIntro
        services {
          title
          text
          image
        }
        processTitle
        processSteps {
          title
          text
        }
        faqTitle
        faq {
          question
          answer
        }
        ctaTitle
        ctaText
        ctaButton
        portfolioTitle
        portfolioIntro
        portfolioImages
      }
    }
  }
`;

export default IndexPage;
