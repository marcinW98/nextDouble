import { useState } from "react";
import { formDataType } from "../Form/types";
import { emptyForm } from "../Form/utils";
import { StepFour } from "../StepFour";
import { StepOne } from "../StepOne";
import { StepThree } from "../StepThree";
import { StepTwo } from "../StepTwo";

export const useForm = () => {
  const [formData, setFormData] = useState<formDataType>(emptyForm);
  const [stepNumber, setStepNumber] = useState<number>(1);

  const renderSteps = () => {
    switch (stepNumber) {
      case 1:
        return <StepOne formData={formData} setFormData={setFormData} />;
        break;
      case 2:
        return <StepTwo formData={formData} setFormData={setFormData} />;
        break;
      case 3:
        return <StepThree formData={formData} setFormData={setFormData} />;
        break;
      case 4:
        return <StepFour />;
        break;
      default:
        return;
    }
  };

  return { formData, setFormData, stepNumber, setStepNumber, renderSteps };
};
