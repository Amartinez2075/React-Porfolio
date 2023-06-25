import React from 'react';

function Menubar ({currentPage, handlePageChange}) {
  return (
    <ul className = "nav nav-tabs">
      <li className = "nav-item">
        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About Me
        </a>
      </li>
      <li className = "nav-item">
        <a href="#skills" onClick={() => handlePageChange('Skills')} className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}>
          Skills
        </a>
      </li>
      <li className = "nav-item">
        <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
          Projects
        </a>
      </li>
      <li className = "nav-item">
        <a href="#contact-me" onClick={() => handlePageChange('ContactMe')} className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>
          Contact Me
        </a>
      </li>
      <li className = "nav-item">
        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </a>
      </li>
    </ul>

  );
}


export default  Menubar;


  