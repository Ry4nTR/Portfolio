/* =========================================
   1. LOCALIZATION (LANGUAGE SWITCHER)
   ========================================= */
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_desc: "Game programmer with experience in Unity and Unreal Engine. I enjoy solving technical challenges, optimizing performance, and collaborating with teams to build engaging games. Always learning and adapting to new technologies.",
        btn_view_work: "View My Work",
        btn_resume: "Download Resume",
        stat_projects: "Projects Completed",
        stat_exp: "Years Experience",
        stat_tech: "Technologies Mastered",
        about_title: "About Me",
        about_p1: "I am a dedicated Game Programmer with a profound passion for crafting immersive and innovative digital experiences. My journey in game development has fortified my expertise across various programming languages and leading game engines, enabling me to translate complex creative visions into tangible, interactive realities.",
        about_p2: "I thrive on tackling intricate technical challenges, constantly pushing the boundaries of what's possible in game performance optimization and the implementation of sophisticated gameplay mechanics. My approach is characterized by a blend of technical acumen, strategic thinking, and a natural inclination towards leadership in collaborative team environments.",
        projects_title: "Featured Projects",
        contact_title: "Get In Touch",
        contact_desc: "I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow game developers. Feel free to reach out!",

        // --- Project Common ---
        link_view: "View Project",
        link_source: "Source Code",
        time_months: "Months",
        time_weeks: "Weeks",
        time_days: "Days",
        team_solo: "Solo Project",
        team_members: "Members",

        // --- Alpha Exilemet ---
        proj1_preview: "Simulator-Survivor",
        proj1_status: "In-progress",
        proj1_desc: "A sci-fi survival exploration game where a crashed astronaut gathers resources, manages oxygen, and repairs their spaceship to escape an alien planet.",
        proj1_type: "C++ Project",

        // --- Synced Rush ---
        proj2_preview: "Multiplayer - FPS",
        proj2_status: "MVP Completed",
        proj2_desc: "A fast-paced multiplayer FPS where players compete in 1v1 and 2v2 matches using dynamic movement abilities and responsive shooting mechanics.",

        // --- Stay Room ---
        proj3_preview: "Game Jam Project",
        proj3_status: "Complete",
        proj3_desc: "A chaotic management game built in a 2-day Game Jam where players modify houserooms in real time to satisfy the needs of visiting NPC tenants.",
        proj3_type: "AI programming",

        // --- Project ARK ---
        proj4_preview: "First Group Project",
        proj4_status: "Complete",
        proj4_desc: "A sci-fi narrative adventure with psychological elements set on a spaceship in distress. The player is a volunteer in a human-machine experiment who must solve puzzles, interact with a mysterious AI, and make crucial choices as they uncover the truth about the accident on board.",
        proj4_type: "HDRP Project",

        // --- La scatola del nonno ---
        proj5_preview: "First Project",
        proj5_status: "Completed",
        proj5_desc: "A narrative adventure about childhood and memory, set in post-war Italy. Through the grandfather’s objects, the player gradually discovers the weight of war behind the stories of an old veteran.",
        proj5_type: "First Project"
    },
    it: {
        nav_home: "Home",
        nav_about: "Chi Sono",
        nav_projects: "Progetti",
        nav_contact: "Contatti",
        hero_desc: "Programmatore di videogiochi con esperienza in Unity e Unreal Engine. Mi piace risolvere sfide tecniche, ottimizzare le prestazioni e collaborare con i team per creare giochi coinvolgenti. Sempre in continuo apprendimento e adattamento alle nuove tecnologie.",
        btn_view_work: "Guarda i miei progetti",
        btn_resume: "Scarica CV",
        stat_projects: "Progetti Completati",
        stat_exp: "Anni di Esperienza",
        stat_tech: "Tecnologie Padroneggiate",
        about_title: "Chi Sono",
        about_p1: "Sono un Game Programmer dedicato con una profonda passione per la creazione di esperienze digitali immersive e innovative. Il mio percorso nello sviluppo di videogiochi ha rafforzato la mia esperienza in vari linguaggi di programmazione e nei principali motori di gioco, permettendomi di tradurre visioni creative complesse in realtà tangibili e interattive.",
        about_p2: "Mi appassiona affrontare sfide tecniche intricate, spingendo costantemente i limiti del possibile nell'ottimizzazione delle prestazioni di gioco e nell'implementazione di meccaniche di gameplay sofisticate. Il mio approccio è caratterizzato da una miscela di acume tecnico, pensiero strategico e una naturale inclinazione alla leadership in ambienti di lavoro collaborativi.",
        projects_title: "Progetti in Evidenza",
        contact_title: "Contattami",
        contact_desc: "Sono sempre aperto a discutere nuove opportunità, collaborazioni o semplicemente a fare rete con altri sviluppatori di giochi. Non esitare a contattarmi!",

        // --- Project Common ---
        link_view: "Guarda Progetto",
        link_source: "Codice Sorgente",
        time_months: "Mesi",
        time_weeks: "Settimane",
        time_days: "Giorni",
        team_solo: "Progetto Singolo",
        team_members: "Membri",

        // --- Alpha Exilemet ---
        proj1_preview: "Simulatore-Sopravvivenza",
        proj1_status: "In Sviluppo",
        proj1_desc: "Un gioco di esplorazione e sopravvivenza fantascientifico in cui un astronauta precipitato raccoglie risorse, gestisce l'ossigeno e ripara la sua astronave per fuggire da un pianeta alieno.",
        proj1_type: "Progetto C++",

        // --- Synced Rush ---
        proj2_preview: "Multigiocatore - FPS",
        proj2_status: "MVP Completato",
        proj2_desc: "Un frenetico FPS multigiocatore in cui i giocatori competono in partite 1v1 e 2v2 utilizzando abilità di movimento dinamiche e meccaniche di tiro reattive.",

        // --- Stay Room ---
        proj3_preview: "Progetto Game Jam",
        proj3_status: "Completato",
        proj3_desc: "Un caotico gioco gestionale sviluppato in una Game Jam di 2 giorni in cui i giocatori modificano le stanze di una casa in tempo reale per soddisfare i bisogni dei coinquilini NPC.",
        proj3_type: "Programmazione IA",

        // --- Project ARK ---
        proj4_preview: "Primo Progetto di Gruppo",
        proj4_status: "Completato",
        proj4_desc: "Un'avventura narrativa fantascientifica con elementi psicologici ambientata su un'astronave in avaria. Il giocatore è un volontario in un esperimento uomo-macchina che deve risolvere enigmi, interagire con una misteriosa IA e fare scelte cruciali mentre scopre la verità sull'incidente a bordo.",
        proj4_type: "Progetto HDRP",

        // --- La scatola del nonno ---
        proj5_preview: "Primo Progetto",
        proj5_status: "Completato",
        proj5_desc: "Un'avventura narrativa sull'infanzia e la memoria, ambientata nell'Italia del dopoguerra. Attraverso gli oggetti del nonno, il giocatore scopre gradualmente il peso della guerra dietro i racconti di un vecchio veterano.",
        proj5_type: "Primo Progetto"
    }
};

