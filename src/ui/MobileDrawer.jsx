import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HiXMark } from 'react-icons/hi2'
import { ALL_LINKS, CONTACT_LINK } from './navLinks'

const Root = styled.div`
  position: fixed;
  inset: 0;
  z-index: var(--z-drawer);
  visibility: hidden;
  pointer-events: none;
  transition: visibility 0s linear 0.3s;

  ${(props) =>
    props.$open &&
    `
    visibility: visible;
    pointer-events: auto;
    transition-delay: 0s;
  `}
`

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--color-backdrop);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  transition: opacity 0.3s;
`

const Panel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(32rem, 88vw);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
  background-color: var(--color-ink-900);
  box-shadow: var(--shadow-lg);
  transform: translateX(${(props) => (props.$open ? '0' : '100%')});
  transition: transform 0.3s ease;
`

const PanelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4) var(--space-3) var(--space-6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`

const PanelTitle = styled.p`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-white);
`

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  background: none;
  border: none;
  border-radius: var(--radius-sm);
  color: var(--color-white);

  & svg {
    width: 2.6rem;
    height: 2.6rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const List = styled.ul`
  padding: var(--space-3) 0 var(--space-7);
`

const DrawerLink = styled(NavLink)`
  display: block;
  padding: var(--space-3) var(--space-6);
  border-left: 4px solid transparent;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-200);

  &:hover {
    color: var(--color-white);
    background-color: rgba(255, 255, 255, 0.06);
  }
  &.active {
    color: var(--color-white);
    border-left-color: var(--color-lime);
    background-color: rgba(255, 255, 255, 0.08);
  }
`

const ContactItem = styled.li`
  padding: var(--space-5) var(--space-6) 0;
`

const ContactLink = styled(NavLink)`
  display: block;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-sm);
  background-color: var(--color-signal-600);
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;

  &:hover,
  &.active {
    background-color: var(--color-signal-700);
  }
`

function MobileDrawer({ open, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  // Lock page scroll while the drawer is open, without a layout jump.
  useEffect(() => {
    if (!open) return
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
  }, [open])

  // Move focus in, close on Escape, keep Tab inside the panel.
  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled])',
      )
      if (!focusable.length) return
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

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return createPortal(
    <Root $open={open}>
      <Backdrop $open={open} onClick={onClose} aria-hidden="true" />
      <Panel
        id="mobile-nav"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        $open={open}
      >
        <PanelTop>
          <PanelTitle>Menu</PanelTitle>
          <CloseButton
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
          >
            <HiXMark aria-hidden="true" />
          </CloseButton>
        </PanelTop>
        <nav aria-label="Mobile">
          <List>
            {ALL_LINKS.filter((l) => l.to !== CONTACT_LINK.to).map((link) => (
              <li key={link.to}>
                <DrawerLink to={link.to} end={link.end} onClick={onClose}>
                  {link.drawerLabel || link.label}
                </DrawerLink>
              </li>
            ))}
            <ContactItem>
              <ContactLink to={CONTACT_LINK.to} onClick={onClose}>
                {CONTACT_LINK.drawerLabel}
              </ContactLink>
            </ContactItem>
          </List>
        </nav>
      </Panel>
    </Root>,
    document.body,
  )
}

export default MobileDrawer
