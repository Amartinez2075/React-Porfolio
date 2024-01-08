import React, { useState } from 'react';
import './CSS/Project.css';

const ProjectItem = ({ title, description, githubLink, deployedLink, tools }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`project-item ${expanded ? 'expanded' : ''}`}>
      <p onClick={handleToggleExpand}>
        <span className="project-title">{title}</span>
      </p>
      {expanded && (
        <div className="project-details">
          {tools && (
            <p>
              <strong>Tools: </strong> {tools}
            </p>
          )}
          <p>{description}</p>
          <p>
            <strong>GitHub Repository:</strong>{' '}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              {githubLink}
            </a>
          </p>
          {deployedLink && (
            <p>
              <strong>Deployed Link:</strong>{' '}
              <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                {deployedLink}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'No-React Website Portfolio',
      description: 'Basic Website Portfolio with CSS and HTML.',
      githubLink: 'https://github.com/Amartinez2075/Website-Porfolio',
      deployedLink: 'https://amartinez2075.github.io/Website-Porfolio/',
    },
    {
      id: 2,
      title: 'Coding Quiz',
      description: 'This is a quiz about coding, with 5 questions total.',
      githubLink: 'https://github.com/Amartinez2075?tab=repositories',
      deployedLink: 'https://amartinez2075.github.io/Coding-Quiz-3/',
    },
    // Add more project objects as needed
    {
      id: 3,
      title: 'Work Day Scheduler',
      description: 'Simple Work day Schedule and saves the user data.',
      githubLink: 'https://github.com/Amartinez2075/Work-Day-Scheduler',
      deployedLink: 'https://amartinez2075.github.io/Work-Day-Scheduler/',
    },
    {
      id: 4,
      title: 'Brewery Finder',
      description:
        'A Brewery Finder Application that tells the weather, location of a place, and other info.',
      githubLink: 'https://github.com/Amartinez2075/Brewery-Finder',
      deployedLink: 'https://amartinez2075.github.io/Brewery-Finder/',
      tools: 'React, CSS, API',
    },
    {
      id: 5,
      title: 'Employee Tracker',
      description: 'A backend MySQL database, allows user to make, delete, and update employees, and more.',
      githubLink: 'https://github.com/Amartinez2075/Employee-Tracker',
      tools: 'Node.js, MySQL, Inquirer',
    },
    {
      id: 6,
      title: 'Ecommerce Backend',
      description: 'MySQL database that allows user to make, delete, and update products, tags, and categories.',
      githubLink: 'https://github.com/Amartinez2075/E-Commerce-Back-End',
      tools: 'Node.js, Express.js, Sequelize, MySQL',
    },
    {
      id: 7,
      title: 'Model View Controller Tech Blog',
      description: 'A blog that allows users to make, delete, and update posts, and comments',
      githubLink: 'https://github.com/Amartinez2075/Model-View-Controller-Tech-Blog',
      deployedLink: 'https://model-view.herokuapp.com/',
      tools: 'Node.js, Express.js, MySQL, Sequelize, Handlebars',
    },
    {
      id: 8,
      title: 'Front and Back End Employee Tracker',
      description:
        'A front and back end employee tracker that allows users to make, delete, and update employees, and more',
      githubLink: 'https://github.com/Amartinez2075/Website-Porfolio',
      deployedLink: 'https://omicron-5498.herokuapp.com/',
      tools: 'Node.js, Express.js, MySQL, Sequelize, Handlebars, JavaScript, HTML, CSS',
    },
    {
      id: 9,
      title: 'Progressive Web Application Text Editor',
      description:
        'This is a text editor that allows users to make, delete, and update text, and saves it to the cache for offline use.',
      githubLink: 'https://github.com/Amartinez2075/Progressive-Web-Applications--PWA--Challenge-Text-Editor#table-of-contents',
      deployedLink: 'https://text-editor-pls-c273a9bf7b03.herokuapp.com/',
      tools: 'Node.js, Express.js, IndexedDB, Service Worker',
    },
  ];

  return (
    <div>
      <section id="projects">
        <header>Personal Projects</header>
        <div className="Github-container">
          <h2>Repository</h2>
          <section id="contact-me">
            <p>
              <a href="https://github.com/Amartinez2075">
                <span className="GitHub">Visit My GitHub Repository</span>
              </a>
            </p>
          </section>
          <div className="project-container">
            {projects.map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};

export default Project;
