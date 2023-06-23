// JavaScript code to pin the menu bar to the top of the page
window.addEventListener("scroll", function() {
    var menuBar = document.querySelector(".Menu-Bar"); // Get the menu bar element
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the scroll position
    var scrollThreshold = 200; // Adjust this value as needed (defines when to change position)
    
    if (scrollTop > scrollThreshold) {
      // If scroll position is greater than the threshold, fix the menu bar to the top
      menuBar.style.position = "fixed";
      menuBar.style.top = "0";
    } else {
      // If scroll position is less than or equal to the threshold, revert the menu bar to its normal position
      menuBar.style.position = "static";
    }
  });