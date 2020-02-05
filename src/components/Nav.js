import React, { useContext } from "react";
import globalContext from "../context/global/globalContext";
import * as Scroll from "react-scroll";
import "../assets/css/nav.css";

export default function Nav() {
  const globState = useContext(globalContext);

  const setOpen = () => {
    globState.openContact(!globState.state.open);
  };

  return (
    <nav className="navlinks">
      <Scroll.Link
        activeClass="active"
        to="projects"
        smooth={true}
        duration={500}
      >
        Projects
      </Scroll.Link>
      <Scroll.Link
        activeClass="active"
        to="skills"
        smooth={true}
        duration={500}
      >
        Skills
      </Scroll.Link>
      <Scroll.Link activeClass="active" to="about" smooth={true} duration={500}>
        About
      </Scroll.Link>
      <button onClick={() => setOpen()}>Contact</button>
    </nav>
  );
}
