import React from "react";
import "./css/content.css";

import larapng from "../assets/img/skills/laravel.png";
import vuepng from "../assets/img/skills/vuejs.png";

import BlurbDisplay from "./Skills/BlurbDisplay";

export default function Content() {
  return (
    <div className="skills" name="skills">
      <h3>Skills</h3>
      <div id="skillsLower">
        <BlurbDisplay />
        <div id="endText">currently learning:</div>
        <div id="currentlyLearning">
          <div className="blurb" data-aos="zoom-in">
              <div id="bimg">
                <img src={vuepng} alt="Vue" />
              </div>
              <div id="btxt">Vue</div>
            </div>
            <div className="blurb" data-aos="zoom-in">
              <div id="bimg">
                <img src={larapng} alt="Laravel" />
              </div>
              <div id="btxt">Laravel</div>
            </div>
        </div>
        <div id="endText">...and I'm learning more everyday.</div>
      </div>
    </div>
  );
}
