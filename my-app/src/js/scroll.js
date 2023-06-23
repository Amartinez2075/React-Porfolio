// Smooth scroll functionality
document.querySelectorAll('.Menu-Bar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior
  
      // Scroll to the target element with smooth behavior
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });