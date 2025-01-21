import React, { useState } from "react";
import FieldEditor from "./FieldEditor";
import FormView from "./FormView";
import { FormField } from "./types";

const FormBuilder = () => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [formName, setFormName] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [formLink, setFormLink] = useState<string>("");
  const [saveError, setSaveError] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const siteURL = process.env.NEXT_PUBLIC_SITE_NAME;

  const addField = (type: FormField["type"]) => {
    setFields([
      ...fields,
      { id: Date.now().toString(), type, label: "", options: [] },
    ]);
  };

  const updateField = (id: string, updatedField: Partial<FormField>) => {
    setFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? { ...field, ...updatedField } : field))
    );
  };

  const removeField = (id: string) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  const handleSaveForm = async () => {
    setIsSaving(true);

    try {
      const formattedFields = fields.map(field => {
        // Create a formatted object for each field
        const fieldData: FormField = {
          id: field.id,
          label: field.label,
          type: field.type,
          options: field.options
        };

        return fieldData; // Return the formatted field data
      });

      const response = await fetch("/api/saveform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData: {
            eventId: formName, // This is the form name
            fields: formattedFields, // This should be the array of formatted fields
          },
        }),
      });
      const result = await response.json();

      if (response.ok) {
        setFormLink(`${siteURL}/form?id=${formName}`);
      } else {
        setSaveError(true);
        console.error(result.error || "An error occurred while saving the form.");
      }
    } catch (error) {
      setSaveError(true);
      console.error((error as Error).message);
    } finally {
      setIsSaving(false);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setCopiedLink(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formLink)
        .then(() => {
            console.log(`copied link: ${formLink}`);
            setCopiedLink(true);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
  };

  return (
    <div className="form-builder">
      <div className="add-fields">
        <h3>Add Fields</h3>
        <button onClick={() => addField("text")} className="btn">Add Text Field</button>
        <button onClick={() => addField("radio")} className="btn">Add Radio Field</button>
        <button onClick={() => addField("checkbox")} className="btn">Add Checkbox Field</button>

        <div className="form-name">
          Form Name: <input
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            placeholder="Form Name"
            className="input"
          />
        </div>
      </div>

      <div className="form-editor">
        <h3>Form Editor</h3>
        {fields.map((field) => (
          <FieldEditor
            key={field.id}
            field={field}
            updateField={updateField}
            removeField={removeField}
          />
        ))}
      </div>

      <div className="form-view">
        <FormView title={formName} fields={fields} preview={true} />
      </div>
      <button
        onClick={handleSaveForm}
        className={`${isSaving ? "disabled" : ""}`}
        disabled={isSaving}
        type="submit"
      >
        {isSaving ? "Saving..." : "Save Form"}
      </button>
      {/* Popup for form link */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            {saveError ? 
            <p>An error occurred while saving the form.</p> :
            <>
            <h2>Form Link</h2>
            <p>Your form has been created successfully!</p>
            <p>Link to your form: <a href={formLink} target="_blank" rel="noopener noreferrer">{formLink}</a></p>
            </>}
            <button onClick ={copyToClipboard} className="copy-icon">{copiedLink ? "Copied!" : "Copy Link"}</button>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormBuilder;
