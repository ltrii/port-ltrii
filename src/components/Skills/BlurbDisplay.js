import React, { Component } from "react";

import csspng from "../../assets/img/skills/css.png";
import gempng from "../../assets/img/skills/gems.png";
import htmlpng from "../../assets/img/skills/html.png";
import linuxpng from "../../assets/img/skills/linux.png";
import postgrespng from "../../assets/img/skills/postgres.png";
import pythonpng from "../../assets/img/skills/python.png";
import reactpng from "../../assets/img/skills/react.png";
import rubypng from "../../assets/img/skills/ruby.png";
import sqlpng from "../../assets/img/skills/sql.png";
import nodejspng from "../../assets/img/skills/nodejs.png";
import slackpng from "../../assets/img/skills/slack.png";
import windowspng from "../../assets/img/skills/windows.png";
import clangpng from "../../assets/img/skills/clang.png";
import scsspng from "../../assets/img/skills/scss.png";
import graphql from "../../assets/img/skills/graphql.png";
import dataqpng from "../../assets/img/skills/dataq.png";

export default class BlurbDisplay extends Component {
  render() {
    return (
      <div className="blurbDisplay">
        <div className="blurbHolder">
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={htmlpng} alt="HTML" />
            </div>
            <div id="btxt">HTML</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={csspng} alt="CSS" />
            </div>
            <div id="btxt">CSS</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={scsspng} alt="SASS/SCSS" />
            </div>
            <div id="btxt">SASS/SCSS</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={nodejspng} alt="nodejs" />
            </div>
            <div id="btxt">nodejs + npm</div>
          </div>
          <div
            className="blurb"
            data-aos="zoom-in"
          >
            <div id="bimg">
              <img src={reactpng} alt="React.js" />
            </div>
            <div id="btxt">React.js</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={sqlpng} alt="SQL" />
            </div>
            <div id="btxt">SQL</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={postgrespng} alt="PostgreSQL" />
            </div>
            <div id="btxt">PostgreSQL</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={graphql} alt="GraphQL" />
            </div>
            <div id="btxt">GraphQL</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={dataqpng} alt="Data Quality" />
            </div>
            <div id="btxt">Data Validation</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={rubypng} alt="Ruby" />
            </div>
            <div id="btxt">Ruby</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={gempng} alt="Ruby" />
            </div>
            <div id="btxt">RubyGems</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={pythonpng} alt="Python" />
            </div>
            <div id="btxt">Python</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={clangpng} alt="C" />
            </div>
            <div id="btxt">C</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={linuxpng} alt="Linux" />
            </div>
            <div id="btxt">Linux</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={windowspng} alt="Windows" />
            </div>
            <div id="btxt">Windows</div>
          </div>
          <div className="blurb" data-aos="zoom-in">
            <div id="bimg">
              <img src={slackpng} alt="Slack" />
            </div>
            <div id="btxt">Slack</div>
          </div>
        </div>
      </div>
    );
  }
}
