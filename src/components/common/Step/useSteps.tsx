import { useState } from "react";

export const useSteps = ({
  stepLength,
  conditions,
}: {
  stepLength: number;
  conditions?: boolean[];
}) => {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((current) => {
      const condVal = conditions?.at(current);
      const cond = condVal != undefined ? condVal : true;

      return current < stepLength && cond ? current + 1 : current;
    });
  };
  const prevStep = () => {
    setStep((current) => (current > 0 ? current - 1 : current));
  };

  return {
    step,
    nextStep,
    prevStep,
  };
};
