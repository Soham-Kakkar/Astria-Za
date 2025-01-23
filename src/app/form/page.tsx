"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import FormView from "@/components/Forms/FormView";
import "@/components/Forms/FormBuilder.css";
import { FormField } from "@/components/Forms/types"
import SignInBtn from "@/components/SignInBtn";

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
      setTitle(queryId);
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
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchFormFields();
  }, [id, error]);

  if (loading) return <div>Loading...</div>

  return (isLoggedIn && id) ? (
    <div className="form-viewer-page">
      {!formFields ? "Oops! Form Failed to Load. Make sure the link is correct" : <FormView title={title} preview={false} fields={formFields ? formFields : []} />}
    </div>
  ) : (
    <>
      <div className="401-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        {!isLoggedIn &&
          <>
            <h2 className="401-text" style={{ paddingLeft: '1rem', letterSpacing: '0.15rem' }}>
              Oops! Sign in first to fill the form! <br /><br />
              <SignInBtn />
            </h2>
          </>
        }
      </div>
    </>
  );
}