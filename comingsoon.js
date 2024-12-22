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

