import React from "react";

export default function ServiceItem({ data, handleToggleScreen }) {
  const imgs = data.map((img, idx) => {
    return (
      <div
        className={` ${img.class} gallery__listing`}
        onClick={handleToggleScreen}
        key={idx}
      >
        <p className="gallery__title" href="#">
          {img.service}
        </p>
        <img src={img.url} alt={img.service} className="gallery__img" />
      </div>
    );
  });
  return <div className="gallery">{imgs}</div>;
}
