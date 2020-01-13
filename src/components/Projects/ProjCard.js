import React from "react";

export default function ProjCard(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={props.animin * 400}
      className="projCard"
    >

      <img src={props.project.img} alt={props.project.name} />
      <div id="title">{props.project.name}</div>
      <div id="details">{props.project.desc}</div>
    </div>
  );
}
