import React from "react";
import { Link } from "gatsby";

const Footer = ({ site }) => (
  <footer className="footer">
    <div className="container footer__grid">
      <div>
        <p className="footer__brand">{site?.siteName || "BE WEB"}</p>
        <p>{site?.address}</p>
        <p>{site?.hours}</p>
      </div>
      <div>
        <p className="footer__title">Contact</p>
        <a href={`tel:${site?.phone}`}>{site?.phone}</a>
        <a href={`mailto:${site?.email}`}>{site?.email}</a>
      </div>
      <div>
        <p className="footer__title">Réseaux</p>
        <a href={site?.facebook} target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href={site?.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
      <div>
        <p className="footer__title">Légal</p>
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/confidentialite">Confidentialité</Link>
      </div>
    </div>
    <div className="footer__bottom">
      <p>© {new Date().getFullYear()} BE WEB. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
