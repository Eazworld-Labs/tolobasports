// Single source of truth for site navigation (header, drawer and footer).
export const PRIMARY_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/aboutus', label: 'About', drawerLabel: 'About Toloba SC' },
  { to: '/scouting', label: 'Scouting' },
  { to: '/consult', label: 'Consulting' },
  { to: '/mentoring', label: 'Mentoring' },
  { to: '/partners', label: 'Partners' },
]

// /testimonial and /faq still work but are left out until they have real content.
export const MORE_LINKS = [
  { to: '/image-gallery', label: 'Gallery' },
  { to: '/blog', label: 'Media & Blog' },
]

export const CONTACT_LINK = {
  to: '/contact',
  label: 'Contact',
  drawerLabel: 'Contact Us',
}

// All destinations shown in the drawer and footer.
export const ALL_LINKS = [...PRIMARY_LINKS, ...MORE_LINKS, CONTACT_LINK]
