import React, { useState } from "react";
import emailjs from "emailjs-com";
import profile from  './Screenshots/profile.png';

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
    <div>
      {/* About Me Section */}
      <div className="ImageContainer">
        <header>Ashara Martinez</header>
        <h1>New Journey New Knowledge</h1>
        <img src={profile} alt="Ashara-PF"/>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi, my name is Ashara Martinez, and I'm a Full Stack Web Dev. I am admittedly new to this field in tech but I was introduced via a bootcamp I took online with Washington University of Saint Louis. I like to focus on the front-end aspects of development for the most part as I feel like I need more practice with the speed in which I can implement the back-end aspects of a website. I'm well-versed in CSS, HTML, JavaScript, React, MYSQL, MongoDB, and Node.js, Express, and JWT. I've also used JEST, AJAX, Sequelize, JSON, and a few others.
          </p>
        </section>
      </div>

      {/* Contact Me Section */}
      <h2>Repository</h2>
      <section id="contact-me">
        <p>
          <a href="https://github.com/Amartinez2075">
            <span className="GitHub">Visit My GitHub Repository</span>
          </a>
        </p>
        {!showForm ? (
          <button id="showFormBtn" onClick={handleShowForm}>
            Show Contact Form
          </button>
        ) : (
          <div>
            <form id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Send Message</button>
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
