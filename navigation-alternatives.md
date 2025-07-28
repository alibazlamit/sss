# Navigation Alternatives for Cross-Environment Compatibility

## Option 1: Manual Relative Paths (Simple)

### For Root Pages (index.html, etc.):

```html
<nav>
  <a href="index.html">Home</a>
  <a href="services/services.html">Services</a>
  <a href="projects/projects.html">Projects</a>
  <a href="clients/clients.html">Clients</a>
</nav>
```

### For Subdirectory Pages (services/service-cctv.html, etc.):

```html
<nav>
  <a href="../index.html">Home</a>
  <a href="../services/services.html">Services</a>
  <a href="../projects/projects.html">Projects</a>
  <a href="../clients/clients.html">Clients</a>
</nav>
```

## Option 2: Base Tag Approach

### For Root Pages:

```html
<head>
  <base href="./" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="services/services.html">Services</a>
  </nav>
</body>
```

### For Subdirectory Pages:

```html
<head>
  <base href="../" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="services/services.html">Services</a>
  </nav>
</body>
```

## Option 3: JavaScript Dynamic Navigation (Current Implementation)

- Automatically detects directory level
- Uses appropriate navigation template
- Single source of truth for navigation
- Works across all environments

## Recommendation

The JavaScript approach (current implementation) is best because:

- ✅ Single navigation template to maintain
- ✅ Automatically adapts to directory structure
- ✅ Works on GitHub Pages, Live Server, and file protocol
- ✅ Easy to add new pages
- ✅ Consistent navbar behavior across all pages
