import React, { useState } from 'react';

function Menubar({ setPage }) {
  const [activePage, setActivePage] = useState('About Me');

  const handleClick = (page) => {
    setPage(page);
    setActivePage(page);
  };

  return (
    <div className="Menu-Bar">
      <p
        className={activePage === 'About Me' ? 'active' : ''}
        onClick={() => handleClick('About Me')}
      >
        About Me&nbsp;
      </p>
      <p
        className={activePage === 'Contact Me' ? 'active' : ''}
        onClick={() => handleClick('Contact Me')}
      >
        Contact Me&nbsp;
      </p>
      <p
        className={activePage === 'Skills' ? 'active' : ''}
        onClick={() => handleClick('Skills')}
      >
        Skills&nbsp;
      </p>
      <p
        className={activePage === 'Projects' ? 'active' : ''}
        onClick={() => handleClick('Projects')}
      >
        Projects&nbsp;
      </p>
      <p
        className={activePage === 'Resume' ? 'active' : ''}
        onClick={() => handleClick('Resume')}
      >
        Resume&nbsp;
      </p>
    </div>
  );
}

export default Menubar;