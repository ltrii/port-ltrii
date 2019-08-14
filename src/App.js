import React from 'react';
import './App.css';

import TopBar from './components/TopBar';
import JumboMain from './components/JumboMain';
import About from './components/About';
import Projects from './components/Projects';
import Content from './components/Content';
import Footer from './components/Footer';

import GlobalState from "./context/global/globalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <div className="funcHold" id="contid">
          <TopBar />
          <JumboMain />
          <div className="lowers">
            <About />
            <Projects />
            <Content />
            <Footer />
          </div>
        </div>
      </GlobalState>
    </div>
  );
}

export default App;
