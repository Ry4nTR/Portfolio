// Typing animation for hero section
const typingTexts = [
    "Game Programmer",
    "Unity Developer",
    "Unreal Engine Learner",
    "Problem Solver",
    "Gameplay Specialist",
    "Tech Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');

function typeText() {
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// Start typing animation
setTimeout(typeText, 1000);

// Animated counters for hero stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress-fill');

    skillBars.forEach(bar => {
        const skill = bar.getAttribute('data-skill');
        setTimeout(() => {
            bar.style.width = skill + '%';
        }, 500);
    });
}

// Smooth scrolling for navigation links
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

// Scroll animations with enhanced observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger specific animations based on element
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
            if (entry.target.querySelector('.progress-fill')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Observe hero stats separately
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    observer.observe(heroStats);
}

// Enhanced particle system with different types
const particleTypes = [
    { char: '●', color: '#a855f7', size: '2px' },
    { char: '◆', color: '#c084fc', size: '3px' },
    { char: '▲', color: '#e879f9', size: '2px' },
    { char: '■', color: '#f3e8ff', size: '1px' }
];

function createParticle() {
    const particle = document.createElement('div');
    const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];

    particle.style.position = 'fixed';
    particle.style.width = type.size;
    particle.style.height = type.size;
    particle.style.background = type.color;
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '0.6';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.zIndex = '1';
    particle.style.borderRadius = type.char === '●' ? '50%' : '0';

    document.body.appendChild(particle);

    const animation = particle.animate([
        {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: 0.6
        },
        {
            transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 4000 + 3000,
        easing: 'linear'
    });

    animation.onfinish = () => particle.remove();
}

// Create particles at intervals
setInterval(createParticle, 400);

// Mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        const translateX = (mouseX - 0.5) * 20;
        const translateY = (mouseY - 0.5) * 20;
        heroVisual.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        // Simulate form submission
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#10b981';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// Add floating labels animation
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentNode.classList.add('focused');
    });

    input.addEventListener('blur', function () {
        if (this.value === '') {
            this.parentNode.classList.remove('focused');
        }
    });
});

// Project card hover effects with tilt
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});