let currentLang = 'en';

// Listen for clicks on the dropdown items
document.querySelectorAll('.lang-dropdown-content a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page jump

        // Get the chosen language from data-lang (en or it)
        const chosenLang = e.target.getAttribute('data-lang');
        currentLang = chosenLang;

        // Update the text on the main dropdown button
        const btnText = document.getElementById('current-lang-text');
        btnText.textContent = chosenLang === 'en' ? 'EN' : 'IT';

        // Scan the page and translate elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
    });
});


/* =========================================
   2. NAVIGATION & UI COMPONENTS
   ========================================= */

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

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Mobile Support for Resume Dropdown
const resumeDropdown = document.querySelector('.resume-dropdown');
const heroButtons = document.querySelector('.hero-buttons');

if (resumeDropdown) {
    resumeDropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const content = this.querySelector('.dropdown-content');
            const isVisible = content.style.visibility === 'visible';

            if (isVisible) {
                // Close dropdown
                content.style.visibility = 'hidden';
                content.style.opacity = '0';
                content.style.transform = 'translateX(-50%) translateY(-15px)';
                if(heroButtons) heroButtons.style.marginBottom = '15px'; // Reset mobile margin
            } else {
                // Open dropdown
                content.style.visibility = 'visible';
                content.style.opacity = '1';
                content.style.transform = 'translateX(-50%) translateY(0)';
                if(heroButtons) heroButtons.style.marginBottom = '120px'; // Push stats down
            }
        }
    });
}


/* =========================================
   3. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================= */
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


/* =========================================
   4. HERO SECTION ANIMATIONS
   ========================================= */

// --- Typing Animation ---
const typingTexts = [
    "Game Programmer",
    "Unity Developer",
    "Unreal Engine Developer",
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
    if(!typingElement) return;

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

// --- Background Particle System ---
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
        { transform: 'translateY(0px) rotate(0deg)', opacity: 0.6 },
        { transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 4000 + 3000,
        easing: 'linear'
    });

    animation.onfinish = () => particle.remove();
}
setInterval(createParticle, 400);

// --- Mouse Movement Parallax Effect ---
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

// --- Video Reel Logic ---
function initVideoReel() {
    const videos = document.querySelectorAll('.reel-video');
    if (videos.length === 0) return;

    let currentIndex = 0;
    const displayDuration = 6000;

    videos[currentIndex].play().catch(err => console.log("Autoplay prevented:", err));

    setInterval(() => {
        const currentVideo = videos[currentIndex];
        currentIndex = (currentIndex + 1) % videos.length;
        const nextVideo = videos[currentIndex];

        currentVideo.classList.remove('active');
        setTimeout(() => { currentVideo.pause(); }, 800);

        nextVideo.classList.add('active');
        nextVideo.play().catch(err => console.log("Autoplay prevented:", err));
    }, displayDuration);
}
document.addEventListener('DOMContentLoaded', initVideoReel);


/* =========================================
   5. ABOUT & STATS SECTION
   ========================================= */

// --- Animated Counters ---
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

// --- Animate Skill Bars ---
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress-fill');

    skillBars.forEach(bar => {
        const skill = bar.getAttribute('data-skill');
        setTimeout(() => {
            bar.style.width = skill + '%';
        }, 500);
    });
}


/* =========================================
   6. PROJECTS SECTION
   ========================================= */

// --- Project Card Hover Tilt ---
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

// --- Project Video Modal Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModalBtn = document.querySelector('.close-modal');
    const projectImages = document.querySelectorAll('.project-image');

    // Open modal
    projectImages.forEach(container => {
        container.addEventListener('click', () => {
            const bgVideoSource = container.querySelector('.project-bg-video source');

            if (bgVideoSource) {
                modalVideo.src = bgVideoSource.src;
                videoModal.classList.add('active');
                modalVideo.play().catch(err => console.log("Autoplay prevented:", err));
            }
        });
    });

    // Close modal
    function closeVideoModal() {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.src = '';
    }

    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', closeVideoModal);
    }

    if(videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }
});


/* =========================================
   7. CONTACT SECTION
   ========================================= */

// --- Contact Form Handling ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        // Simulate form submission visually 
        // (Note: Your email.js logic in the HTML file handles the real sending!)
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

// --- Floating Labels Animation ---
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