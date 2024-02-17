import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json("Missing companyId", { status: 400 });

    const comments = await db.comment.findMany({
      where: {
        companyId: id,
      },
      include: {
        User: true,
      },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("something went wrong", { status: 500 });
  }
}
