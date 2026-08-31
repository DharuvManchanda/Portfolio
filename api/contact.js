const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { from_name, from_email, subject, message } = req.body || {};

  if (!from_name || !from_email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (String(message).length > 5000 || String(subject).length > 200) {
    return res.status(400).json({ error: "Message is too long" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "dharuvmanchanda001@gmail.com",
      replyTo: `"${from_name}" <${from_email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${from_name}\nEmail: ${from_email}\n\n${message}`,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("contact form send failed:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
};
