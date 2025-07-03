// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    scrollElements.forEach(el => observer.observe(el));
});

// Parallax and rotation effects for service pages
let ticking = false;

function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax text effects
    const parallaxElements = document.querySelectorAll('.parallax-text');
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${rate}px)`;
    });
    
    // Image rotation on scroll
    const rotateElements = document.querySelectorAll('.rotate-on-scroll');
    rotateElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = elementTop < window.innerHeight && elementTop > -element.offsetHeight;
        
        if (elementVisible) {
            const rotation = (scrolled - element.offsetTop) * 0.02;
            element.style.transform = `rotate(${rotation}deg) scale(1.05)`;
        }
    });
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}

// Only add scroll effects on non-mobile devices
if (window.innerWidth > 768) {
    window.addEventListener('scroll', requestTick);
}

// Smooth scrolling for anchor links
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

// Partners and Clients JavaScript (if on homepage)
if (document.querySelector('.partners-grid') || document.querySelector('.clients-categories')) {
    // Partner logos intersection observer
    const partnerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.partner-logo').forEach(logo => {
        partnerObserver.observe(logo);
    });

    // Client categories functionality
    const categoryBtns = document.querySelectorAll('.category-btn');
    const clientContainers = document.querySelectorAll('.clients-container');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Hide all containers
            clientContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // Show target container
            const targetId = btn.getAttribute('data-category');
            const targetContainer = document.getElementById(targetId);
            if (targetContainer) {
                setTimeout(() => {
                    targetContainer.classList.add('active');
                }, 100);
            }
            
            // Restart marquee animation
            const marqueeTrack = targetContainer?.querySelector('.marquee-track');
            if (marqueeTrack) {
                marqueeTrack.style.animation = 'none';
                marqueeTrack.offsetHeight; // Trigger reflow
                marqueeTrack.style.animation = 'marquee 30s linear infinite';
            }
        });
    });

    // Duplicate marquee content for seamless loop
    document.querySelectorAll('.marquee-track').forEach(track => {
        const logos = track.innerHTML;
        track.innerHTML = logos + logos;
    });
}

// Add loading animation to images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already cached and loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(250, 250, 250, 0.98)';
        if (document.body.classList.contains('services-page') || document.body.classList.contains('clients-page')) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        }
    } else {
        navbar.style.backgroundColor = 'rgba(250, 250, 250, 0.95)';
        if (document.body.classList.contains('services-page') || document.body.classList.contains('clients-page')) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    }
});

// Disable animations for users who prefer reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable all animations
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Navigation Templates
const navTemplates = {
    standard: `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="index.html">SSS</a>
                </div>
                <div class="menu-toggle" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link" data-page="index">home</a>
                    </li>
                    <li class="nav-item">
                        <a href="services.html" class="nav-link" data-page="services">services</a>
                    </li>
                    <li class="nav-item">
                        <a href="projects.html" class="nav-link" data-page="projects">projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="clients.html" class="nav-link" data-page="clients">clients</a>
                    </li>
                    <li class="nav-item">
                        <a href="partners.html" class="nav-link" data-page="partners">partners</a>
                    </li>
                    <li class="nav-item">
                        <a href="about.html" class="nav-link" data-page="about">about</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#contact" class="nav-link">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    
    index: `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="#home">SSS</a>
                </div>
                <div class="menu-toggle" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item">
                        <a href="#home" class="nav-link" data-page="index">home</a>
                    </li>
                    <li class="nav-item">
                        <a href="services.html" class="nav-link" data-page="services">services</a>
                    </li>
                    <li class="nav-item">
                        <a href="projects.html" class="nav-link" data-page="projects">projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="clients.html" class="nav-link" data-page="clients">clients</a>
                    </li>
                    <li class="nav-item">
                        <a href="partners.html" class="nav-link" data-page="partners">partners</a>
                    </li>
                    <li class="nav-item">
                        <a href="about.html" class="nav-link" data-page="about">about</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
};

// Navigation loading and active page highlighting
function loadNavigation() {
    const navContainer = document.getElementById('nav-container');
    
    if (navContainer) {
        // Check if this is the index page
        const currentPage = getCurrentPage();
        let template;
        
        if (currentPage === 'index') {
            template = navTemplates.index;
        } else {
            template = navTemplates.standard;
        }
        
        navContainer.innerHTML = template;
        setActiveNavigation();
        initializeMobileMenu();
    }
}

function setActiveNavigation() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (page === 'index.html' || page === '') {
        return 'index';
    }
    
    // Remove .html extension and return page name
    return page.replace('.html', '');
}

function initializeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', loadNavigation);
