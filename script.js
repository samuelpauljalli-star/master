// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple animation for the icon could be added here
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll for Anchor Links (polyfill for older browsers/control)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('section, .timeline-item, .skill-category, .contact-card').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});

// Typing Text Effect for Intro
const introText = "Diploma Holder & CSE Student";
const introElement = document.querySelector('.hero .subtitle');

if (introElement) {
    let i = 0;
    introElement.textContent = ''; // Clear initial
    
    function typeWriter() {
        if (i < introText.length) {
            introElement.textContent += introText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start after a small delay
    setTimeout(typeWriter, 1000);
}
