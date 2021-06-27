import React from 'react'

export default function Skills() {
    const skills_arr = [
        "AWS", "HTML/CSS","JavaScript", "Python", "C", "Ruby", "React.JS", "Redux", "Express", "MySQL", "Postgres"
    ]
    return (
        <div id="skills">
            <ul>
                {skills_arr.map((ok) => {
                    return (
                        <li>{ok}</li>
                    )
                })}
            </ul>
            ...and more.
        </div>
    )
}
