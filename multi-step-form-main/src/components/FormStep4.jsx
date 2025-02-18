import React from "react";
import "../styles/FormStep4.css";
import { useNavigate } from "react-router-dom";

function FormStep4({ formData, setFormData }) {
  const navigate = useNavigate();
  const isYearly = formData.billingCycle === "Yearly";

  const addonPrices = {
    "Online Service": isYearly ? 10 : 1,
    "Large Storage": isYearly ? 20 : 2,
    "Customizable Profile": isYearly ? 20 : 2,
  };

  const totalPrice =
    parseFloat(formData.planPrice || 0) +
    formData.addons.reduce(
      (total, addon) => total + (addonPrices[addon] || 0),
      0
    );

  const handleGoBack = (event) => {
    event.preventDefault();
    navigate("/FormStep3");
  };

  const toFinalStep = (event) => {
    event.preventDefault();
    navigate("/FormStep5", { replace: true });
  };

  const changePlan = (event) => {
    event.preventDefault();
    navigate("/FormStep2");
  };

  return (
    <form className="formStep4">
      <div className="form-header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="summary">
        <div className="plan-info">
          <h3>
            {formData.plan} ({formData.billingCycle})
          </h3>
          <span>
            ${formData.planPrice}
            {isYearly ? "/yr" : "/mo"}
          </span>
          <button className="button-change" onClick={changePlan}>
            Change
          </button>
        </div>
        <div
          className="addons-info"
          style={{ display: formData.addons.length > 0 ? "block" : "none" }}
        >
          {formData.addons.map((addon) => (
            <div key={addon} className="addon-item">
              <p>{addon}</p>
              <span>
                +${addonPrices[addon] || 0}
                {isYearly ? "/yr" : "/mo"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="total-info">
        <p>Total (per {isYearly ? "year" : "month"})</p>
        <span className="total-price">
          +${totalPrice}
          {isYearly ? "/yr" : "/mo"}
        </span>
      </div>
      <div className="navigation-buttons">
        <button className="back-button" onClick={handleGoBack}>
          Go Back
        </button>
        <button className="confirm-button" onClick={toFinalStep}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default FormStep4;
