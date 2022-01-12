import React from 'react'

export default function Znav(props) {
    return (
        <div id="znav">
            <button onClick={() => props.sfn("main")}>main</button>
            <button onClick={() => props.sfn("contact")}>contact me</button>
            <button onClick={() => props.sfn("skills")}>my skills</button>
        </div>
    )
}
