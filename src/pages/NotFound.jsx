import StatusPage from '../ui/StatusPage'

// Shown for any URL that matches no route.
function NotFound() {
  return (
    <StatusPage
      title="Page not found"
      text="Error 404. We could not find the page you were looking for."
      primary={{ label: 'Back to home', to: '/' }}
      secondary={{ label: 'Contact us', to: '/contact' }}
      noindex
    />
  )
}

export default NotFound
