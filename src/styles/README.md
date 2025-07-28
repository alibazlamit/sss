# Original CSS Integration

## Instructions to match exact original design:

### Step 1: Copy Original CSS

1. Copy all CSS files from `f:\sss\` to this directory
2. Main files to copy:
   - `style.css` (main styles)
   - `responsive.css` (if exists)
   - Any service-specific CSS files

### Step 2: Import in Layout

Add to `src/layouts/Layout.astro`:

```astro
---
// Add this import
import '../styles/style.css';
---
```

### Step 3: Class Name Mapping

Original classes → Astro component classes:

- Ensure class names match exactly
- Update any JavaScript selectors
- Preserve all animations and transitions

### Step 4: Image Paths

- Copy all images from original `images/` folder to `public/images/`
- Update any hardcoded image paths

### Step 5: Typography & Fonts

- Ensure same font imports (Google Fonts)
- Match font weights and sizes exactly
- Preserve line-heights and spacing

This approach guarantees 100% design accuracy.
