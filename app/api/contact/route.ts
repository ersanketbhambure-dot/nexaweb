import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validatePayload = (payload: ContactPayload) => {
  const errors: string[] = [];

  if (!payload.name || payload.name.trim().length < 2) {
    errors.push("Please enter your name.");
  }

  if (!payload.email || !emailRegex.test(payload.email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.push("Please enter a message of at least 10 characters.");
  }

  return errors;
};

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as ContactPayload;

    const validationErrors = validatePayload({ name, email, message });
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { success: false, errors: validationErrors },
        { status: 400 }
      );
    }

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

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
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
