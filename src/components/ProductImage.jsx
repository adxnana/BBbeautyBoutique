export default function ProductImage({ src, alt, className = "" }) {
  // Local image strategy: render the real <img> if it loads, otherwise fall back
  // to a styled placeholder so the layout is visible during development.
  return (
    <div className={`relative overflow-hidden bg-bbpink ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="img-placeholder absolute inset-0 text-2xl">
        <span className="px-4 text-center">{alt}</span>
      </div>
    </div>
  );
}
