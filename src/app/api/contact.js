import nodemailer from "nodemailer";
require('dotenv').config(); // Cargar variables de entorno

async function handleContactForm(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: "hernandez.carolina@live.cl",
      subject: `Formulario de contacto - ${subject}`,
      text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Correo electrónico enviado con éxito.");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al enviar el correo electrónico.");
    }
  } else {
    res.status(405).send("Método no permitido");
  }
}

export default handleContactForm; // Exporta la función con nombre
