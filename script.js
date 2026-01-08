AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Service Card Flip
document.querySelectorAll('.learn-more-btn:not(.back-btn)').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.service-card').classList.add('flipped');
    });
});

document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.service-card').classList.remove('flipped');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header shrink on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('header').style.padding = '15px 60px';
        document.querySelector('header').style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        document.querySelector('header').style.padding = '20px 60px';
        document.querySelector('header').style.background = 'rgba(0, 0, 0, 0.7)';
    }
});
// This part remains the same – it already toggles the 'active' class correctly


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
