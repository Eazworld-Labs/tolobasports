import { useEffect, useLayoutEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

// Reveal-on-scroll wrapper. The styles live in GlobalStyles ([data-reveal]).
// States: no attribute (visible, also the no-JS / reduced-motion / already-in-view
// case), "armed" (hidden, waiting), "shown" (transitioning in). After the
// transition the attribute is dropped so the element's own transitions work again.
//
// Variants: fade-up, fade-in, slide-left (enters from the left), slide-right
// (enters from the right), scale-in.

function canAnimate() {
  return (
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function Reveal({
  as: Tag = 'div',
  variant = 'fade-up',
  delay = 0,
  threshold,
  rootMargin,
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ threshold, rootMargin })
  const [armed, setArmed] = useState(false)
  const [done, setDone] = useState(false)

  // Only elements that start below the fold are hidden; anything already on
  // screen at mount stays visible so content is never withheld on load.
  useLayoutEffect(() => {
    const element = ref.current
    if (!element || !canAnimate()) return
    const { top, bottom } = element.getBoundingClientRect()
    if (top < window.innerHeight * 0.92 && bottom > 0) return
    setArmed(true)
  }, [ref])

  // Safety net in case transitionend never fires (for example in a hidden tab).
  useEffect(() => {
    if (!armed || !inView) return
    const timer = setTimeout(() => setDone(true), 1600 + delay)
    return () => clearTimeout(timer)
  }, [armed, inView, delay])

  const state = !armed || done ? undefined : inView ? 'shown' : 'armed'

  return (
    <Tag
      ref={ref}
      data-reveal={state}
      data-variant={variant}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      onTransitionEnd={(event) => {
        if (
          inView &&
          event.target === event.currentTarget &&
          event.propertyName === 'opacity'
        ) {
          setDone(true)
        }
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
