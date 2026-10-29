import { useEffect } from 'react'

// Adds <meta name="robots" content="noindex"> while the calling page is mounted.
export function useNoIndex(enabled = true) {
  useEffect(() => {
    if (!enabled) return
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [enabled])
}
