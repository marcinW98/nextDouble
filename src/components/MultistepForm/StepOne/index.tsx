import { useState } from "react";
import { FirstStepType } from "../utils/types";

export const StepOne = ({ formData, setFormData }: FirstStepType) => {
  const [tempName, setTempName] = useState("");
  const [tempLastName, setTempLastName] = useState("");

  return (
    <div>
      <h2>Step One</h2>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="First name..."
        value={formData.name}
        onChange={(e) => setTempName(e.target.value)}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        type="text"
        placeholder="Last name..."
        value={formData.lastName}
        onChange={(e) => setTempLastName(e.target.value)}
      />
    </div>
  );
};
