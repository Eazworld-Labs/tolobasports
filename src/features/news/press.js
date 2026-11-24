// Press coverage of Toloba Sports Consult, newest first. Headlines and
// summaries follow the articles; `date` is only set when the article gives one.
// `photo` is a key in ui/photos.js; without one (and without a video) the list
// shows the Toloba logo tile.
export const press = [
  {
    id: 'modernghana-laiyah-cup',
    source: 'Modern Ghana',
    date: '2023-12-08',
    headline:
      'Toloba Sports Consult CEO supports grassroots football: donates water and drinks to Laiyah Cup organisers',
    summary:
      'Mr. Toloba donated water and drinks to the organisers of the Laiyah Cup football gala, where talented players from Nima, Maamobi and Accra Newtown were scouted at Kawukudi Park.',
    url: 'https://www.modernghana.com/sports/1278595/toloba-sports-consult-ceo-supports-grassroots-foot.html',
    photo: null, // the article's photo, once Toloba sends the original
  },
  {
    id: 'ghanaweb-turcaf',
    source: 'GhanaWeb',
    date: null,
    headline:
      'Musah Toloba recognised for sports initiatives and offered a collaboration by the Turcaf President',
    summary:
      'Mr. Muhammet Ali Aras, the President of Turcaf, commended Mr. Toloba for his efforts in identifying and nurturing talents and proposed a collaboration.',
    url: 'https://ghanaweb.mobi/ghanaian-entrepreneur-musah-toloba-recognized-for-sports-initiatives-and-receives-collaboration-offer-from-turcaf-president/',
    videoId: 'R4WnMNK6zQ0',
    videoTitle: 'Toloba Sports Consult and Turcaf collaboration',
  },
]

// "Dec 2023" from "2023-12-08"; null when the article has no date.
export function formatPressDate(iso) {
  if (!iso) return null
  const [y, m] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
