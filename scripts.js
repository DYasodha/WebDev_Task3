document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('form-message');

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'All fields are required.';
        } else if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
        } else {
            formMessage.textContent = 'Form submitted successfully!';
            formMessage.style.color = 'green';
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Load dynamic content
    const loadContentButton = document.getElementById('load-content');
    const dynamicContentDiv = document.getElementById('dynamic-content');
    loadContentButton.addEventListener('click', () => {
        dynamicContentDiv.innerHTML = '<p>This is dynamically loaded content!</p>';
    });
});
