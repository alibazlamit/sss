// Professional Navigation System - Vanilla JS
class NavigationManager {
    constructor() {
        this.navItems = [
            { label: 'home', page: 'index', path: 'index.html' },
            { label: 'services', page: 'services', path: 'services/services.html' },
            { label: 'projects', page: 'projects', path: 'projects/projects.html' },
            { label: 'clients', page: 'clients', path: 'clients/clients.html' },
            { label: 'partners', page: 'partners', path: 'partners/partners.html' },
            { label: 'about', page: 'about', path: 'about/about.html' },
            { label: 'contact', page: 'contact', path: 'index.html#contact', isAnchor: true }
        ];
        
        this.isSubdirectory = this.detectSubdirectory();
        this.currentPage = this.getCurrentPage();
        
        this.init();
    }
    
    init() {
        this.loadNavigation();
        this.initializeMobileMenu();
        this.initializeScrollBehavior();
    }
    
    detectSubdirectory() {
        const path = window.location.pathname;
        return path.includes('/services/') || 
               path.includes('/projects/') || 
               path.includes('/clients/') || 
               path.includes('/partners/') || 
               path.includes('/about/') || 
               path.includes('/contact/');
    }
    
    getCurrentPage() {
        const path = window.location.pathname;
        const segments = path.split('/');
        const page = segments[segments.length - 1] || 'index.html';
        
        // Handle service detail pages
        if (page.startsWith('service-')) {
            return 'services';
        }
        
        return page.replace('.html', '');
    }
    
    getNavPath(originalPath) {
        if (this.isSubdirectory) {
            return originalPath.startsWith('#') ? `../${originalPath}` : `../${originalPath}`;
        }
        return originalPath;
    }
    
    createNavigation() {
        const logoPath = this.isSubdirectory ? '../index.html' : 'index.html';
        
        const navItems = this.navItems.map(item => {
            const isActive = this.currentPage === item.page;
            const href = this.getNavPath(item.path);
            
            return `
                <li class="nav-item">
                    <a href="${href}" 
                       class="nav-link ${isActive ? 'active' : ''}" 
                       data-page="${item.page}">
                        ${item.label}
                    </a>
                </li>
            `;
        }).join('');
        
        return `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-logo">
                        <a href="${logoPath}">SSS</a>
                    </div>
                    <div class="menu-toggle" id="mobile-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul class="nav-menu" id="nav-menu">
                        ${navItems}
                    </ul>
                </div>
            </nav>
        `;
    }
    
    loadNavigation() {
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
            navContainer.innerHTML = this.createNavigation();
        }
    }
    
    initializeMobileMenu() {
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
    
    initializeScrollBehavior() {
        let isInitialized = false;
        
        const updateNavbar = () => {
            const navbar = document.querySelector('.navbar');
            const navLinks = document.querySelectorAll('.nav-link');
            const navLogo = document.querySelector('.nav-logo a');
            
            if (!navbar) return;
            
            const scrolled = window.scrollY > 50;
            const isServicePage = document.body.classList.contains('service-detail-page');
            
            if (scrolled) {
                // Scrolled state - always light navbar with dark text
                navbar.style.backgroundColor = 'rgba(250, 250, 250, 0.98)';
                navbar.style.backdropFilter = 'blur(10px)';
                navLinks.forEach(link => link.style.color = '#2c2c2c');
                if (navLogo) navLogo.style.color = '#2c2c2c';
            } else {
                // Top state - depends on page type
                if (isServicePage) {
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                    navbar.style.backdropFilter = 'blur(10px)';
                    navLinks.forEach(link => link.style.color = '#ffffff');
                    if (navLogo) navLogo.style.color = '#ffffff';
                } else {
                    navbar.style.backgroundColor = 'rgba(250, 250, 250, 0.95)';
                    navbar.style.backdropFilter = 'blur(10px)';
                    navLinks.forEach(link => link.style.color = '#2c2c2c');
                    if (navLogo) navLogo.style.color = '#2c2c2c';
                }
            }
        };
        
        // Set initial state
        setTimeout(() => {
            updateNavbar();
            isInitialized = true;
        }, 100);
        
        // Add scroll listener
        window.addEventListener('scroll', updateNavbar);
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationManager;
}
