export type FieldType = "text" | "radio" | "checkbox";

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  options?: string[]; // For radio/checkbox fields
}