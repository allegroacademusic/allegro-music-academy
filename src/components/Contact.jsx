import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contacto</h2>
        <p>Escríbenos para más información o reservar una clase de prueba.</p>
        <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Formulario enviado (simulado)');}}>
          <div className="row">
            <input name="name" placeholder="Nombre" required />
            <input name="phone" placeholder="Teléfono" />
          </div>
          <input name="email" placeholder="Correo electrónico" type="email" required />
          <textarea name="message" placeholder="Mensaje / qué te interesa" rows="4" />
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">Enviar</button>
            <p>
  También puedes contactarnos desde nuestro 
  <a href="https://linktr.ee/allegroacademusic" target="_blank">Linktree</a>.
</p>
          </div>
        </form>
      </div>
    </section>
  );
}

