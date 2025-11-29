import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <img src="/LOGO.png" alt="Allegro Music Academy Logo" className="hero-logo" />
        <h1 className="hero-title">Allegro Music Academy</h1>
        <p className="hero-sub">Conecta con la música. Aprende con profesionales.</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#classes">Ver clases</a>
          <a className="btn btn-outline" href="#contact">Contactar</a>
          <a href="https://linktr.ee/allegroacademusic" target="_blank">Linktree</a>
        </div>
      </div>
    </section>
  );
}

