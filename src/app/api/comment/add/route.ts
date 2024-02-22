import { db } from "@/server/db";
import type { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const companyId = searchParams.get("id");

    if (!companyId)
      return new Response(JSON.stringify({ error: "Missing companyId" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });

    const { userId, content } = (await req.json()) as {
      userId: string;
      content: string;
    };

    if (!userId || !content)
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

    const addedComment = await db.comment.create({
      data: {
        companyId,
        userId,
        content,
      },
    });

    return new Response(JSON.stringify(addedComment), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
