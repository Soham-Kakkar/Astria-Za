"use client";

import React from "react";
import FormBuilder from "@/components/Forms/FormBuilder";
import { useSession } from "next-auth/react";
import admins from "@/app/api/admins.json";
import "@/components/Forms/FormBuilder.css";
import "@/components/easterEgg.css"; // Import your CSS file for the Easter egg styles

export default function EditorPage() {
  const { data: session } = useSession();

  const isAdmin = session?.user?.email && admins.admins.some(adminEmail => adminEmail.toLowerCase() === session?.user?.email?.toLowerCase());//includes(session?.user?.email);

  return isAdmin ? (
    <div className="form-builder-page">
      <h1>Form Builder</h1>
      <FormBuilder />
    </div>
  ) : (
    <>
      <div className="401-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1 className="401" style={{ paddingRight: '1rem' }}>401</h1>
        <h2 className="401-text" style={{ paddingLeft: '1rem', letterSpacing: '0.15rem', borderLeft: '1px solid white' }}>
          That was probably a wrong turn, buddy. Or was it?
        </h2>
      </div>
      {session?.user?.email && (
      <div className="easter-egg">
        <div className="easter-egg-visible">
          <p>👀</p> {/* Emoji or icon to indicate something is hidden */}
        </div>
        <div className="easter-egg-hidden">
          <h1>Oops! You found an Easter egg!</h1>
          <p>Looks like you're not an admin, but you're still curious!</p>
          <p><strong>Here's a fun fact - Did you know that honey never spoils?</strong></p>
          <p>Keep exploring, and who knows what you might find!</p>
        </div>
      </div>
      )}
    </>
  );
}