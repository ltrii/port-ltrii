import { useState } from 'react';
import './App.css';
import Top from './components/Top';
import TopContent from './components/TopContent';
import Znav from './components/Znav';
import Contact from './components/Contact';
import Skills from './components/Skills'

function App() {
  const [setter, setsetter] = useState("main");

  return (
    <div className="portfolio-main">
      <div>
        <Top />
        <div id="switcher">
          {setter === "main" ? <TopContent /> : null}
          {setter === "contact" ? <Contact /> : null}
          {setter === "skills" ? <Skills /> : null}
        </div>
      </div>
      <div>
        <Znav sfn={setsetter} />
      </div>
    </div>
  );
}

export default App;
