import { NextResponse } from 'next/server';
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, otp } = body;

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'user not found' }, { status: 404 });
    }

    if (user.isVerified) {
      return NextResponse.json({ message: 'user already verified' }, { status: 200 });
    }

    // Check OTP expiration (5 minutes = 300,000 ms)
    const createdAt = new Date(user.createdAt);
    const expiresAt = new Date(createdAt.getTime() + 5 * 60 * 1000);
    const now = new Date();

    const isOtpExpired = now > expiresAt;
    const isOtpIncorrect = user.OTP !== parseInt(otp, 10);

    if (isOtpExpired || isOtpIncorrect) {
      await prisma.user.delete({ where: { email } });
      return NextResponse.json(
        { error: 'Invalid or expired OTP. Account deleted.' },
        { status: 401 }
      );
    }

    // Mark as verified
    await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
      },
    });

    return NextResponse.json({ message: 'Account verified successfully' }, { status: 200 });

  } catch (error) {
    console.error("OTP verification failed:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
