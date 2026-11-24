import { forwardRef } from 'react'
import { PHOTOS } from './photos'

// Responsive <img> for a photo listed in ui/photos.js (files in public/photos).
// `photo` is the key; `alt` overrides the default alt text (pass '' for decoration).
const Picture = forwardRef(function Picture(
  { photo, alt, sizes = '100vw', position, eager = false, style, ...rest },
  ref,
) {
  const entry = PHOTOS[photo]
  if (!entry) {
    if (import.meta.env.DEV) console.warn(`Unknown photo "${photo}"`)
    return null
  }
  const src = (w) => `/photos/${photo}-${w}.webp`

  return (
    <img
      ref={ref}
      src={src(entry.sizes[0])}
      srcSet={entry.sizes.map((w) => `${src(w)} ${w}w`).join(', ')}
      sizes={sizes}
      width={entry.width}
      height={entry.height}
      alt={alt ?? entry.alt}
      loading={eager ? undefined : 'lazy'}
      // React 18 passes the lowercase attribute through; eslint does not know it.
      {...(eager ? { fetchpriority: 'high' } : {})}
      decoding="async"
      style={position ? { ...style, objectPosition: position } : style}
      {...rest}
    />
  )
})

export default Picture
