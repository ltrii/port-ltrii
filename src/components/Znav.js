import React from 'react'

export default function Znav(props) {
    return (
        <div id="znav">
            {console.log(props)}
            <button onClick={() => props.sfn("main")}>Main</button>
            <button onClick={() => props.sfn("contact")}>Contact</button>
        </div>
    )
}
