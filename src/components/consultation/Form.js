import React, { useState } from "react";
import "./Form.css";
import emailjs from "emailjs-com";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <form className="form">
          <h1>Scheadule Consultation</h1>
          <label className="form-label">Name :&nbsp;</label>
          <input
            className="form-inputs"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />{" "}
          <br></br>
          <label className="form-label">Email :&nbsp;</label>
          <input
            className="form-inputs"
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Enter your email"
            onChange={this.handleOnChange}
          />
          <br></br>
          <label className="form-label">Cell # :&nbsp;</label>
          <input
            className="form-inputs"
            type="text"
            name="number"
            placeholder="Enter your phone number"
            value={this.state.number}
            onChange={this.handleOnChange}
          />
          <br></br>
          <p className="form-label">Tell us about your project :&nbsp;</p>
          <textarea
            name="message"
            rows="10"
            className="form-textarea"
            cols="20"
            value={this.state.message}
            onChange={this.handleOnChange}
            placeholder="What do you want to build?"
          ></textarea>
          <button className="form-input-btn" type="submit">
            Get In Touch!
          </button>
          <p className="form-input-phone">
            <a href="tel://+4152258732">&nbsp;CALL US:&nbsp;415.225.8732</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Form;
// function sendEmail(e) {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       "service_pbjcjte",
//       "template_ueylrud",
//       e.target,
//       "user_atqn5FizjiXP13egltGrm"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   e.target.reset();
// }

//   return (
//     // <form className="form" onSubmit={sendEmail}>
//     //   <label>Name</label>
//     //   <input type="text" name="user_name" />
//     //   <label>Email</label>
//     //   <input type="email" name="user_email" />
//     //   <label>Message</label>
//     //   <textarea name="message" />
//     //   <input type="submit" value="Send" />
//     // </form>

//     <form>
//       First Name:{" "}
//       <input
//         type="text"
//         name="firstName"
//         value={this.state.firstName}
//         onChange={this.handleOnChange}
//       />{" "}
//       <br></br>
//       Last Name:{" "}
//       <input
//         type="text"
//         name="lastName"
//         value={this.state.lastName}
//         onChange={this.handleOnChange}
//       />
//     </form>
//   );
// }
