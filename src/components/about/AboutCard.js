import React from "react";
import { GiShakingHands } from "react-icons/gi";
import { BsHouseDoorFill, BsPeople } from "react-icons/bs";
import "./AboutCard.css";

export default function AboutCard({ data }) {
  const renderIcons = (icon) => {
    switch (icon) {
      case "GiShakingHands":
        return <GiShakingHands />;
      case "BsHouseDoorFill":
        return <BsHouseDoorFill />;
      case "BsPeople":
        return <BsPeople />;
      default:
        return <h1>No project match</h1>;
    }
  };

  const cards = data.map((card) => {
    return (
      <div className="about__card-container" key={card.icon}>
        <div className="about__card-icon">{renderIcons(card.icon)}</div>
        <div className="about__card-slogan">{card.slogan}</div>
        <p className="about__card-info">{card.info}</p>
      </div>
    );
  });
  return <>{cards}</>;
}
