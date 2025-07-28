// Main Application Script - Professional Organization
class SSS_App {
    constructor() {
        this.isDesktop = window.innerWidth > 768;
        this.init();
    }
    
    init() {
        this.initializeScrollAnimations();
        this.initializeImageEffects();
        this.initializePageSpecificFeatures();
    }
    
    initializeScrollAnimations() {
        // Intersection Observer for scroll animations
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

        // Observe scroll-animate elements
        const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
        scrollElements.forEach(el => observer.observe(el));
    }
    
    initializeImageEffects() {
        // Image loading animation
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
            
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            if (img.complete) {
                img.style.opacity = '1';
            }
        });
        
        // Zoom on scroll effect
        this.initializeZoomOnScroll();
    }
    
    initializeZoomOnScroll() {
        if (!this.isDesktop) return;
        
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            
            // Parallax text effects
            const parallaxElements = document.querySelectorAll('.parallax-text');
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
            
            // Image zoom on scroll (subtle and slow)
            const zoomElements = document.querySelectorAll('.zoom-on-scroll');
            zoomElements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = elementTop < window.innerHeight && elementTop > -element.offsetHeight;
                
                if (elementVisible) {
                    const zoom = 1 + Math.min(Math.max((scrolled - element.offsetTop) * 0.0005, 0), 0.08);
                    element.style.transform = `scale(${zoom})`;
                    element.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
                } else {
                    element.style.transform = 'scale(1)';
                }
            });
            
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick);
    }
    
    initializePageSpecificFeatures() {
        // Homepage features
        if (document.querySelector('.partners-grid') || document.querySelector('.clients-categories')) {
            this.initializeHomepageFeatures();
        }
        
        // Smooth scrolling for anchor links
        this.initializeSmoothScrolling();
        
        // Slideshow animations
        this.initializeSlideshows();
    }
    
    initializeHomepageFeatures() {
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
                
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                clientContainers.forEach(container => {
                    container.classList.remove('active');
                });
                
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
    
    initializeSmoothScrolling() {
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
    }
    
    initializeSlideshows() {
        // Why Choose SSS Slideshow
        const slides = document.querySelectorAll('.why-choose-slide');
        if (slides.length > 1) {
            let current = 0;
            const interval = 3500;

            const showSlide = (idx) => {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === idx);
                });
            };

            const nextSlide = () => {
                current = (current + 1) % slides.length;
                showSlide(current);
            };

            showSlide(current);
            setInterval(nextSlide, interval);
        }

        // Client Logo Carousel
        document.querySelectorAll('.client-logo-carousel').forEach(function(carousel) {
            const imgs = carousel.querySelectorAll('img');
            let idx = 0;
            
            if (imgs.length < 2) {
                if (imgs[0]) imgs[0].classList.add('active');
                return;
            }
            
            const show = (i) => {
                imgs.forEach((img, j) => img.classList.toggle('active', j === i));
            };
            
            show(idx);
            setInterval(() => {
                idx = (idx + 1) % imgs.length;
                show(idx);
            }, 2200);
        });
    }
}

// Accessibility: Disable animations for users who prefer reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SSS_App();
});

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SSS_App;
}
