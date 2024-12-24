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
    <div>
      {session ? (
        <>
          <button onClick={toggleProfile}>
            {showProfile ? "Hide Profile" : "View Profile"}
          </button>
          {showProfile && (
            <div style={{position: 'absolute', right: '0', zIndex: '100', borderRadius: '8px', border: '1px solid white', backgroundColor: 'rgba(0, 0, 2, 0.9)', padding: '20px', margin: '5px'}}>
              <p style={{fontSize: '1rem'}}>Name: {session.user?.name}</p>
              <p style={{fontSize: '1rem'}}>Email: {session.user?.email}</p>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
}