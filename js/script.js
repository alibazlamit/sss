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
    
    // Image zoom on scroll (slowly)
    const zoomElements = document.querySelectorAll('.zoom-on-scroll');
    zoomElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = elementTop < window.innerHeight && elementTop > -element.offsetHeight;
        if (elementVisible) {
            // Calculate zoom based on scroll position, but keep it subtle and slow
            const zoom = 1 + Math.min(Math.max((scrolled - element.offsetTop) * 0.0005, 0), 0.08); // max 8% zoom
            element.style.transform = `scale(${zoom})`;
            element.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
        } else {
            element.style.transform = 'scale(1)';
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

// Navbar background and text color change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navLogo = document.querySelector('.nav-logo a');
    
    if (!navbar) return;
    
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        // When scrolled down - white background, dark text
        navbar.style.backgroundColor = 'rgba(250, 250, 250, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
        navLinks.forEach(link => {
            link.style.color = '#2c2c2c';
        });
        if (navLogo) {
            navLogo.style.color = '#2c2c2c';
        }
    } else {
        // At top of page - transparent/semi-transparent background
        const isServicePage = document.body.classList.contains('service-detail-page');
        
        if (isServicePage) {
            // Service pages start with dark navbar
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            navbar.style.backdropFilter = 'blur(10px)';
            navLinks.forEach(link => {
                link.style.color = '#ffffff';
            });
            if (navLogo) {
                navLogo.style.color = '#ffffff';
            }
        } else {
            // Other pages start with light navbar
            navbar.style.backgroundColor = 'rgba(250, 250, 250, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navLinks.forEach(link => {
                link.style.color = '#2c2c2c';
            });
            if (navLogo) {
                navLogo.style.color = '#2c2c2c';
            }
        }
    }
});

// Navbar adaptive color/text logic - REMOVED (using main scroll listener instead)

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
    root: `
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
                        <a href="services/services.html" class="nav-link" data-page="services">services</a>
                    </li>
                    <li class="nav-item">
                        <a href="projects/projects.html" class="nav-link" data-page="projects">projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="clients/clients.html" class="nav-link" data-page="clients">clients</a>
                    </li>
                    <li class="nav-item">
                        <a href="partners/partners.html" class="nav-link" data-page="partners">partners</a>
                    </li>
                    <li class="nav-item">
                        <a href="about/about.html" class="nav-link" data-page="about">about</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#contact" class="nav-link">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    
    subdirectory: `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="../index.html">SSS</a>
                </div>
                <div class="menu-toggle" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item">
                        <a href="../index.html" class="nav-link" data-page="index">home</a>
                    </li>
                    <li class="nav-item">
                        <a href="../services/services.html" class="nav-link" data-page="services">services</a>
                    </li>
                    <li class="nav-item">
                        <a href="../projects/projects.html" class="nav-link" data-page="projects">projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="../clients/clients.html" class="nav-link" data-page="clients">clients</a>
                    </li>
                    <li class="nav-item">
                        <a href="../partners/partners.html" class="nav-link" data-page="partners">partners</a>
                    </li>
                    <li class="nav-item">
                        <a href="../about/about.html" class="nav-link" data-page="about">about</a>
                    </li>
                    <li class="nav-item">
                        <a href="../index.html#contact" class="nav-link">contact</a>
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
        // Detect directory level based on current path
        const path = window.location.pathname;
        console.log('Current path:', path); // Debug log
        
        // More robust subdirectory detection
        const isInSubdirectory = path.includes('/services/') || 
                                path.includes('/projects/') || 
                                path.includes('/clients/') || 
                                path.includes('/partners/') || 
                                path.includes('/about/') || 
                                path.includes('/contact/') ||
                                (path.split('/').length > 2 && !path.endsWith('/'));
        
        let template;
        if (isInSubdirectory) {
            template = navTemplates.subdirectory;
            console.log('Using subdirectory template'); // Debug log
        } else {
            template = navTemplates.root;
            console.log('Using root template'); // Debug log
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
    const segments = path.split('/');
    const page = segments[segments.length - 1] || 'index.html';
    
    // Handle service detail pages
    if (page.startsWith('service-')) {
        return 'services';
    }
    
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
document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    
    // Set initial navbar state
    setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        const navLogo = document.querySelector('.nav-logo a');
        
        if (navbar) {
            const isServicePage = document.body.classList.contains('service-detail-page');
            
            if (isServicePage) {
                // Service pages start with dark navbar
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                navbar.style.backdropFilter = 'blur(10px)';
                navLinks.forEach(link => {
                    link.style.color = '#ffffff';
                });
                if (navLogo) {
                    navLogo.style.color = '#ffffff';
                }
            } else {
                // Other pages start with light navbar
                navbar.style.backgroundColor = 'rgba(250, 250, 250, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navLinks.forEach(link => {
                    link.style.color = '#2c2c2c';
                });
                if (navLogo) {
                    navLogo.style.color = '#2c2c2c';
                }
            }
        }
    }, 100);
});

// Add zoom-on-scroll effect (ensure this runs after DOM is loaded)
document.addEventListener('DOMContentLoaded', function() {
    const zoomElements = document.querySelectorAll('.zoom-on-scroll');
    if (zoomElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.1 });
        zoomElements.forEach(el => observer.observe(el));
    }
});

// Why Choose SSS Slideshow Animation
(function() {
    const slides = document.querySelectorAll('.why-choose-slide');
    let current = 0;
    const interval = 3500; // ms

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    if (slides.length > 1) {
        setInterval(nextSlide, interval);
    }

    // Show the first slide initially
    showSlide(current);
})();

// Client Logo Carousel Animation
(function() {
    document.querySelectorAll('.client-logo-carousel').forEach(function(carousel) {
        const imgs = carousel.querySelectorAll('img');
        let idx = 0;
        if (imgs.length < 2) {
            if (imgs[0]) imgs[0].classList.add('active');
            return;
        }
        function show(i) {
            imgs.forEach((img, j) => img.classList.toggle('active', j === i));
        }
        show(idx);
        setInterval(function() {
            idx = (idx + 1) % imgs.length;
            show(idx);
        }, 2200);
    });
})();
