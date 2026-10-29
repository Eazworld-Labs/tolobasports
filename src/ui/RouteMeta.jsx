import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { metaFor } from './pageMeta'

// Keeps <title> and <meta name="description"> in step with the current route.
function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description } = metaFor(pathname)
    document.title = title

    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [pathname])

  return null
}

export default RouteMeta
