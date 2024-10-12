import { StepButtonsType } from "./types";

export const StepButtons = ({ stepNumber, stepQuantity, setStepNumber }: StepButtonsType) => {
  return (
    <div>
      <button type="button" disabled={stepNumber === 1} onClick={() => setStepNumber((prev) => prev - 1)}>
        Prev
      </button>
      <button type="button" disabled={stepNumber === stepQuantity} onClick={() => setStepNumber((prev) => prev + 1)}>
        Next
      </button>
      <button type="submit">Submit</button>
    </div>
  );
};
