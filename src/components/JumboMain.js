import React from 'react';
import './css/jumbo.css';

import lambdaImg from '../assets/img/lambda.png'

export default function JumboMain() {
    return (
        <div className="jumboMain">
            <div className="bgHolder" />
            <div className="topJumbo">
                <div className="jumboText text-focus-in">
                    Hi! I'm Leland Rogers. I'm a full stack software engineer living in the East Bay Area of California who is attending Lambda School. Here's a quick peak at my skills.
                </div>
                <a className="fade-in" href="mailto=lelandtr@gmail.com" id="emailBtn">Email Me Now.</a>
            </div>
            <div className="bottomJumbo">
                <div>Where I'm attending: </div>
                <a href="https://lambdaschool.com/"><img src={lambdaImg} alt="Lambda School" /></a>
            </div>
        </div>
    )
}
