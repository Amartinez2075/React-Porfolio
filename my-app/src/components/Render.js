import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
   // Method to render the appropriate page component based on the value of currentPage
  const renderPage = () => {
    if (currentPage === 'About') {
      return <Home />;
    }
    if (currentPage === 'Skills') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Blog />;
    }
    if (currentPage === 'ContactMe') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Contact />;
    }
     // Default case: Render the Contact component if none of the above conditions are met
    return <Contact />;
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
