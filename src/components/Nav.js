import React from 'react';
import * as Scroll from 'react-scroll';
import "./css/nav.css";

export default function Nav() {

    return (
        <div className="navlinks">
            <Scroll.Link activeClass="active" to="about" smooth={true} duration={500}>About</Scroll.Link>
            <Scroll.Link activeClass="active" to="projects" smooth={true} duration={500}>Projects</Scroll.Link>
            <Scroll.Link activeClass="active" to="contact" smooth={true} duration={500}>Contact</Scroll.Link>
        </div>
    )
}
