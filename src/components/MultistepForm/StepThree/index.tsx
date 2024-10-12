import { MiddleStepType } from "../utils/types";

export const StepThree = ({ formData, setFormData }: MiddleStepType) => {
  return (
    <div>
      <label htmlFor="phone">Phone</label>
      <input id="phone" type="text" placeholder="Phone number..." value={formData.phone} />
    </div>
  );
};
