// Videos in public/videos/<key>.mp4 with a poster at public/videos/posters/<key>.webp.
// The WhatsApp originals are not in the repo (too large). Titles describe only what
// is visible.
// None of these have captions yet; add a captions file (<key>.vtt) when one exists.
export const VIDEOS = {
  'highlights-reel': {
    width: 1024,
    height: 576,
    duration: 94,
    title:
      'Highlights: a training ground abroad, an airport arrival, a community gathering and match footage',
  },
  'airport-welcome-drummers': {
    width: 480,
    height: 848,
    duration: 29,
    title: 'Drummers in Ghana shirts playing a welcome at the airport',
  },
  'airport-welcome-arrivals': {
    width: 480,
    height: 848,
    duration: 24,
    title: 'Supporters in Ghana colours greeting arrivals at the airport',
  },
  'airport-media-interview': {
    width: 480,
    height: 848,
    duration: 70,
    title: 'Two men in kente stoles interviewed by the media at the airport',
  },
  'office-meeting': {
    width: 480,
    height: 848,
    duration: 24,
    title: 'A meeting in the Toloba Sports Consult office',
  },
  'lounge-meeting': {
    width: 480,
    height: 848,
    duration: 66,
    title: 'Guests talking together in a lounge',
  },
}

// Order for the gallery page.
export const VIDEO_ORDER = [
  'highlights-reel',
  'airport-welcome-drummers',
  'airport-welcome-arrivals',
  'airport-media-interview',
  'office-meeting',
  'lounge-meeting',
]
