import React, { useState } from "react";
import { Link } from "gatsby";
import AssetImage from "./AssetImage";

const Header = ({ siteName, phone }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="header">
      <div className="container header__content">
        <Link to="/" className="logo">
          <AssetImage
            src="/assets/img/icon/logo.webp"
            alt={siteName || "BE WEB"}
            className="logo__image"
          />
          <span>{siteName || "BE WEB"}</span>
        </Link>
        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <Link to="/" activeClassName="active">
            Accueil
          </Link>
          <Link to="/services" activeClassName="active">
            Services
          </Link>
          <Link to="/realisations" activeClassName="active">
            Réalisations
          </Link>
          <Link to="/a-propos" activeClassName="active">
            À propos
          </Link>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </nav>
        <div className="header__actions">
          <a className="button button--outline" href={`tel:${phone}`}>
            Appeler
          </a>
          <button
            className={`burger ${menuOpen ? "burger--open" : ""}`}
            onClick={toggleMenu}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
