import React from "react";
import * as Scroll from "react-scroll";
import "./css/jumbo.css";

import lambdaImg from "../assets/img/lambda.png";
import downArrow from "../assets/img/downarrow.png";

export default function JumboMain() {
  return (
    <div className="jumboMain">
      <div className="bgHolder" />
      <div className="topJumbo">
        <div className="jumboText text-focus-in">
          Hi! I'm Leland Rogers. I'm a full stack software developer from the
          East Bay Area of California. <br></br> Here's a quick peek at my skills.
        </div>
        <a className="fade-in" href="mailto:lelandtr@gmail.com" id="emailBtn">
          Email Me
        </a>
      </div>
      <Scroll.Link
        activeClass="active"
        to="projects"
        smooth={true}
        duration={400}
      >
        <div id="scrolldown"><img src={downArrow} alt="See more" /></div>
      </Scroll.Link>
      <div className="bottomJumbo">
        <div>Learned my skills @</div>
        <a href="https://lambdaschool.com/">
          <img src={lambdaImg} alt="Lambda School" />
        </a>
      </div>
    </div>
  );
}
