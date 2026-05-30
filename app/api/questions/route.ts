import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const collegeId = searchParams.get("collegeId");

  const questions = await prisma.question.findMany({
    where: collegeId ? { collegeId } : undefined,
    include: { answers: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(questions);
}

export async function POST(req: Request) {
  const { title, body, author, collegeId } = await req.json();

  if (!title || !body || !author || !collegeId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const question = await prisma.question.create({
    data: { title, body, author, collegeId },
  });

  return NextResponse.json(question);
}