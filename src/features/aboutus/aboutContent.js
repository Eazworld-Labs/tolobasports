export const pageTitle = 'About Us'

export const intro = {
  heading: 'About Toloba Sports Consult',
  leadLabel: 'Toloba Sports Consult',
  leadText:
    'is a beacon of opportunity for aspiring talented sports persons across the globe. Whereas football is our focused sports discipline, we believe that offering the platform for athletes talented in other sporting fields diversifies our purpose for a greater good to sports in general.',
  // Further paragraphs shown under the lead.
  paragraphs: [
    'Our unwavering commitment to nurturing the stars of tomorrow is matched by our passion for dedicating valuable time, resources and professional guidance to talented footballers and other sports athletes.',
  ],
}

// Short phrases taken word for word from the copy below, shown as scannable facts.
export const highlights = [
  { value: 'UEFA Certified coaches', caption: 'Our Scouting Process' },
  { value: 'Portugal, Spain, and Turkey', caption: 'professional scouts' },
  { value: 'mental and physical', caption: 'Mentoring' },
]

export const process = [
  {
    label: 'Our Scouting Process:',
    paragraphs: [
      'At Toloba Sports Consult, we believe in a holistic approach to scouting and nurturing football talent. Our scouting process is executed by UEFA Certified coaches, ensuring that the selection of promising football talents is carried out with the highest standards of expertise.',
      'We have taken our scouting process to new heights by forming strategic partnerships with professional scouts hailing from Portugal, Spain, and Turkey. We are looking forward to having a broader scope of scouts from other countries on board in the not too distant future. These scouts bring a wealth of experience and have connections with top European clubs. Their expertise and networks are invaluable, significantly expanding the horizons for young talents who aspire to make a mark in the world of football.',
    ],
  },
  {
    label: 'Mentoring:',
    paragraphs: [
      'At Toloba Sports Consult, we understand the transformative power of the right mentoring programmes for young student-athletes. The journey of growth extends beyond the physical realm, and it is our mission to guide them towards maturity in both their mental and physical aspects.',
    ],
  },
]

// Photo keys from ui/photos.js.
export const photos = {
  signing: { photo: 'squad-club-banner' },
  pitch: { photo: 'scout-shirt-airport-2', position: '50% 35%' },
}

// Videos render only when embedId is not empty.
export const videos = [
  { embedId: 'R4WnMNK6zQ0', title: 'Toloba Sports Consult video' },
  { embedId: '', title: 'Toloba Sports Consult video' },
]

export const teamHeading = 'Our Team'

// The team section appears when this list has entries.
// Each: { name, title, photo (key in ui/photos.js), position? }.
export const team = []

export const career = {
  eyebrow: 'Career',
  heading: 'Join Us in the Pursuit of Excellence',
  paragraphs: [
    "The measure of our success is reflected in the achievements of the players we have nurtured. These young talents, once hidden gems, have not only represented Ghana's junior national teams but have also achieved the extraordinary by securing coveted contracts with esteemed European clubs. Their journeys inspire us and stand as testaments to our commitment to nurturing the stars of tomorrow",
    "If you're passionate about football and aspire to be a part of the next generation of football stars, Toloba Sports Consult is your platform for growth and opportunity. Join us as we explore, train, and mentor the future football legends.",
  ],
  email: 'Mtoloba@tolobasports.com',
  cta: { label: 'Contact us', to: '/contact' },
}
