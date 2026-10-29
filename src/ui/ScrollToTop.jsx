import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the top on route changes; leave in-page hash links to the browser.
// A layout effect, so it runs before the new page's reveal elements measure themselves.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
