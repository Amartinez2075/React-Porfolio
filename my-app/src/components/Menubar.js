import React from 'react';

function Menubar ({currentPage, handlePageChange}) {
  return (
<div class="Menu-Bar">
  <a href="#about">About Me</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contactme">Contact Me</a>
  <a href="#resume">Resume</a>
</div>
  );
}


export default  Menubar;


  