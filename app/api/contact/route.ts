import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
  from: `"Website Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: `New Website Inquiry from ${name}`,
  text: `
    New Contact Form Submission:

    Name: ${name}
    Email: ${email}

    Message:
    ${message}
      `,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

  return NextResponse.json({ success: true });
}
