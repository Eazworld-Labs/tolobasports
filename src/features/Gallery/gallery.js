import { GALLERY_GROUPS, PHOTOS } from '../../ui/photos'

// The grid shows the 320px copy of each photo; the viewer shows the largest.
// `images` is one flat list (the viewer pages through all of it); each group
// keeps the indexes of its photos in that list.
function toImage(key, group) {
  const { sizes, width, height, alt } = PHOTOS[key]
  const small = sizes[0]
  return {
    key,
    group,
    thumb: `/photos/${key}-${small}.webp`,
    thumbWidth: small,
    thumbHeight: Math.round((height * small) / width),
    full: `/photos/${key}-${width}.webp`,
    fullWidth: width,
    fullHeight: height,
    alt,
  }
}

export const images = []
export const groups = GALLERY_GROUPS.map((g) => {
  const start = images.length
  g.photos.forEach((key) => images.push(toImage(key, g.title)))
  return {
    title: g.title,
    indexes: g.photos.map((_, i) => start + i),
  }
})
