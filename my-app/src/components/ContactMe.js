import React, { useState } from "react";

export default function ContactMe() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <footer>
      {/* Contact Me Section */}
      <section id="contact-me">
        <h2>Contact Me</h2>
        <p>Email: Asharamart2075@gmail.com</p>
        <h2>Github Repository</h2>
        <p>
          <a href="https://github.com/Amartinez2075">
            <span className="GitHub">Visit My GitHub Repository</span>
          </a>
        </p>
        {!showForm && (
          <button id="showFormBtn" onClick={handleShowForm}>
            Show Contact Form
          </button>
        )}
        {showForm && (
          <form id="contactForm" action="/submit" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </section>
    </footer>
  );
}