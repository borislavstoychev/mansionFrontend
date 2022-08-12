import React, { useContext } from "react";
import { StepsContext } from "../helpers/stepperContext";

export default () => {
  const { formData } = useContext(StepsContext);
  const body = JSON.stringify({
    username: formData.firstStep.username,
    password: formData.firstStep.password,
    firstName: formData.firstStep.firstName,
  });
  const urls = {
    playNow: "http://play.casino.com/",
    promotion: "http://play.casino.com/promotions",
  };
  const handlePromotion = () => {
    fetch("https://mansion-api.herokuapp.com/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then((response) => {
      if (response.status === 201) {
        window.location.href = urls.promotion;
      }
    });
  };
  const handlePlay = () => {
    fetch("https://mansion-api.herokuapp.com/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then((response) => {
      if (response.status === 201) {
        window.location.href = urls.playNow;
      }
    });
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>
        Thank you, You can now play with real money.{" "}
      </h1>
      <h2 style={{ textAlign: "center" }}>Have fun, and good luck!</h2>
      <div className="btn-container">
        <button className="step-button" onClick={handlePlay}>
          Play Now
        </button>
        <button className="step-button" onClick={handlePromotion}>
          Promotions
        </button>
      </div>
    </div>
  );
};
