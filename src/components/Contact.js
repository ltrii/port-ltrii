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
                
            </div>
        )
    }
}
