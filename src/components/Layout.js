import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCallButton from "./FloatingCallButton";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteData {
      markdownRemark(frontmatter: { siteName: { ne: null } }) {
        frontmatter {
          siteName
          address
          phone
          email
          hours
          facebook
          instagram
        }
      }
    }
  `);

  const site = data.markdownRemark?.frontmatter;

  return (
    <div className="page">
      <Header siteName={site?.siteName} phone={site?.phone} />
      <main>{children}</main>
      <Footer site={site} />
      <FloatingCallButton phone={site?.phone} />
    </div>
  );
};

export default Layout;
