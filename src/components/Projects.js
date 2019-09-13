import React from 'react';
import "./css/projects.css";
import ProjCard from './Projects/ProjCard';

import projArray from './Projects/project';

export default function Projects() {

    return (
        <div className="projects" name="projects">
            <div className="innerProj">
                <h3>
                    Projects
                </h3>
                <div className="mapHolder">
                    {projArray.map(function(item, i){
                    return <ProjCard animin={i} project={item} key={Math.random()}/>
                })}
                </div>
            </div>
        </div>
    )
}
