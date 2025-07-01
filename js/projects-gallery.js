// Projects Gallery Lightbox Functionality

// Project data with multiple images for each project
const projectData = {
    // Page 1 Projects
    'learning-oasis': {
        title: 'Learning Oasis International School',
        description: 'Comprehensive security system installation including CCTV surveillance, access control, and alarm systems for educational facility.',
        images: [
            'public/projects/learning_oasis_int_schools_cover.jpg',
            'public/projects/learning_oasis_2.jpg',
            'public/projects/learning_oasis_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>150+ IP cameras installation</li>
                <li>Access control for all entry points</li>
                <li>Fire alarm integration</li>
                <li>Central monitoring system</li>
            </ul>
            <h4>Technologies Used:</h4>
            <ul>
                <li>Hikvision IP camera systems</li>
                <li>ZKTeco access control</li>
                <li>Integrated alarm systems</li>
            </ul>
        `
    },
    'najdarah': {
        title: 'Najdarah Residential Complex',
        description: 'Modern residential security solution with perimeter protection and smart access management.',
        images: [
            'public/projects/nadra.png',
            'public/projects/najdarah_2.jpg',
            'public/projects/najdarah_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Perimeter security cameras</li>
                <li>Smart gate access control</li>
                <li>Visitor management system</li>
                <li>Mobile app integration</li>
            </ul>
            <h4>Features:</h4>
            <ul>
                <li>24/7 monitoring</li>
                <li>Smart notifications</li>
                <li>Remote access control</li>
            </ul>
        `
    },
    'moj': {
        title: 'Ministry of Justice',
        description: 'High-security government facility installation with advanced surveillance and access control systems.',
        images: [
            'public/projects/moj.png',
            'public/projects/moj_2.jpg',
            'public/projects/moj_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Government-grade security systems</li>
                <li>Biometric access control</li>
                <li>High-resolution surveillance</li>
                <li>Redundant backup systems</li>
            </ul>
            <h4>Security Features:</h4>
            <ul>
                <li>Multi-layer authentication</li>
                <li>Encrypted data transmission</li>
                <li>24/7 monitoring center</li>
            </ul>
        `
    },
    'marble': {
        title: 'Marble Restaurant',
        description: 'Hospitality security solution focusing on customer safety and operational monitoring.',
        images: [
            'public/projects/marble.webp',
            'public/projects/marble_2.jpg',
            'public/projects/marble_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Dining area surveillance</li>
                <li>Kitchen monitoring</li>
                <li>Entrance access control</li>
                <li>POS integration</li>
            </ul>
            <h4>Benefits:</h4>
            <ul>
                <li>Enhanced customer safety</li>
                <li>Operational oversight</li>
                <li>Loss prevention</li>
            </ul>
        `
    },
    'alon': {
        title: 'Alon Coffee Shop',
        description: 'Retail security system with customer flow monitoring and theft prevention capabilities.',
        images: [
            'public/projects/falla.png',
            'public/projects/alon_2.jpg',
            'public/projects/alon_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Customer area monitoring</li>
                <li>Cash register surveillance</li>
                <li>Storage area security</li>
                <li>Mobile monitoring app</li>
            </ul>
            <h4>Features:</h4>
            <ul>
                <li>Real-time alerts</li>
                <li>Cloud storage</li>
                <li>Remote viewing</li>
            </ul>
        `
    },
    'corporate': {
        title: 'Corporate Headquarters',
        description: 'Enterprise-level security infrastructure for large corporate facility with multiple access zones.',
        images: [
            'public/projects/corporate-office.jpg',
            'public/projects/corporate_2.jpg',
            'public/projects/corporate_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Multi-zone access control</li>
                <li>Executive floor security</li>
                <li>Parking surveillance</li>
                <li>Visitor management</li>
            </ul>
            <h4>Technologies:</h4>
            <ul>
                <li>Enterprise IP cameras</li>
                <li>Card-based access control</li>
                <li>Central management system</li>
            </ul>
        `
    },
    
    // Page 2 Projects
    'citadines': {
        title: 'Citadines Hotel',
        description: 'Comprehensive hospitality security solution with guest safety and operational monitoring.',
        images: [
            'public/projects/citadines-hotel.jpg',
            'public/projects/citadines_2.jpg',
            'public/projects/citadines_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Hotel lobby and corridor surveillance</li>
                <li>Guest room access control</li>
                <li>Parking area monitoring</li>
                <li>Staff area security</li>
            </ul>
            <h4>Features:</h4>
            <ul>
                <li>24/7 monitoring</li>
                <li>Guest privacy protection</li>
                <li>Emergency response system</li>
            </ul>
        `
    },
    'dalla': {
        title: 'Dalla Hospital',
        description: 'Healthcare facility security with patient safety and medical equipment protection.',
        images: [
            'public/projects/dalla-hospital.jpg',
            'public/projects/dalla_2.jpg',
            'public/projects/dalla_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Patient area surveillance</li>
                <li>Medical equipment security</li>
                <li>Staff access control</li>
                <li>Emergency department monitoring</li>
            </ul>
            <h4>Compliance:</h4>
            <ul>
                <li>Healthcare privacy standards</li>
                <li>Medical facility regulations</li>
                <li>Emergency response protocols</li>
            </ul>
        `
    },
    'signature1': {
        title: 'Signature 1 Commercial Complex',
        description: 'Modern commercial facility with integrated security and access management systems.',
        images: [
            'public/projects/signature1.jpg',
            'public/projects/signature1_2.jpg',
            'public/projects/signature1_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Office building surveillance</li>
                <li>Tenant access control</li>
                <li>Parking security</li>
                <li>Common area monitoring</li>
            </ul>
            <h4>Technologies:</h4>
            <ul>
                <li>High-definition IP cameras</li>
                <li>Smart card access system</li>
                <li>Integrated alarm system</li>
            </ul>
        `
    },
    'signature2': {
        title: 'Signature 2 Business Center',
        description: 'Professional business center security with multi-tenant access control and monitoring.',
        images: [
            'public/projects/signature2.jpg',
            'public/projects/signature2_2.jpg',
            'public/projects/signature2_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Multi-tenant access control</li>
                <li>Conference room security</li>
                <li>Reception area monitoring</li>
                <li>Elevator access control</li>
            </ul>
            <h4>Features:</h4>
            <ul>
                <li>Visitor management system</li>
                <li>Time-based access control</li>
                <li>Mobile app integration</li>
            </ul>
        `
    },
    'signature3': {
        title: 'Signature 3 Retail Complex',
        description: 'Retail complex security with customer flow monitoring and loss prevention systems.',
        images: [
            'public/projects/signature3.jpg',
            'public/projects/signature3_2.jpg',
            'public/projects/signature3_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Retail store surveillance</li>
                <li>Customer flow monitoring</li>
                <li>Inventory security</li>
                <li>Cash handling monitoring</li>
            </ul>
            <h4>Benefits:</h4>
            <ul>
                <li>Loss prevention</li>
                <li>Customer behavior analytics</li>
                <li>Staff performance monitoring</li>
            </ul>
        `
    },
    'salam-mall': {
        title: 'Salam Mall - Jeddah',
        description: 'Large shopping mall security with comprehensive surveillance and crowd management.',
        images: [
            'public/projects/salam-mall.jpg',
            'public/projects/salam-mall_2.jpg',
            'public/projects/salam-mall_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Mall-wide CCTV coverage</li>
                <li>Food court monitoring</li>
                <li>Parking surveillance</li>
                <li>Emergency evacuation systems</li>
            </ul>
            <h4>Scale:</h4>
            <ul>
                <li>500+ cameras installation</li>
                <li>Multiple control centers</li>
                <li>Redundant backup systems</li>
            </ul>
        `
    },
    
    // Page 3 Projects
    'arab-mall': {
        title: 'Arab Mall - Jeddah',
        description: 'Premium shopping destination with advanced security and customer experience enhancement.',
        images: [
            'public/projects/arab-mall.jpg',
            'public/projects/arab-mall_2.jpg',
            'public/projects/arab-mall_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Premium retail surveillance</li>
                <li>VIP area security</li>
                <li>Luxury brand protection</li>
                <li>Customer experience monitoring</li>
            </ul>
            <h4>Features:</h4>
            <ul>
                <li>AI-powered analytics</li>
                <li>Facial recognition system</li>
                <li>Real-time crowd monitoring</li>
            </ul>
        `
    },
    'hayat-mall': {
        title: 'Hayat Mall - Riyadh',
        description: 'Modern retail center with integrated security and smart building management.',
        images: [
            'public/projects/hayat-mall.jpg',
            'public/projects/hayat-mall_2.jpg',
            'public/projects/hayat-mall_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Smart building integration</li>
                <li>Energy-efficient security</li>
                <li>Mobile app connectivity</li>
                <li>Tenant security portals</li>
            </ul>
            <h4>Innovation:</h4>
            <ul>
                <li>IoT sensor integration</li>
                <li>Cloud-based management</li>
                <li>Predictive maintenance</li>
            </ul>
        `
    },
    'aziz-mall': {
        title: 'Aziz Mall - Jeddah',
        description: 'Entertainment complex security with family-friendly monitoring and safety systems.',
        images: [
            'public/projects/aziz-mall.jpg',
            'public/projects/aziz-mall_2.jpg',
            'public/projects/aziz-mall_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Entertainment area monitoring</li>
                <li>Children's zone security</li>
                <li>Event space surveillance</li>
                <li>Emergency response system</li>
            </ul>
            <h4>Safety Features:</h4>
            <ul>
                <li>Child safety monitoring</li>
                <li>Crowd control systems</li>
                <li>Emergency alert network</li>
            </ul>
        `
    },
    'tech-park': {
        title: 'Technology Park',
        description: 'Innovation hub security with high-tech surveillance and intellectual property protection.',
        images: [
            'public/projects/tech-park.jpg',
            'public/projects/tech-park_2.jpg',
            'public/projects/tech-park_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>R&D facility security</li>
                <li>Intellectual property protection</li>
                <li>High-security access control</li>
                <li>Data center monitoring</li>
            </ul>
            <h4>Advanced Features:</h4>
            <ul>
                <li>Biometric authentication</li>
                <li>Anti-tailgating systems</li>
                <li>Secure document tracking</li>
            </ul>
        `
    },
    'medical-center': {
        title: 'Medical Center',
        description: 'Specialized medical facility security with patient privacy and equipment protection.',
        images: [
            'public/projects/medical-center.jpg',
            'public/projects/medical-center_2.jpg',
            'public/projects/medical-center_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Patient care area monitoring</li>
                <li>Medical equipment security</li>
                <li>Pharmacy surveillance</li>
                <li>Staff access management</li>
            </ul>
            <h4>Compliance:</h4>
            <ul>
                <li>HIPAA compliance</li>
                <li>Medical privacy protection</li>
                <li>Audit trail systems</li>
            </ul>
        `
    },
    'banking-center': {
        title: 'Banking Center',
        description: 'Financial institution security with vault protection and transaction monitoring.',
        images: [
            'public/projects/banking-center.jpg',
            'public/projects/banking-center_2.jpg',
            'public/projects/banking-center_3.jpg'
        ],
        details: `
            <h4>Project Scope:</h4>
            <ul>
                <li>Vault security systems</li>
                <li>ATM monitoring</li>
                <li>Teller area surveillance</li>
                <li>Customer safety systems</li>
            </ul>
            <h4>Security Standards:</h4>
            <ul>
                <li>Banking security compliance</li>
                <li>Multi-layer authentication</li>
                <li>Real-time threat detection</li>
            </ul>
        `
    }
};

class ProjectsGallery {
    constructor() {
        this.lightbox = document.getElementById('gallery-lightbox');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.lightboxTitle = document.getElementById('lightbox-title');
        this.lightboxDescription = document.getElementById('lightbox-description');
        this.lightboxDetails = document.getElementById('lightbox-details');
        this.lightboxThumbnails = document.getElementById('lightbox-thumbnails');
        this.lightboxClose = document.getElementById('lightbox-close');
        this.lightboxOverlay = document.getElementById('lightbox-overlay');
        this.lightboxPrev = document.getElementById('lightbox-prev');
        this.lightboxNext = document.getElementById('lightbox-next');
        
        this.currentProject = null;
        this.currentImageIndex = 0;
        
        this.init();
    }
    
    init() {
        // Add click handlers to project items
        document.querySelectorAll('.project-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = item.getAttribute('data-project');
                if (projectData[projectId]) {
                    this.openGallery(projectId);
                }
            });
        });
        
        // Close handlers
        this.lightboxClose.addEventListener('click', () => this.closeGallery());
        this.lightboxOverlay.addEventListener('click', () => this.closeGallery());
        
        // Navigation handlers
        this.lightboxPrev.addEventListener('click', () => this.prevImage());
        this.lightboxNext.addEventListener('click', () => this.nextImage());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    this.closeGallery();
                    break;
                case 'ArrowLeft':
                    this.prevImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        });
    }
    
    openGallery(projectId) {
        this.currentProject = projectData[projectId];
        this.currentImageIndex = 0;
        
        if (!this.currentProject) return;
        
        // Populate lightbox content
        this.lightboxTitle.textContent = this.currentProject.title;
        this.lightboxDescription.textContent = this.currentProject.description;
        this.lightboxDetails.innerHTML = this.currentProject.details;
        
        // Create thumbnails
        this.createThumbnails();
        
        // Show first image
        this.showImage(0);
        
        // Show lightbox
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeGallery() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
        this.currentProject = null;
        this.currentImageIndex = 0;
    }
    
    createThumbnails() {
        this.lightboxThumbnails.innerHTML = '';
        
        this.currentProject.images.forEach((imageSrc, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'lightbox-thumbnail';
            if (index === 0) thumbnail.classList.add('active');
            
            thumbnail.innerHTML = `<img src="${imageSrc}" alt="Thumbnail ${index + 1}">`;
            
            thumbnail.addEventListener('click', () => {
                this.showImage(index);
            });
            
            this.lightboxThumbnails.appendChild(thumbnail);
        });
    }
    
    showImage(index) {
        if (!this.currentProject || index < 0 || index >= this.currentProject.images.length) return;
        
        this.currentImageIndex = index;
        this.lightboxImage.src = this.currentProject.images[index];
        this.lightboxImage.alt = `${this.currentProject.title} - Image ${index + 1}`;
        
        // Update active thumbnail
        document.querySelectorAll('.lightbox-thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
        
        // Update navigation buttons
        this.lightboxPrev.style.display = index === 0 ? 'none' : 'block';
        this.lightboxNext.style.display = index === this.currentProject.images.length - 1 ? 'none' : 'block';
    }
    
    prevImage() {
        if (this.currentImageIndex > 0) {
            this.showImage(this.currentImageIndex - 1);
        }
    }
    
    nextImage() {
        if (this.currentImageIndex < this.currentProject.images.length - 1) {
            this.showImage(this.currentImageIndex + 1);
        }
    }
}

// Initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsGallery();
});

// Smooth pagination transitions
document.addEventListener('DOMContentLoaded', () => {
    const paginationLinks = document.querySelectorAll('.pagination-link:not(.disabled)');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add loading state for smooth transitions
            if (!link.classList.contains('active')) {
                document.querySelector('.projects-masonry-grid').style.opacity = '0.7';
                
                setTimeout(() => {
                    document.querySelector('.projects-masonry-grid').style.opacity = '1';
                }, 300);
            }
        });
    });
});
