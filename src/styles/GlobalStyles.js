import { createGlobalStyle } from 'styled-components'
import { devicesMax } from './BreakPoint'

// Design tokens. 1rem = 10px (see html font-size below).
const GlobalStyles = createGlobalStyle`
:root {
  /* Colour: brand */
  --color-ink-900: #141a26;
  --color-ink-700: #2c3343;
  --color-signal: #ea2642;
  --color-signal-600: #c91d37;
  --color-lime: #b5d334;
  --color-white: #fff;

  /* Colour: neutrals */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  /* Colour: roles */
  --color-text: var(--color-grey-700);
  --color-text-strong: var(--color-ink-900);
  --color-text-muted: var(--color-grey-500);
  --color-bg: var(--color-white);
  --color-focus: var(--color-signal);
  --color-backdrop: rgba(20, 26, 38, 0.6);

  /* Type: families */
  --font-heading: 'Barlow Condensed', 'Arial Narrow', sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;

  /* Type: fluid scale (clamp between phone and desktop) */
  --text-xs: clamp(1.2rem, 1.15rem + 0.1vw, 1.3rem);
  --text-sm: clamp(1.3rem, 1.25rem + 0.15vw, 1.4rem);
  --text-base: 1.6rem;
  --text-lg: clamp(1.7rem, 1.55rem + 0.4vw, 2rem);
  --text-xl: clamp(2rem, 1.7rem + 0.8vw, 2.6rem);
  --heading-4: clamp(2.2rem, 1.7rem + 1.4vw, 3rem);
  --heading-3: clamp(2rem, 1.7rem + 0.8vw, 2.6rem);
  --heading-2: clamp(2.6rem, 1.9rem + 2vw, 3.8rem);
  --heading-1: clamp(3.4rem, 1.6rem + 4vw, 5.6rem);

  /* Spacing */
  --space-1: 0.4rem;
  --space-2: 0.8rem;
  --space-3: 1.2rem;
  --space-4: 1.6rem;
  --space-5: 2rem;
  --space-6: 2.4rem;
  --space-7: 3.2rem;
  --space-8: 4rem;
  --space-9: 4.8rem;
  --space-10: 6.4rem;
  --space-11: 8rem;

  /* Layout */
  --container-max: 128rem;
  --container-pad: clamp(1.6rem, 4vw, 4rem);

  /* Radii */
  --radius-xs: 3px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(20, 26, 38, 0.35);
  --shadow-md: 0 0.6rem 2.4rem rgba(20, 26, 38, 0.25);
  --shadow-lg: 0 2.4rem 3.2rem rgba(20, 26, 38, 0.35);

  /* Z-index */
  --z-header: 50;
  --z-drawer: 60;
  --z-modal: 100;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  -webkit-text-size-adjust: 100%;

  @media ${devicesMax.lg} {
    font-size: 60%;
  }
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  line-height: 1.1;
  text-wrap: balance;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

p {
  hyphens: auto;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

/* Keyboard focus only; mouse clicks do not show the ring */
:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`

export default GlobalStyles
