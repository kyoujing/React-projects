import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FormStep1 from "./components/FormStep1";
import FormStep2 from "./components/FormStep2";
import FormStep3 from "./components/FormStep3";
import FormStep4 from "./components/FormStep4";
import FormStep5 from "./components/FormStep5";
import "./App.css";

function App() {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          emailAddress: "",
          phoneNumber: "",
          plan: "",
          billingCycle: "Monthly",
          planPrice: 0,
          addons: [],
          addonPrice: {},
          addonsPrice: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/FormStep1" />} />
          <Route
            path="/FormStep1"
            element={
              <FormStep1 formData={formData} setFormData={setFormData} />
            }
          />
          <Route
            path="/FormStep2"
            element={
              <FormStep2 formData={formData} setFormData={setFormData} />
            }
          />
          <Route
            path="/FormStep3"
            element={
              <FormStep3 formData={formData} setFormData={setFormData} />
            }
          />
          <Route
            path="/FormStep4"
            element={
              <FormStep4 formData={formData} setFormData={setFormData} />
            }
          />
          <Route
            path="/FormStep5"
            element={
              <FormStep5 formData={formData} setFormData={setFormData} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
