import React, { useState } from 'react';
import About from './About.js';
import Projects from './Projects.js';
import Navigation from 'Navigation.js';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


   // Method to render the appropriate page component based on the value of currentPage
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    } 
     // Default case: Render the Contact component if none of the above conditions are met
    return <About />;
  };

  // Function to handle the page change when a tab is clicked
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Pass the currentPage and handlePageChange function as props to the NavTabs component */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
       {/* Render the appropriate page component based on the value of currentPage */}
      {renderPage()}
    </div>
  );
}
