// index.js
//[cite: 2]

document.addEventListener('DOMContentLoaded', () => {
    
    // Set dynamic current year in footer[cite: 2]
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle[cite: 2]
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked[cite: 2]
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Navbar scroll effect & Active section detection[cite: 2]
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        // Style navbar on scroll
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            navbar.style.background = 'rgba(10, 15, 24, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(10, 15, 24, 0.85)';
        }

        // Update active navigation link based on scroll position
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust detection offset to account for fixed navbar height
            if (scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});