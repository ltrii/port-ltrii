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
                <p>
                    Hello! I'm Leland Rogers.
                </p>
                <p>
                    I'm a software developer with loads of skills. Started with a web development stack at Lambda School before eventually moving on to Computer Science in their full stack curriculum. There I learned everything from HTML, JS, NodeJS, SQL, Python, C, and much much more. Currently I am building out projects, improving this portfolio, and learning Ruby on Rails. Look furthur, or if you like what you see send me a message!
                </p>
            </div>
            <div className="underPicInfo">more to COME</div>
        </div>
    )
}
