import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { HiPause, HiPlay } from 'react-icons/hi2'
import { logos } from './partnersCopy'

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-25%); }
`

const COPIES = 4

// The marquee is clipped by its own overflow:hidden box, so it can never widen
// the page. Under prefers-reduced-motion the animation is off and only the first
// set of logos is shown, as a wrapping row.
const Clip = styled.div`
  overflow: hidden;
  padding-block: var(--space-4);
`

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 28s linear infinite;
  animation-play-state: ${(props) => (props.$paused ? 'paused' : 'running')};

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    width: auto;
    animation: none;
  }
`

const Set = styled.ul`
  display: flex;
  flex: none;
  align-items: center;
  gap: 40px;
  padding-right: 40px;

  @media (prefers-reduced-motion: reduce) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding-right: 0;

    &[aria-hidden='true'] {
      display: none;
    }
  }
`

const Logo = styled.li`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 120px;
  padding: 12px;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--radius-md);
  background-color: var(--color-white);
`

const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-4);

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--radius-pill);
  background-color: var(--color-white);
  color: var(--color-ink-700);

  & svg {
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
`

function PartnerLogos() {
  const [paused, setPaused] = useState(false)

  return (
    <>
      <Clip>
        <Track $paused={paused}>
          {Array.from({ length: COPIES }, (_, copy) => (
            // Only the first set is exposed to assistive technology.
            <Set key={copy} aria-hidden={copy > 0 ? 'true' : undefined}>
              {logos.map((logo) => (
                <Logo key={logo.base}>
                  <Img
                    src={`/optimized/${logo.base}-400.webp`}
                    width={logo.width}
                    height={logo.height}
                    alt={copy === 0 ? logo.alt : ''}
                    loading="lazy"
                    decoding="async"
                  />
                </Logo>
              ))}
            </Set>
          ))}
        </Track>
      </Clip>
      <Controls>
        <Toggle
          type="button"
          aria-pressed={paused}
          aria-label={
            paused ? 'Play partner logo animation' : 'Pause partner logo animation'
          }
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? <HiPlay aria-hidden="true" /> : <HiPause aria-hidden="true" />}
        </Toggle>
      </Controls>
    </>
  )
}

export default PartnerLogos
