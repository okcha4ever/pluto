import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    if (!id) return;
    await db.company.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json(`Deleted Company with id: ${id}`, { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}
