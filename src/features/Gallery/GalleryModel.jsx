import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled, { keyframes } from 'styled-components'
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineXMark,
} from 'react-icons/hi2'

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

// Full-screen viewer, rendered in a portal above the sticky header.
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  background-color: rgba(20, 26, 38, 0.94);
  animation: ${fade} 0.2s ease;
`

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  color: var(--color-white);
`

const Counter = styled.p`
  font-size: var(--text-base);
  font-weight: 600;
  letter-spacing: 0.02em;
`

const Stage = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--space-4);
`

const Photo = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-sm);
`

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: var(--radius-pill);
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--color-white);
  transition: background-color 0.2s;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
  &:focus-visible {
    outline-color: var(--color-lime);
  }
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);
  padding: var(--space-4);
`

function GalleryModel({ images, index, onClose, onNavigate }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const image = images[index]
  const total = images.length

  // Lock page scroll while open, without a layout jump.
  useEffect(() => {
    const { body, documentElement } = document
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight
    const scrollbar = window.innerWidth - documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`
    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
    }
  }, [])

  // Move focus into the dialog when it opens.
  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  // Warm the cache for the neighbouring photos.
  useEffect(() => {
    for (const i of [index - 1, index + 1]) {
      new Image().src = images[(i + total) % total].full
    }
  }, [index, images, total])

  // Keyboard: Escape closes, arrows navigate, Tab stays inside the dialog.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onNavigate((index - 1 + total) % total)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        onNavigate((index + 1) % total)
      } else if (e.key === 'Tab') {
        const focusable = dialogRef.current.querySelectorAll('button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [index, total, onClose, onNavigate])

  function closeOnBackdrop(e) {
    if (e.target === e.currentTarget) onClose()
  }

  return createPortal(
    <Overlay onClick={closeOnBackdrop}>
      <Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        onClick={closeOnBackdrop}
      >
        <Bar onClick={closeOnBackdrop}>
          <Counter aria-live="polite">
            Photo {index + 1} of {total}
          </Counter>
          <IconButton
            ref={closeRef}
            type="button"
            aria-label="Close photo viewer"
            onClick={onClose}
          >
            <HiOutlineXMark aria-hidden="true" />
          </IconButton>
        </Bar>
        <Stage onClick={closeOnBackdrop}>
          <Photo
            key={image.full}
            src={image.full}
            width={image.fullWidth}
            height={image.fullHeight}
            alt={image.alt}
          />
        </Stage>
        <Nav onClick={closeOnBackdrop}>
          <IconButton
            type="button"
            aria-label="Previous photo"
            onClick={() => onNavigate((index - 1 + total) % total)}
          >
            <HiOutlineChevronLeft aria-hidden="true" />
          </IconButton>
          <IconButton
            type="button"
            aria-label="Next photo"
            onClick={() => onNavigate((index + 1) % total)}
          >
            <HiOutlineChevronRight aria-hidden="true" />
          </IconButton>
        </Nav>
      </Dialog>
    </Overlay>,
    document.body,
  )
}

export default GalleryModel
