import { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { HiPlay } from 'react-icons/hi2'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import SectionHead from '../../ui/SectionHead'
import Block from '../../ui/kit/Block'
import { clips, formatDuration } from './gallery'
import GalleryModel from './GalleryModel'

// Videos as small poster tiles, like the photos. Clicking one opens the viewer,
// which plays it; nothing downloads until then.
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: var(--space-3);

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media ${devicesMax.sm} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-2);
  }
`

const Tile = styled.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: var(--color-band);
  cursor: pointer;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.04);
  }
`

// Play badge and length sit on a dark scrim so they read on any poster.
const Play = styled.span`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(10, 18, 32, 0.25);

  & svg {
    width: 4.4rem;
    height: 4.4rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: rgba(10, 18, 32, 0.7);
    color: var(--color-white);
  }
`

const Length = styled.span`
  position: absolute;
  right: var(--space-2);
  bottom: var(--space-2);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
  background-color: rgba(10, 18, 32, 0.8);
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--color-white);
`

function GalleryVideos() {
  const [openIndex, setOpenIndex] = useState(null)
  const triggerIndex = useRef(null)

  const open = useCallback((index) => {
    triggerIndex.current = index
    setOpenIndex(index)
  }, [])

  const close = useCallback(() => {
    setOpenIndex(null)
    requestAnimationFrame(() => {
      document
        .querySelector(`[data-video-index="${triggerIndex.current}"]`)
        ?.focus()
    })
  }, [])

  return (
    <Block $tone="paper" aria-labelledby="videos-title">
      <Container>
        <SectionHead
          id="videos-title"
          title="Videos"
          intro="Press a video to watch it; nothing downloads until then."
        />
        <Grid>
          {clips.map((clip, index) => (
            <li key={clip.key}>
              <Tile
                type="button"
                data-video-index={index}
                aria-haspopup="dialog"
                aria-label={`Play video: ${clip.alt} (${formatDuration(
                  clip.duration,
                )})`}
                onClick={() => open(index)}
              >
                <img src={clip.full} alt="" loading="lazy" decoding="async" />
                <Play aria-hidden="true">
                  <HiPlay />
                </Play>
                <Length aria-hidden="true">
                  {formatDuration(clip.duration)}
                </Length>
              </Tile>
            </li>
          ))}
        </Grid>
      </Container>
      {openIndex !== null && (
        <GalleryModel
          images={clips}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
          label="Video viewer"
          noun="video"
        />
      )}
    </Block>
  )
}

export default GalleryVideos
