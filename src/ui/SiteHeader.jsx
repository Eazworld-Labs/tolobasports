import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { HiBars3, HiChevronDown, HiOutlineEnvelope } from 'react-icons/hi2'
import { devicesMax } from '../styles/BreakPoint'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import MobileDrawer from './MobileDrawer'
import { SITE } from './siteInfo'
import { CONTACT_LINK, MORE_LINKS, PRIMARY_LINKS } from './navLinks'

const UTILITY_HEIGHT = '3.6rem'

// The header sticks with a negative top offset equal to the utility bar, so the
// slim bar scrolls away and only the main bar stays pinned.
const StyledHeader = styled.header`
  --utility-h: ${UTILITY_HEIGHT};
  position: sticky;
  top: calc(var(--utility-h) * -1);
  z-index: var(--z-header);
`

const SkipLink = styled.a`
  position: absolute;
  left: var(--space-4);
  top: calc(var(--utility-h) + var(--space-2));
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius);
  background-color: var(--color-white);
  color: var(--color-ink-900);
  font-weight: 600;
  transform: translateY(-400%);

  &:focus {
    transform: translateY(0);
  }
`

const Container = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding-inline: var(--container-pad);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
`

const UtilityBar = styled.div`
  height: var(--utility-h);
  background-color: var(--color-ink-900);
  color: var(--color-grey-300);
  font-size: var(--text-xs);
  display: flex;
  align-items: center;
`

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;

  & svg {
    flex: none;
    width: 1.6rem;
    height: 1.6rem;
  }
  &:hover {
    color: var(--color-white);
    text-decoration: underline;
  }
`

const MainBar = styled.div`
  background-color: var(--color-ink-700);
  border-bottom: 1px solid var(--color-grey-700);

  & > div {
    min-height: calc(7.2rem - 1px);

    @media ${devicesMax.md} {
      min-height: calc(6.4rem - 1px);
    }
  }
`

const DesktopNav = styled.nav`
  margin-left: auto;

  @media ${devicesMax.lg} {
    display: none;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--space-1);
`

const navItem = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3) calc(var(--space-2) - 3px);
  border: 0;
  border-bottom: 3px solid transparent;
  border-radius: var(--radius);
  background: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-200);
  white-space: nowrap;
  transition:
    color 0.2s,
    background-color 0.2s;

  &:hover {
    color: var(--color-white);
    background-color: rgba(255, 255, 255, 0.08);
  }
`

const activeMark = css`
  color: var(--color-white);
  border-bottom-color: var(--color-lime);
  border-radius: var(--radius) var(--radius) 0 0;
`

const NavItem = styled(NavLink)`
  ${navItem}

  &.active {
    ${activeMark}
  }
`

const MoreWrap = styled.div`
  position: relative;
`

const MoreButton = styled.button`
  ${navItem}

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    transition: transform 0.2s;
    transform: rotate(${(props) => (props.$open ? '180deg' : '0')});
  }

  ${(props) => props.$active && activeMark}
`

const MoreList = styled.ul`
  display: ${(props) => (props.$open ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + var(--space-2));
  right: 0;
  min-width: 20rem;
  padding: var(--space-2);
  border: 1px solid var(--color-grey-700);
  border-radius: var(--radius);
  background-color: var(--color-ink-900);
`

const MoreLink = styled(NavLink)`
  display: block;
  padding: var(--space-2) var(--space-3) var(--space-2)
    calc(var(--space-3) - 3px);
  border-left: 3px solid transparent;
  border-radius: var(--radius);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-200);

  &:hover {
    color: var(--color-white);
    background-color: rgba(255, 255, 255, 0.08);
  }
  &.active {
    color: var(--color-white);
    border-left-color: var(--color-lime);
  }
`

const CtaLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  margin-left: var(--space-2);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius);
  background-color: var(--color-signal-600);
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background-color 0.2s;

  &:hover,
  &.active {
    background-color: var(--color-signal-700);
  }
`

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  margin-left: auto;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--radius);
  background: none;
  color: var(--color-white);

  & svg {
    width: 2.6rem;
    height: 2.6rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media ${devicesMax.lg} {
    display: inline-flex;
  }
`

function MoreMenu() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const buttonRef = useRef(null)
  const { pathname } = useLocation()
  const isActive = MORE_LINKS.some((l) => pathname.startsWith(l.to))

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    function onPointerDown(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <MoreWrap
      ref={wrapRef}
      onBlur={(e) => {
        if (!wrapRef.current.contains(e.relatedTarget)) setOpen(false)
      }}
    >
      <MoreButton
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="more-menu"
        $open={open}
        $active={isActive}
        onClick={() => setOpen((o) => !o)}
      >
        More
        <HiChevronDown aria-hidden="true" />
      </MoreButton>
      <MoreList id="more-menu" $open={open}>
        {MORE_LINKS.map((link) => (
          <li key={link.to}>
            <MoreLink to={link.to}>{link.label}</MoreLink>
          </li>
        ))}
      </MoreList>
    </MoreWrap>
  )
}

function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { pathname } = useLocation()

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  // Back/forward navigation also closes the drawer.
  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  // The drawer is mobile-only: close it if the window grows to desktop width.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1025px)')
    function onChange(e) {
      if (e.matches) setDrawerOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <StyledHeader>
      <SkipLink href="#main">Skip to content</SkipLink>
      <UtilityBar>
        <Container>
          <EmailLink href={`mailto:${SITE.email}`}>
            <HiOutlineEnvelope aria-hidden="true" />
            {SITE.email}
          </EmailLink>
          <SocialLinks />
        </Container>
      </UtilityBar>
      <MainBar>
        <Container>
          <Logo />
          <DesktopNav aria-label="Main">
            <NavList>
              {PRIMARY_LINKS.map((link) => (
                <li key={link.to}>
                  <NavItem to={link.to} end={link.end}>
                    {link.label}
                  </NavItem>
                </li>
              ))}
              <li>
                <MoreMenu />
              </li>
              <li>
                <CtaLink to={CONTACT_LINK.to}>{CONTACT_LINK.label}</CtaLink>
              </li>
            </NavList>
          </DesktopNav>
          <MenuButton
            ref={menuButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav"
            onClick={() => setDrawerOpen(true)}
          >
            <HiBars3 aria-hidden="true" />
          </MenuButton>
        </Container>
      </MainBar>
      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />
    </StyledHeader>
  )
}

export default SiteHeader
