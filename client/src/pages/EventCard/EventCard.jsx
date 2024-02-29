import React from "react";
import "./eventcard.css";

export const EventCard = ({ image, title , content }) => {
  return (
    <div className="services-card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{content}</p>
    </div>
  );
};
