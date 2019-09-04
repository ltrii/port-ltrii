import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';
import './css/contact.css';

import linked from '../assets/img/linked.png';
import email from '../assets/img/email.png';
import twitter from '../assets/img/twitter.png';
import gitimg from '../assets/img/github.png';

export default function Contact(props) {

    const globState = useContext(globalContext);

    if(globState.state.open === false) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className="contact">
                <div id="blocker"></div>
                {/* <div id="contactHeader">
                    Get in Touch
                </div> */}
                <div className="contactGrid">
                    <div className="forForm">
                        <form className="contactForm">
                            <input placeholder="Your E-mail" name="email" />
                            <input placeholder="Subject" name="subject" />
                            <textarea placeholder="Your message" name="message" />
                        </form>
                    </div>
                    <div className="forOther">
                        <div id="socials">
                            <a href="https://www.linkedin.com/in/leland-rogers/"><img src={linked} alt="LinkedIn" /></a>
                            <a href="https://twitter.com/_ltrii"><img src={twitter} alt="Twitter" /></a>
                            <a href="https://github.com/ltrii"><img src={gitimg} alt="GitHub" /></a>
                            <a href="mailto:lelandtr@gmail.com"><img src={email} alt="Email" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
