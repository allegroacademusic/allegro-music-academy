import React from "react";

const classList = [
  { title: "Lenguaje Musical (grupal)", desc: "Clases en grupo — 50€/mes." },
  { title: "Violín", desc: "Clases individuales de 1 hora — 80€/mes." },
  { title: "Viola", desc: "Clases individuales de 1 hora — 80€/mes." },
  { title: "Piano", desc: "Clases individuales de 1 hora — 80€/mes." },
  { title: "Guitarra", desc: "Clases individuales de 1 hora — 80€/mes." },
  { title: "Clarinete", desc: "Clases individuales de 1 hora — 80€/mes." },
  { title: "Otros instrumentos", desc: "Si hay suficientes alumnos interesados, abrimos grupo o clases individuales." }
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
