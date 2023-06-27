import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        //service_ID, template_ID, e.target, user_ID
        "service_ID80067",
        "template_c5xi21q",
        e.target,
        "0lf4MTEWnTCOzmStD"
      );
      // Reset form fields
      e.target.reset();
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <footer>
      {/* Contact Me Section */}
      <section id="contact-me">
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
          <form id="contactForm" onSubmit={handleSubmit}>
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


// Current Public API key = q1wuDMMOgKS24_Bmk
// Current Template ID = template_yy9bdwi
// Current Service ID = service_ID80067