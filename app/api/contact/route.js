// app/api/contact/route.js
import nodemailer from 'nodemailer'

export async function POST(req) {
  const body = await req.json()
  const { name, email, subject, message, userType } = body

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: [process.env.EMAIL_USER, process.env.SECONDARY_EMAIL],
      subject: `[${userType.toUpperCase()}] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    })

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
