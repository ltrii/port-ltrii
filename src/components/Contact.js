import React, { useContext } from 'react';
import globalContext from '../context/global/globalContext';
import './css/contact.css';

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
                <div id="blocker"><p>
                    Get in Touch
                </p></div>
                <div className="contactGrid">
                    <div className="forForm">
                        <form className="contactForm">
                            <input placeholder="Your E-mail" name="email" />
                            <input placeholder="Subject for message" name="subject" />
                            <textarea placeholder="Your message :)" name="message" />
                        </form>
                    </div>
                    <div className="forOther">
                        OTHERs
                    </div>
                </div>
            </div>
        )
    }
}
