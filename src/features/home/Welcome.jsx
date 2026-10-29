import { useEffect, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi2'
import { devicesMax } from '../../styles/BreakPoint'
import ButtonLink from '../../ui/ButtonLink'
import { hero } from './homeContent'

// ---------------------------------------------------------------------------
// Trust strip. These are facts taken from the site's own scouting copy, so they
// are safe to show. EDIT HERE to change what the strip says.
//
// PLACEHOLDER ideas (not real data; replace with true figures before using):
//   { value: '000+', label: 'Athletes mentored' }
//   { value: '00+', label: 'Years of experience' }
//   { value: '00', label: 'Partner clubs' }
// ---------------------------------------------------------------------------
const HERO_STATS = [
  { value: 'UEFA', label: 'Certified coaches' },
  { value: '3', label: 'Partner scout countries' },
  { value: '2×', label: 'Scouting visits a year' },
]

const motionOK = '@media (prefers-reduced-motion: no-preference)'

const rise = keyframes`
  from { opacity: 0; transform: translateY(26px); }
  to { opacity: 1; transform: none; }
`
const slideIn = keyframes`
  from { opacity: 0; transform: translateX(48px); }
  to { opacity: 1; transform: none; }
`
const drift = keyframes`
  from { transform: scale(1.06); }
  to { transform: scale(1.16); }
`
const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(7px); }
`

// Entrance: content is visible by default; it only animates when motion is allowed.
const enter = (delay) => css`
  ${motionOK} {
    animation: ${rise} 0.85s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}s both;
  }
`

const Hero = styled.section`
  --edge: clamp(24px, 3.4vw, 52px);
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: min(780px, max(600px, calc(100svh - 10.8rem)));
  padding-bottom: calc(var(--edge) + 3.6rem);
  background-color: #0d121b;
  color: var(--color-white);

  @media ${devicesMax.lg} {
    min-height: 0;
  }
`

/* ---------- background layers ---------- */

const Backdrop = styled.div`
  position: absolute;
  inset: -4% 0;
  z-index: -6;
  will-change: transform;
`

// Duotone: the stadium photo is turned grey, then tinted navy/crimson by the wash.
const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 40%;
  filter: grayscale(1) contrast(1.15) brightness(0.8);

  ${motionOK} {
    animation: ${drift} 32s ease-in-out infinite alternate;
  }
`

const Wash = styled.div`
  position: absolute;
  inset: 0;
  z-index: -5;
  background:
    linear-gradient(
      100deg,
      rgba(13, 18, 27, 0.97) 0%,
      rgba(20, 26, 38, 0.9) 38%,
      rgba(36, 44, 66, 0.72) 68%,
      rgba(201, 29, 55, 0.4) 100%
    );

  @media ${devicesMax.lg} {
    background: linear-gradient(
      180deg,
      rgba(13, 18, 27, 0.96) 0%,
      rgba(20, 26, 38, 0.86) 55%,
      rgba(36, 44, 66, 0.8) 100%
    );
  }
`

const Vignette = styled.div`
  position: absolute;
  inset: 0;
  z-index: -4;
  background: radial-gradient(
    120% 95% at 72% 42%,
    transparent 38%,
    rgba(6, 9, 15, 0.82) 100%
  );
`

// Thin diagonal light streaks in the brand lime, fading out toward the text.
const Streaks = styled.div`
  position: absolute;
  inset: 0;
  z-index: -3;
  background: repeating-linear-gradient(
    115deg,
    transparent 0 150px,
    rgba(181, 211, 52, 0.09) 150px 152px,
    transparent 152px 330px
  );
  -webkit-mask-image: linear-gradient(to right, transparent 25%, #000 80%);
  mask-image: linear-gradient(to right, transparent 25%, #000 80%);
`

// Large outlined brand word behind the founder.
const BigWord = styled.span`
  position: absolute;
  right: -1vw;
  top: 46%;
  z-index: -2;
  font-family: var(--font-heading);
  font-size: clamp(120px, 24vw, 380px);
  font-weight: 800;
  line-height: 0.8;
  letter-spacing: 0.02em;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
  transform: translateY(-50%);
  user-select: none;
  pointer-events: none;

  @media ${devicesMax.lg} {
    top: auto;
    bottom: 28%;
    right: 50%;
    transform: translateX(50%);
    font-size: 34vw;
  }
`

