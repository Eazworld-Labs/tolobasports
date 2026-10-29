import {
  HiOutlineAtSymbol,
  HiOutlineBars3BottomRight,
  HiOutlineBuildingLibrary,
} from 'react-icons/hi2'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { devicesMax } from '../styles/BreakPoint'
import Sidebar from './SideBar'

const StyledNav = styled.nav`
  background-color: var(--color-ink-700);
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const StyledUl = styled.ul`
  display: flex;
  padding-right: 15rem;

  @media ${devicesMax.md} {
    padding-right: 4rem;
  }
  @media ${devicesMax.sm} {
    padding-right: 1rem;
  }
`
const StyledLi = styled.li`
  padding: 0.5rem 2rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid var(--color-signal);
  color: var(--color-signal);

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover {
    background-color: var(--color-signal);
    color: var(--color-white);
  }

  &:nth-child(1) {
    border-left: 1px solid var(--color-signal);
  }
  @media ${devicesMax.md} {
    font-size: 1.2rem;
  }
  @media ${devicesMax.sm} {
    font-size: 1rem;
  }
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function NavBar() {
  const ref = useRef('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(function () {
    function handleClick(e) {
      if (!ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <>
      <Sidebar type={isOpen ? 'open' : ''} setIsOpen={setIsOpen} />
      <StyledNav ref={ref}>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to="/">
              <HiOutlineBuildingLibrary />
              Home
            </StyledNavLink>
          </StyledLi>

          <StyledLi>
            <StyledNavLink to="/contact">
              <HiOutlineAtSymbol />
              Contact
            </StyledNavLink>
          </StyledLi>
          <StyledLi onClick={() => setIsOpen(true)}>
            <HiOutlineBars3BottomRight />
            Menu
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </>
  )
}

export default NavBar
