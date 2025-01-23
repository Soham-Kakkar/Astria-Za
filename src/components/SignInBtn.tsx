"use client"; // This is a client component

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function ProfileViewer() {
  const { data: session } = useSession();
  const [showProfile, setShowProfile] = useState(false);

  const handleSignIn = () => {
    signIn("google"); // Trigger Google sign-in
  };

  const handleSignOut = () => {
    signOut(); // Trigger sign-out
  };

  const toggleProfile = () => {
    setShowProfile((prev) => !prev); // Toggle profile visibility
  };

  return (
    <>
      {session ? (
        <>
          <button onClick={toggleProfile}>
            {showProfile ? "Hide Profile" : "View Profile"}
          </button>
          {showProfile && (
            <div className="shownprofile">
              <p style={{fontSize: '1rem'}}>Name: {session.user?.name}</p>
              <p style={{fontSize: '1rem'}}>Email: {session.user?.email}</p>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </>
      ) : (
        <button onClick={handleSignIn} className="sign-in-btn">Sign In</button>
      )}
    </>
  );
}