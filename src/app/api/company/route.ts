import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const companies = await db.company.findMany({
      orderBy: {
        increment: "desc",
      },
    });
    return NextResponse.json(companies, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("something went wrong", { status: 500 });
  }
}
