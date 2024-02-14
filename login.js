document.addEventListener('DOMContentLoaded', function() {
  // Get the form and attach an event listener for form submission
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the username and password input values
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    // Check if the username and password match the expected values
    if (username === 'tiobesta' && password === 'my1&onlyBestie') {
      // Redirect to the vlt.html page
      window.location.href = 'index.html';
    } else {
      // If the username and password do not match, display an error message
      alert('Invalid username or password. Please try again.');
    }
  });
});