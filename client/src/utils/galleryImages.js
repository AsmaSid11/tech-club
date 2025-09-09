// Utility to automatically load all gallery images
export const loadGalleryImages = () => {
  const images = [];
  
  // Define the image extensions you want to support
  const supportedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
  
  // Since we can't dynamically read directory contents in the browser,
  // we'll generate a list based on common naming patterns
  // You can extend this list as you add more images
  
  const imageFiles = [
    '1.webp', '2.webp', '3.webp', '4.webp', '5.webp', 
    '6.webp', '7.webp', '8.webp', '9.webp', '10.webp',
    '11.webp', '12.webp', '13.webp', '14.webp', '15.webp', '16.webp',
    // Add more as needed, or we can create a dynamic approach
  ];
  
  imageFiles.forEach((filename, index) => {
    images.push({
      src: `/images/gallery/${filename}`,
      alt: `Tech Club Gallery Image ${index + 1}`,
      id: index + 1
    });
  });
  
  return images;
};

// Alternative approach: Generate based on a range
export const generateGalleryImages = (startNum = 1, endNum = 16, extension = 'png') => {
  const images = [];
  
  for (let i = startNum; i <= endNum; i++) {
    images.push({
      src: `/images/gallery/${i}.${extension}`,
      alt: `Tech Club Gallery Image ${i}`,
      id: i
    });
  }
  
  return images;
};

// Function to validate if an image exists
export const validateImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

// Function to automatically detect and load all available gallery images
export const getValidGalleryImages = async () => {
  const images = [];
  const maxImages = 50; // Maximum number to check (adjust as needed)
  const extensions = ['png', 'jpg', 'jpeg', 'webp', 'PNG', 'JPG', 'JPEG', 'WEBP'];
  
  // Check for numbered images (1.webp, 2.webp, etc.) - including new ones like 17.webp
  for (let i = 1; i <= maxImages; i++) {
    for (const ext of extensions) {
      const imagePath = `/images/gallery/${i}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        images.push({
          src: imagePath,
          alt: `Tech Club Gallery Image ${i}`,
          id: i
        });
        break; // Found a valid extension for this number, move to next number
      }
    }
  }
  
  // Check for IMG_* pattern files (like IMG_0664.webp)
  const imgNumbers = [
    '0664', '0674', '0684', '0686', '0699', '0703', 
    '0709', '0714', '0724', '0725', '0729', '0730'
  ];
  
  for (const num of imgNumbers) {
    for (const ext of extensions) {
      const imagePath = `/images/gallery/IMG_${num}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        images.push({
          src: imagePath,
          alt: `Tech Club Event Photo IMG_${num}`,
          id: `IMG_${num}`
        });
        break;
      }
    }
  }
  
  // Check for additional IMG_* pattern with 4-digit numbers (dynamic approach)
  for (let i = 4700; i <= 4900; i++) {
    for (const ext of extensions) {
      const imagePath = `/images/gallery/IMG_${i}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        images.push({
          src: imagePath,
          alt: `Tech Club Event Photo IMG_${i}`,
          id: `IMG_${i}`
        });
        break;
      }
    }
  }
  
  // Also check for common named images
  const commonNames = [
    'event', 'workshop', 'hackathon', 'meeting', 'presentation',
    'team', 'project', 'demo', 'conference', 'celebration'
  ];
  
  for (const name of commonNames) {
    for (const ext of extensions) {
      const imagePath = `/images/gallery/${name}.${ext}`;
      const isValid = await validateImage(imagePath);
      if (isValid) {
        images.push({
          src: imagePath,
          alt: `Tech Club ${name.charAt(0).toUpperCase() + name.slice(1)}`,
          id: `${name}-${ext}`
        });
        break;
      }
    }
  }
  
  // Sort images to ensure numbered ones come first, then IMG_ files
  return images.sort((a, b) => {
    const aNum = typeof a.id === 'number' ? a.id : (a.id.toString().startsWith('IMG_') ? 1000 : 2000);
    const bNum = typeof b.id === 'number' ? b.id : (b.id.toString().startsWith('IMG_') ? 1000 : 2000);
    return aNum - bNum;
  });
};
