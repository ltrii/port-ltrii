import React from 'react'

export default function Skills() {
    const skills_arr = [
        "Python", "C", "Ruby", "React", "Express", "MySQL", "Postgres"
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
