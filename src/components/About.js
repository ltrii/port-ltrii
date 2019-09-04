import React from 'react';
import "./css/about.css";
import maleava from "../assets/svg/avatar.svg"

export default function About() {
    return (
        <div className="about" name="about">
            {/* <img width="75%" src={maleava} alt="Avatar" /> */}
            <div id="aboutText">
                <p id="bigText">
                   I would love to work for you.
                </p>
                <p>
                    I'm a web developer with a passion for programming of all kinds.
                </p> 
                <p>
                	Versed in many skills (both in the back end, and front end) I believe I can bring many strengths to your team.
                </p> 
                <p>
                    Since diving into development I have covered several languages, stacks, and more while also working on teams and collborating on projects.
                </p>
                <p>
                    All in all my passion for coding only grows everyday, and I'd love to bring that into a positive work environment.    
                </p></div>
        </div>
    )
}
