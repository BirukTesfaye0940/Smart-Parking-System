import { NextResponse } from 'next/server';
import prisma from "../../../../lib/prisma";


export async function GET(_req, { params }) {
  const { role } = await params;

  if (!['admin', 'user', 'owner'].includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
  }

  try {
    const data = await prisma[role].findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Fetch failed:', error);
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}
