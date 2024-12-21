import React from "react";
import { FormField } from "./types";

interface Props {
  field: FormField;
  preview?: boolean
}

const FieldRenderer: React.FC<Props> = ({ field, preview = false }) => {
  switch (field.type) {
    case "text":
      return (
        <div className="form-question">
          <label>
            {field.label}
            <input type="text" id={field.id} name={field.id} {...(preview) && {disabled: true} } />
          </label>
        </div>
      );
    case "radio":
      return (
        <div className="form-question">
          <label>
            {field.label}
            {field.options?.map((option, index) => (
              <div key={index}>
                <input type="radio" name={field.id} value={option} {...(preview) && {disabled: true} }/>
                <span>{option}</span>
              </div>
            ))}
          </label>
        </div>
      );
    case "checkbox":
      return (
        <div>
          <label className="form-question">
            {field.label}
            {field.options?.map((option, index) => (
              <div key={index}>
                <input type="checkbox" name={field.id} value={option} {...(preview) && {disabled: true}}/>
                <span>{option}</span>
              </div>
            ))}
          </label>
        </div>
      );
    default:
      return null;
  }

};

export default FieldRenderer;
