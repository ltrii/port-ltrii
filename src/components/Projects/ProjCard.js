import React from "react";

export default function ProjCard(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={props.animin * 600}
      className="projCard"
    >
      <img src={props.project.img} alt="project img" />

      <div id="title">{props.project.name}</div>
      <div id="details">{props.project.desc}</div>
      <div id="technologies"></div>
    </div>
  );
}
