import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

// Light/dark switch. Until the visitor picks one, the site follows the system
// setting; a pick is saved in localStorage and applied by index.html on load.
const query = '(prefers-color-scheme: dark)'

function currentTheme() {
  const set = document.documentElement.getAttribute('data-theme')
  if (set === 'light' || set === 'dark') return set
  return window.matchMedia(query).matches ? 'dark' : 'light'
}

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 4.4rem;
  height: 4.4rem;
  border: 1px solid var(--color-line-strong);
  border-radius: var(--radius-sm);
  background: none;
  color: var(--color-heading);

  & svg {
    width: 2.2rem;
    height: 2.2rem;
  }
  &:hover {
    background-color: var(--color-paper);
  }
`

function ThemeToggle({ className }) {
  const [theme, setTheme] = useState(currentTheme)

  // Follow system changes while the visitor has not made a choice.
  useEffect(() => {
    const media = window.matchMedia(query)
    function onChange() {
      if (!document.documentElement.getAttribute('data-theme')) {
        setTheme(currentTheme())
      }
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Private mode: the choice lasts for this visit only.
    }
    // Match the browser UI colour to the chosen theme.
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) =>
        m.setAttribute('content', next === 'dark' ? '#0f1a29' : '#ffffff'),
      )
    setTheme(next)
  }

  const dark = theme === 'dark'
  return (
    <Toggle
      type="button"
      className={className}
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      {dark ? (
        <HiOutlineSun aria-hidden="true" />
      ) : (
        <HiOutlineMoon aria-hidden="true" />
      )}
    </Toggle>
  )
}

export default ThemeToggle
