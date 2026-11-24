import { GALLERY_GROUPS, PHOTOS } from '../../ui/photos'
import { VIDEO_ORDER, VIDEOS } from '../../ui/videos'

// Items for the shared viewer (GalleryModel). A photo shows its largest copy;
// a video plays, with its poster as `full`.
export function photoItem(key, group) {
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

export function videoItem(key, group = 'Videos') {
  const { width, height, title, duration } = VIDEOS[key]
  return {
    key,
    group,
    video: `/videos/${key}.mp4`,
    full: `/videos/posters/${key}.webp`,
    fullWidth: width,
    fullHeight: height,
    alt: title,
    duration,
  }
}

export function formatDuration(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
}

// The gallery page: one flat list (the viewer pages through all of it); each
// group keeps the indexes of its photos in that list.
export const images = []
export const groups = GALLERY_GROUPS.map((g) => {
  const start = images.length
  g.photos.forEach((key) => images.push(photoItem(key, g.title)))
  return { title: g.title, indexes: g.photos.map((_, i) => start + i) }
})

export const clips = VIDEO_ORDER.map((key) => videoItem(key))
