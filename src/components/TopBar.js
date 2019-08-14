import React from 'react';
import './css/topbar.css';
import Nav from './Nav';
import Contact from './Contact';

export default function TopBar() {
    return (
        <div className="topBarHold">
            <div className="topBar">
                <div className="leftBar">
                    <h1 id="nameplate">ltrii</h1>
                </div>
                <div className="rightBar">
                    <Nav />
                </div>
            </div>
            <Contact />
        </div>
    )
}
