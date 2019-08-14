import React from 'react';
import './App.css';

import TopBar from './components/TopBar';
import JumboMain from './components/JumboMain';
import About from './components/About';
import Projects from './components/Projects';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="funcHold" id="contid">
        <TopBar />
        <JumboMain />
        <About />
        <Projects />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
