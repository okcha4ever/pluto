import { db } from "@/server/db";
import type { Company } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { name, ceoId, category, description, type }: Company =
    await request.json();
  try {
    const addedCompany = await db.company.create({
      data: {
        name,
        category,
        description,
        type,
        ceo: {
          connect: {
            id: ceoId,
          },
        },
      },
    });
    return NextResponse.json(addedCompany, { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}