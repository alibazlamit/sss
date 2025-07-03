# SSS Website Navigation System

## Overview

The SSS website now uses a shared navigation system that eliminates code duplication and makes site maintenance much easier.

## How It Works

- Navigation HTML is stored in shared files in the `includes/` folder
- JavaScript automatically loads the appropriate navigation for each page
- Active page highlighting is handled automatically
- All navigation changes are made in one place

## Navigation Files

- `includes/nav.html` - Standard navigation for most pages
- `includes/nav-index.html` - Special navigation for homepage (uses anchor links)
- `includes/nav-alt.html` - Alternative navigation for project pages

## Implementation

Each page now has a simple div where navigation loads:

```html
<div id="nav-container"></div>
<!-- For standard pages -->
<div id="nav-alt-container"></div>
<!-- For project pages -->
```

## Benefits

✅ **Single Source of Truth** - Update navigation in one place
✅ **Automatic Active States** - Current page is highlighted automatically
✅ **Consistent Structure** - All pages use the same navigation
✅ **Easy Maintenance** - Add new pages by updating only the include files
✅ **Better Performance** - Navigation can be cached by the browser

## Adding New Pages

1. Add the new page link to the appropriate navigation file in `includes/`
2. Create your new page with `<div id="nav-container"></div>`
3. The navigation will automatically work!

## Page Types

- **Standard Pages** (services, clients, partners, about): Use `nav-container`
- **Project Pages** (projects, projects-2, projects-3): Use `nav-alt-container`
- **Homepage**: Uses special nav-index.html with anchor links

## Testing

Open `test-nav.html` to test the navigation system.
