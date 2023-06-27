import React from 'react';

function Menubar({ setPage }) {
  return (
    <div className="Menu-Bar">
      {/* <a href="#about">About Me</a> */}
      <p onClick={() => setPage('About Me')}>About Me&nbsp;</p>
      {/* <a href="#contact-me">Contact Me</a> */}
      <p onClick={() => setPage('Contact Me')}>Contact Me&nbsp;</p>
      {/* <a href="#skills">Skills</a> */}
      <p onClick={() => setPage('Skills')}>Skills&nbsp;</p>
      {/* <a href="#projects">Projects</a> */}
      <p onClick={() => setPage('Projects')}>Projects&nbsp;</p>
      {/* <a href="#resume">Resume</a> */}
      <p onClick={() => setPage('Resume')}>Resume&nbsp;</p>
    </div>
  );
}

export default Menubar;
