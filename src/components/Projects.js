import React, { useState } from 'react';
import './CSS/Project.css';
import profile from './Screenshots/profile.png';

const ProjectItem = ({ title, tools, description, githubLink, deployedLink }) => {
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
          <p>
            <strong>Tools:</strong> {tools}
          </p>
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
      tools: 'CSS, HTML',
    },
    {
      id: 2,
      title: 'Coding Quiz',
      tools: 'JavaScript, CSS, HTML',
      description: 'This is a quiz about coding, with 5 questions total.',
      githubLink: 'https://github.com/Amartinez2075?tab=repositories',
      deployedLink: 'https://amartinez2075.github.io/Coding-Quiz-3/',
    },
    // Add more project objects as needed
    {
      id: 3,
      title: 'Work Day Scheduler',
      tools: 'JavaScript, CSS, HTML',
      description: 'Simple Work day Schedule and saves the user data.',
      githubLink: 'https://github.com/Amartinez2075/Work-Day-Scheduler',
      deployedLink: 'https://amartinez2075.github.io/Work-Day-Scheduler/',
    },
    {
      id: 4,
      title: 'Brewery Finder',
      tools: 'React, CSS, API',
      description:'A Brewery Finder Application that tells the weather, location of a place, and other info.',
      githubLink: 'https://github.com/Amartinez2075/Brewery-Finder',
      deployedLink: 'https://amartinez2075.github.io/Brewery-Finder/',
    },
    {
      id: 5,
      title: 'Employee Tracker',
      tools: 'Node.js, MySQL, Inquirer',
      description: 'A backend MySQL database, allows user to make, delete, and update employees, and more.',
      githubLink: 'https://github.com/Amartinez2075/Employee-Tracker',
    },
    {
      id: 6,
      title: 'Ecommerce Backend',
      tools: 'Node.js, Express.js, Sequelize, MySQL',
      description: 'MySQL database that allows user to make, delete, and update products, tags, and categories.',
      githubLink: 'https://github.com/Amartinez2075/E-Commerce-Back-End',
    },
    {
      id: 7,
      title: 'Model View Controller Tech Blog',
      tools: 'Node.js, Express.js, MySQL, Sequelize, Handlebars',
      description: 'A blog that allows users to make, delete, and update posts, and comments',
      githubLink: 'https://github.com/Amartinez2075/Model-View-Controller-Tech-Blog',
      deployedLink: 'https://model-view.herokuapp.com/',
    },
    {
      id: 8,
      title: 'Front and Back End Employee Tracker',
      tools: 'Node.js, Express.js, MySQL, Sequelize, Handlebars, JavaScript, HTML, CSS',
      description:'A front and back end employee tracker that allows users to make, delete, and update employees, and more',
      githubLink: 'https://github.com/Amartinez2075/Website-Porfolio',
      deployedLink: 'https://omicron-5498.herokuapp.com/',
    },
    {
      id: 9,
      title: 'Progressive Web Application Text Editor',
      tools: 'Node.js, Express.js, IndexedDB, Service Worker',
      description:'This is a text editor that allows users to make, delete, and update text, and saves it to the cache for offline use.',
      githubLink: 'https://github.com/Amartinez2075/Progressive-Web-Applications--PWA--Challenge-Text-Editor#table-of-contents',
      deployedLink: 'https://text-editor-pls-c273a9bf7b03.herokuapp.com/',
    },
  ];

  return (
    <div>
      <section id="projects">
        <header>Personal Projects</header>
        <div className="Github-container">
          <h1>Repository</h1>
          <section id="contact-me">
            <p>
              If you wish to see more of my projects, please visit my GitHub repository. You'll be taken there if you click the pixel art.
            </p>
            <p>
              <a href="https://github.com/Amartinez2075">
                <img src={profile} alt="Ashara-PF" />
              </a>
            </p>
          </section>
          <div className="project-container">
            {projects.map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </div>
        </div>
        <p>You can also download my resume below!</p>

        {/* Resume Section */}
        <section id="resume">
          <h1>Resume</h1>
          <p>
            <a href={process.env.PUBLIC_URL + "/Ashara Martinez Tech Resume.pdf"} download>
              <button>Download Resume</button>
            </a>
          </p>
        </section>
      </section>
      <footer></footer>
    </div>
  );
};

export default Project;