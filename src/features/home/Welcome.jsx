import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import ButtonLink from '../../ui/ButtonLink'
import { hero } from './homeContent'

const Hero = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background-color: var(--color-ink-900);
  color: var(--color-white);

  /* thin brand stripe along the bottom edge */
  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0 0;
    height: 0.5rem;
    background: linear-gradient(
      90deg,
      var(--color-lime) 0,
      var(--color-lime) 22%,
      var(--color-signal-600) 22%,
      var(--color-signal-600) 44%,
      transparent 44%
    );
  }
`

const Backdrop = styled.img`
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const Shade = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    90deg,
    rgba(20, 26, 38, 0.94) 0%,
    rgba(20, 26, 38, 0.78) 50%,
    rgba(20, 26, 38, 0.5) 100%
  );

  @media ${devicesMax.lg} {
    background: linear-gradient(
      180deg,
      rgba(20, 26, 38, 0.92) 0%,
      rgba(20, 26, 38, 0.78) 100%
    );
  }
`

const Inner = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: clamp(4rem, 7vw, 8rem) var(--container-pad) 0;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: var(--space-8);
  align-items: end;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-6);
  }
`

const Copy = styled.div`
  align-self: center;
  padding-bottom: clamp(4rem, 7vw, 8rem);

  @media ${devicesMax.lg} {
    padding-bottom: 0;
  }
`

const Accent = styled.span`
  display: block;
  width: 7.2rem;
  height: 0.6rem;
  margin-bottom: var(--space-5);
  border-radius: var(--radius-pill);
  background-color: var(--color-lime);
`

// Sized from the viewport so "Toloba Sports consult" stays on one line next to
// the figure (two-column layout) and on phones.
const Title = styled.h1`
  font-size: min(70px, max(40px, calc((100vw - 120px) * 0.062)));
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.005em;
  color: var(--color-white);

  @media ${devicesMax.lg} {
    font-size: clamp(40px, 7vw, 64px);
  }
`

const Tagline = styled.p`
  max-width: 48rem;
  margin-top: var(--space-5);
  font-size: var(--text-xl);
  line-height: 1.5;
  color: var(--color-grey-200);
  hyphens: manual;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-8);
`

// The cut-out is trimmed to the figure, so cap its width in px (rem shrinks
// below 1024px) and let it sit on the bottom edge of the hero.
const Figure = styled.div`
  justify-self: end;
  width: min(100%, 460px);

  @media ${devicesMax.lg} {
    justify-self: center;
    width: min(100%, 360px);
  }
`

const Founder = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

function Welcome() {
  return (
    <Hero aria-labelledby="hero-title">
      <Backdrop
        src="/optimized/hero-bg-1600.webp"
        srcSet="/optimized/hero-bg-960.webp 960w, /optimized/hero-bg-1600.webp 1600w, /optimized/hero-bg-2400.webp 2400w"
        sizes="100vw"
        width="1600"
        height="1067"
        alt=""
        fetchpriority="high"
      />
      <Shade />
      <Inner>
        <Copy>
          <Accent aria-hidden="true" />
          <Title id="hero-title">{hero.title}</Title>
          <Tagline>{hero.tagline}</Tagline>
          <Actions>
            <ButtonLink to={hero.primaryCta.to}>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink to={hero.secondaryCta.to} $variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </Actions>
        </Copy>
        <Figure>
          <Founder
            src="/optimized/founder-700.webp"
            srcSet="/optimized/founder-450.webp 450w, /optimized/founder-700.webp 700w, /optimized/founder-920.webp 920w"
            sizes="(max-width: 1024px) 360px, 460px"
            width="700"
            height="873"
            alt={hero.imageAlt}
            fetchpriority="high"
          />
        </Figure>
      </Inner>
    </Hero>
  )
}

export default Welcome
