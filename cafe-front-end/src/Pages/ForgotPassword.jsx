import React, { useRef, useState } from "react";
import { forgotPassword } from "../Services/use-service";
import { toast } from "react-toastify";
import BasePage from "./BasePage";

const ForgotPassword = () => {
  const emailElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailElement.current.value;
    console.log(email);

    forgotPassword(email)
      .then((res) => {
        toast.success("Check your mail for credentials.");
      })
      .catch((error) => {
        console.log(error.response);
        console("error log");
      });
  };

  return (
    <>
      {" "}
      <BasePage>
        <div className="email-input-card">
          <div className="email-input-card-body">
            <form onSubmit={handleSubmit}>
              <div className="email-input-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  ref={emailElement}
                  name="email"
                  required
                />
              </div>
              <div className="email-input-form-group">
                <button type="submit" className="email-input-submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default ForgotPassword;
