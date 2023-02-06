import React from "react";
import './web.css';

function Web() {
  return <div className="web">
     <div className="web-option">
        <a href="#skills">
        <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
    </div>
    <div className="web-option">
        <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
    </div>
    <div className="web-option">
        <a href={require("../../header/GUNAL RESUME.pdf")} target="_blank">
          <i class="fi fi-rr-money-check option-icon"></i>Resume
        </a>
    </div>
 
    <div className="web-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>;
}

export default Web;