"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import FormView from "@/components/Forms/FormView";
import "@/components/Forms/FormBuilder.css";
import { FormField } from "@/components/Forms/types"
import "@/components/easterEgg.css"; // Import your CSS file for the Easter egg styles

export default function FormPage() {
  const { data: session } = useSession();
  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const isLoggedIn = session?.user?.email
  const [loading, setLoading] = useState<boolean>(true);
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const queryId = new URLSearchParams(window.location.search).get('id');
    if (queryId) {
      setId(queryId);
      setTitle(queryId.slice(0, queryId.lastIndexOf('_')));
    }
    const fetchFormFields = async () => {
      try {
        const response = await fetch(`/api/viewform?id=${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          });
        if (!response.ok) {
          throw new Error("Failed to fetch form fields");
        }
        const data = await response.json();
        setFormFields(data.fields); // Assuming the API returns an object with a 'fields' array
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormFields();
    console.log(error);
  }, [id]);

  if (loading) return <div>Loading...</div>

  return (isLoggedIn && id) ? (
    <div className="form-viewer-page">
      <FormView title={title} preview={false} fields={formFields? formFields : [{"id":"1735060752963","label":"Name: ","type":"text","options":[]},{"id":"1735060775518","label":"Hello!?","type":"checkbox","options":["O1","O2"]}]} />
    </div>
  ) : (
    <>
      <div className="401-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1 className="401" style={{ paddingRight: '1rem' }}>401</h1>
        <h2 className="401-text" style={{ paddingLeft: '1rem', letterSpacing: '0.15rem', borderLeft: '1px solid white' }}>
          Well, you'll need to login to fill the form.
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