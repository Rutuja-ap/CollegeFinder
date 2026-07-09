import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return Response.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: _pw, ...safeUser } = user;
    return Response.json(safeUser);

  } catch (error) {

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );

  }
}