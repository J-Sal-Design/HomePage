// Example of interactive feature: When the "Learn More" button is clicked, scroll to the interactive section
document.getElementById("learnMoreBtn").addEventListener("click", function() {
  // Scroll smoothly to the next section
  document.querySelector(".interactive").scrollIntoView({
    behavior: "smooth"
  });
});

// JavaScript for dynamic loading progress and text update

window.onload = function() {
  let loadingBar = document.getElementById('loading-bar');
  let loadingText = document.getElementById('loading-text');
  let progress = 0;
  
  // Function to simulate the loading process
  let loadInterval = setInterval(function() {
    if (progress < 100) {
      progress += 2; // Increase progress (this can be adjusted)
      loadingBar.style.width = progress + '%'; // Update loading bar width
      loadingText.textContent = progress + '%'; // Update loading text
    } else {
      clearInterval(loadInterval); // Stop the interval once 100% is reached
      loadingText.textContent = 'Ready!'; // Final text when loading is complete
    }
  }, 100); // Update every 100ms (adjust speed as needed)
};


// script.js

// Navbar Hide/Show on Scroll
// JavaScript to hide and show the navbar when scrolling
let lastScrollTop = 0; // Variable to track the last scroll position

const navbar = document.querySelector('.navbar'); // The navbar element

// Event listener for scroll
window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Current scroll position
  
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hidden'); // Add class to hide navbar
  } else {
    // Scrolling up
    navbar.classList.remove('hidden'); // Remove class to show navbar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll position
});

// Mobile Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Intersection Observer for Animations (Fade In on Scroll)
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, { threshold: 0.3 });

elementsToAnimate.forEach((element) => {
    observer.observe(element);
});

// Set the current year in the footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();


