import React, { useState } from 'react';

function Navigation ({ setPage }) {
  const [activePage, setActivePage] = useState('About Me');

  const handleClick = (page) => {
    setPage(page);
    setActivePage(page);
  };

  return (
    <div className="Navigation">
      <p
        className={activePage === 'About Me' ? 'active' : ''}
        onClick={() => handleClick('About Me')}
      >
        About Me&nbsp;
      </p>
      <p
        className={activePage === 'Projects' ? 'active' : ''}
        onClick={() => handleClick('Projects')}
      >
        Projects&nbsp;
      </p>
        &nbsp;
    </div>
  );
}

export default Navigation;

