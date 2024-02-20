import { db } from "@/server/db";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const { companyId } = await request.json() as { companyId: string };
  
  
  try {
    await db.comment.delete({
      where: {
        id: companyId,
      },
    });

    return NextResponse.json("success", { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }

}
