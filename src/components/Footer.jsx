import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-left">
          <img src="/LOGO.png" alt="logo small" className="footer-logo" />
          <p>Allegro Music Academy · Clases presenciales · Reserva tu plaza</p>
        </div>
        <div className="footer-right">
          <p>Dirección: Calle Falsa 123 · Ciudad</p>
          <p>Email: info@allegromusicacademy.example</p>
          <p>
  <a href="https://linktr.ee/allegroacademusic" target="_blank">
    Nuestro Linktree
  </a>
</p>
        </div>
      </div>
    </footer>
  );
}

