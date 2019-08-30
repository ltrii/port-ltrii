import React from 'react';

export default function ProjCard(props) {
    return (
        <div className="projCard">
            <div id="title">{props.project.name}</div>
            <div id="details"></div>
            <div id="technologies"></div>
        </div>
    )
}
