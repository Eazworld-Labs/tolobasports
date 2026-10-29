/* eslint react/prop-types: 0 */
import StatusPage from './StatusPage'

function ComingSoon({ title, noindex }) {
  return (
    <StatusPage
      badge="Coming soon"
      title={title}
      text="We are still preparing this page. Get in touch and we will be happy to talk."
      primary={{ label: 'Contact us', to: '/contact' }}
      secondary={{ label: 'Back to home', to: '/' }}
      noindex={noindex}
    />
  )
}

export default ComingSoon
