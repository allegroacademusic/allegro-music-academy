import React from "react";

const pricing = [
  { name: "Clases individuales de instrumento (1 hora)", price: "80€ / mes" },
  { name: "Lenguaje Musical (grupales)", price: "50€ / mes" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <h2>Precios</h2>
        <div className="pricing-grid">
          {pricing.map((p) => (
            <div key={p.name} className="price-card">
              <h4>{p.name}</h4>
              <strong>{p.price}</strong>
            </div>
          ))}
        </div>

        <p className="small-note">
          Pregunta por descuentos para hermanos o grupos.
        </p>
      </div>
    </section>
  );
}
