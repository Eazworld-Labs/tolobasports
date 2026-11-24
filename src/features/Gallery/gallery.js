import { GALLERY_ORDER, PHOTOS } from '../../ui/photos'

// The grid shows the smallest copy of each photo and the viewer the largest,
// both from public/photos (see ui/photos.js).
export const images = GALLERY_ORDER.map((key) => {
  const { sizes, width, height, alt } = PHOTOS[key]
  const small = sizes[0]
  return {
    key,
    thumb: `/photos/${key}-${small}.webp`,
    thumbWidth: small,
    thumbHeight: Math.round((height * small) / width),
    full: `/photos/${key}-${width}.webp`,
    fullWidth: width,
    fullHeight: height,
    alt,
  }
})
