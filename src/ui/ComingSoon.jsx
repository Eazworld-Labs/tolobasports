import StatusPage from './StatusPage'

function ComingSoon({ title, noindex }) {
  return (
    <StatusPage
      title={title}
      text="This page is coming soon. Get in touch and we will be happy to talk."
      primary={{ label: 'Contact us', to: '/contact' }}
      secondary={{ label: 'Back to home', to: '/' }}
      noindex={noindex}
    />
  )
}

export default ComingSoon
