import React, { useState } from "react";
import FieldEditor from "./FieldEditor";
import FormPreview from "./FormView";
import { FormField } from "./types";

const FormBuilder = () => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [formName, setFormName] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);

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
        const fieldData = {
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
            eventId: `${formName}_${Date.now().toString()}`, // This is the form name
            fields: formattedFields, // This should be the array of formatted fields
          },
        }),
      });
      console.log(formattedFields);
      const result = await response.json();
  
      if (response.ok) {
        alert("Form saved successfully!");
      } else {
        alert(result.error || "Failed to save form.");
      }
    } catch (error) {
      alert("An error occurred while saving the form.");
    } finally {
      setIsSaving(false);
    }
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
        <FormPreview fields={fields} preview={true} />

        <button
          onClick={handleSaveForm}
          className={`${isSaving ? "disabled" : ""}`}
          disabled={isSaving}
          type="submit"
        >
          {isSaving ? "Saving..." : "Save Form"}
        </button>
    </div>
  );
};

export default FormBuilder;
