import React from "react";

const classList = [
  { title: "Piano (individual)", desc: "Clases personalizadas para todos los niveles." },
  { title: "Guitarra", desc: "Técnica, acompañamiento y teoría aplicada." },
  { title: "Voz", desc: "Técnica vocal, respiración y repertorio." },
  { title: "Iniciación (niños)", desc: "Divertido y práctico para empezar con música." },
];

export default function Classes() {
  return (
    <section id="classes" className="section classes">
      <div className="container">
        <h2>Nuestras Clases</h2>
        <div className="cards">
          {classList.map((c) => (
            <article key={c.title} className="card">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
