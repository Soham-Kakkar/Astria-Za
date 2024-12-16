"use client"; // This is a client component

import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInBtn() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
          <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn("google")}>Sign in</button>
      )}
    </>
  );
}