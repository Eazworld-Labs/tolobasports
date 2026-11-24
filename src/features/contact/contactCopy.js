import { EMAIL_PATTERN } from '../../ui/formPatterns'

export const pageTitle = 'Book a consultation'
export const breadcrumb = 'Contact'
export const intro =
  'Tell us what you need and when suits you. We reply by email to confirm a time.'
export const infoHeading = 'Contact information'

export const whoFor = [
  'Players and parents',
  'Coaches and clubs',
  'Schools and partners',
]

export const services = [
  'Scouting',
  'Consulting',
  'Mentoring',
  'Residential Football School',
  'European Programmes',
  'Coach Education',
  'Partner with us',
  'Employment',
  'General enquiry',
]

// Sent through the existing EmailJS template (user_name, user_location,
// user_email, user_phone, interest, message), so the template needs no change.
export const bookingForm = {
  id: 'booking',
  label: 'Consultation request form',
  submitLabel: 'Request a consultation',
  successText:
    'Thank you. Your consultation request has been sent; we will reply by email to confirm a time.',
  fields: [
    {
      name: 'user_name',
      label: 'Full name',
      required: true,
      autoComplete: 'name',
    },
    {
      name: 'user_email',
      label: 'Email',
      type: 'email',
      required: true,
      autoComplete: 'email',
      rules: {
        pattern: {
          value: EMAIL_PATTERN,
          message: 'Enter an email address like name@example.com',
        },
      },
    },
    {
      name: 'user_phone',
      label: 'Phone',
      type: 'tel',
      required: true,
      autoComplete: 'tel',
    },
    {
      name: 'user_location',
      label: 'Town or city, country',
      required: true,
      autoComplete: 'address-level2',
    },
    {
      name: 'service',
      label: 'What is it about?',
      type: 'select',
      required: true,
      options: services,
    },
    {
      name: 'date',
      label: 'Preferred date',
      type: 'date',
      help: 'Optional. We will confirm a time that works.',
    },
    {
      name: 'message',
      label: 'What would you like to discuss?',
      type: 'textarea',
      required: true,
      wide: true,
    },
  ],
  toParams: (v) => ({
    user_name: v.user_name,
    user_email: v.user_email,
    user_phone: v.user_phone,
    user_location: v.user_location,
    interest: `Consultation request: ${v.service}`,
    message: [v.date && `Preferred date: ${v.date}`, v.message]
      .filter(Boolean)
      .join('\n\n'),
  }),
}
