import React from "react";

const Chicken = ({ image, titre, description }) => {
  return (
    <div className="chicken">
      <img src={image} className="chicken-image" alt="poulet" />
      <h2 className="chicken-titre"> {titre} </h2>
      <p className="chicken-description"> {description} </p>
    </div>
  );
};

export default Chicken;
