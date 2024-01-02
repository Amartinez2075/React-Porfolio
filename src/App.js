import React, { useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [page, setPage] = useState('About Me');

  const renderPage = () => {
    if (page === 'About Me') {
      return (
        <>
          < About />
        </>
      );
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
      <Navigation setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
