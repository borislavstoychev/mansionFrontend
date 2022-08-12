import React, { useContext, useEffect, useState } from "react";
import { StepsContext } from "../helpers/stepperContext";
import {
  checkPassword,
  checkUsernameExist,
  checkUsernameForLength,
} from "../utils/validation";
import "./Steps.css";

type validator = {
  usernameLength: boolean | undefined;
  usernameExist: boolean | undefined;
  passwordLength: boolean | undefined;
  confirmPass: boolean | undefined;
  checkBox: boolean;
  required: { username: boolean; password: boolean };
};
export default () => {
  const { formData, setFormData, currentStep, setCurrentStep } =
    useContext(StepsContext);
  const [exist, SetExist] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const respone = checkUsernameExist(formData.firstStep.username);
      console.log(await respone);
      SetExist(await respone);
    }
    fetchData();
  }, [formData.firstStep.username]);

  const [validation, setValidation] = useState<validator>();

  const goNext = () => {
    if (
      !validation?.confirmPass &&
      !validation?.passwordLength &&
      !validation?.usernameExist &&
      !validation?.usernameLength &&
      validation?.checkBox &&
      !validation.required.username &&
      !validation.required.password
    ) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onBlur = (e: any) => {
    const validator = {
      usernameLength:
        e.target.name === "username" && !checkUsernameForLength(e.target.value),
      passwordLength:
        e.target.name === "password" && !checkPassword(e.target.value),
      usernameExist: exist,
      checkBox: formData.firstStep.agree,
      confirmPass:
        formData.firstStep.password !== formData.firstStep.confirmPassword,
      required: {
        username: formData.firstStep.username === "",
        password: formData.firstStep.password === "",
      },
    };
    setValidation(validator);
  };
  console.log(validation);
  return (
    <div className="container">
      <div className="row">
        <div className="col-25">
          <label>First Name</label>
        </div>
        <div className="col-75">
          <input
            placeholder="First Name"
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                firstStep: { ...formData.firstStep, firstName: e.target.value },
              })
            }
            value={formData.firstStep.firstName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Username</label>
        </div>
        <div className="col-75">
          <input
            autoFocus
            name="username"
            placeholder="Username"
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                firstStep: { ...formData.firstStep, username: e.target.value },
              })
            }
            onBlur={(e) => onBlur(e)}
            value={formData.firstStep.username}
          />
          {validation?.usernameLength && (
            <span style={{ color: "red" }}>
              Username must be minimum 4 letters and maximum 12 letters.
            </span>
          )}
          {validation?.required.username && (
            <span style={{ color: "red" }}>Required field!</span>
          )}
          {validation?.usernameExist && (
            <span style={{ color: "red" }}>
              Another user has already selected this username!
            </span>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label>Email</label>
        </div>
        <div className="col-75">
          <input
            placeholder="Email"
            type="email"
            onChange={(e) =>
              setFormData({
                ...formData,
                firstStep: { ...formData.firstStep, email: e.target.value },
              })
            }
            value={formData.firstStep.email}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label>Password</label>
        </div>
        <div className="col-75">
          <input
            name="password"
            required
            placeholder="Password"
            type="password"
            onChange={(e) =>
              setFormData({
                ...formData,
                firstStep: {
                  ...formData.firstStep,
                  password: e.target.value,
                },
              })
            }
            onBlur={(e) => onBlur(e)}
            value={formData.firstStep.password}
          />
          {validation?.passwordLength && (
            <span style={{ color: "red" }}>
              6-12 one capital, one lower-case letter, number or special
              character
            </span>
          )}
          {validation?.required.password && (
            <span style={{ color: "red" }}>Required field!</span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Confirm Password</label>
        </div>
        <div className="col-75">
          <input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) =>
              setFormData({
                ...formData,
                firstStep: {
                  ...formData.firstStep,
                  confirmPassword: e.target.value,
                },
              })
            }
            onBlur={(e) => onBlur(e)}
            value={formData.firstStep.confirmPassword}
          />
          {validation?.confirmPass && (
            <span style={{ color: "red" }}>Password not match!</span>
          )}
        </div>
      </div>
      <div className="terms-conditions">
        <input
          name="checkbox"
          checked={formData.firstStep.agree}
          type="checkbox"
          onChange={(e) =>
            setFormData({
              ...formData,
              firstStep: { ...formData.firstStep, agree: e.target.checked },
            })
          }
          onBlur={(e) => onBlur(e)}
        />
        <label style={{ display: "block" }}>
          By checking this box, I agree to <a href="#">Terms & Conditions</a> of
          the site.
        </label>
      </div>
      {validation && !validation.checkBox && (
        <span style={{ color: "red", display: "block" }}>
          Check field is required!
        </span>
      )}
      <div className="btn-container">
        <button
          className="step-button"
          disabled={currentStep - 1 === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          GO PREVIOUS
        </button>
        <button
          className="step-button"
          disabled={currentStep - 1 === 3}
          onClick={goNext}
        >
          GO NEXT
        </button>
      </div>
    </div>
  );
};
