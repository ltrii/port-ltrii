import React, { useState, useEffect } from 'react';

import csspng from '../../assets/img/skills/css.png';
import gempng from '../../assets/img/skills/gems.png';
import htmlpng from '../../assets/img/skills/html.png';
import linuxpng from '../../assets/img/skills/linux.png';
import postgrespng from '../../assets/img/skills/postgres.png';
import pythonpng from '../../assets/img/skills/python.png';
import reactpng from '../../assets/img/skills/react.png';
import rubypng from '../../assets/img/skills/ruby.png';
import sqlpng from '../../assets/img/skills/sql.png';

export default function BlurbDisplay(props) {

    const blurbs = {
        html: {
            title: "HTML",
            desc: "HyperText Markup Language",
            link: ""
        },
        react: {
            title: "React.js",
            desc: "Fantastic JS library",
            link: ""
        }
    }

    const [curblurb, setCurblurb] = useState('react')

    const curBlurbSet = (blurb) => {
        setCurblurb(blurb)
    }

    useEffect(() => {
        console.log("rendering", curblurb)
    }, [curblurb])

    return (
        <div className="blurbDisplay">
            <div className="blurbHolder">
                <div className="blurb" onClick={() => curBlurbSet('html')}>
                    <div id="bimg"><img src={htmlpng} alt="HTML" /></div>
                    <div id="btxt">HTML</div>
                </div>
                <div className="blurb">
                    <div id="bimg"><img src={csspng} alt="CSS" /></div>
                    <div id="btxt">CSS</div>
                </div>
                <div className="blurb" onClick={() => curBlurbSet('react')}>
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
                    <div id="bimg"><img src={linuxpng} alt="Linux" /></div>
                    <div id="btxt">Linux</div>
                </div>
            </div>
            <div className="blurbInfo">
                {blurbs[curblurb].title}
            </div>
        </div>
    )
}
