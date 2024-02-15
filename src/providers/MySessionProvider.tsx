"use client";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

const MySessionProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default MySessionProvider;
