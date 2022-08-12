import React, { useState } from "react";
import { context, StepsContext } from "./helpers/stepperContext";
import "./Stepper.css";
import { StepperProgress } from "./StepperProgress";
import FinalStep from "./steps/FinalStep";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";

type StepType = {
  label: string;
  component: JSX.Element;
};

export const Stepper: React.FC = () => {
  const initalContext: context = {
    firstStep: {
      firstName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
    thirdStep: {
      addres1: "",
      addres2: "",
      city: "",
      country: "",
      postCode: "",
      phone: "",
    },
  };
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState(initalContext);

  const allSteps: StepType[] = [
    {
      label: "First Step",
      component: <FirstStep />,
    },
    {
      label: "Second Step",
      component: <SecondStep />,
    },
    {
      label: "Third Step",
      component: <ThirdStep />,
    },
    {
      label: "Final Step",
      component: <FinalStep />,
    },
  ];

  return (
    <StepsContext.Provider
      value={{ currentStep, setCurrentStep, formData, setFormData }}
    >
      <div className="stepper stepper-wrapper">
        <StepperProgress
          stepTitles={allSteps.map((step, i) => step.label)}
          currentStep={currentStep}
        />
        <div className="stepper-selector">
          {allSteps[currentStep - 1].component}
        </div>
      </div>
    </StepsContext.Provider>
  );
};
