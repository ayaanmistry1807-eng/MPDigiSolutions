// script.js - Complete and Correct JavaScript Code

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on any link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Service Card Flip (Learn More → Details)
document.querySelectorAll('.learn-more-btn:not(.back-btn)').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.service-card');
        if (card) {
            card.classList.add('flipped');
        }
    });
});

// Back button on card details
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.service-card');
        if (card) {
            card.classList.remove('flipped');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('header').style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        document.querySelector('header').style.background = 'rgba(0, 0, 0, 0.7)';
    }
});
