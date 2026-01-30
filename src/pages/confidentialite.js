import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ConfidentialitePage = ({ data }) => (
  <Layout>
    <section className="section hero hero--simple">
      <div className="container">
        <h1>Confidentialité</h1>
      </div>
    </section>
    <section className="section">
      <div className="container markdown">
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </section>
  </Layout>
);

export const Head = () => (
  <Seo
    title="Confidentialité"
    description="Politique de confidentialité BE WEB."
    pathname="/confidentialite"
  />
);

export const query = graphql`
  query ConfidentialitePage {
    markdownRemark(fileAbsolutePath: { regex: "/confidentialite.md$/" }) {
      html
    }
  }
`;

export default ConfidentialitePage;
