import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { occupation }: { occupation: "Founder" | "Investor" | "None" } =
    await request.json();
  try {
    if (!id || !occupation) return;
    const updatedUser = await db.user.update({
      where: {
        id: id,
      },
      data: {
        occupation: occupation,
      },
    });
    return NextResponse.json(updatedUser, { status: 200 });
  } catch {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}
