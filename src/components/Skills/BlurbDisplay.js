import React, { Component } from 'react';

import csspng from '../../assets/img/skills/css.png';
import gempng from '../../assets/img/skills/gems.png';
import htmlpng from '../../assets/img/skills/html.png';
import linuxpng from '../../assets/img/skills/linux.png';
import postgrespng from '../../assets/img/skills/postgres.png';
import pythonpng from '../../assets/img/skills/python.png';
import reactpng from '../../assets/img/skills/react.png';
import rubypng from '../../assets/img/skills/ruby.png';
import sqlpng from '../../assets/img/skills/sql.png';

import nodejspng from '../../assets/img/skills/nodejs.png';
import slackpng from '../../assets/img/skills/slack.png';
import windowspng from '../../assets/img/skills/windows.png';
import clangpng from '../../assets/img/skills/clang.png';


const blurbs = {
    "html": {
        title: "HTML",
        desc: "HyperText Markup Language",
        link: ""
    },
    "react": {
        title: "React.js",
        desc: "Fantastic JS library",
        link: ""
    }
}

export default class BlurbDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            curblurb: 'react'
        }
        this.curBlurbSet = this.curBlurbSet.bind(this);
    }

    curBlurbSet(blurb) {
        console.log("uh")
        this.setState = {
            blurb: blurb
        }
    }


    render() {
        return (
            <div className="blurbDisplay">
            <div className="blurbHolder">
                <div className="blurb" onClick={this.curBlurbSet('html')}>
                    <div id="bimg"><img src={htmlpng} alt="HTML" /></div>
                    <div id="btxt">HTML</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={csspng} alt="CSS" /></div>
                    <div id="btxt">CSS</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={nodejspng} alt="nodejs" /></div>
                    <div id="btxt">nodejs + npm</div>
                </div>
                <div className="blurb" onClick={this.curBlurbSet('react')}>
                    <div id="bimg"><img src={reactpng} alt="React.js" /></div>
                    <div id="btxt">React.js</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={sqlpng} alt="SQL" /></div>
                    <div id="btxt">SQL</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={postgrespng} alt="PostgreSQL" /></div>
                    <div id="btxt">PostgreSQL</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={rubypng} alt="Ruby" /></div>
                    <div id="btxt">Ruby</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={gempng} alt="Ruby" /></div>
                    <div id="btxt">RubyGems</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={pythonpng} alt="Python" /></div>
                    <div id="btxt">Python</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={clangpng} alt="C" /></div>
                    <div id="btxt">C</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={linuxpng} alt="Linux" /></div>
                    <div id="btxt">Linux</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={windowspng} alt="Windows" /></div>
                    <div id="btxt">Windows</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={slackpng} alt="Slack" /></div>
                    <div id="btxt">Slack</div>
                </div>
            </div>
            {/* <div className="blurbInfo">
                {blurbs[this.state.curblurb].title}
            </div> */}
        </div>
        )
    }
}
