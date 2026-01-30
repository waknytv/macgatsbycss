import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const MentionsLegalesPage = ({ data }) => (
  <Layout>
    <section className="section hero hero--simple">
      <div className="container">
        <h1>Mentions légales</h1>
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
    title="Mentions légales"
    description="Mentions légales BE WEB."
    pathname="/mentions-legales"
  />
);

export const query = graphql`
  query MentionsLegalesPage {
    markdownRemark(fileAbsolutePath: { regex: "/Mentions-legales.md$/" }) {
      html
    }
  }
`;

export default MentionsLegalesPage;
