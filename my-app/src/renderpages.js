import React, { useState } from 'react';
import NavTabs from './About.js';
import Home from './ContactMe.js';
import About from './Menubar.js';
import Blog from './Project.js';
import Contact from './Skills.js';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
   // Method to render the appropriate page component based on the value of currentPage
  const renderPage = () => {
    if (currentPage === 'About') {
      return <Home />;
    }
    if (currentPage === 'Skills') {
      return <Contact />;
    }
    if (currentPage === 'ContactMe') {
      return <About />;
    }
    if (currentPage === 'Menubar') {
      return <Blog />;
    }
    if (currentPage === 'Project') {
      return <Contact />;
    }
     // Default case: Render the Contact component if none of the above conditions are met
    return <Contact />;
    if (currentPage === 'Resume') {
      return <Home />;
    }
  };

  // Function to handle the page change when a tab is clicked
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* Pass the currentPage and handlePageChange function as props to the NavTabs component */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
       {/* Render the appropriate page component based on the value of currentPage */}
      {renderPage()}
    </div>
  );
}

