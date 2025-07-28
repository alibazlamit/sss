// GitHub Pages Path Fix
// This script helps resolve navigation issues on GitHub Pages
// by providing environment-aware path generation

class GitHubPagesPathFixer {
    constructor() {
        this.isGitHubPages = window.location.hostname.includes('github.io');
        this.baseUrl = this.detectBaseUrl();
    }

    detectBaseUrl() {
        if (this.isGitHubPages) {
            // For GitHub Pages, the base URL might be /repository-name/
            const pathParts = window.location.pathname.split('/').filter(part => part);
            if (pathParts.length > 0 && !pathParts[0].includes('.html')) {
                return `/${pathParts[0]}/`;
            }
        }
        return '/';
    }

    getPath(relativePath) {
        if (this.isGitHubPages) {
            // For GitHub Pages, ensure proper path resolution
            return this.baseUrl + relativePath.replace(/^\//, '');
        }
        return relativePath;
    }

    fixNavigationLinks() {
        // Fix all navigation links for GitHub Pages
        const navLinks = document.querySelectorAll('nav a[href]');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                const fixedPath = this.getPath(href);
                link.setAttribute('href', fixedPath);
                console.log(`Fixed link: ${href} → ${fixedPath}`);
            }
        });
    }
}

// Initialize path fixer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const pathFixer = new GitHubPagesPathFixer();
    
    // Wait a bit for navigation to load, then fix paths
    setTimeout(() => {
        pathFixer.fixNavigationLinks();
    }, 100);
});
