import { NextResponse } from 'next/server';
import prisma from "../../../../../lib/prisma"; // Adjust this path if needed

export async function DELETE(request, { params }) {
  const id = parseInt(params.id); // ✅ no await here

  try {
    await prisma.owner.delete({
      where: { id }, // make sure you're using the correct field name!
    });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