/* ---------- layout ---------- */

const Inner = styled.div`
  flex: 1;
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: clamp(32px, 3.6vw, 56px) var(--container-pad) 0;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: clamp(16px, 3vw, 48px);
  align-items: stretch;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
    padding-top: 40px;
    gap: 0;
  }
`

const Copy = styled.div`
  align-self: center;
  padding-bottom: 32px;

  @media ${devicesMax.lg} {
    padding-bottom: 8px;
  }
`

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;
  font-size: clamp(12px, 0.25vw + 11px, 14px);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-lime);
  ${enter(0.05)}

  &::before {
    content: '';
    width: 36px;
    height: 3px;
    border-radius: 3px;
    background-color: var(--color-lime);
  }

  & .dot {
    color: var(--color-signal);
  }
`

const Title = styled.h1`
  max-width: 17ch;
  font-size: clamp(40px, 4vw + 8px, 74px);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: 0.005em;
  color: var(--color-white);
  text-wrap: balance;
  ${enter(0.15)}

  & em {
    font-style: normal;
    color: var(--color-lime);
  }
`

const Lead = styled.p`
  max-width: 46ch;
  margin-top: 20px;
  font-size: clamp(16px, 0.5vw + 12px, 20px);
  line-height: 1.65;
  color: var(--color-grey-200);
  hyphens: manual;
  ${enter(0.3)}
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
  ${enter(0.45)}
`

const HeroButton = styled(ButtonLink)`
  gap: 10px;
  padding-inline: 28px;

  & svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s;
  }
  &:hover svg {
    transform: translateX(4px);
  }
  &:focus-visible {
    outline: 3px solid var(--color-lime);
    outline-offset: 3px;
  }
`

/* ---------- founder ---------- */

const Stage = styled.div`
  position: relative;
  min-height: clamp(360px, 36vw, 560px);

  @media ${devicesMax.lg} {
    height: clamp(280px, 72vw, 420px);
    min-height: 0;
    margin-top: 12px;
    overflow: hidden;
  }
`

// Crimson slab behind the figure, with a lime edge.
const Slab = styled.div`
  position: absolute;
  inset: 4% -12% 0 14%;
  z-index: 0;
  background: linear-gradient(160deg, var(--color-signal-600) 0%, #6d0d20 100%);
  clip-path: polygon(34% 0, 100% 0, 100% 100%, 0 100%);
  opacity: 0.36;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 38%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 38%);

  @media ${devicesMax.lg} {
    inset: 22% -10% 0 24%;
    opacity: 0.3;
  }
  ${motionOK} {
    animation: ${slideIn} 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.2s both;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-lime);
    clip-path: polygon(34% 0, 35.6% 0, 1.6% 100%, 0 100%);
  }
`

const Glow = styled.div`
  position: absolute;
  inset: 0 -10% 0 5%;
  z-index: 1;
  background: radial-gradient(
    55% 60% at 58% 42%,
    rgba(181, 211, 52, 0.26),
    rgba(201, 29, 55, 0.14) 55%,
    transparent 75%
  );
  filter: blur(18px);
`

// The cut-out is cropped at its right and bottom edges, so both fade out.
const Figure = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  height: 112%;
  aspect-ratio: 780 / 973;
  max-width: 100%;
  -webkit-mask-image:
    linear-gradient(to bottom, #000 58%, transparent 97%),
    linear-gradient(to left, transparent 0%, #000 17%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, #000 58%, transparent 97%),
    linear-gradient(to left, transparent 0%, #000 17%);
  mask-composite: intersect;
  filter: drop-shadow(0 0 28px rgba(0, 0, 0, 0.55)) saturate(0.92)
    contrast(1.05);
  ${motionOK} {
    animation: ${slideIn} 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.25s both;
  }

  @media ${devicesMax.lg} {
    right: 2%;
    height: 100%;
    ${motionOK} {
      animation: ${rise} 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.25s both;
    }
  }
`

const Founder = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`

/* ---------- trust strip, scroll cue, edge ---------- */

const StatsBar = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding-inline: var(--container-pad);
  ${enter(0.6)}
`

const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.07),
    rgba(255, 255, 255, 0.02)
  );
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
`

const Stat = styled.li`
  padding: 14px clamp(12px, 2.4vw, 32px);

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.14);
  }
