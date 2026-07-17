import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for sending email
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Lazy initialization of transporter so the app doesn't crash if env vars are missing
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS?.replace(/\s+/g, '');

    if (!user || !pass) {
      console.warn("EMAIL_USER or EMAIL_PASS is missing. Email will not be sent, but simulating success.");
      // In development/preview without keys, simulate success
      return res.status(200).json({ success: true, simulated: true });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
      port: 465,
      secure: true,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${email}>`, // sender address
        to: "work.reginemoises@gmail.com", // list of receivers
        subject: `Contact from ${name}`, // Subject line
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain text body
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email", details: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
