import React, { useContext, useState } from "react";
import { StepsContext } from "../helpers/stepperContext";

export default () => {
  const { formData, setFormData, currentStep, setCurrentStep } =
    useContext(StepsContext);

  const [bonus, setBonus] = useState(false);

  const hendleBonus = () => {
    setBonus(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-25">
          <label>Address 1</label>
        </div>
        <div className="col-75">
          <input
            placeholder="Address 1"
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                thirdStep: { ...formData.thirdStep, addres1: e.target.value },
              })
            }
            value={formData.thirdStep.addres1}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Address 2</label>
        </div>
        <div className="col-75">
          <input
            placeholder="Address 2"
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                thirdStep: { ...formData.thirdStep, addres2: e.target.value },
              })
            }
            value={formData.thirdStep.addres2}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>City</label>
        </div>
        <div className="col-75">
          <input
            placeholder="City"
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                thirdStep: { ...formData.thirdStep, city: e.target.value },
              })
            }
            value={formData.thirdStep.city}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Country</label>
        </div>
        <div className="col-75">
          <input
            placeholder="Country"
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                thirdStep: { ...formData.thirdStep, country: e.target.value },
              })
            }
            value={formData.thirdStep.country}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Postal Code</label>
        </div>
        <div className="col-75">
          <input
            placeholder="Postal Code"
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                thirdStep: { ...formData.thirdStep, postCode: e.target.value },
              })
            }
            value={formData.thirdStep.postCode}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Phone Number</label>
        </div>
        <div className="col-75">
          <input
            placeholder="Phone Number"
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                thirdStep: { ...formData.thirdStep, phone: e.target.value },
              })
            }
            value={formData.thirdStep.phone}
            autoFocus
          />
        </div>
      </div>
      <p style={bonus ? { display: "none" } : undefined}>
        Do you have a bonus code?{" "}
        <a href="#" onClick={hendleBonus}>
          Click here.
        </a>
      </p>
      <p style={!bonus ? { display: "none" } : undefined}>
        Very Coool Bonus Code
      </p>
      <div className="btn-container">
        <button
          className="step-button"
          disabled={currentStep - 1 === 0}
          onClick={() => setCurrentStep(currentStep - 2)}
        >
          GO PREVIOUS
        </button>
        <button
          className="step-button"
          disabled={currentStep - 1 === 3}
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          {currentStep === 3 ? "FINISH" : "GO NEXT"}
        </button>
      </div>
    </div>
  );
};
