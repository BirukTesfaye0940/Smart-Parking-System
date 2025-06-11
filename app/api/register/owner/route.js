

import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { sendEmail } from "../../../../lib/email"; // Ensure you have this function implemented
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, password, phone } = body;
    console.log("Received registration data:", body);

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Check if owner already exists
   const existingOwner = await prisma.owner.findUnique({
  where: { email: email },
});

    if (existingOwner) {
      return NextResponse.json({ error: 'owner already exists' }, { status: 409 });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // 🔐 Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new owner
    const owner = await prisma.owner.create({
      data: {
        first_name,
        last_name,
        email,
        password: hashedPassword,
        phone,
        OTP: otp,
      },
    });

    // 📧 Send OTP via email
    await sendEmail(
      email,
      "Your Verification Code",
      `
        <h2>Welcome, ${first_name}!</h2>
        <p>Your account has been created successfully.</p>
        <p><strong>Verification Code (OTP):</strong> ${otp}</p>
        <p>Please use this code to verify your account.</p>
      `
    );

    // Return owner info (without password and OTP)
    const { password: _, OTP: __, ...ownerWithoutSensitive } = owner;

    return NextResponse.json(
      { message: 'owner registered successfully. OTP sent via email.', owner: ownerWithoutSensitive },
      { status: 201 }
    );

  } catch (error) {
    console.error("owner registration failed:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
