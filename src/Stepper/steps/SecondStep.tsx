import React, { useContext } from "react";
import { StepsContext } from "../helpers/stepperContext";

export default () => {
  const { currentStep, setCurrentStep, formData } = useContext(StepsContext);
  const hendleclick = () => {
    const body = JSON.stringify({
      username: formData.firstStep.username,
      // email: formData.firstStep.email,
      password: formData.firstStep.password,
      firstName: formData.firstStep.firstName,
    });
    fetch("https://mansion-api.herokuapp.com/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = "http://www.casino.com/";
        }
      })
      .then((data) => data)
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>You’re ready to play!</h1>
      <h2 style={{ textAlign: "center" }}>
        In order to play with real money, you will need to provide more
        information. You can do so now if you wish or skip and do it at a later
        time.
      </h2>
      <div className="btn-container">
        <button onClick={() => setCurrentStep(currentStep + 1)}>
          Continue Registration
        </button>
        <button onClick={hendleclick}>Skip</button>
      </div>
    </div>
  );
};
