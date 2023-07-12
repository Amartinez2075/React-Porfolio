import React from 'react';
import Project from './Project';
import "../index.css";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: 'No-React Website Portfolio',
      description: 'Basic Website Portfolio with CSS and HTML.',
      imageUrl: 'project1.jpg',
      githubLink: 'https://github.com/Amartinez2075/Website-Porfolio',
      deployedLink: 'https://amartinez2075.github.io/Website-Porfolio/',
    },
    {
      id: 2,
      title: 'Coding Quiz',
      description: 'This is a quiz about coding, with 5 questions total.',
      imageUrl: 'project2.jpg',
      githubLink: 'https://github.com/Amartinez2075?tab=repositories',
      deployedLink: 'https://amartinez2075.github.io/Coding-Quiz-3/',
    },
    // Add more project objects as needed
    {
      id: 3,
      title: 'Work Day Scheduler',
      description: 'Simple Work day Schedule and saves the user data.',
      imageUrl: 'project3.jpg',
      githubLink: 'https://github.com/Amartinez2075/Work-Day-Scheduler',
      deployedLink: 'https://amartinez2075.github.io/Work-Day-Scheduler/',
    },
    {
      id: 4,
      title: 'Brewery Finder',
      description: 'A Brewery Finder Application that tells the weather, location of a place, and other info.',
      imageUrl: 'project4.jpg',
      githubLink: 'https://github.com/Amartinez2075/Brewery-Finder',
      deployedLink: 'https://amartinez2075.github.io/Brewery-Finder/',
    },
    {
      id: 5,
      title: 'Employee Tracker',
      description: 'A backend MySQL database, allows user to make, delete, and update employees, and more.',
      imageUrl: 'project5.jpg',
      githubLink: 'https://github.com/Amartinez2075/Employee-Tracker',
    },
    {
      id: 6,
      title: 'Ecommerce Backend',
      description: 'MySQL database that allows user to make, delete, and update products, tags, and categories.',
      imageUrl: 'project6.jpg',
      githubLink: 'https://github.com/Amartinez2075/E-Commerce-Back-End'
    },
    {
      id: 7,
      title: 'Model View Controller Tech Blog',
      description: 'A blog that allows users to make, delete, and update posts, and comments',
      imageUrl: 'project7.jpg',
      githubLink: 'https://github.com/Amartinez2075/Model-View-Controller-Tech-Blog',
      deployedLink: 'https://model-view.herokuapp.com/',
    },
    {
      id: 8,
      title: 'Front and Back End Employee Tracker',
      description: 'A front and back end employee tracker that allows users to make, delete, and update employees, and more',
      imageUrl: 'project8.jpg',
      githubLink: 'https://github.com/Amartinez2075/Website-Porfolio',
      deployedLink: 'https://omicron-5498.herokuapp.com/',
    },
    {
      id: 9,
      title: 'Progressive Web Application Text Editor',
      description: 'This is a text editor that allows users to make, delete, and update text, and saves it to the cache for offline use.',
      imageUrl: 'project9.jpg',
      githubLink: 'https://github.com/Amartinez2075/Progressive-Web-Applications--PWA--Challenge-Text-Editor#table-of-contents',
      deployedLink: 'https://text-editor-pls-c273a9bf7b03.herokuapp.com/',
    },
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;