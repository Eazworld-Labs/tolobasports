import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the top on route changes; leave in-page hash links to the browser.
// A layout effect, so it runs before the new page's reveal elements measure themselves.
// After a route change (not the first load), focus moves to <main> so keyboard and
// screen reader users start at the new page's content instead of the old link.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const firstRender = useRef(true)

  useLayoutEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    if (firstRender.current) {
      firstRender.current = false
      return
    }
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
