import React from "react";
import { FormField } from "./types";

interface Props {
  field: FormField;
  preview?: boolean;
  onValueChange: (label: string, value: any) => void;
}

const FieldRenderer: React.FC<Props> = ({ field, preview = false , onValueChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(field.label, event.target.value); // Call the onValueChange function
  };

  switch (field.type) {
    case "text":
      return (
        <div className="form-question">
          <label>
            <div>{field.label}</div>
            <input type="text" id={field.id} name={field.id} {...(preview) && {disabled: true} } onChange={handleChange}/>
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
                <input type="radio" name={field.id} value={option} {...(preview) && {disabled: true} } onChange={handleChange}/>
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
                <input type="checkbox" name={field.id} value={option} {...(preview) && {disabled: true}} onChange={handleChange}/>
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
