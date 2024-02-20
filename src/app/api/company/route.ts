import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    let companies = [];
    if (id) {
      companies = await db.company.findMany({
        where: { id },
        orderBy: {
          upvotes: "desc",
        },
        include: {
          ceo: true,
        },
      });
    } else {
      companies = await db.company.findMany({
        where: {},
        orderBy: {
          upvotes: "desc",
        },
        include: {
          ceo: true,
        },
      });
    }

    return NextResponse.json(companies, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("something went wrong", { status: 500 });
  }
}
