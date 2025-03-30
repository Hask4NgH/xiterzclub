// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Custom Cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    const trail = document.querySelector('.cursor-trail');
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
    }, 50);
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2000);
});

// Floating Elements Animation
const createFloatingElements = () => {
    const container = document.querySelector('.floating-elements');
    const elements = ['<>', '//', '[]', '{}', '01', '10'];
    
    elements.forEach((el, index) => {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.textContent = el;
        element.style.setProperty('--delay', `${index * 0.5}s`);
        container.appendChild(element);
    });
};

createFloatingElements();

// Cyber Grid Animation
const createCyberGrid = () => {
    const grid = document.querySelector('.cyber-grid');
    const size = 20;
    
    for(let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        grid.appendChild(cell);
    }
};

createCyberGrid();

// GSAP Animations
gsap.from('.hero-content h1', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

gsap.from('.stats-container .stat', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 1
});

// Tool Cards Hover Effect
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Navigation Indicator
const navLinks = document.querySelectorAll('.nav-links a');
const indicator = document.querySelector('.nav-indicator');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const rect = link.getBoundingClientRect();
        indicator.style.width = `${rect.width}px`;
        indicator.style.left = `${rect.left}px`;
        indicator.style.opacity = '1';
    });
});

document.querySelector('.nav-links').addEventListener('mouseleave', () => {
    indicator.style.opacity = '0';
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.tool-card, .feature-card').forEach(el => {
    observer.observe(el);
});