import { MiddleStepType } from "../utils/types";

export const StepTwo = ({ formData, setFormData }: MiddleStepType) => {
  return (
    <div>
      <h2>Step Two</h2>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Email..." value={formData.email} />
    </div>
  );
};
