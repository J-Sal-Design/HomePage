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

