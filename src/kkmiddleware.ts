// ! DEPRECATED: do not read any further

import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const excludedPaths = ["/"];
  const isNextAuthRoute = /^\/api\/auth(\/|$)/.test(req.nextUrl.pathname);
  const isStaticFile = /\.\w+$/.test(req.nextUrl.pathname);

  if (
    excludedPaths.includes(req.nextUrl.pathname) ||
    isStaticFile ||
    isNextAuthRoute
  )
    return NextResponse.next();

  const session = await getSession();

  if (!session) return NextResponse.json("Unauthorized", { status: 401 });
  //next()
  return NextResponse.next();
}
