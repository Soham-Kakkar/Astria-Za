"use client"
import React, { useState } from "react";
import FieldRenderer from "./FieldRenderer";
import { FormField } from "./types";
import "./FormBuilder.css"

interface Props {
  title: string;
  fields: FormField[];
  preview?: boolean;
}

const FormView: React.FC<Props> = ({ title, fields, preview }) => {
  const [isSubmitting, SetIsSubmitting] = useState(false);
  const [isSubmitted, SetIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({}); // State to hold field values

  const handleValueChange = (label: string, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [label]: value, // Update the value for the specific field
    }));
  };

  const handleSubmitForm = async () => {
    SetIsSubmitting(true);

    try {
      const response = await fetch("/api/submitform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formResponses: {
            eventId: `${title}_${Date.now().toString()}`, // This is the form name
            fields: formValues, // This should be the array of formatted fields
          },
        }),
      });
      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        alert("An error occurred while submitting the form.");
        console.error(result.error || "Failed to submit form.");
      }
    } catch (error) {
        alert("An error occurred while submitting the form.");
        console.error((error as Error).message);
    } finally {
      SetIsSubmitting(false);
      SetIsSubmitted(true);
    }
  };
  return (
    <>
      {preview && <h3>Form Preview</h3>}
      <div className="form-view">
        <h3>{title}</h3>
        {fields.map((field) => (
          <FieldRenderer key={field.id} field={field} preview={preview} onValueChange={handleValueChange}/>
        ))}
        {fields && fields.length > 0 &&
          <button
            type="submit"
            {...preview && { disabled: true }}
            {...isSubmitted && { disabled: true }}
            onClick={handleSubmitForm}>{
              (isSubmitting && !isSubmitted) && "Submitting..." ||
              (!isSubmitting && !isSubmitted) && "Submit" ||
              (!isSubmitting && isSubmitted) && "Submited"
            }</button>}
      </div>
    </>
  )
};

export default FormView;
