import React from "react";
import "./Contact.css";
import { ImPhone } from "react-icons/im";

export default function Contact() {
  return (
    <div className="contact__container" id="contact">
      <div className="contact__text">
        <h1>Contact Us</h1>
        <br />
        <a href="tel://+4152258732" className="banner__phone">
          <ImPhone />
          &nbsp;415.225.8732
        </a>
        <p>
          From concept to completion, every step of a project is handled by our
          team of engineers, architects, construction crew, and interior
          designers. Renovation and preservation projects are done with care and
          concern for architectural and structural integrity as well as beauty
          and function.
        </p>
      </div>
      <div className="contact__map-hour">
        <div className="contact__frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1577.8543796306647!2d-122.4368609!3d37.7265135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e862b86f577%3A0x8991b0a8d4d8fe49!2s89%20Santa%20Rosa%20Ave%2C%20San%20Francisco%2C%20CA%2094112!5e0!3m2!1sen!2sus!4v1605680056360!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <h3>Address: 89 Santa Rosa Ave, San Francisco, CA 94014</h3>
        </div>
        <div className="contact__hours">
          <h1>Hours</h1>
          <ul>
            <li>Monday - Friday: 9am - 5pm </li>
            <li> Saturday: By appointment </li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
