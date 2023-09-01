import React from "react";
const Area = ({className, icon, titleText, number}) => {
  return (
    <div className= {`criterion ${className}`}>
      <div className="title">
        <img src={icon} alt="reaction-img" />
        <span>{titleText}</span>
      </div>
      <div className="score">
        {number}<span> / 100</span>
      </div>
    </div>
  );
};

export default Area;
