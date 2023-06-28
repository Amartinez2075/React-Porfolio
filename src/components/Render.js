import React, { useState } from 'react';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Menubar from './Menubar.js';
import Resume from './Resume.js';
import ContactMe from './ContactMe.js';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
   // Method to render the appropriate page component based on the value of currentPage
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
     // Default case: Render the Contact component if none of the above conditions are met
    return <About />;
  };

  // Function to handle the page change when a tab is clicked
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Pass the currentPage and handlePageChange function as props to the NavTabs component */}
      <Menubar currentPage={currentPage} handlePageChange={handlePageChange} />
       {/* Render the appropriate page component based on the value of currentPage */}
      {renderPage()}
    </div>
  );
}
