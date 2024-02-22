import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";

export async function PATCH(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const { userId: ceoId } = (await req.json()) as { userId: string };

  try {
    if (!id || !ceoId)
      return NextResponse.json("Missing required fields", { status: 400 });

    const company = await db.company.findUnique({
      where: { id },
    });

    if (!company)
      return NextResponse.json("Company not found", { status: 404 });

    let updatedUserIds = [...company.upvotes];
    let increment = company.increment;

    const hasVoted = updatedUserIds.includes(ceoId);

    if (hasVoted) {
      // If the user has already voted, remove the vote (unvote)
      updatedUserIds = updatedUserIds.filter((id) => id !== ceoId);
      increment = increment !== null ? increment - 1 : 0;
    } else {
      // If the user hasn't voted yet, add the vote (upvote)
      updatedUserIds.push(ceoId);
      increment = increment !== null ? increment + 1 : 1;
    }

    // Update the company record with the new user votes count
    await db.company.update({
      where: { id },
      data: {
        upvotes: updatedUserIds,
        increment,
      },
    });

    return NextResponse.json("Company vote updated successfully", {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}
