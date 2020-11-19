import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSubmit = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Schedule Consultation</h1>
        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your name"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Phone Number</label>
          <input
            className="form-input"
            type="text"
            name="number"
            placeholder="Enter your number"
            value={values.number}
            onChange={handleChange}
          />
          {errors.number && <p>{errors.number}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Tell us what is your project?</label>
          <textarea
            name="message"
            rows="10"
            cols="30"
            value={values.message}
            onChange={handleChange}
            placeholder="What do you want to build?"
          >
            {errors.password2 && <p>{errors.password2}</p>}
          </textarea>
        </div>
        <button className="form-input-btn" type="submit">
          Get In Touch!
        </button>
        <span className="form-input-phone">
          <a href="tel://+4152258732">&nbsp;CALL US:&nbsp;415.225.8732</a>
        </span>
      </form>
    </div>
  );
};

export default FormSubmit;
