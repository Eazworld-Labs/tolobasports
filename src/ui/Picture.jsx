import { forwardRef } from 'react'

// Responsive <img> for the optimised WebP files in public/optimized.
// `base-<small>.webp` and `base-<large>.webp` must exist; `width`/`height` are
// the dimensions of the large file (they reserve space and set the aspect ratio).
const Picture = forwardRef(function Picture(
  {
    base,
    small,
    large,
    width,
    height,
    alt,
    sizes,
    position,
    eager = false,
    style,
    ...rest
  },
  ref,
) {
  return (
    <img
      ref={ref}
      src={`/optimized/${base}-${small}.webp`}
      srcSet={`/optimized/${base}-${small}.webp ${small}w, /optimized/${base}-${large}.webp ${width}w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? undefined : 'lazy'}
      decoding="async"
      style={position ? { ...style, objectPosition: position } : style}
      {...rest}
    />
  )
})

export default Picture
