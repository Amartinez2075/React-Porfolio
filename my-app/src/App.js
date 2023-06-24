import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/About.js';
import ContactMe from './components/ContactMe.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Menubar from './components/Menubar';

function App() {
  return (
    <div>
      <Menubar />
      <About />
      <ContactMe />
      <Skills />
      <Projects />

    </div>
  );
}

export default App;
