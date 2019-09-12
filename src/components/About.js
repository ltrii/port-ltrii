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
                    My knowledge covers the full stack of web development. I have skills building with the basics, libraries like React, and frameworks like Ruby on Rails.
                </p> 
                <p>
                    Since diving into development I have covered several languages, stacks, and more while also working on teams and collborating on projects. In my time at Lambda I also built assignments and sprint projects using Python and C.
                </p>
                <p>
                    All in all my passion for coding only grows everyday, and I'd <i>love</i> to bring that into a positive work environment.    
                </p></div>
        </div>
    )
}
