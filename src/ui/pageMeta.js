// Per-route <title> and meta description. Descriptions use sentences that already
// appear in the site copy (hero tagline, page paragraphs, headings); the contact and
// gallery pages have no prose, so theirs only restate facts shown on the page.
const SITE_NAME = 'Toloba Sports Consult'

const COMING_SOON =
  'This page is coming soon. Get in touch and we will be happy to talk.'

const PAGES = {
  '/': {
    title: SITE_NAME,
    description:
      'We prioritize Fostering talent, enhancing skills, and nurturing athletes to reach their full potential in the world of sports',
  },
  '/aboutus': {
    title: 'About Us',
    description:
      'Toloba Sports Consult is a beacon of opportunity for aspiring football talents across the globe.',
  },
  '/scouting': {
    title: 'Scouting',
    description:
      'At Toloba Sports Consult, we believe in a holistic approach to scouting and nurturing football talent.',
  },
  '/consult': {
    title: 'Consult With Us',
    description:
      'Our unwavering commitment to excellence and inclusivity sets us apart as your trusted partner in the world of football.',
  },
  '/mentoring': {
    title: 'Mentoring',
    description:
      'We understand the transformative power of the right mentoring programs for young student-athletes.',
  },
  '/partners': {
    title: 'Partner With Us',
    description:
      'We are on a mission to transform the landscape of football through our multifaceted approach that encompasses Consulting, Scouting, and Mentoring.',
  },
  '/contact': {
    title: 'Contact Us',
    description:
      'M TOLOBA SPORTS - Ghana, Osabu st, abelempke GA-16A-9330. Email Mtoloba@tolobasports.com.',
  },
  '/image-gallery': {
    title: 'Images Gallery',
    description: 'Images Gallery: photos from Toloba Sports Consult.',
  },
  '/blog': {
    title: 'Media & Blog',
    description:
      'A Pivotal Meeting in Abu Dhabi: The Tale of Musah Toloba and Daniel Curcio',
  },
  '/blog/APivotalMeetinginAbuDhabi': {
    title:
      'A Pivotal Meeting in Abu Dhabi: The Tale of Musah Toloba and Daniel Curcio',
    description:
      'In the vibrant heart of Abu Dhabi, a momentous meeting unfolded between two exceptional individuals.',
  },
  '/programmes': { title: 'European Programmes', description: COMING_SOON },
  '/trainer': { title: 'Coach Education', description: COMING_SOON },
  '/faq': { title: 'FAQ', description: COMING_SOON },
  '/testimonial': { title: 'Testimonials', description: COMING_SOON },
}

const NOT_FOUND = {
  title: 'Page not found',
  description: 'We could not find the page you were looking for.',
}

export function metaFor(pathname) {
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const page = PAGES[key] || NOT_FOUND
  return {
    title:
      page.title === SITE_NAME ? SITE_NAME : `${page.title} | ${SITE_NAME}`,
    description: page.description,
  }
}
