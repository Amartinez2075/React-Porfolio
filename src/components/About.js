import React, { useState } from "react";
import emailjs from "emailjs-com";
import profile from './Screenshots/profile.png';

export default function Portfolio() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
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
    <div>
      {/* About Me Section */}
      <div className="ImageContainer">
  <header>Ashara Martinez</header>
  <h1>New Journey New Knowledge</h1> {/* Move h1 outside of the p tag */}
  <img src={profile} alt="Ashara-PF" />
  <section id="about">
    <h2>About Me</h2>
    <p>
      Hi, my name is Ashara Martinez, and I'm a Full Stack Web Dev. I am admittedly new to this field in tech but I was introduced via a boot camp I took online with Washington University of Saint Louis. I like to focus on the front-end aspects of development for the most part but I can do back-end as well albeit at a slower pace. I'm well-versed in CSS, HTML, JavaScript, React, MYSQL, MongoDB, and Node.js, Express, and JWT. I've also used JEST, AJAX, Sequelize, JSON, and a few others. If you wish to contact me simply shoot me an email via the contact form below. Thank you for visiting my portfolio.
    </p>
  </section>
</div>

      {/* Contact Me Section */}
      <section id="contact">
        {!showForm ? (
          <button id="showFormBtn" onClick={handleShowForm}>
            Open Contact Form
          </button>
        ) : (
          <div>
          <form id="contactForm" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <div></div>
    <input type="text" id="name" name="name" required />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <div></div>
    <input type="email" id="email" name="email" required />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message:</label>
    <div></div>
    <textarea id="message" name="message" required></textarea>
  </div>

  <button type="submit">Send Message</button>
  <div></div>
</form>

            <button id="closeFormBtn" onClick={handleCloseForm}>
              Close Contact Form
            </button>
          </div>
        )}
      </section>
      <footer></footer>
    </div>
  );
}
