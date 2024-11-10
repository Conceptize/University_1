// Toggle mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');  // Toggle dropdown visibility
    menuToggle.classList.toggle('active'); // Toggle active state for button
});

