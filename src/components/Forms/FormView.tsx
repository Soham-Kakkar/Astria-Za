import React from "react";
import FieldRenderer from "./FieldRenderer";
import { FormField } from "./types";

interface Props {
  title: string;
  fields: FormField[];
  preview?: boolean;
}

const FormView: React.FC<Props> = ({ title, fields, preview }) => (
  <>
    {preview && <h3>Form Preview</h3>}
    <div className="form-view">
      <h3>{title[0]?.toUpperCase()}{title?.slice(1)}</h3>
      {fields.map((field) => (
        <FieldRenderer key={field.id} field={field} preview={preview} />
      ))}
    </div>
  </>
);

export default FormView;
