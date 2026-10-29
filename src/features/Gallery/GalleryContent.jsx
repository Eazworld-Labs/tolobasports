import { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import Reveal from '../../ui/Reveal'
import { images } from './gallery'
import GalleryModel from './GalleryModel'

const Wrap = styled.section`
  padding-block: var(--space-10) var(--space-11);

  @media ${devicesMax.md} {
    padding-block: var(--space-8) var(--space-9);
  }
`

// CSS columns give a masonry layout; each tile keeps its photo's own proportions.
const Grid = styled.ul`
  column-count: 4;
  column-gap: var(--space-4);

  @media ${devicesMax.lg} {
    column-count: 3;
  }
  @media ${devicesMax.sm} {
    column-count: 2;
    column-gap: var(--space-3);
  }
`

const Item = styled.li`
  break-inside: avoid;
  margin-bottom: var(--space-4);

  @media ${devicesMax.sm} {
    margin-bottom: var(--space-3);
  }
`

const Tile = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--radius);
  background-color: var(--color-grey-100);
  cursor: zoom-in;
  line-height: 0;
  transition: transform 0.25s;

  &:hover {
    transform: translateY(-0.3rem);
  }
`

const Thumb = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

function GalleryContent() {
  const [openIndex, setOpenIndex] = useState(null)
  const triggerIndex = useRef(null)

  const open = useCallback((index) => {
    triggerIndex.current = index
    setOpenIndex(index)
  }, [])

  // Closing returns focus to the tile that opened the viewer.
  const close = useCallback(() => {
    setOpenIndex(null)
    requestAnimationFrame(() => {
      document
        .querySelector(`[data-gallery-index="${triggerIndex.current}"]`)
        ?.focus()
    })
  }, [])

  return (
    <Wrap aria-label="Photo gallery">
      <Container>
        <Grid>
          {images.map((image, index) => (
            <Reveal
              as={Item}
              key={image.thumb}
              variant="scale-in"
              delay={(index % 4) * 70}
            >
              <Tile
                type="button"
                data-gallery-index={index}
                aria-haspopup="dialog"
                onClick={() => open(index)}
              >
                <Thumb
                  src={image.thumb}
                  width={image.thumbWidth}
                  height={image.thumbHeight}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </Tile>
            </Reveal>
          ))}
        </Grid>
      </Container>
      {openIndex !== null && (
        <GalleryModel
          images={images}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      )}
    </Wrap>
  )
}

export default GalleryContent
