const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a transporter with your Gmail account details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Asharamart2075@gmail.com',
        pass: 'YOUR_GMAIL_PASSWORD'
      }
    });

    // Configure the email message
    const mailOptions = {
      from: 'YOUR_GMAIL_ADDRESS',
      to: 'Asharamart2075@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred while sending the email.' });
  }
});

const port = 3000; // Change this to the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
