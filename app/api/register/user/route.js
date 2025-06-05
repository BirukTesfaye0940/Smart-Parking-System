import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, password, phone } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    // 🔐 Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create new user with hashed password
    const user = await prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        password: hashedPassword, // store the hashed password
        phone,
      },
    });

    // Return user info without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { message: 'User registered successfully', user: userWithoutPassword },
      { status: 201 }
    );

  } catch (error) {
    // console.error("User registration failed:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
