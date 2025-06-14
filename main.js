// main.js for The Movement Queen Gym

document.addEventListener('DOMContentLoaded', function() {
    // Find the mobile menu button and the navigation menu
    const menuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('main-nav-menu');

    // Check if both elements exist on the page
    if (menuButton && navMenu) {
        // Add a click event listener to the button
        menuButton.addEventListener('click', function() {
            // Toggle the 'is-open' class on the navigation menu
            navMenu.classList.toggle('is-open');
        });
    }
});
