import React, { useState } from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import prodIcon from "../assets/images/icon-pro.svg";
import "../styles/FormStep2.css";
import { useNavigate } from "react-router-dom";

function FormStep2({ formData, setFormData }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const updatePlanPrice = (plan, billingCycle) => {
    if (plan === "Arcade") {
      return billingCycle === "Monthly" ? 9 : 90;
    }
    if (plan === "Advanced") {
      return billingCycle === "Monthly" ? 12 : 120;
    }
    if (plan === "Pro") {
      return billingCycle === "Monthly" ? 15 : 150;
    }
    return "";
  };

  const handlePlanChange = (event) => {
    const selectedPlan = event.target.value;
    const isSelected = formData.plan === selectedPlan;

    setFormData({
      ...formData,
      plan: isSelected ? "" : selectedPlan,
      planPrice: isSelected
        ? ""
        : updatePlanPrice(selectedPlan, formData.billingCycle),
    });
  };

  const handleBillingToggle = () => {
    const newBillingCycle =
      formData.billingCycle === "Monthly" ? "Yearly" : "Monthly";

    setFormData({
      ...formData,
      billingCycle: newBillingCycle,
      planPrice: updatePlanPrice(formData.plan, newBillingCycle),
    });
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    navigate("/FormStep1");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.plan) {
      setError("Please select a plan to continue.");
    } else {
      console.log("Selected Plan:", formData.plan);
      console.log("Plan Price:", formData.planPrice);
      console.log("Billing Cycle:", formData.billingCycle);
      navigate("/FormStep3");
    }
  };

  return (
    <form className="formStep2" onSubmit={handleSubmit}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="plan">
        <label
          className={`planSelection ${
            formData.plan === "Arcade" ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="plan"
            value="Arcade"
            checked={formData.plan === "Arcade"}
            onChange={handlePlanChange}
          />
          <img
            src={arcadeIcon}
            alt="arcade"
            style={{ width: "50px", height: "50px" }}
          />
          <h3>Arcade</h3>
          <p>{formData.billingCycle === "Monthly" ? "$9/mo" : "$90/yr"}</p>
          {formData.billingCycle === "Yearly" && (
            <span className="offer">2 months free</span>
          )}
        </label>

        <label
          className={`planSelection ${
            formData.plan === "Advanced" ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="plan"
            value="Advanced"
            checked={formData.plan === "Advanced"}
            onChange={handlePlanChange}
          />
          <img
            src={advancedIcon}
            alt="advanced"
            style={{ width: "50px", height: "50px" }}
          />
          <h3>Advanced</h3>
          <p>{formData.billingCycle === "Monthly" ? "$12/mo" : "$120/yr"}</p>
          {formData.billingCycle === "Yearly" && (
            <span className="offer">2 months free</span>
          )}
        </label>

        <label
          className={`planSelection ${formData.plan === "Pro" ? "active" : ""}`}
        >
          <input
            type="radio"
            name="plan"
            value="Pro"
            checked={formData.plan === "Pro"}
            onChange={handlePlanChange}
          />
          <img src={prodIcon} alt="Pro" width={50} height={50} />
          <h3>Pro</h3>
          <p>{formData.billingCycle === "Monthly" ? "$15/mo" : "$150/yr"}</p>
          {formData.billingCycle === "Yearly" && (
            <span className="offer">2 months free</span>
          )}
        </label>
      </div>

      <div className="slider-container">
        <label className="billingToggle">
          <span className={formData.billingCycle === "Monthly" ? "active" : ""}>
            Monthly
          </span>
          <input
            type="checkbox"
            className="slider-checkbox"
            checked={formData.billingCycle === "Yearly"}
            onChange={handleBillingToggle}
          />
          <span className={formData.billingCycle === "Yearly" ? "active" : ""}>
            Yearly
          </span>
        </label>
      </div>

      {error && <p className="errorMessage">{error}</p>}
      <div className="btnDiv">
        <button className="goBackBtn" onClick={handleGoBack}>
          Go Back
        </button>
        <button type="submit" className="submitBtn">
          Next Step
        </button>
      </div>
    </form>
  );
}

export default FormStep2;
