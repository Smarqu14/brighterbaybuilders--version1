import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";

export default function About() {
  const data = [
    {
      info:
        " With over 10 years of experience in the field there is no project we can't handle. We here at Brighter Bay Builders, Inc., take pride in our work and always pay attention to the minor details.",
      imgSrc: "#",
      icon: "GiShakingHands",
      slogan: "Trust",
    },
    {
      info:
        "We are committed to educating our customers in the best choices for their project and strive for a smooth and efficient experience.We only work with the best materials available and guarantee the best quality and your satisfaction.",
      imgSrc: "#",
      icon: "BsHouseDoorFill",
      slogan: "Quality",
    },
    {
      info:
        "From concept to completion, every step of a project is handled by our team of engineers, architects, construction crew, and interior designers.",
      imgSrc: "#",
      icon: "BsPeople",
      slogan: "Commitment",
    },
  ];
  return (
    <div className="about__container">
      <div className="about__card-text">
        <h1>About</h1>
        <p>
          Hello, we’re Brighters Builders Bay, Inc. your new premium
          construction company. We know you want your dream home. So let us take
          care of that, we’re really good at it, we promise!
        </p>
      </div>
      <div className="about__container-cards" id="about">
        <AboutCard data={data} />
      </div>
    </div>
  );
}
