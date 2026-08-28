// الصور التي لها نسخ مصغرة (200w / 400w) في /public
const WITH_VARIANTS = new Set([
  '/UB.webp',
  '/SEO.webp',
  '/WACollectorLogo.webp',
  '/UWPSR.webp',
  '/UWPS2R.webp',
  '/URMR.webp',
  '/UWPSRS.webp',
  '/mosanedlogo.webp',
  '/AutoCaptureLogo.webp',
]);

export default function ResponsiveImage({ src, alt, sizes, className = '', ...props }) {
  const ext = src.match(/\.(webp|png|jpg|jpeg)$/i)?.[0] || '.webp';
  const base = src.replace(/\.(webp|png|jpg|jpeg)$/i, '');

  // فقط صور معروفة بوجود نسخها المصغرة تحصل على srcset
  // لضمان ألا تشير srcset لملفات غير موجودة وتكسر الصورة
  const hasVariants = WITH_VARIANTS.has(src);
  const srcSet = hasVariants
    ? `${base}-200w${ext} 200w, ${base}-400w${ext} 400w, ${src} 800w`
    : null;

  return (
    <img
      src={src}
      {...(srcSet ? { srcSet, sizes } : {})}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}