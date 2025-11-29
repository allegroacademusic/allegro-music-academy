import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <p>¿Tienes preguntas o quieres inscribirte? Escríbenos:</p>

      <form 
        action="https://formspree.io/f/xyzqaerw" 
        method="POST"
        className="contact-form"
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Tu nombre" 
          required 
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Tu email" 
          required 
        />

        <textarea 
          name="message" 
          placeholder="Tu mensaje" 
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
