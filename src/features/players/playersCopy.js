import { EMAIL_PATTERN } from '../../ui/formPatterns'

export const pageTitle = 'Players'
export const intro =
  'Football is our focus, and athletes from other sports are welcome too. Apply to be scouted and mentored by our UEFA certified coaches.'

// Player stories appear on the page only when this list has entries.
// Each: { name, photo (key in ui/photos.js), club, highlight, text }.
export const stories = []

export const storiesHeading = 'Player stories'
export const storiesIntro =
  "Players we have nurtured have represented Ghana's junior national teams and signed with European clubs."

export const applyHeading = 'Apply as a player'
export const applyIntro =
  'Send your details and a highlight video. Our UEFA certified coaches review every application.'

export const sports = ['Football', 'Other sport']

export function ageFrom(dob) {
  if (!dob) return null
  const birth = new Date(dob)
  if (Number.isNaN(birth.getTime())) return null
  const now = new Date()
  let age = now.getFullYear() - birth.getFullYear()
  const m = now.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age -= 1
  return age
}

const isMinor = (v) => {
  const age = ageFrom(v.dob)
  return age !== null && age < 18
}

const URL_PATTERN = /^https?:\/\/\S+\.\S+/

export const applicationForm = {
  id: 'apply',
  label: 'Player application form',
  submitLabel: 'Send application',
  successText:
    'Thank you. Your application has been sent; our coaches will review it and reply by email.',
  fields: [
    {
      name: 'user_name',
      label: 'Full name',
      required: true,
      autoComplete: 'name',
    },
    {
      name: 'dob',
      label: 'Date of birth',
      type: 'date',
      required: true,
      autoComplete: 'bday',
      help: 'Applicants under 18 also need a parent or guardian contact.',
    },
    { name: 'nationality', label: 'Nationality', required: true },
    {
      name: 'user_location',
      label: 'Town or city, country',
      required: true,
      autoComplete: 'address-level2',
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
      name: 'sport',
      label: 'Sport',
      type: 'select',
      required: true,
      options: sports,
    },
    {
      name: 'other_sport',
      label: 'Your sport',
      required: true,
      showIf: (v) => v.sport === 'Other sport',
    },
    {
      name: 'position',
      label: 'Position or event',
      required: true,
      placeholder: 'e.g. Striker, 100m',
    },
    { name: 'club', label: 'Current club or school' },
    {
      name: 'video',
      label: 'Highlight video link',
      type: 'url',
      required: true,
      wide: true,
      placeholder: 'https://',
      help: 'A YouTube or Google Drive link to match or training footage.',
      rules: {
        pattern: {
          value: URL_PATTERN,
          message: 'Enter a full link starting with https://',
        },
      },
    },
    {
      name: 'guardian_name',
      label: 'Parent or guardian name',
      required: true,
      group: 'Parent or guardian',
      showIf: isMinor,
    },
    {
      name: 'guardian_phone',
      label: 'Parent or guardian phone',
      type: 'tel',
      required: true,
      group: 'Parent or guardian',
      showIf: isMinor,
    },
    {
      name: 'message',
      label: 'Anything else we should know?',
      type: 'textarea',
      wide: true,
    },
  ],
  toParams: (v) => ({
    user_name: v.user_name,
    user_email: v.user_email,
    user_phone: v.user_phone,
    user_location: v.user_location,
    interest: 'Player application',
    message: [
      `Date of birth: ${v.dob} (age ${ageFrom(v.dob)})`,
      `Nationality: ${v.nationality}`,
      `Sport: ${v.sport === 'Other sport' ? v.other_sport : v.sport}`,
      `Position or event: ${v.position}`,
      v.club && `Current club or school: ${v.club}`,
      `Highlight video: ${v.video}`,
      v.guardian_name &&
        `Parent or guardian: ${v.guardian_name}, ${v.guardian_phone}`,
      v.message && `\n${v.message}`,
    ]
      .filter(Boolean)
      .join('\n'),
  }),
}
