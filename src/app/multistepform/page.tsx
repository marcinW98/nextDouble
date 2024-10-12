"use client";

import { useForm } from "../../components/MultistepForm/hooks/useForm";
import { StepButtons } from "../../components/MultistepForm/StepButtons";

export default function MultistepForm() {
  const { stepNumber, setStepNumber, renderSteps } = useForm();

  return (
    <>
      <h1>Multistep Form</h1>
      <p>{stepNumber}</p>
      {renderSteps()}
      <StepButtons stepNumber={stepNumber} setStepNumber={setStepNumber} stepQuantity={4} />
    </>
  );
}
