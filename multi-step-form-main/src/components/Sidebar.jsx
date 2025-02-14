import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="step-sidebar">
      <ul className="step-list">
        <li className="step-item">
          <span
            className={`step-indicator ${
              location.pathname === "/FormStep1" ? "active" : ""
            }`}
          >
            1
          </span>
          <span className="step-details">
            <p className="small">STEP 1</p>
            <p>YOUR INFO</p>
          </span>
        </li>
        <li className="step-item">
          <span
            className={`step-indicator ${
              location.pathname === "/FormStep2" ? "active" : ""
            }`}
          >
            2
          </span>
          <div className="step-details">
            <p className="small">STEP 2</p>
            <p>SELECT PLAN</p>
          </div>
        </li>
        <li className="step-item">
          <span
            className={`step-indicator ${
              location.pathname === "/FormStep3" ? "active" : ""
            }`}
          >
            3
          </span>
          <div className="step-details">
            <p className="small">STEP 3</p>
            <p>ADD-ONS</p>
          </div>
        </li>
        <li className="step-item">
          <span
            className={`step-indicator ${
              location.pathname === "/FormStep4" ||
              location.pathname === "/FormStep5"
                ? "active"
                : ""
            }`}
          >
            4
          </span>
          <div className="step-details">
            <p className="small">STEP 4</p>
            <p>SUMMARY</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
