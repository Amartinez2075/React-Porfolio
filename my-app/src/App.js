import React from 'react';
import About from 'my-app\src\components\About.js';
import ContactMe from 'my-app\src\components\ContactMe.js';
import Skills from 'my-app\src\components\Skills.js';
import Projects from 'my-app\src\components\Projects.js';
import Menubar from 'my-app\src\components\Menubar.js';

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

