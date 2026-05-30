import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const { collegeId } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return Response.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const existing = await prisma.savedCollege.findFirst({
      where: {
        userId: user.id,
        collegeId,
      },
    });

    if (existing) {
      return Response.json({
        message: "Already saved",
      });
    }

    await prisma.savedCollege.create({
      data: {
        userId: user.id,
        collegeId,
      },
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    return Response.json(
      { error: "Failed to save college" },
      { status: 500 }
    );

  }
}