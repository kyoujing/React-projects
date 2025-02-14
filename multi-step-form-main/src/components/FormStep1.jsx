import React, { useState } from "react";
import "../styles/FormStep1.css";
import { useNavigate } from "react-router-dom";

function FormStep1({ formData, setFormData }) {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    const fieldsToValidate = ["name", "emailAddress", "phoneNumber"];

    fieldsToValidate.forEach((key) => {
      const value = formData[key];
      if (typeof value !== "string" || !value.trim()) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const submittedData = {
        Name: formData.name,
        EmailAddress: formData.emailAddress,
        PhoneNumber: formData.phoneNumber,
      };

      console.log("Submitted Data:", submittedData);
      navigate("/FormStep2");
    }
  };

  return (
    <form className="formStep1" onSubmit={handleSubmit}>
      <div className="plan-header">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <label htmlFor="name">
        Name
        {errors.name && <span className="formStep1-error">{errors.name}</span>}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. John Smith"
        className={errors.name ? "formStep1-errorBorder" : ""}
      />

      <label htmlFor="emailAddress">
        Email Address
        {errors.emailAddress && (
          <span className="formStep1-error">{errors.emailAddress}</span>
        )}
      </label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="e.g. johnsmith@lorem.com"
        className={errors.emailAddress ? "formStep1-errorBorder" : ""}
      />

      <label htmlFor="phoneNumber">
        Phone Number
        {errors.phoneNumber && (
          <span className="formStep1-error">{errors.phoneNumber}</span>
        )}
      </label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="e.g. +1 234 567 890"
        className={errors.phoneNumber ? "formStep1-errorBorder" : ""}
      />

      <div className="navigation-buttons">
        <button type="submit" className="next-button">
          Next Step
        </button>
      </div>
    </form>
  );
}

export default FormStep1;
