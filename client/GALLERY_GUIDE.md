# Gallery Image Management Guide

## How the Dynamic Gallery Works

The gallery now automatically detects and displays all images in the `/public/images/gallery/` folder without requiring you to hardcode image names in the code.

## Supported Image Formats
- PNG (.png)
- JPEG (.jpg, .jpeg)
- WebP (.webp)

## Naming Conventions

### 1. Numbered Images (Recommended)
The gallery will automatically detect numbered images:
- `1.png`, `2.png`, `3.png`, etc.
- `1.jpg`, `2.jpg`, `3.jpg`, etc.

### 2. Named Images
The gallery also looks for common named images:
- `event.png`, `workshop.jpg`, `hackathon.png`
- `meeting.png`, `presentation.jpg`, `team.png`
- `project.png`, `demo.jpg`, `conference.png`
- `celebration.png`

## How to Add New Images

### Method 1: Numbered Images (Easiest)
1. Open the folder: `client/public/images/gallery/`
2. Add your images with sequential numbers: `17.png`, `18.png`, `19.png`, etc.
3. The gallery will automatically detect and display them

### Method 2: Named Images
1. Add images with descriptive names like `hackathon2024.png`, `workshop-ml.jpg`
2. Update the `commonNames` array in `src/utils/galleryImages.js` to include your new names

### Method 3: Mixed Extensions
The system will automatically try different extensions for the same number:
- If you have `5.jpg` and add `5.png`, it will use whichever loads first

## Image Guidelines
- **Size**: Recommended minimum 800x600 pixels
- **Aspect Ratio**: Any aspect ratio works (the gallery uses masonry layout)
- **File Size**: Keep under 2MB for faster loading
- **Quality**: Use good quality images for professional appearance

## Features
- **Automatic Detection**: No code changes needed when adding images
- **Lazy Loading**: Images load efficiently
- **Responsive Design**: Works on all screen sizes
- **Lightbox View**: Click any image for full-screen view
- **Carousel**: First 4 images appear in the featured carousel
- **Load More**: Progressive loading for better performance

## Troubleshooting
- If new images don't appear, refresh the browser
- Check that image files are in the correct folder: `client/public/images/gallery/`
- Ensure file names don't have spaces or special characters
- Verify file extensions are supported (.png, .jpg, .jpeg, .webp)

## Current Images
Based on your gallery folder, you currently have:
1.png through 16.png (16 images total)

The gallery will automatically display all of these!
