import React from "react";
import "./about.css";
;
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello,
         <br /> <span className="info-name">Iam GUNAL</span>,
         <br /> Aspiring Full stack developer
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding1.jpg")}
            className="picture"
          />
        </div>
      </div>
    
    </div>
  );
}

export default About;