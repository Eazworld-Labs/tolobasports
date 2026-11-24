// A row shows its video when embedId is not empty, otherwise its photo.

export const pageTitle = 'Scouting'

export const rows = [
  {
    heading: 'Our Scouting Process:',
    paragraphs: [
      'At Toloba Sports Consult, we believe in a holistic approach to scouting and nurturing football talent. Our scouting process is executed by UEFA Certified coaches, ensuring that the selection of promising football talents is carried out with the highest standards of expertise.',
      'We have taken our scouting process to new heights by forming strategic partnerships with professional scouts hailing from Portugal, Spain, and Turkey. We are looking forward to having a broader scope of scouts from other countries on board in the not too distant future. These scouts bring a wealth of experience and have connections with top European clubs. Their expertise and networks are invaluable, significantly expanding the horizons for young talents who aspire to make a mark in the world of football.',
    ],
    embedId: '',
    videoTitle: 'Toloba Sports Consult video',
    image: {
      base: 'stadium-sunset',
      small: 640,
      large: 1000,
      width: 1000,
      height: 750,
      alt: 'A football stadium filled with fans under a sunset sky',
      position: '50% 50%',
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
      base: 'stadium-interior',
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

// There is no schedule link yet, so only the text is shown. Set `action` to add a button.
export const announcement = {
  text: 'Check Scouting Schedule and Other Important Announcements',
  action: null, // e.g. { label: 'Click here', href: '...' }
}

// The section is shown only when at least one embedId is not empty.
export const rising = {
  heading: 'The Rising Stars',
  videos: [
    { embedId: '', title: 'Toloba Sports Consult video' },
    { embedId: '', title: 'Toloba Sports Consult video' },
  ],
}
