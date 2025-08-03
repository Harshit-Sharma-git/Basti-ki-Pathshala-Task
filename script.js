
        // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
        });

    // Form submission
    const volunteerForm = document.getElementById('volunteer-form');
    const successMessage = document.getElementById('success-message');

    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();

    // Here you would typically send the form data to a server
    // For this example, we'll just show a success message

    // Hide the form
    volunteerForm.style.display = 'none';

    // Show success message
    successMessage.style.display = 'block';

            // Reset form after 5 seconds (for demo purposes)
            setTimeout(() => {
        volunteerForm.reset();
    volunteerForm.style.display = 'block';
    successMessage.style.display = 'none';
            }, 5000);
        });

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
