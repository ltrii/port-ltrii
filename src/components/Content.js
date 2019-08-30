import React from 'react';
import './css/content.css';

import BlurbDisplay from './Skills/BlurbDisplay';

export default function Content() {
    
    return (
        <div className="skills" name="skills">
            <h3>Skills</h3>
            <BlurbDisplay />
        </div>
    )
}
