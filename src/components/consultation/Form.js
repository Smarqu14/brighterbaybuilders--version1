import React, { useState } from "react";
import "./Form.css";
import FormSubmit from "./FormSubmit";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container" id="consultation">
        <div className="form-content-left">
          <h1>Brighter Bay Builders</h1>
          <h2>Let's build your dream home</h2>
          <span className="form-input-phone">
            <a href="tel://+4152258732">&nbsp;415.225.8732</a>
          </span>
          <img
            className="form-img"
            src={
              "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1443&q=80"
            }
            alt=""
          />
        </div>
        {!isSubmitted ? (
          <FormSubmit submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
