import { useEffect, useState } from 'react';
import './App.css';
import Top from './components/Top';
import TopContent from './components/TopContent';
import Znav from './components/Znav';
import Contact from './components/Contact';
import Skills from './components/Skills'

function App() {
  const [setter, setsetter] = useState("main");
  const [bgval, setbgval] = useState("pinkish");

  const setbggradient = () => {
    const bgcolors = [
      "pinkish",
      "sealight",
      "thelake",
      "moonlit",
      "htmlorange",
      "lush",
      "midnight",
      "minimalred",
      "nelson",
      "kyoto",
      "kashmir"
    ]
    const themod = bgcolors.length;
    const thechoice = (Math.floor(Math.random() * 1000)) % themod;
    setbgval(bgcolors[thechoice])
    console.log(themod, thechoice, bgval)
  }

  useEffect(() => {
    setbggradient()
  }, [])

  return (
    <div className="mainholder" id={bgval}>
      <div className="portfolio-main">
        <div id="topandcontent">
          <Top />
          <div id="switcher">
            {setter === "main" ? <TopContent /> : null}
            {setter === "contact" ? <Contact /> : null}
            {setter === "skills" ? <Skills /> : null}
          </div>
        </div>
          <Znav sfn={setsetter} />
      </div>
    </div>
  );
}

export default App;
