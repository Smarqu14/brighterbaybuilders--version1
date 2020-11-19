import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { Link } from "react-scroll";
import { AiTwotoneHome } from "react-icons/ai";
import { BsHammer, BsChatFill, BsPeopleFill } from "react-icons/bs";

export default (props) => {
  return (
    <Menu>
      <Link
        className="menu-item"
        to="home"
        spy={true}
        smooth={true}
        offset={-500}
        duration={500}
      >
        <AiTwotoneHome /> Home
      </Link>
      <Link
        className="menu-item"
        to="about"
        spy={true}
        smooth={true}
        offset={-500}
        duration={500}
      >
        <BsPeopleFill /> About
      </Link>

      <Link
        className="menu-item"
        to="services"
        spy={true}
        smooth={true}
        offset={-200}
        duration={700}
      >
        <BsHammer /> Services
      </Link>
      <Link
        className="menu-item"
        to="contact"
        spy={true}
        smooth={true}
        offset={-500}
        duration={500}
      >
        <BsChatFill /> Contact
      </Link>
      <Link
        className="menu-item"
        to="consultation"
        spy={true}
        smooth={true}
        offset={-500}
        duration={500}
      >
        <BsChatFill /> Consultation
      </Link>
    </Menu>
  );
};
