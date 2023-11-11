

import { NextResponse } from "next/server";
import nodemailer from "nodemailer"; //nodemailer para enviar correos electrónicos
require('dotenv').config(); // Carga las variables de entorno

export async function POST(req) {
  console.log("ruta api")
 console.log("user",  process.env.GMAIL_EMAIL)
console.log("pass", process.env.GMAIL_PASSWORD)

 // Desestructuro el cuerpo de la solicitud JSON para obtener las variables name, email, subject y message.
const {name, email, subject, message} = await req.json()

// Objeto de transporte para enviar mail utilizando  Gmail.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

     // Esta parte define las opciones delmail, quien envia, a quien el, asunto y  mensaje.
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: "hernandez.carolina@live.cl",
      subject: `Formulario de contacto - ${subject}`,
      text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
    };
// Intenta enviar el correo electrónico.
    try {
      await transporter.sendMail(mailOptions);
      console.log("Todo bien")
      //Me devuelve unSON diciendo que el correo se envió con éxito.
      return NextResponse.json({message:"Correo enviado con exito"})
      res.status(200).send("Correo electrónico enviado con éxito.");

    } catch (error) {
      // Si ocurre un error al enviar el correo electrónico, imprime el error en la consola.
      console.error(error);
      // Me devuelve una respuesta JSON indicando que hubo un error al enviar el correo.
      return NextResponse.json({message:"error al enviar correo"})
    }

}


