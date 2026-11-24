// Home page copy. Facts here come from the About and service pages; nothing is invented.

export const hero = {
  kicker: 'Scouting · Consulting · Mentoring, Accra, Ghana',
  // The h1 is titleStart followed by the highlighted titleHighlight.
  titleStart: 'Turning raw talent into professional',
  titleHighlight: 'football careers',
  lead: 'Fostering talent, enhancing skills, and nurturing athletes to reach their full potential in the world of sports.',
  primaryCta: { label: 'Book a consultation', to: '/contact' },
  secondaryCta: { label: 'Apply as a player', to: '/players#apply' },
  creds: [
    { strong: 'UEFA Certified', text: 'coaches lead our scouting' },
    { strong: '3', text: 'partner scout countries' },
  ],
}

// Partner scouts shown on the hero map. x/y are positions in the 600x420 map,
// from a simple longitude/latitude projection (lon -20..35, lat 0..48).
export const route = {
  title: 'Where our scouts come from',
  note: 'Partner network',
  caption:
    'Professional scouts from Portugal, Spain and Turkey, with connections to top European clubs. More countries to come.',
  home: { name: 'Accra', coord: '5.61°N 0.23°W', x: 216, y: 371 },
  cities: [
    {
      name: 'Lisbon',
      coord: '38.72°N 9.14°W',
      x: 119,
      y: 81,
      label: [24, 112],
      bend: [120, 240],
    },
    {
      name: 'Madrid',
      coord: '40.42°N 3.70°W',
      x: 178,
      y: 67,
      label: [196, 40],
      bend: [200, 220],
    },
    {
      name: 'Istanbul',
      coord: '41.01°N 28.98°E',
      x: 534,
      y: 61,
      label: [476, 30],
      bend: [440, 260],
    },
  ],
}

export const paths = {
  heading: 'How can we help you?',
  intro: 'Football is our focus. Athletes from other sports are welcome too.',
  items: [
    {
      who: 'For athletes and parents',
      title: 'Get scouted and mentored',
      text: 'Send your details and a highlight video. Our UEFA certified coaches review every application.',
      cta: { label: 'Apply as a player', to: '/players#apply' },
    },
    {
      who: 'For clubs and scouts',
      title: 'Find talent from Ghana',
      text: 'Meet the players we nurture and talk to us about upcoming scouting sessions.',
      cta: { label: 'Talk to us', to: '/contact' },
    },
    {
      who: 'For partners and sponsors',
      title: 'Work with us',
      text: 'Support young athletes through programmes, facilities or scouting partnerships.',
      cta: { label: 'Become a partner', to: '/partners' },
    },
  ],
}

export const services = {
  heading: 'What we do',
  photo: 'scout-shirt-airport',
  items: [
    {
      title: 'Scouting',
      text: 'A holistic approach to scouting and nurturing football talent, carried out by UEFA certified coaches with partner scouts from Portugal, Spain and Turkey.',
      to: '/scouting',
    },
    {
      title: 'Consulting',
      text: 'Professional football consultancy for student-athletes, coaches and football entities across Europe, Asia, Australia and the Americas.',
      to: '/consult',
    },
    {
      title: 'Mentoring',
      text: 'Guiding young student-athletes towards maturity in both their mental and physical aspects, on and off the pitch.',
      to: '/mentoring',
    },
  ],
}

// Draft: confirm these steps with Toloba before launch.
export const steps = {
  heading: 'From application to opportunity',
  intro: 'What happens after a player applies.',
  cta: { label: 'Apply as a player', to: '/players#apply' },
  items: [
    {
      title: 'Apply',
      text: 'Send your details, position and a highlight video.',
    },
    {
      title: 'Assessment',
      text: 'Our UEFA certified coaches review applications and invite promising players.',
    },
    {
      title: 'Scouting session',
      text: 'Show your skills in front of our partner scouts.',
    },
    { title: 'Mentoring', text: 'Ongoing guidance as you take the next step.' },
  ],
}

// A bento grid: the reel as the large tile, four photos around it. Every tile
// opens the shared viewer. Labels are short tags, not captions.
export const field = {
  heading: 'In the field',
  intro: 'Recent moments from our work in Ghana and abroad.',
  video: {
    key: 'highlights-reel',
    label: 'Highlights reel',
    title: 'Watch the highlights',
  },
  photos: [
    { key: 'minister-meeting', label: 'Officials' },
    { key: 'airport-interview', label: 'Arrivals' },
    { key: 'training-challenge', label: 'On the pitch' },
    { key: 'para-boxing-flag', label: 'Other sports' },
  ],
  cta: { label: 'See the full gallery', to: '/image-gallery' },
}

// A short summary of the GhanaWeb story; the full article is linked.
export const news = {
  kicker: 'In the news',
  headline:
    'Musah Toloba recognised for sports initiatives and offered a collaboration by the Turcaf President',
  summary: [
    'Mr. Musah Toloba, the Founder and CEO of Toloba Sports Consult, has received commendation and a collaboration proposal from Mr. Muhammet Ali Aras, the President of Turcaf. Mr. Ali Aras lauded Mr. Toloba for his efforts in identifying and nurturing talents, helping aspiring athletes achieve their dreams of becoming professional footballers.',
    'Toloba Sports Consult has also been involved in building Astro Turfs, synthetic playing fields that give local communities and young talents access to high-quality facilities.',
  ],
  videoId: 'R4WnMNK6zQ0',
  videoTitle: 'Toloba Sports Consult and Turcaf collaboration',
  source: {
    label: 'Read the full story on GhanaWeb',
    url: 'https://ghanaweb.mobi/ghanaian-entrepreneur-musah-toloba-recognized-for-sports-initiatives-and-receives-collaboration-offer-from-turcaf-president/',
  },
}
