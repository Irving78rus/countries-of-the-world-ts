import React from "react";
import "./Earth.css";
 

const Earth:React.FC   = ()  => {
//   first arg in classNames i can set class for button
 
  return (
    <div className="globe-container">
    
      <div className="globe-sphere" />
      <div className="globe-outer-shadow" />
      <div className="globe-worldmap">
        <div className="globe-worldmap-back" />
        <div className="globe-worldmap-front" />
      </div>
      <div className="globe-inner-shadow" />
    
  </div>
  
  );
};
 

export default Earth;
