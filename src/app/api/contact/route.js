import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
require('dotenv').config(); // Cargar variables de entorno

export async function POST(req) {
  console.log("ruta api")
 console.log("user",  process.env.GMAIL_EMAIL)
console.log("pass", process.env.GMAIL_PASSWORD)
const {name, email, subject, message} = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
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
      console.log("Todo bien")
      return NextResponse.json({message:"Correo enviado con exito"})
      res.status(200).send("Correo electrónico enviado con éxito.");
    } catch (error) {
      console.error(error);
      return NextResponse.json({message:"error al enviar correo"})
    }

}


