export default function ResponsiveImage({ src, alt, sizes, className = '', ...props }) {
  const base = src.replace(/\.(webp|png|jpg|jpeg)$/i, '');
  const ext = src.match(/\.(webp|png|jpg|jpeg)$/i)?.[0] || '.webp';

  return (
    <img
      src={src}
      srcSet={`${base}-200w${ext} 200w, ${base}-400w${ext} 400w, ${src} 800w`}
      sizes={sizes}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
