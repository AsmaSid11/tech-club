// Utility to automatically load TechFusion highlight images
export const validateImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

// Function to automatically detect and load TechFusion highlight images
export const getTechFusionHighlights = async () => {
  const images = [];
  const maxImages = 20; // Maximum number to check
  const extensions = ['png', 'jpg', 'jpeg', 'webp'];
  
  // Check for numbered highlight images (highlight1.png, highlight2.png, etc.)
  for (let i = 1; i <= maxImages; i++) {
    for (const ext of extensions) {
      const imagePath = `/images/techfusion25/highlights/highlight${i}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        images.push({
          src: imagePath,
          alt: `TechFusion Highlight ${i}`,
          id: i
        });
        break; // Found a valid extension for this number, move to next number
      }
    }
  }
  
  // Also check for numbered images without prefix (1.png, 2.png, etc.)
  for (let i = 1; i <= maxImages; i++) {
    for (const ext of extensions) {
      const imagePath = `/images/techfusion25/highlights/${i}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        // Check if we already have this image with different naming
        const exists = images.some(img => img.id === i);
        if (!exists) {
          images.push({
            src: imagePath,
            alt: `TechFusion Highlight ${i}`,
            id: i
          });
        }
        break;
      }
    }
  }
  
  // Check for common named images
  const commonNames = [
    'workshop', 'hackathon', 'presentation', 'award', 'team',
    'coding', 'innovation', 'demo', 'networking', 'competition',
    'opening', 'closing', 'panel', 'keynote', 'exhibition'
  ];
  
  for (const name of commonNames) {
    for (const ext of extensions) {
      const imagePath = `/images/techfusion25/highlights/${name}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        images.push({
          src: imagePath,
          alt: `TechFusion ${name.charAt(0).toUpperCase() + name.slice(1)}`,
          id: `${name}-${ext}`
        });
        break;
      }
    }
  }
  
  // Sort images to ensure numbered ones come first
  return images.sort((a, b) => {
    const aNum = typeof a.id === 'number' ? a.id : 999;
    const bNum = typeof b.id === 'number' ? b.id : 999;
    return aNum - bNum;
  });
};
