# Modern Minimal Website

A clean, modern static website inspired by the Basalte design principles. Features a minimal aesthetic with elegant typography and smooth animations.

## Features

- **Clean Design**: White background with black text, minimal aesthetic
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Grid Layout**: Full-width grid system for showcasing services and projects
- **Modern Typography**: Uses Poppins font for a clean, professional look
- **Smooth Animations**: Subtle hover effects and transitions
- **Contact Form**: HTML-only contact form (ready for backend integration)
- **Modular Structure**: Easy to customize and extend

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
└── README.md          # This file
```

## Getting Started

1. Simply open `index.html` in your web browser
2. Or serve it using a local server for development

### Using Live Server (recommended for development)

If you have VS Code with Live Server extension:

1. Right-click on `index.html`
2. Select "Open with Live Server"

### Using Python's built-in server

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Using Node.js serve

```bash
# Install serve globally
npm install -g serve

# Serve the directory
serve .
```

## Customization Guide

### Adding New Services/Projects

To add more service or project cards, simply copy the existing card structure:

```html
<div class="service-card">
  <div class="service-image">
    <img src="your-image-url" alt="Service Name" />
  </div>
  <div class="service-content">
    <h3 class="service-title">your service name</h3>
    <p class="service-description">brief description of your service</p>
  </div>
</div>
```

### Changing Images

The website uses high-quality images from Unsplash. You can:

1. Replace the Unsplash URLs with your own images
2. Use local images by placing them in an `images/` folder
3. Adjust image sizes in the URL parameters (e.g., `?w=600&h=400`)

### Customizing Colors

Main color variables can be changed in `styles.css`:

- Background: `#fff` (white)
- Text: `#000` (black)
- Secondary text: `#666` (gray)
- Accent background: `#f8f8f8` (light gray)

### Typography

The website uses Poppins font. To change:

1. Update the Google Fonts link in `index.html`
2. Change the `font-family` in the CSS body selector

### Layout Modifications

- **Grid columns**: Adjust `grid-template-columns` in `.services-grid` and `.projects-grid`
- **Spacing**: Modify padding and margin values
- **Breakpoints**: Update media queries for different responsive behavior

## Content Sections

### Navigation

- Home, About, Services, Projects, Contact
- Fixed navigation with smooth scrolling

### Hero Section

- Large centered title
- Subtitle with company description
- Easily customizable content

### Services Grid

- 6 default service cards (expandable to 20+)
- High-resolution images
- Hover effects and animations

### About Section

- Company description
- Centered layout on alternate background

### Projects Grid

- 4 default project showcases
- Portfolio-style presentation
- Expandable grid system

### Contact Section

- Contact information
- HTML contact form
- Two-column layout

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- IE11+ (with minor limitations)

## Performance

- Lightweight CSS (no frameworks)
- Optimized images from Unsplash CDN
- Minimal JavaScript (none required)
- Fast loading times

## Future Enhancements

### Optional JavaScript Features

- Smooth scroll animations
- Form validation
- Mobile menu toggle
- Image lazy loading
- Intersection Observer animations

### Backend Integration

- Contact form processing
- Content management
- Dynamic image loading
- Analytics integration

## License

Free to use and modify for personal and commercial projects.

## Credits

- Design inspiration: Basalte.be
- Images: Unsplash.com
- Fonts: Google Fonts (Poppins)
