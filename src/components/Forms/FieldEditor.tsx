import React from "react";
import { FormField } from "./types";

interface Props {
  field: FormField;
  updateField: (id: string, updatedField: Partial<FormField>) => void;
  removeField: (id: string) => void;
}

const FieldEditor: React.FC<Props> = ({ field, updateField, removeField }) => {
  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateField(field.id, { label: e.target.value });
  };

  const handleOptionsChange = (index: number, value: string) => {
    const updatedOptions = [...(field.options || [])];
    updatedOptions[index] = value;
    updateField(field.id, { options: updatedOptions });
  };

  const addOption = () => {
    updateField(field.id, { options: [...(field.options || []), ""] });
  };

  return (
    <div className="field-editor">
      <div className="question-container">
        <input
          type="text"
          value={field.label}
          onChange={handleLabelChange}
          placeholder="Question"
        />
        {["radio", "checkbox"].includes(field.type) && (
          <button className="add-option" onClick={addOption}>Add Option</button>
          )}
        <button className="remove-field" onClick={() => removeField(field.id)}>Remove Question</button>
      </div>
      {["radio", "checkbox"].includes(field.type) && (
        <div className="options-container">
          {field.options?.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionsChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FieldEditor;