import React from 'react';
import './css/jumbo.css';

import lambdaImg from '../assets/img/lambda.png'

export default function JumboMain() {
    return (
        <div className="jumboMain">
            <div className="bgHolder" />
            <div className="topJumbo">
                <div className="jumboText text-focus-in">
                    Hi! I'm Leland Rogers, a full stack software engineer living in the Bay Area of California who is attending Lambda School. I'd love to work for you.
                </div>
            </div>
            <div className="bottomJumbo">
                <div>Where I'm attending: </div>
                <a href="https://lambdaschool.com/"><img src={lambdaImg} alt="Lambda School" /></a>
            </div>
        </div>
    )
}
