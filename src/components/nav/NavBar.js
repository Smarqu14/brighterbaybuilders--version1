import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import logo from "../../img/5.png";
import { AiTwotoneHome, AiTwotoneMail } from "react-icons/ai";
import { BsHammer, BsChatFill, BsPeopleFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="nav__container" id="home">
      <Fade top delay={200}>
        <img src={logo} id="logo" alt="logo"></img>
      </Fade>
      <nav>
        <div className="navbar-list">
          <Fade top delay={200}>
            <Link
              className="navbar-item"
              to="home"
              spy={true}
              smooth={true}
              offset={-500}
              duration={500}
            >
              <span className="navbar__icon">
                <AiTwotoneHome />
              </span>
              Home
            </Link>
          </Fade>
          <Fade top delay={200}>
            <Link
              className="navbar-item"
              to="about"
              spy={true}
              smooth={true}
              offset={-400}
              duration={500}
            >
              <span className="navbar__icon">
                <BsPeopleFill />
              </span>
              About
            </Link>
          </Fade>
          <Fade top delay={400}>
            <Link
              className="navbar-item"
              to="services"
              spy={true}
              smooth={true}
              offset={-200}
              duration={700}
            >
              <span className="navbar__icon">
                <BsHammer />
              </span>
              Services
            </Link>
          </Fade>
          <Fade top delay={600}>
            <Link
              className="navbar-item"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              <span className="navbar__icon">
                <BsChatFill />
              </span>
              Contact
            </Link>
          </Fade>
          <Fade top delay={600}>
            <Link
              className="navbar-item"
              to="consultation"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
            >
              <span className="navbar__icon">
                <AiTwotoneMail />
              </span>
              Consultation
            </Link>
          </Fade>
        </div>
      </nav>
      <Fade top delay={800}>
        <Link
          className="navbar-item"
          to="consultation"
          spy={true}
          smooth={true}
          offset={-200}
          duration={1000}
        >
          <button className="btn-scheadule">Scheadule Consultation</button>
        </Link>
      </Fade>
    </div>
  );
}
