import React from "react";
import FieldRenderer from "./FieldRenderer";
import { FormField } from "./types";
import "./FormBuilder.css"

interface Props {
  title: string;
  fields: FormField[];
  preview?: boolean;
}

const FormView: React.FC<Props> = ({ title, fields, preview }) => (
  <>
    {preview && <h3>Form Preview</h3>}
    <div className="form-view">
      <h3>{title}</h3>
      {fields.map((field) => (
        <FieldRenderer key={field.id} field={field} preview={preview} />
      ))}
      {fields && fields.length > 0 && <button type="submit" {...(preview) && {disabled: true} }>Submit</button>}
    </div>
  </>
);

export default FormView;
