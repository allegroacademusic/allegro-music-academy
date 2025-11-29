import React from "react";

const pricing = [
  { name: "Individual 30'", price: "€30 / clase" },
  { name: "Individual 45'", price: "€40 / clase" },
  { name: "Individual 60'", price: "€55 / clase" },
  { name: "Pack mensual (4x45')", price: "€140 / mes" },
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
        <p className="small-note">Descuentos para hermanos y packs intensivos. Consulta disponibilidad.</p>
      </div>
    </section>
  );
}
