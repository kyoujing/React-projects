import React from "react";
import thankyouIcon from "../assets/images/icon-thank-you.svg";
import "../styles/FormStep5.css";
function FormStep5() {
  return (
    <form className="formStep5">
      <div className="info">
        <img src={thankyouIcon} alt="checkmark" className="thankyou-icon" />
        <h1> Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </form>
  );
}

export default FormStep5;
