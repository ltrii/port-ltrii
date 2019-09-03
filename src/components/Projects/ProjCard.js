import React from 'react';

export default function ProjCard(props) {
    return (
        <div className="projCard">
            <div id="img"><img src={props.project.img} alt="project img" /></div>
            <div id="title">{props.project.name}</div>
            <div id="details">{props.project.desc}</div>
            <div id="technologies"></div>
        </div>
    )
}