`

const StatValue = styled.p`
  font-family: var(--font-heading);
  font-size: clamp(26px, 2.4vw + 10px, 44px);
  font-weight: 800;
  line-height: 1;
  color: var(--color-lime);
`

const StatLabel = styled.p`
  margin-top: 6px;
  font-size: clamp(11px, 0.3vw + 9px, 14px);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-grey-200);
`

const Cue = styled.a`
  position: absolute;
  left: max(var(--container-pad), calc((100% - var(--container-max)) / 2 + var(--container-pad)));
  bottom: 10px;
  z-index: 6;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px 6px 0;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-grey-200);

  & svg {
    width: 20px;
    height: 20px;
    color: var(--color-lime);
    ${motionOK} {
      animation: ${bob} 1.8s ease-in-out infinite;
    }
  }
  &:hover {
    color: var(--color-white);
  }
  &:focus-visible {
    outline: 3px solid var(--color-lime);
  }

  @media ${devicesMax.lg} {
    display: none;
  }
`

// Diagonal edge into the next (white) section, with a lime/crimson accent line.
const Edge = styled.div`
  position: absolute;
  inset: auto 0 -1px 0;
  z-index: 5;
  height: var(--edge);
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
  }
  &::before {
    transform: translateY(-6px);
    background: linear-gradient(
      90deg,
      var(--color-lime) 0 38%,
      var(--color-signal-600) 38% 100%
    );
  }
  &::after {
    background: var(--color-bg);
  }
`

function Welcome() {
  const bgRef = useRef(null)

  // Gentle parallax on the background (skipped when the user prefers less motion).
  useEffect(() => {
    const el = bgRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    let frame = 0
    function update() {
      frame = 0
      el.style.transform = `translate3d(0, ${Math.min(window.scrollY, 900) * 0.16}px, 0)`
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <Hero aria-labelledby="hero-title">
      <Backdrop ref={bgRef} aria-hidden="true">
        <BgImg
          src="/optimized/hero-bg-1600.webp"
          srcSet="/optimized/hero-bg-960.webp 960w, /optimized/hero-bg-1600.webp 1600w, /optimized/hero-bg-2400.webp 2400w"
          sizes="100vw"
          width="1600"
          height="1067"
          alt=""
          fetchpriority="high"
        />
      </Backdrop>
      <Wash />
      <Vignette />
      <Streaks aria-hidden="true" />
      <BigWord aria-hidden="true">TOLOBA</BigWord>

      <Inner>
        <Copy>
          <Eyebrow>
            {hero.eyebrow.map((item, i) => (
              <span key={item}>
                {i > 0 && (
                  <span className="dot" aria-hidden="true">
                    •{' '}
                  </span>
                )}
                {item}
              </span>
            ))}
          </Eyebrow>
          <Title id="hero-title">
            {hero.titleStart} <em>{hero.titleHighlight}</em>
          </Title>
          <Lead>{hero.lead}</Lead>
          <Actions>
            <HeroButton to={hero.primaryCta.to}>
              {hero.primaryCta.label}
              <HiArrowRight aria-hidden="true" />
            </HeroButton>
            <HeroButton to={hero.secondaryCta.to} $variant="secondary">
              {hero.secondaryCta.label}
            </HeroButton>
          </Actions>
        </Copy>

        <Stage>
          <Slab aria-hidden="true" />
          <Glow aria-hidden="true" />
          <Figure>
            <Founder
              src="/optimized/founder-soft-780.webp"
              srcSet="/optimized/founder-soft-520.webp 520w, /optimized/founder-soft-780.webp 780w, /optimized/founder-soft-1040.webp 1040w"
              sizes="(max-width: 1024px) 420px, 560px"
              width="780"
              height="973"
              alt={hero.imageAlt}
              decoding="async"
            />
          </Figure>
        </Stage>
      </Inner>

      <StatsBar>
        <Stats aria-label="Why athletes choose us">
          {HERO_STATS.map((stat) => (
            <Stat key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </Stat>
          ))}
        </Stats>
      </StatsBar>

      <Cue href="#interests" aria-label="Scroll to the next section">
        Scroll
        <HiChevronDown aria-hidden="true" />
      </Cue>
      <Edge aria-hidden="true" />
    </Hero>
  )
}

export default Welcome
