import React from 'react';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Menubar from './components/Menubar';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Menubar />
      <About />
      <ContactMe />
      <Skills />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;

