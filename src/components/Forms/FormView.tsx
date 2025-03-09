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
    const inputElements = document.querySelectorAll("input");
    setFormValues((prevValues) => ({
      ...prevValues,
      [label]: ` ${value}`, // Update the value for the specific field
    }));
    inputElements.forEach((inputElement) => {
      if (inputElement.value && inputElement.value.length > 0) {
        inputElement?.classList.remove("highlight");
      }
    });
  };

  const handleSubmitForm = async () => {
    let hasError = false;
    const inputElements = document.querySelectorAll("input");
    inputElements.forEach((inputElement) => {
      if (!inputElement.value && inputElement.value.length == 0) {
        inputElement?.classList.add("highlight");
        hasError = true;
        return;
      }
    });

    if (hasError) {
      console.log("Form has errors. Please fill in all fields.");
      return;
    }

    // Proceed with form submission logic
    console.log("Form submitted successfully:", formValues);

    SetIsSubmitting(true);

    try {
      const response = await fetch("/api/submitform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formResponses: {
            eventId: title, // This is the form name
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
        <form action={handleSubmitForm}>
          {fields.map((field) => (
            <FieldRenderer key={field.id} field={field} preview={preview} onValueChange={handleValueChange} />
          ))}
          {fields && fields.length > 0 &&
            <button
              type="submit"
              {...(preview || isSubmitted) && { disabled: true }}
              >{
                (isSubmitting && !isSubmitted) && "Submitting..." ||
                (!isSubmitting && !isSubmitted) && "Submit" ||
                (!isSubmitting && isSubmitted) && "Submited"
              }</button>}
        </form>
      </div>
      {(isSubmitted) && <div className="popup">
        <div className="popup-content">
          <div>Form Submitted Successfully!</div>
          <div className="success-tick">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#ffffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
          </div>
          <a href={`${process.env.NEXT_PUBLIC_SITE_NAME}`}>
            <button>Go to home</button>
          </a>
        </div>
      </div>}
    </>
  )
};

export default FormView;
