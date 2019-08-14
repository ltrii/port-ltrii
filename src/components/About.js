import React from 'react';
import "./css/about.css";
import MePic from '../assets/img/me.jpg';

export default function About() {
    return (
        <div className="about">
            <div className="picCenter">
                <img class="leftPic" src={MePic} alt="me"/>
            </div>
            <div className="rightInfo">
                Hello! I'm Leland Rogers.
            </div>
        </div>
    )
}
