/* eslint react/prop-types: 0 */

// Responsive <img> for the optimised WebP files in public/optimized.
// `base-<small>.webp` and `base-<large>.webp` must exist; `width`/`height` are
// the dimensions of the large file (they reserve space and set the aspect ratio).
function Picture({
  base,
  small,
  large,
  width,
  height,
  alt,
  sizes,
  position,
  eager = false,
  className,
}) {
  return (
    <img
      className={className}
      src={`/optimized/${base}-${small}.webp`}
      srcSet={`/optimized/${base}-${small}.webp ${small}w, /optimized/${base}-${large}.webp ${width}w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? undefined : 'lazy'}
      decoding="async"
      style={position ? { objectPosition: position } : undefined}
    />
  )
}

export default Picture
