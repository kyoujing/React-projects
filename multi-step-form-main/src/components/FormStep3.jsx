import React from "react";
import "../styles/FormStep3.css";
import { useNavigate } from "react-router-dom";

function FormStep3({ formData, setFormData }) {
  const navigate = useNavigate();
  const isYearly = formData.billingCycle === "Yearly";

  const getAddonPrice = (addon) => {
    const prices = {
      "Online Service": isYearly ? 10 : 1,
      "Large Storage": isYearly ? 20 : 2,
      "Customizable Profile": isYearly ? 20 : 2,
    };
    return prices[addon] || 0;
  };

  const handleAddonChange = (event) => {
    const { value, checked } = event.target;

    const updatedAddons = checked
      ? [...formData.addons, value]
      : formData.addons.filter((addon) => addon !== value);

    const updatedAddonPrices = { ...formData.addonPrices };
    if (checked) {
      updatedAddonPrices[value] = getAddonPrice(value);
    } else {
      delete updatedAddonPrices[value];
    }

    const updatedAddonsPrice = Object.values(updatedAddonPrices).reduce(
      (total, price) => total + price,
      0
    );

    setFormData({
      ...formData,
      addons: updatedAddons,
      addonPrices: updatedAddonPrices,
      addonsPrice: updatedAddonsPrice,
    });
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    navigate("/FormStep2");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/FormStep4");
  };

  return (
    <form className="formStep3" onSubmit={handleSubmit}>
      <div className="form-header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="addon-list">
        <label
          className={`addon-card ${
            formData.addons.includes("Online Service") ? "active" : ""
          }`}
        >
          <input
            type="checkbox"
            name="addons"
            value="Online Service"
            checked={formData.addons.includes("Online Service")}
            onChange={handleAddonChange}
            className="addon-checkbox"
          />
          <div className="addon-content">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <span>{isYearly ? "+$10/yr" : "+$1/mo"}</span>
        </label>

        <label
          className={`addon-card ${
            formData.addons.includes("Large Storage") ? "active" : ""
          }`}
        >
          <input
            type="checkbox"
            name="addons"
            value="Large Storage"
            checked={formData.addons.includes("Large Storage")}
            onChange={handleAddonChange}
            className="addon-checkbox"
          />
          <div className="addon-content">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span>{isYearly ? "+$20/yr" : "+$2/mo"}</span>
        </label>

        <label
          className={`addon-card ${
            formData.addons.includes("Customizable Profile") ? "active" : ""
          }`}
        >
          <input
            type="checkbox"
            name="addons"
            value="Customizable Profile"
            checked={formData.addons.includes("Customizable Profile")}
            onChange={handleAddonChange}
            className="addon-checkbox"
          />
          <div className="addon-content">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <span>{isYearly ? "+$20/yr" : "+$2/mo"}</span>
        </label>
      </div>

      <div className="navigation-buttons">
        <button className="back-button" onClick={handleGoBack}>
          Go Back
        </button>
        <button type="submit" className="next-button">
          Next Step
        </button>
      </div>
    </form>
  );
}

export default FormStep3;
