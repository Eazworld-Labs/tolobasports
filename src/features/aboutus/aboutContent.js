export const pageTitle = 'About Us'

export const intro = {
  heading: 'About Toloba Sports Consult',
  leadLabel: 'Toloba Sports Consult:',
  leadText:
    'is a beacon of opportunity for aspiring football talents across the globe. Our unwavering commitment to nurturing the stars of tomorrow is matched only by our passion for the beautiful game.',
}

// Short phrases taken word for word from the copy below, shown as scannable facts.
export const highlights = [
  { value: 'UEFA Certified coaches', caption: 'Our Scouting Process' },
  { value: 'Portugal, Spain, and Turkey', caption: 'professional scouts' },
  { value: 'twice a year', caption: 'Twice a Year Scouting' },
]

export const process = [
  {
    label: 'Our Scouting Process:',
    paragraphs: [
      'At Toloba Sports Consult, we believe in a holistic approach to scouting and nurturing football talent. Our annual scouting process is executed by UEFA Certified coaches, ensuring that the selection of promising football talents is carried out with the highest standards of expertise.',
      "This year, we've taken our scouting process to new heights by forming strategic partnerships with professional scouts hailing from Portugal, Spain, and Turkey. These scouts bring a wealth of experience and possess vital connections with top European clubs. Their expertise and networks are invaluable, significantly expanding the horizons for young talents who aspire to make a mark in the world of football.",
    ],
  },
  {
    label: 'Twice a Year Scouting:',
    paragraphs: [
      'We are proud to announce that these scouts from Portugal, Spain, and Turkey will visit twice a year. This means that aspiring football talents have not just one but two opportunities to showcase their skills and take a step closer to their dreams.',
    ],
  },
  {
    label: 'A World of Opportunity:',
    paragraphs: [
      "Toloba Sports Consult's global perspective ensures that talent knows no borders. With scouts from Portugal, Spain, and Turkey on board, we are committed to reaching talent across diverse geographies. Our mission is to unearth hidden gems worldwide, offering them the opportunity of a lifetime.",
    ],
  },
]

// `image` is the base name of public/optimized/<image>-<small>.webp / -<large>.webp.
export const photos = {
  signing: {
    base: 'about-signing',
    small: 960,
    large: 1600,
    width: 1600,
    height: 839,
    alt: 'Two men sitting at a desk with pens in hand, about to sign papers',
  },
  pitch: {
    base: 'about-pitch',
    small: 640,
    large: 1080,
    width: 1080,
    height: 810,
    alt: 'A group of young footballers and staff posing together on a football pitch',
  },
}

// Videos render only when embedId is not empty.
export const videos = [
  { embedId: 'R4WnMNK6zQ0', title: 'Toloba Sports Consult video' },
  { embedId: '', title: 'Toloba Sports Consult video' },
]

export const teamHeading = 'Our Team'

export const team = [
  {
    name: 'Mr.Musah Toloba',
    title: 'CEO',
    image: 'staff9',
    small: 400,
    large: 600,
    width: 600,
    height: 600,
    position: '50% 40%',
  },
  {
    name: 'Mr. Mohamed Abib Tchabagna',
    title: 'international scout',
    image: 'staff1',
    small: 400,
    large: 640,
    width: 640,
    height: 638,
    position: '50% 40%',
  },
  {
    name: 'Mr Bismark Arjani',
    title: 'Vice President',
    image: 'staff2',
    small: 400,
    large: 640,
    width: 640,
    height: 809,
    position: '50% 30%',
  },
  {
    name: 'binti MD Deni/ismaliah',
    title: 'International public relations',
    image: 'staff8',
    small: 400,
    large: 640,
    width: 640,
    height: 816,
    position: '50% 35%',
  },
]

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
