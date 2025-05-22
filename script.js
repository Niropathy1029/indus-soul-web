
// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Loader Animation
    const loader = document.querySelector('.loader');
    gsap.to('.loader-content', {
        opacity: 0,
        duration: 1.5,
        delay: 1.5
    });
    
    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        delay: 2.5,
        onComplete: () => {
            loader.style.display = 'none';
            // Start animations after loader disappears
            startAnimations();
        }
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Form submission
    const form = document.getElementById('spiritual-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name.value.trim()) {
                isValid = false;
                name.style.borderColor = '#ff3333';
            } else {
                name.style.borderColor = '';
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                isValid = false;
                email.style.borderColor = '#ff3333';
            } else {
                email.style.borderColor = '';
            }
            
            if (isValid) {
                // Simulating form submission
                const submitBtn = form.querySelector('.submit-button');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                
                setTimeout(() => {
                    form.reset();
                    submitBtn.textContent = 'Message Sent!';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                    }, 2000);
                }, 1500);
            }
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// Main animations function
function startAnimations() {
    // Hero section animations
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.quote-container', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.cta-button', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.9,
        ease: 'power3.out'
    });
    
    // Rotating mandalas
    gsap.to('.mandala-1', {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'linear'
    });
    
    gsap.to('.mandala-2', {
        rotation: -360,
        duration: 80,
        repeat: -1,
        ease: 'linear'
    });
    
    gsap.to('.mandala-3', {
        rotation: 360,
        duration: 70,
        repeat: -1,
        ease: 'linear'
    });

    // Changing quotes with fade effect
    const quotes = [
        "\"The journey of a thousand miles begins with a single step.\"",
        "\"Peace comes from within. Do not seek it without.\"",
        "\"Yoga is the journey of the self, through the self, to the self.\"",
        "\"The wound is the place where the Light enters you.\"",
        "\"When you own your breath, nobody can steal your peace.\""
    ];
    
    let currentQuote = 0;
    const quoteElement = document.querySelector('.quote');
    
    function changeQuote() {
        gsap.to(quoteElement, {
            opacity: 0,
            y: 20,
            duration: 1,
            onComplete: () => {
                currentQuote = (currentQuote + 1) % quotes.length;
                quoteElement.textContent = quotes[currentQuote];
                
                gsap.to(quoteElement, {
                    opacity: 1,
                    y: 0,
                    duration: 1
                });
            }
        });
    }
    
    // Change quote every 5 seconds
    setInterval(changeQuote, 5000);
    
    // Scroll animations for sections
    
    // About section
    gsap.from('.about-image', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%'
        }
    });
    
    gsap.from('.about-text', {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%'
        }
    });
    
    // Practices section
    gsap.from('.practice-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.practices',
            start: 'top 70%'
        }
    });
    
    // Gallery section
    gsap.from('.gallery-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 70%'
        }
    });
    
    // Contact section
    gsap.from('.contact-info', {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%'
        }
    });
    
    gsap.from('.contact-form', {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%'
        }
    });
    
    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: header,
                start: 'top 80%'
            }
        });
    });
    
    // Om symbol animation
    gsap.utils.toArray('.divider-symbol').forEach(symbol => {
        gsap.from(symbol, {
            rotate: 360,
            duration: 1.5,
            scrollTrigger: {
                trigger: symbol,
                start: 'top 85%'
            }
        });
    });
}
