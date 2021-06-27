import React from 'react'

export default function Znav(props) {
    return (
        <div id="znav">
            <button onClick={() => props.sfn("main")}>Main</button>
            <button onClick={() => props.sfn("contact")}>Contact</button>
            <button onClick={() => props.sfn("skills")}>Skills</button>
        </div>
    )
}
