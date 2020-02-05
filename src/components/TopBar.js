import React, { useContext } from "react";
import "../assets/css/topbar.css";
import Nav from "./Nav";
import Contact from "./Contact";
import top from "../assets/img/top.png";

import globalContext from "../context/global/globalContext";

var Scroll = require("react-scroll");
var scroll = Scroll.animateScroll;

export default function TopBar() {
  const globState = useContext(globalContext);

  const setOpen = () => {
    globState.openContact(!globState.state.open);
  };

  function toTop() {
    if (window.scrollY > 25) {
      return (
        <div className="upArrow" onClick={() => scroll.scrollToTop()}>
          <img src={top} alt="return to top" />
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="topBarHold">
      <div className="topBar">
        <div className="leftBar">
          <h1 onClick={() => setOpen()} id="nameplate">
            ltrii
          </h1>
        </div>
        <div className="rightBar">
          <Nav />
        </div>
      </div>
      {toTop()}
      <Contact />
    </div>
  );
}
