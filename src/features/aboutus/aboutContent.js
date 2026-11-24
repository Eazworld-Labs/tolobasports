// About page copy, from Toloba's own text. Facts are only those stated elsewhere
// on the site; nothing is invented.

export const pageTitle = 'About Us'

export const hero = {
  crumb: 'About',
  kicker: 'About Toloba Sports Consult',
  title: 'A beacon of opportunity for',
  highlight: 'talented athletes',
  lead: 'Football is our focus. We believe that offering the platform to athletes talented in other sporting fields diversifies our purpose for a greater good to sports in general.',
  actions: [
    { label: 'Meet the team', to: '#team' },
    { label: 'Book a consultation', to: '/contact' },
  ],
  photo: { photo: 'squad-club-banner', position: '50% 45%' },
}

export const facts = [
  { value: 'UEFA Certified', caption: 'coaches lead our scouting' },
  { value: 'Portugal, Spain, Turkey', caption: 'partner scouts' },
  { value: 'Football first', caption: 'other sports welcome' },
  { value: 'Accra, Ghana', caption: 'where we are based' },
]

export const story = {
  kicker: 'Our story',
  title: 'Who we are',
  paragraphs: [
    'Toloba Sports Consult is a beacon of opportunity for aspiring talented sports persons across the globe. Whereas football is our focused sports discipline, we believe that offering the platform for athletes talented in other sporting fields diversifies our purpose for a greater good to sports in general.',
    'Our unwavering commitment to nurturing the stars of tomorrow is matched by our passion for dedicating valuable time, resources and professional guidance to talented footballers and other sports athletes.',
  ],
  pillars: [
    {
      eyebrow: 'Mission',
      title:
        'To guide young student-athletes towards maturity in both their mental and physical aspects.',
    },
    {
      eyebrow: 'Vision',
      title:
        'To create a new generation of educated and skilled footballers while nurturing careers around the sport.',
    },
  ],
}

export const services = {
  title: 'What we do',
  intro: 'Three disciplines, one aim: opportunity for talented athletes.',
  items: [
    {
      title: 'Scouting',
      text: 'A holistic approach to scouting and nurturing football talent, carried out by UEFA certified coaches with partner scouts from Portugal, Spain and Turkey.',
      link: { label: 'About scouting', to: '/scouting' },
    },
    {
      title: 'Consulting',
      text: 'Professional football consultancy for student-athletes, coaches and football entities across Europe, Asia, Australia and the Americas.',
      link: { label: 'About consulting', to: '/consult' },
    },
    {
      title: 'Mentoring',
      text: 'Guiding young student-athletes towards maturity in both their mental and physical aspects, on and off the pitch.',
      link: { label: 'About mentoring', to: '/mentoring' },
    },
  ],
}

export const scouting = {
  title: 'How we scout',
  paragraphs: [
    'We believe in a holistic approach to scouting and nurturing football talent. Our scouting process is executed by UEFA Certified coaches, ensuring that the selection of promising football talents is carried out with the highest standards of expertise.',
    'We have formed strategic partnerships with professional scouts hailing from Portugal, Spain, and Turkey, and look forward to welcoming scouts from other countries in the not too distant future. These scouts bring a wealth of experience and have connections with top European clubs.',
  ],
  photo: { photo: 'scout-shirt-airport-2', position: '50% 35%' },
  link: { label: 'More about scouting', to: '/scouting' },
}

export const record = {
  kicker: 'Track record',
  statement:
    "Players we have nurtured have represented Ghana's junior national teams and secured contracts with esteemed European clubs.",
  text: 'The measure of our success is reflected in the achievements of the players we have nurtured. Their journeys inspire us and stand as testaments to our commitment to nurturing the stars of tomorrow.',
}

// Sourced from the Modern Ghana report of 8 December 2023.
export const community = {
  kicker: 'In the community',
  title: 'Supporting grassroots football',
  text: 'In December 2023 we supported the Laiyah Cup football gala in Accra, donating water and drinks to the organisers. Talented players from Nima, Maamobi and Accra Newtown were scouted at Kawukudi Park.',
  link: {
    label: 'Read the Modern Ghana report',
    url: 'https://www.modernghana.com/sports/1278595/toloba-sports-consult-ceo-supports-grassroots-foot.html',
  },
}

export const teamHeading = 'Our Team'

// The team section appears when this list has entries.
// Each: { name, title, photo (key in ui/photos.js), position? }. Leave `name`
// empty until it is known; the card then shows the role only.
export const team = [
  {
    name: '',
    title: 'General Manager',
    photo: 'team-general-manager',
    position: '50% 25%',
  },
  {
    name: 'Mustapha Alhassan',
    title: 'Chief Scout',
    photo: 'team-mustapha-alhassan',
    position: '50% 25%',
  },
  {
    name: 'Suleiman Yakub Alfa',
    title: 'Public Relations Officer',
    photo: 'team-suleiman-yakub-alfa',
    position: '50% 25%',
  },
  {
    name: 'Francis Dzameshie',
    title: 'Administrator',
    photo: 'team-francis-dzameshie',
    position: '50% 25%',
  },
]

export const career = {
  heading: 'Join us in the pursuit of excellence',
  paragraphs: [
    "If you're passionate about football and aspire to be a part of the next generation, Toloba Sports Consult is your platform for growth and opportunity. Join us as we explore, train, and mentor the future football legends.",
  ],
  cta: { label: 'Contact us', to: '/contact' },
  email: 'Mtoloba@tolobasports.com',
}
