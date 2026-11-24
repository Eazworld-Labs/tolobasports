// Single source of truth for site navigation (header, drawer and footer).
// The logo links home, so Home is left out of the desktop bar.
export const PRIMARY_LINKS = [
  { to: '/aboutus', label: 'About' },
  { to: '/scouting', label: 'Scouting' },
  { to: '/consult', label: 'Consulting' },
  { to: '/mentoring', label: 'Mentoring' },
  { to: '/players', label: 'Players' },
  { to: '/partners', label: 'Partners' },
]

// /testimonial and /faq still work but are left out until they have real content.
export const MORE_LINKS = [
  { to: '/image-gallery', label: 'Gallery' },
  { to: '/blog', label: 'Media & Blog' },
  { to: '/contact', label: 'Contact' },
]

// The header's main action: the consultation request form on the contact page.
export const BOOK_LINK = {
  to: '/contact',
  label: 'Book a consultation',
}

// Kept for the drawer's highlighted last item.
export const CONTACT_LINK = BOOK_LINK

// All destinations shown in the drawer and footer.
export const ALL_LINKS = [
  { to: '/', label: 'Home', end: true },
  ...PRIMARY_LINKS,
  ...MORE_LINKS,
]
