import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';
import './css/contact.css';

import ReactContactForm from 'react-mail-form';

import linked from '../assets/img/linked.png';
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
            <div className="contact slide-in-top">
                <div id="blocker"></div>
                {/* <div id="contactHeader">
                    Get in Touch
                </div> */}
                <div className="contactGrid">
                    {/* <div className="forForm">
                        <form className="contactForm">
                            <input placeholder="Your E-mail" name="email" />
                            <input placeholder="Subject" name="subject" />
                            <textarea placeholder="Your message" name="message" />
                        </form>
                    </div> */}
                    <div className="forOther">
                        <div id="socials">
                            <a id="cntct" href="https://www.linkedin.com/in/leland-rogers/"><img src={linked} alt="LinkedIn" /><div id="contactName">LinkedIn</div></a>
                            <a id="cntct" href="https://twitter.com/_ltrii"><img src={twitter} alt="Twitter" /><div id="contactName">Twitter</div></a>
                            <a id="cntct" href="https://github.com/ltrii"><img src={gitimg} alt="GitHub" /><div id="contactName">Github</div></a>
                        </div>
                    </div>
                    <div id="contactForm">
                        <ReactContactForm to="lelandtr@gmail.com" titlePlaceholder="Portfolio Inquiry - Subject Here" />
                    </div>
                </div>
            </div>
        )
    }
}
