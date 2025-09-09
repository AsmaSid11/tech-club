import React from "react";

/**
 * WebpImage - Automatically serves WebP if supported, fallback to original.
 * 
 * Props:
 *  - src: path relative to public/ (e.g., "/images/gallery/1.png")
 *  - alt, className, any other img props
 */
const WebpImage = ({ src, alt, className, ...props }) => {
  // Replace extension with .webp
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} className={className} {...props} />
    </picture>
  );
};

export default WebpImage;
