import { db } from "@/server/db";
import type { Company } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, ceoId, category, description, type, image }: Company =
    await request.json();
  try {
    const addedCompany = await db.company.create({
      data: {
        name,
        category,
        description,
        type,
        image,
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
