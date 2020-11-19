import React from "react";
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./Btn.css";

export default function Btn() {
  return (
    <div>
      <Link
        className="btn-icon"
        to="home"
        spy={true}
        smooth={true}
        offset={-500}
        duration={1000}
      >
        <AiOutlineArrowUp />
      </Link>
    </div>
  );
}
