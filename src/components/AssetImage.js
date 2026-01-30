import React from "react";

const expectedImages = [
  "/assets/img/icon/logo.webp",
  "/assets/img/services/reseaux.jpg",
  "/assets/img/services/siteweb.jpg",
  "/assets/img/services/strategies.jpg",
  "/assets/img/services/support.jpg",
  "/assets/img/apropos/apropos.webp",
  "/assets/img/portfolio/portfolio1.jpg",
  "/assets/img/portfolio/portfolio2.jpg",
  "/assets/img/portfolio/portfolio3.jpg",
  "/assets/img/portfolio/portfolio4.jpg",
  "/assets/img/portfolio/portfolio5.jpg",
  "/assets/img/portfolio/portfolio6.jpg",
];

// TODO: Vérifier la présence des images dans /public/assets.
// Fichiers attendus :
// - /public/assets/img/icon/logo.webp
// - /public/assets/img/services/reseaux.jpg
// - /public/assets/img/services/siteweb.jpg
// - /public/assets/img/services/strategies.jpg
// - /public/assets/img/services/support.jpg
// - /public/assets/img/apropos/apropos.webp
// - /public/assets/img/portfolio/portfolio1.jpg
// - /public/assets/img/portfolio/portfolio2.jpg
// - /public/assets/img/portfolio/portfolio3.jpg
// - /public/assets/img/portfolio/portfolio4.jpg
// - /public/assets/img/portfolio/portfolio5.jpg
// - /public/assets/img/portfolio/portfolio6.jpg

const AssetImage = ({ src, alt, className }) => {
  const safeSrc = src || expectedImages[0];

  return (
    <img
      src={safeSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};

export default AssetImage;
