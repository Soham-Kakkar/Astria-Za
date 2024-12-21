import React from "react";
import FieldRenderer from "./FieldRenderer";
import { FormField } from "./types";

interface Props {
  fields: FormField[];
  preview?: boolean
}

const FormPreview: React.FC<Props> = ({ fields, preview }) => (
  <div className="form-view">
    <h3>Form Preview</h3>
    {fields.map((field) => (
      <FieldRenderer key={field.id} field={field} preview={preview} />
    ))}
  </div>
);

export default FormPreview;
