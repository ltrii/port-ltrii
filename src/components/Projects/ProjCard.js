import React from 'react';

export default function ProjCard(props) {
    return (
        <div className="projCard">
            {props.project.name}
        </div>
    )
}
