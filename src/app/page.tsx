"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <main>
      {session ? (
        <>
          <h1>Logged in as {session.user?.name}</h1>
          <button onClick={() => signOut()}>logout</button>
        </>
      ) : (
        <div>
          <button onClick={() => signIn("google")}>login</button>{" "}
          <h1>Not logged in</h1>
        </div>
      )}
    </main>
  );
}
