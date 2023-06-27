import React, { useState } from 'react';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Menubar from './components/Menubar';
import Resume from './components/Resume';

function App() {

  const [page, setPage] = useState('About Me');

  const renderPage = () => {
    if (page === 'About Me') {
      return (
        <>
          < About />
        </>
      );
    } else if (page === 'Contact Me') {
      return <ContactMe />;
    } else if (page === 'Skills') {
      return <Skills />;
    } else if (page === 'Projects') {
      return <Projects />;
    } else if (page === 'Resume') {
      return <Resume />;
    } else {
      // Default page or handle other cases
      return null;
    }
  };

  return (
    <div>
      <Menubar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
