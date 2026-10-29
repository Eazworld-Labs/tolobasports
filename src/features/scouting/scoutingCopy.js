// Scouting page copy. Wording is kept as it was in Scout.jsx.
// A row shows its video when embedId is not empty, otherwise its photo.

export const pageTitle = 'Scouting'

export const rows = [
  {
    heading: 'Our Scouting Process:',
    paragraphs: [
      "At Toloba Sports Consult, we believe in a holistic approach to scouting and nurturing football talent. Our annual scouting process is executed by UEFA Certified coaches, ensuring that the selection of promising football talents is carried out with the highest standards of expertise. This year, we've taken our scouting process to new heights by forming strategic partnerships with professional scouts hailing from Portugal, Spain, and Turkey. These scouts bring a wealth of experience and possess vital connections with top European clubs. Their expertise and networks are invaluable, significantly expanding the horizons for young talents who aspire to make a mark in the world of football.",
    ],
    embedId: '',
    videoTitle: 'Toloba Sports Consult video',
    image: {
      base: 'pc30',
      small: 640,
      large: 1000,
      width: 1000,
      height: 750,
      alt: 'A football stadium filled with fans under a sunset sky',
      position: '50% 50%',
    },
  },
  {
    heading: 'Twice a Year Scouting:',
    paragraphs: [
      'We are proud to announce that these scouts from Portugal, Spain, and Turkey will visit twice a year. This means that aspiring football talents have not just one but two opportunities to showcase their skills and take a step closer to their dreams.',
    ],
    embedId: '',
    videoTitle: 'Toloba Sports Consult video',
    image: {
      base: 'pc25',
      small: 640,
      large: 1000,
      width: 1000,
      height: 667,
      alt: 'Two players competing for the ball during a match on a grass pitch',
      position: '50% 55%',
    },
  },
  {
    heading: 'A World of Opportunity:',
    paragraphs: [
      "Toloba Sports Consult's global perspective ensures that talent knows no borders. With scouts from Portugal, Spain, and Turkey on board, we are committed to reaching talent across diverse geographies. Our mission is to unearth hidden gems worldwide, offering them the opportunity of a lifetime.",
    ],
    embedId: '',
    videoTitle: 'Toloba Sports Consult video',
    image: {
      base: 'pc6',
      small: 640,
      large: 1000,
      width: 1000,
      height: 615,
      alt: 'Inside a large football stadium under a blue sky',
      position: '50% 50%',
    },
  },
]

// Shown as the closing call-to-action panel.
export const closing = {
  heading: 'Join Us in the Pursuit of Excellence:',
  paragraphs: [
    "If you're passionate about football and aspire to be a part of the next generation of football stars, Toloba Sports Consult is your platform for growth and opportunity. Join us as we explore, train, and mentor the future football legends.",
  ],
  cta: { label: 'Contact us', to: '/contact' },
}

// The old page showed this next to a "CLICK HERE" button that had no destination,
// so only the text is shown until a schedule link exists.
export const announcement = {
  text: 'CHECK SCOUTING SCHEDULE AND OTHER IMPORTANT ANNOUNCEMENTS',
  action: null, // e.g. { label: 'CLICK HERE', href: '...' }
}

// The section is shown only when at least one embedId is not empty.
export const rising = {
  heading: 'THE RISING STARS',
  videos: [
    { embedId: '', title: 'Toloba Sports Consult video' },
    { embedId: '', title: 'Toloba Sports Consult video' },
  ],
}
