import React from 'react';
import "./css/projects.css";
import ProjCard from './Projects/ProjCard';

export default function Projects() {

    const projArray = [{name: 'Neighborhood Library', desc: 'Share books'},
                       {name: 'Bountiful Development', desc: 'User stories'},
                       {name: 'Bountiful Development', desc: 'User stories'},
                       {name: 'Bountiful Development', desc: 'User stories'}];

    return (
        <div className="projects" name="projects">
            <div className="innerProj">
                <h3>
                    Projects
                </h3>
                <div className="mapHolder">
                    {projArray.map(function(item){
                    return <ProjCard project={item} key={Math.random()}/>
                })}
                </div>
            </div>
        </div>
    )
}
