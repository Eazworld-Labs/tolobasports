// Single source of truth for site navigation (header, drawer and footer).
export const PRIMARY_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/aboutus', label: 'About', drawerLabel: 'About Toloba SC' },
  { to: '/scouting', label: 'Scouting' },
  { to: '/consult', label: 'Consulting' },
  { to: '/mentoring', label: 'Mentoring' },
  { to: '/partners', label: 'Partners' },
]

export const MORE_LINKS = [
  { to: '/image-gallery', label: 'Gallery' },
  { to: '/testimonial', label: 'Testimonials' },
  { to: '/blog', label: 'Media & Blog' },
  { to: '/faq', label: 'FAQ' },
]

export const CONTACT_LINK = {
  to: '/contact',
  label: 'Contact',
  drawerLabel: 'Contact Us',
}

// Same order as the old sidebar: all 11 destinations.
export const ALL_LINKS = [...PRIMARY_LINKS, ...MORE_LINKS, CONTACT_LINK]
