import WebpImage from "../components/webpImage";

const images = [
  "/images/gallery/1.png",
  "/images/gallery/2.png",
  "/images/gallery/3.png",
  // ... all images in public subfolders
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img, i) => (
        <WebpImage key={i} src={img} alt={`Gallery image ${i + 1}`} />
      ))}
    </div>
  );
}
