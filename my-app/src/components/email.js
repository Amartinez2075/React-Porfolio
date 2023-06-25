const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/api/sendEmail", (req, res) => {
  const { name, email, message } = req.body;

  // Configure the transporter with your email provider details
  const transporter = nodemailer.createTransport({
    service: "your-email-provider",
    auth: {
      user: "your-email@example.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@example.com",
    to: "Asharamart2075@gmail.com",
    subject: "New Message from Contact Form",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.sendStatus(200);
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
