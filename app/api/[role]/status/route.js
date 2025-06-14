import { NextResponse } from 'next/server';
import prisma from "../../../../lib/prisma";

export async function PUT(request, { params }) {
  const { role } = await params;
  const { id, status } = await request.json();
  console.log('Role:', role, 'ID:', id, 'Status:', status);

  if (!['admin', 'user', 'owner'].includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
  }

  const key = role === 'user' ? 'user_id' : role === 'owner' ? 'owner_id' : 'id';

  try {
    const updated = await prisma[role].update({
      where: { [key]: id },
      data: { status },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Update failed:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
