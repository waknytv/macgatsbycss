import React from "react";

const FloatingCallButton = ({ phone }) => (
  <a className="floating-call" href={`tel:${phone}`}>
    Appeler
  </a>
);

export default FloatingCallButton;
