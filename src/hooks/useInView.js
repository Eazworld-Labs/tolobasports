import { useEffect, useRef, useState } from 'react'

// Reports whether the element behind `ref` has entered the viewport. With `once`
// (the default) it stops observing after the first time. Without
// IntersectionObserver it reports true, so content is never left hidden.
export function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
} = {}) {
  const ref = useRef(null)
  const supported = typeof IntersectionObserver !== 'undefined'
  const [inView, setInView] = useState(!supported)

  useEffect(() => {
    const element = ref.current
    if (!element || !supported) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once, supported])

  return [ref, inView]
}
