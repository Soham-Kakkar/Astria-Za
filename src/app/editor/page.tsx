"use client"

import React from "react";
import FormBuilder from "@/components/Forms/FormBuilder";
import "@/components/Forms/FormBuilder.css"

export default function EditorPage() {
  return (
    <div className="form-builder-page">
      <h1>Form Builder</h1>
      <FormBuilder />
    </div>
  );
};

