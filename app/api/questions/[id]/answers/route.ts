import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { body, author } = await req.json();

  if (!body || !author) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const answer = await prisma.answer.create({
    data: { body, author, questionId: id },
  });

  return NextResponse.json(answer);
}