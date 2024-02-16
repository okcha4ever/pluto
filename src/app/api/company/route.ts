import { db } from "@/server/db";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const companies = await db.company.findMany({
      ...(id !== "undefined" && id !== null && { where: { id } }),
      orderBy: { upvotes: "desc" },
      include:{
        ceo: true
      }
    });

    return NextResponse.json(companies, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("something went wrong", { status: 500 });
  }
}
