import { createContext } from "react";
export type context = {
  firstStep: {
    firstName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    agree: boolean;
  };
  thirdStep: {
    addres1: string;
    addres2: string;
    city: string;
    country: string;
    postCode: string;
    phone: string;
  };
};
type Steps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  formData: context;
  setFormData: React.Dispatch<React.SetStateAction<context>>;
};
export const StepsContext = createContext<Steps>({} as Steps);
