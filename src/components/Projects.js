import React from 'react';

const Project = ({ title, description, imageUrl, githubLink, deployedLink }) => {
  return (
    <div>
    {/* Personal Projects Section */}
    <div>
    <section id="projects">
    <h1>Personal Projects</h1>
    <div className="project-container">
    <p>
    <a href="https://steveb175.github.io/Brewery-Finder/">
    <span className="project-rectangle-A">Brewery Finder</span>
    </a>
    </p>
    <p>
    <a href="https://omicron-5498.herokuapp.com/">
    <span className="project-square-A">Front End Employee Tracker</span>
    </a>
    </p>
    <p>
    <a href="https://amartinez2075.github.io/Coding-Quiz-3/">
    <span className="project-square-B">Coding Quiz</span>
    </a>
    </p>
    <p>
    <a href="https://amartinez2075.github.io/Work-Day-Scheduler/">
    <span className="project-square-C">Work-Day-Scheduler</span>
    </a>
    </p>
    <p>
    <a href="https://github.com/Amartinez2075/Employee-Tracker">
    <span className="project-square-D">Employee Tracker</span>
    </a>
    </p>
    <p>
    <a href="https://saint-louis-pets-554-d862dc3f7739.herokuapp.com/">
    <span className="project-rectangle-A">Saint Louis Pets</span>
    </a>
    </p>
    </div>
    </section>
    </div>
      {/* Orange Section */}
      <section id="Thick-section">
      {/* Orange Section content here */}
    </section>
    <footer>
    
    </footer>  
    </div>
  );
  }

export default Project;