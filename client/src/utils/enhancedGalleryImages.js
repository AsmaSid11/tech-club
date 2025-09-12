// Enhanced gallery image loader that can handle various naming patterns
export const validateImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

// More comprehensive image detection
export const getAllGalleryImages = async () => {
  const images = [];
  const extensions = ['png', 'jpg', 'jpeg', 'webp', 'PNG', 'JPG', 'JPEG', 'WEBP'];
  
  // Array of all possible image names we want to check
  const imagePatterns = [
    // Numbered images 1-50
    ...Array.from({length: 50}, (_, i) => `${i + 1}`),
    // IMG_ pattern with specific numbers found in your directory
    'IMG_0664', 'IMG_0674', 'IMG_0684', 'IMG_0686', 'IMG_0699', 'IMG_0703',
    'IMG_0709', 'IMG_0714', 'IMG_0724', 'IMG_0725', 'IMG_0729', 'IMG_0730',
    // IMG_ pattern with 4-digit numbers (4700-4850 range to cover IMG_4723, etc.)
    ...Array.from({length: 150}, (_, i) => `IMG_${4700 + i}`),
    // Common named images
    'event', 'workshop', 'hackathon', 'meeting', 'presentation',
    'team', 'project', 'demo', 'conference', 'celebration'
  ];
  
  // Check each pattern with each extension
  for (const pattern of imagePatterns) {
    for (const ext of extensions) {
    const imagePath = `/images/gallery/${pattern}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        const imageId = pattern.toString().match(/^\d+$/) ? parseInt(pattern) : pattern;
        images.push({
          src: imagePath,
          alt: `Tech Club Gallery - ${pattern}`,
          id: imageId,
      filename: `${pattern}.${ext}`
        });
        break; // Found a valid extension for this pattern, move to next
      }
    }
  }
  
  // Sort images: numbered first (1, 2, 3...), then IMG_ files, then named files
  return images.sort((a, b) => {
    // If both are numbers, sort numerically
    if (typeof a.id === 'number' && typeof b.id === 'number') {
      return a.id - b.id;
    }
    // Numbers come first
    if (typeof a.id === 'number') return -1;
    if (typeof b.id === 'number') return 1;
    // For strings, IMG_ files come before other named files
    const aIsIMG = a.id.toString().startsWith('IMG_');
    const bIsIMG = b.id.toString().startsWith('IMG_');
    if (aIsIMG && !bIsIMG) return -1;
    if (!aIsIMG && bIsIMG) return 1;
    // Otherwise sort alphabetically
    return a.id.toString().localeCompare(b.id.toString());
  });
};

// Keep the original function for backward compatibility
// Helper to get images specifically from /images/gallery2/ (keeps same pattern logic)
export const getGallery2Images = async () => {
  const images = [];
  const extensions = ['png', 'jpg', 'jpeg', 'webp', 'PNG', 'JPG', 'JPEG', 'WEBP'];
  // Only check the actual gallery2 numeric range (1-14) to avoid duplicate entries
  const patterns = Array.from({ length: 14 }, (_, i) => `${i + 1}`);

  for (const pattern of patterns) {
    for (const ext of extensions) {
      const imagePath = `/images/gallery2/${pattern}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        const imageId = pattern.toString().match(/^\d+$/) ? parseInt(pattern) : pattern;
        images.push({
          src: imagePath,
          alt: `Tech Club Gallery2 - ${pattern}`,
          id: imageId,
          filename: `${pattern}.${ext}`,
          origin: 'gallery2'
        });
        break;
      }
    }
  }

  return images.sort((a, b) => (a.id || '').toString().localeCompare((b.id || '').toString()));
};

export const getValidGalleryImages = getAllGalleryImages;
