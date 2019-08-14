import React from 'react';
import "./css/about.css";
import MePic from '../assets/img/me.jpg';

export default function About() {
    return (
        <div className="about" name="about">
            <div className="picCenter">
                <img className="leftPic" src={MePic} alt="me"/>
            </div>
            <div className="rightInfo">
                Hello! I'm Leland Rogers.
            </div>
        </div>
    )
}
