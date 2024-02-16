import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const options: any = {
      orderBy: {
        increment: "desc",
      },
    };

    if (category) options["where"] = { category };

    const companies = await db.company.findMany(options);

    return NextResponse.json({ companies }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("something went wrong", { status: 500 });
  }
}
